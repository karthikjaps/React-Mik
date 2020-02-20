/* global  __dirname */
/* global  process */

"use strict";

import fs from "fs";
import https from "https";
import path from "path";
import express from "express";
import exphbs from "express-handlebars";
import handlebars from "handlebars";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import compression from "compression";
import session from "express-session";
import fileStore from "session-file-store";
import axios from "axios";

// custom helpers
import { handleRender } from "./server/server";
import { getRoutes } from "./server/routes";
import { matchPath } from "react-router-dom";
import {
  PAYFORT_STATUS_PURCHASE_SUCCESS,
  PAYFORT_MOBILE_PAYMENT_METHOD
} from "./service/payment/constants";
import { LANG, STORE_ID } from "./service/catalogueConfig/constants";
import {
  getLangStoreFromUrl,
  storeIdUrls,
  storeIdByContryCode
} from "./server/helpers/routing";
import {
  EMAIL_QUERY_STRING_PARAM,
  PAYMENT_METHOD_QUERY_STRING_PARAM
} from "./src/js/containers/paymentResponse/constants";

const DEPLOYMENT_NODE_ENV = "development";

// configuration
const config = {
  environment: process.env.NODE_ENV || DEPLOYMENT_NODE_ENV,
  isDeploy: !!process.env.IS_DEPLOY
};

const FileSessionStorage = fileStore(session);

const app = express();
app.use(compression());

const viewsDir = "./templates";

// setup express to use handlebars as the templating engine
const hbs = exphbs.create({
  defaultLayout: "main",
  layoutsDir: path.join(__dirname, `${viewsDir}/layouts`),
  partialsDir: path.join(__dirname, `${viewsDir}/partials`),
  extname: ".hbs"
});

// allows partials to be organised in subfolders
hbs
  .getTemplates(path.join(__dirname, `${viewsDir}/partials`))
  .then(function(partials) {
    for (let partial in partials) {
      handlebars.registerPartial(partial, "{{" + partial + "}}");
    }
  })
  .catch(error => {
    console.log(`Unable to retrieve templates. Error: ${error}`);
  });

app.set("views", path.join(__dirname, `${viewsDir}`));
app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");

// preload webfonts
app.use("/fonts", (req, res, next) => {
  const protocol = req.get("x-arr-ssl") ? req.protocol + "s" : req.protocol;
  // https://coderead.wordpress.com/2014/09/05/redirecting-to-https-in-node-js-on-azure-websites/

  res.set(
    "Link",
    `${protocol +
      "://" +
      req.get("host") +
      req.originalUrl}; rel=preload; as=style`
  );
  next();
});

// setup server for static assets
app.use(
  "/",
  express.static(path.join(__dirname, "dist"), {
    maxAge: 604800000,
    setHeaders: (res, path) => {
      if (/sw\.js$/.test(path)) {
        res.setHeader("Cache-Control", "public, max-age=0");
      }
    }
  })
);

// https://medium.com/@yash.kulshrestha/using-lets-encrypt-with-express-e069c7abe625
app.use("/.well-known", express.static(path.join(__dirname, ".well-known")));

//app.use(requireHttps);
//app.use(requireWww);

// Setup body parser for parsing POST request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());

const sessionExpiration = 20 * 60 * 1000; // 20 minutes

app.use(
  session({
    store: new FileSessionStorage({}),
    secret: "auth",
    cookie: { maxAge: sessionExpiration },
    unset: "destroy",
    resave: true,
    saveUninitialized: false,
    sameSite: true
  })
);

app.post("/payfort/return", function(req, res, next) {
  const { storeId: urlStoreId } = getLangStoreFromUrl(req.url);
  const _storeId = urlStoreId || req.cookies["STORE_ID"] || STORE_ID;

  if (req.body.status === PAYFORT_STATUS_PURCHASE_SUCCESS) {
    return res.redirect(
      `${
        storeIdUrls[_storeId]
      }/checkout/payment-successful?${EMAIL_QUERY_STRING_PARAM}=${
        req.body.customer_email
      }&${PAYMENT_METHOD_QUERY_STRING_PARAM}=${PAYFORT_MOBILE_PAYMENT_METHOD}`
    );
  }

  return res.redirect(`${storeIdUrls[_storeId]}/checkout/payment-failed`);
});

