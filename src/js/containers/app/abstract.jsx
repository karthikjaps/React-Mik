/*
 * Root component
 */
import React from "react";
import { getTranslations } from "../translations/actions";
import { fetchLangs } from "../multiLanguage/actions";
import { fetchGroups } from "../multiStore/actions";
import { fetchCatalogueConfig } from "../catalogueSort/actions";

export default class AppAbstract extends React.PureComponent {
  render() {
    return <div className="app-abstract" />;
  }

  static fetchData(store, {}, { lang, storeId }) {
    return Promise.all([
      store.dispatch(getTranslations({ lang })),
      store.dispatch(fetchGroups({ lang, storeId })),
      store.dispatch(fetchLangs({ lang, storeId })),
      store.dispatch(fetchCatalogueConfig({ storeId }))
    ]);
  }
}
