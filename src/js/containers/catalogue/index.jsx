import React from "react";

import { REDUCER_NAME } from "./constants";
import { fetchCataloguePage } from "./actions";
import withPage from "../page/withPage";
import { getPage } from "../page/actions";
import Catalogue from "./catalogue";

class CataloguePage extends React.PureComponent {
  render() {
    const { location, history } = this.props;

    return (
      <section className="page">
        <div className="page-content">
          <Catalogue
            url={location.pathname}
            queryString={location.search}
            history={history}
          />
        </div>
      </section>
    );
  }

  static fetchData(store, { url }) {
    return store.dispatch(
      fetchCataloguePage({
        url
      })
    );
  }
}

export default withPage(CataloguePage, getPage, REDUCER_NAME);
