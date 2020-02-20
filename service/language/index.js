import MockService from "./service.mock";
import { toTranslations } from "./adapter";

export default class LanguageKeys {
  constructor({ service } = {}) {
    this.service = service || new MockService();
  }

  get(data) {
    return this.service
      .getLangKeys(data)
      .then(response => {
        return toTranslations(response);
      })
      .catch(error => {
        console.error(error);
        throw error;
      });
  }
}
