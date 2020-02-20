import MockService from "./service.mock";
import { toPage, toPageJson, toPageResponse } from "./adapter";
import { getCMSPageSlug } from "./config";
import { langStoreCodes } from "../../server/helpers/routing";

export default class Pages {
  constructor({ service } = {}) {
    this.service = service || new MockService();
    this.mockService = new MockService();
  }

  get(data) {
    let storeId = undefined;
    let slug = undefined;
    const url = data.url.replace(/\/\//, "/"); // workaround to replace duplicate slashes

    if (url === "/page-not-found") {
      storeId = "1";
      slug = getCMSPageSlug("/page-not-found");
    } else {
      const pathArray = url.split("/");
      const storeCode = langStoreCodes[pathArray[1]];
      storeId = storeCode && storeCode.storeId;
      const pathWithoutStore = `/${pathArray.slice(2).join("/")}`;
      slug = getCMSPageSlug(pathWithoutStore);
    }
    if (storeId && slug) {
      return this.service
        .get({ data: toPageJson({ storeId, slug }) })
        .then(response => toPageResponse(response));
    } else {
      return this.mockService.get({ data }).then(response => toPage(response));
    }
  }
}
