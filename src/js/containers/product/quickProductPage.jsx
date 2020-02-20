import React from "react";

import { REDUCER_NAME } from "./constants";
import { fetchProductPage } from "./actions";
import withPage from "../page/withPage";
import { getPage } from "../page/actions";
import QuickProduct from "./quickProduct";
import Modal from "../../components/modal/modal";
import { getUrl } from "../../../../server/helpers/routing";

class QuickProductPage extends React.PureComponent {
  render() {
    const { match, history, location, translations } = this.props;

    let returnUrl = location.state ? location.state.returnUrl : getUrl("/shop");

    return (
      <Modal
        modalClassName="quick-product"
        wide={true}
        onClick={() => history.push(returnUrl)}
      >
        <QuickProduct
          url={match.url}
          params={match.params}
          history={history}
          returnUrl={returnUrl}
        />
      </Modal>
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

export default withPage(QuickProductPage, getPage, REDUCER_NAME);