app.post("/setSession", function(req, res) {
  req.session[req.body.sessionKey] = req.body.sessionData;
  if (req.body.rememberSession) {
    req.session.cookie.maxAge = 365 * 24 * 60 * 60 * 1000;
  }

  req.session.save(err => {
    if (err) {
      res.status(500).json({ error: "/setSession failed.", err });
    } else {
      res.status(200);
    }
    return res.end();
  });
});

app.set("trust proxy", true);

app.use((req, res, next) => {
  const { storeId: urlStoreId } = getLangStoreFromUrl(req.url);
  let _storeId = urlStoreId || req.cookies["STORE_ID"];

  if (_storeId) {
    if (req.path === "/") {
      return res.redirect(storeIdUrls[_storeId]);
    } else if (req.path === "/logout/" || req.path === "/logout") {
      req.session.destroy(err => {
        if (err) {
          console.log(err.message);
        } else {
          return res.redirect(storeIdUrls[_storeId]);
        }
      });
      res.clearCookie("connect.sid");
    } else {
      return next();
    }
  } else {
    const clientIp = req && req.ip && req.ip.split(":")[0];

    axios
      .get(`${process.env.IP_GEOLOCATION_API_URL}&ip=${clientIp}`)
      .then(response => response.data)
      .then(data => {
        if (data) {
          _storeId = storeIdByContryCode[data.country_code2] || STORE_ID;
        }

        if (req.path === "/") {
          return res.redirect(storeIdUrls[_storeId]);
        } else if (req.path === "/logout/" || req.path === "/logout") {
          req.session.destroy(err => {
            if (err) {
              console.log(err.message);
            } else {
              return res.redirect(storeIdUrls[_storeId]);
            }
          });
          res.clearCookie("connect.sid");
        } else {
          return next();
        }
      })
      .catch(err => {
        _storeId = STORE_ID;

        if (req.path === "/") {
          return res.redirect(storeIdUrls[_storeId]);
        } else if (req.path === "/logout/" || req.path === "/logout") {
          req.session.destroy(err => {
            if (err) {
              console.log(err.message);
            } else {
              return res.redirect(storeIdUrls[_storeId]);
            }
          });
          res.clearCookie("connect.sid");
        } else {
          return next();
        }
      });
  }
});

app.use((req, res, next) => {
  const user = req.session.user;

  const { lang: urlLang, storeId: urlStoreId } = getLangStoreFromUrl(req.url);
  const _lang = urlLang || req.cookies["LANG"] || LANG;
  const _storeId = urlStoreId || req.cookies["STORE_ID"] || STORE_ID;

  getRoutes({ lang: _lang, storeId: _storeId }).then(routes => {
    const route = routes.find(item => {
      return matchPath(req.path, {
        path: item.url,
        exact: true
      });
    });

    if ((route && route.isPublic) || user) {
      return next();
    } else if (route) {
      console.error("403 Unauthorized");
      return res.redirect(`${storeIdUrls[_storeId]}/login`);
      // return res.status(403).end();
    } else {
      next();
    }
  });
});

// React-Redux middleware
app.use(handleRender);

app.use(function(error, req, res, next) {
  console.error(error.message);
  res.status(500);
  res.render("500", { layout: false });
  return res.end();
});

// use the environment's port or a predefined port
const port = process.env.port || 3000;
app.listen(port, () => {
  console.log(`Running ${config.environment} on http://localhost:${port}`);
});

let options = {};

if (!config.isDeploy) {
  // only used for local environment
  options = {
    key: fs.readFileSync("localhost-key.pem"),
    cert: fs.readFileSync("localhost.pem"),
    requestCert: false,
    rejectUnauthorized: false
  };
}

// create a different random port for HTTPS
const httpsPort = 6001;
https.createServer(options, app).listen(httpsPort, () => {
  console.log(
    `Running ${config.environment} with SSL on https://localhost:${httpsPort}`
  );
});

export default app;
