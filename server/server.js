/*
 * Root component on the server-side
 */
import React from "react";
import { StaticRouter, matchPath } from "react-router-dom";
import { renderToString } from "react-dom/server";
import { Provider } from "react-redux";
import { Helmet } from "react-helmet";
import { fromJS } from "immutable";

import { configureStore } from "../src/js/util/store";
import Routes from "../src/js/containers/routes";
import Catalogue from "../src/js/containers/catalogue/catalogue";
import { getRouteComponent } from "../src/js/containers/routes/config";
import {
  defaultPathConfigLtr,
  defaultPathConfigRtl
} from "./helpers/pathConfig";
import AppAbstract from "../src/js/containers/app/abstract";
import Header from "../src/js/containers/header";
import Footer from "../src/js/containers/footer";
import PageNotFound from "../src/js/containers/pageNotFound";
import {
  SESSION_USER,
  USER_PROFILE_STORAGE_KEY,
  LANGUAGE
} from "../service/constants";
import { stringToObject } from "../src/js/util/util";
import { LANG, STORE_ID } from "../service/catalogueConfig/constants";
import { getLangStoreFromUrl } from "./helpers/routing";

export async function handleRender(req, res) {
  // Create a new Redux store instance
  const store = configureStore();
  const { path, url, query } = req;

  const { lang: urlLang, storeId: urlStoreId } = getLangStoreFromUrl(url);

  const _lang = urlLang || req.cookies["LANG"] || LANG;
  const _storeId = urlStoreId || req.cookies["STORE_ID"] || STORE_ID;

  // TODO: this should be improved
  // set the language cookie
  if (_lang) {
    res.cookie("LANG", _lang, {
      maxAge: 365 * 24 * 60 * 60 * 1000,
      httpOnly: true
    });
  }

  // set the storeId cookie
  if (_storeId) {
    res.cookie("STORE_ID", _storeId, {
      maxAge: 365 * 24 * 60 * 60 * 1000,
      httpOnly: true
    });
  }

  Routes.fetchData(store, { lang: _lang, storeId: _storeId })
    .then(routes => {
      // retrieve data for all components on the current route
      const promises = [];

      let show404 = true;

      // used for forms submission
      const responsePromise = new Promise(next => {
        const formValues = req.body;

        if (req.method === "POST") {
          if (
            matchPath(path, {
              path: "/shop/",
              exact: false
            })
          ) {
            let formattedFormValues = {};
            for (const key in formValues) {
              stringToObject(key, true, formattedFormValues);
            }

            return Catalogue.setData(store, {
              categoryId: formValues.categoryId,
              page: formValues.page,
              pageSize: formValues.pageSize,
              filter: formattedFormValues
            }).then(() => {
              next();
            });
          } else {
            show404 = true;
          }
        } else {
          next();
        }
      });

      responsePromise
        .then(response => {
          if (response) {
            const { redirectUrl, statusCode } = response;
            if (redirectUrl) {
              res.redirect(redirectUrl);
            } else if (statusCode) {
              res.status(statusCode).send();
            }
          }
          // iterate through the routes and prepare fetchData and reducers
          routes.forEach(route => {
            const match = matchPath(path, {
              path: route.url,
              exact: route.exact
            });

            if (match) {
              // inform the parent that we have found at least one match
              if (!route.isMaster) {
                show404 = false;
              }
              // GET routes
              const routeComponent = getRouteComponent(route.name);

              let user = undefined;
              if (
                req.session[SESSION_USER] &&
                req.session[SESSION_USER][USER_PROFILE_STORAGE_KEY]
              ) {
                user = req.session[SESSION_USER][USER_PROFILE_STORAGE_KEY];
              }

              // add the promise to fetch the route data
              routeComponent.fetchData.forEach(fn => {
                promises.push(
                  fn(
                    store,
                    {
                      path: match.path,
                      url: match.url,
                      exact: match.exact,
                      params: match.params,
                      query,
                      route
                    },
                    { user, lang: _lang, storeId: _storeId }
                  )
                );
              });

              return true;
            }
          });

          // no page matches
          if (show404) {
            res.status(404);

            // fetch data for page-not-found
            if (PageNotFound) {
              promises.push(PageNotFound.fetchData(store));
            }
          }

          let _user = null;

          if (req.session[SESSION_USER]) {
            _user = req.session[SESSION_USER][USER_PROFILE_STORAGE_KEY];
          }

          if (AppAbstract) {
            promises.push(
              AppAbstract.fetchData(
                store,
                {
                  query
                },
                {
                  lang: _lang,
                  storeId: _storeId
                }
              )
            );
          }
          if (Header) {
            promises.push(
              Header.fetchData(
                store,
                { path },
                {
                  lang: _lang,
                  storeId: _storeId
                }
              )
            );
          }
          if (Footer) {
            promises.push(
              Footer.fetchData(
                store,
                { path },
                {
                  lang: _lang,
                  storeId: _storeId
                }
              )
            );
          }

          Promise.all(promises)
            .then(response => {
              const staticContext = {};

              // render the component to a string
              const html = renderToString(
                <Provider store={store}>
                  <div id="app">
                    <div className="preloader" />
                    <StaticRouter context={staticContext} location={url}>
                      <Routes routes={fromJS(routes)} />
                    </StaticRouter>
                  </div>
                </Provider>
              );

              // Grab the initial state from our Redux store
              const preloadedState = store.getState();

              let _preloadedState = JSON.parse(
                JSON.stringify(preloadedState.toJS()).replace(/</g, "\\u003c")
              );

              const helmet = Helmet.renderStatic();

              let isLtr = false;
              if (_lang === "EN") {
                isLtr = true;
              }

              const data = Object.assign(
                isLtr ? defaultPathConfigLtr : defaultPathConfigRtl,
                {
                  html: html,
                  preloadedState: JSON.stringify(_preloadedState),
                  user: JSON.stringify(_user),
                  lang: JSON.stringify(_lang),
                  storeId: JSON.stringify(_storeId)
                }
              );

              res.render("index", {
                htmlAttributes: helmet.htmlAttributes,
                bodyAttributes: helmet.bodyAttributes,
                head: `${helmet.title} ${helmet.meta} ${helmet.link}`,
                data
              });
            })
            .catch(error => {
              console.error(error);
              throw error;
            });
        })
        .catch(error => {
          console.error(error);
          throw error;
        });
    })
    .catch(error => {
      console.error(error);
      res.status(500);
      res.render("500", { layout: false });
    });
}
