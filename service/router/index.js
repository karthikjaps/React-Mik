import NodeCache from "node-cache";

import MockService from "./service.mock";
import { toRoutesFromApi, toDefaultRoutes } from "./adapter";
import { TTL, CHECK_PERIOD } from "./constants";

const routeTableCache = new NodeCache({
  stdTTL: TTL,
  checkperiod: CHECK_PERIOD
});

export default class Router {
  constructor({ service } = {}) {
    this.service = service || new MockService();
  }

  /**
   * Removes the domain and TLD, returning just the path requested
   * http://www.example.com/foo/bar becomes '/foo/bar'
   * @param {string} url
   */
  extractUrlPath(url) {
    let urlSections = url.split("/");
    urlSections = urlSections.filter(sectionString => {
      return sectionString.length > 0;
    });

    let urlPath = null;
    if (urlSections.length === 0) {
      urlPath = "/";
    } else {
      urlPath = "/" + urlSections.join("/");
      if (!urlPath.endsWith("/")) {
        urlPath = urlPath + "/";
      }
    }
    return urlPath;
  }

  getRoutingTable(data) {
    return this.getCachedData("routeTable", data);
  }

  getCachedData(cacheKey, data) {
    const self = this;
    return new Promise((resolve, reject) => {
      routeTableCache.get(`${cacheKey}_${data.storeId}`, (err, value) => {
        if (!err) {
          // if no routing table is cached,
          // then it will retrieve a new routing table
          // from the Umbraco API
          if (!value) {
            self
              .fetchRoutingTable(data)
              .then(response => {
                routeTableCache.set("routeTable", response);
                routeTableCache.set(
                  "validRoutes",
                  this.extractValidRoutes(response)
                );
                resolve(routeTableCache.get(cacheKey));
              })
              .catch(error => {
                reject(error);
              });
          } else {
            // Otherwise, we retrieve the cached version
            resolve(value);
          }
        } else {
          console.error("Routing Cache error: " + err);
        }
      });
    });
  }

  extractValidRoutes(data) {
    let validRoutes = [];
    for (let index in data.routes) {
      validRoutes.push(this.extractUrlPath(data.routes[index].key));
    }
    return validRoutes;
  }

  /**
   * Fetches the routing table from the API and returns it as an object with a `root`
   * property for each language.
   */
  async fetchRoutingTable(data) {
    const { routes } = await this.service
      .getDefaultRoutes({ lang: data.lang })
      .then(n => toDefaultRoutes(n));
    const { routes: routesFromApi } = await this.service
      .getRoutesFromApi({ store_id: data.storeId })
      .then(n => toRoutesFromApi(n));

    routes.pages = routes.pages.concat(routesFromApi);

    return routes;
  }
}
