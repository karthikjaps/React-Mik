import React from "react";

import withPage from "../page/withPage";
import { getPage } from "../page/actions";
import { fetchStoreLocatorPage } from "./actions";
import { REDUCER_NAME } from "./constants";
import StoreLocator from "./storeLocator";

class StoreLocatorPage extends React.PureComponent {
  render() {
    const { match, history } = this.props;

    return (
      <section className="page page--store-locator">
        <StoreLocator url={match.url} history={history} />
      </section>
    );
  }

  static fetchData(store, { url }) {
    return store.dispatch(
      fetchStoreLocatorPage({
        url
      })
    );
  }
}

export default withPage(StoreLocatorPage, getPage, REDUCER_NAME);
