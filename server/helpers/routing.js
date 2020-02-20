import redirectData from "../redirectData.json";
import { STORE_ID } from "../../service/catalogueConfig/constants.js";
import {
  NON_FILTERS,
  FILTERS_PRICE
} from "../../service/catalogue/constants.js";

// permanent redirect http requests
export function requireHttps(req, res, next) {
  if (/^localhost$/.test(req.hostname)) {
    // skip if localhost
    return next();
  } else if (/^\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b$/.test(req.hostname)) {
    // skip if IP address
    return next();
  } else if (req.secure) {
    // if already on HTTPS
    return next();
  } else if (req.get("x-arr-ssl")) {
    // https://coderead.wordpress.com/2014/09/05/redirecting-to-https-in-node-js-on-azure-websites/
    return next();
  } else {
    return res.redirect(
      301,
      req.protocol + "s" + "://" + req.headers.host + req.url
    );
  }
}

// permanent redirect to include www
export function requireWww(req, res, next) {
  if (/^localhost$/.test(req.hostname)) {
    // skip if localhost
    return next();
  } else if (/^\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b$/.test(req.hostname)) {
    // skip if IP address
    return next();
  } else if (/\.azurewebsites.net$/.test(req.hostname)) {
    // skip if azurewebsites
    return next();
  } else if (/^www\./i.test(req.headers.host)) {
    // www. already there
    return next();
  } else {
    return res.redirect(
      301,
      req.protocol + "://www." + req.headers.host + req.url
    );
  }
}

// redirect from old to new URL
export function redirectMap(req, res, next) {
  const data = redirectData.map;
  for (const key of Object.keys(data)) {
    if (RegExp(key).test(req.url.toLowerCase())) {
      return res.redirect(301, data[key]);
    }
  }
  return next();
}

export function redirectTld(req, res, next) {
  const data = redirectData.tld;
  for (const key of Object.keys(data)) {
    if (RegExp(key).test(req.hostname.toLowerCase())) {
      return res.redirect(301, data[key]);
    }
  }
  return next();
}

export const langStoreCodes = {
  "en-uae": { storeId: "3", lang: "EN" },
  "ar-uae": { storeId: "4", lang: "AR" },
  "ar-sa": { storeId: "5", lang: "AR" },
  "en-sa": { storeId: "6", lang: "EN" }
};

export function getLangStoreFromUrl(url) {
  const urlSegments = url.split("/");
  const urlLangStore = urlSegments[1];
  return {
    lang: langStoreCodes[urlLangStore] && langStoreCodes[urlLangStore].lang,
    storeId:
      langStoreCodes[urlLangStore] && langStoreCodes[urlLangStore].storeId
  };
}

export const storeIdUrls = {
  "3": "/en-uae",
  "4": "/ar-uae",
  "5": "/ar-sa",
  "6": "/en-sa"
};

export const storeIdCodes = {
  "3": "uae",
  "4": "uae",
  "5": "sa",
  "6": "sa"
};

export const storeIdByContryCode = {
  SA: "5",
  AE: "4"
};

export function getUrl(relativeUrl) {
  const langStore =
    (typeof window !== "undefined" && storeIdUrls[window.__STORE_ID__]) ||
    storeIdUrls[STORE_ID];
  return `${langStore}${relativeUrl}`;
}

export function getUrlForLang(url, lang) {
  const urlSegments = url.split("/");
  const urlLangStore = urlSegments[1];
  const langStoreSegments = urlLangStore.split("-");
  const secondPartOfUrl = urlSegments.slice(2).join("/");
  return `/${lang}-${langStoreSegments[1]}/${secondPartOfUrl}`;
}

export function getUrlForStore(url, storeId) {
  const urlSegments = url.split("/");
  const urlLangStore = urlSegments[1];
  const langStoreSegments = urlLangStore.split("-");
  const secondPartOfUrl = urlSegments.slice(2).join("/");
  return `/${langStoreSegments[0]}-${storeIdCodes[storeId]}/${secondPartOfUrl}`;
}

export function decodeFilters(searchParams) {
  let filter = {};
  searchParams.forEach((value, key) => {
    if (!NON_FILTERS.includes(key)) {
      const filterValues = value.split("-");
      if (key === FILTERS_PRICE) {
        filter[key] = filterValues.map(n => parseInt(n));
      } else {
        if (filterValues.length) {
          filter[key] = {};
          for (const n in filterValues) {
            filter[key][filterValues[n]] = true;
          }
        }
      }
    }
  });

  return filter;
}

export function decodeFiltersFromObject(query) {
  let filter = {};
  const queryKeys = Object.keys(query);
  for (const key of queryKeys) {
    if (!NON_FILTERS.includes(key)) {
      const filterValues = query[key].split("-");

      if (key === FILTERS_PRICE) {
        filter[key] = filterValues;
      } else {
        if (filterValues.length) {
          filter[key] = {};
          for (const n in filterValues) {
            filter[key][filterValues[n]] = true;
          }
        }
      }
    }
  }

  return filter;
}
