import React from "react";
import { Switch, Route } from "react-router-dom";
import { withRouter, matchPath } from "react-router-dom";

import { fetchRoutes } from "./actions";
import AppAbstract from "../app/abstract";
import Layout from "../layout/";
import PageNotFound from "../pageNotFound/";
import Settings from "../settings/";
import { ErrorBoundary } from "../errorBoundary";
import { getRouteComponent } from "./config";

class Routes extends React.PureComponent {
  constructor(props) {
    super(props);

    const { routes } = this.props;
    this.layoutRoutes = routes.filter(n => !n.get("modal"));
    this.modalRoutes = routes.filter(n => n.get("modal"));
    this.showBreadcrumbs = routes.filter(n => n.get("showBreadcrumbs"));

    this.previousLocation = this.props.location;
  }

  componentDidUpdate(nextProps) {
    let { location, routes } = this.props;

    if (nextProps.history.action !== "POP") {
      let route = routes.find(item => {
        return matchPath(location.pathname, {
          path: item.get("url"),
          exact: true
        });
      });

      if (route && !route.get("modal")) {
        this.previousLocation = this.props.location;
      }
    }
  }

  render() {
    const { params, location } = this.props;

    let isModal = false;
    let showBreadcrumbs = false;

    if (location) {
      isModal = this.modalRoutes.some(n => {
        return matchPath(location.pathname, {
          path: n.get("url"),
          exact: true
        });
      });

      showBreadcrumbs = this.showBreadcrumbs.some(n => {
        return matchPath(location.pathname, {
          path: n.get("url"),
          exact: true
        });
      });
    }

    return (
      <Switch>
        <Route
          path="/settings"
          render={props => (
            <Layout>
              <ErrorBoundary>
                <Settings {...props} routeName={"Settings"} />
              </ErrorBoundary>
            </Layout>
          )}
        />
        <Route>
          <Layout showBreadcrumbs={showBreadcrumbs}>
            <Route component={AppAbstract} />
            <Switch location={isModal ? this.previousLocation : location}>
              {this.layoutRoutes.map(route => {
                const Component = getRouteComponent(route.get("name"))
                  .component;
                return (
                  <Route
                    key={route.get("url")}
                    path={route.get("url")}
                    render={props => (
                      <ErrorBoundary>
                        <Component
                          {...props}
                          {...params}
                          routeName={route.get("name")}
                        />
                      </ErrorBoundary>
                    )}
                    exact={route.get("exact")}
                  />
                );
              })}
              {!isModal && (
                <Route
                  render={props => (
                    <ErrorBoundary>
                      <PageNotFound {...props} routeName={"PageNotFound"} />
                    </ErrorBoundary>
                  )}
                />
              )}
            </Switch>
            {isModal
              ? this.modalRoutes.map(route => {
                  const Component = getRouteComponent(route.get("name"))
                    .component;
                  return (
                    <Route
                      key={route.get("url")}
                      path={route.get("url")}
                      render={props => (
                        <ErrorBoundary>
                          <Component
                            {...props}
                            {...params}
                            routeName={route.get("name")}
                          />
                        </ErrorBoundary>
                      )}
                      exact={route.get("exact")}
                    />
                  );
                })
              : null}
          </Layout>
        </Route>
      </Switch>
    );
  }

  static fetchData(store, { lang, storeId }) {
    return store.dispatch(fetchRoutes({ lang, storeId }));
  }
}

export default withRouter(Routes);
