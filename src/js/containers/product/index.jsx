import React from "react";

import { REDUCER_NAME } from "./constants";
import { fetchProductPage } from "./actions";
import withPage from "../page/withPage";
import { getPage } from "../page/actions";
import Product from "./product";

class ProductPage extends React.PureComponent {
  render() {
    const { match, history, translations } = this.props;

    return (
      <section className="page">
        <Product url={match.url} history={history} />
      </section>
    );
  }

  static fetchData(store, { url }) {
    return store.dispatch(
      fetchProductPage({
        url
      })
    );
  }
}

export default withPage(ProductPage, getPage, REDUCER_NAME);
