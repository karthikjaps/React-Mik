import React from "react";

import { REDUCER_NAME } from "./constants";
import { fetchPromotionPage } from "./actions";
import withPage from "../page/withPage";
import { getPage } from "../page/actions";
import Promotion from "./promotion";

class PromotionPage extends React.PureComponent {
  render() {
    const { match, history, translations } = this.props;

    return (
      <section className="page">
        <Promotion url={match.url} history={history} />
      </section>
    );
  }

  static fetchData(store, { url }) {
    return store.dispatch(
      fetchPromotionPage({
        url
      })
    );
  }
}

export default withPage(PromotionPage, getPage, REDUCER_NAME);
