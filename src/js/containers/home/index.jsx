import React from "react";

import withPage from "../page/withPage";
import { getPage } from "../page/actions";
import { fetchHomePage } from "./actions";
import { REDUCER_NAME } from "./constants";
import Home from "./home";

class HomePage extends React.PureComponent {
  render() {
    const { match, history } = this.props;

    return (
      <section className="page page--home">
        <Home url={match.url} history={history} />
      </section>
    );
  }

  static fetchData(store, { url }) {
    return store.dispatch(
      fetchHomePage({
        url
      })
    );
  }
}

export default withPage(HomePage, getPage, REDUCER_NAME);
