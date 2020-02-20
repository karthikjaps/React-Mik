import React from "react";

import { REDUCER_NAME } from "./constants";
import { fetchCartPage } from "./actions";
import withPage from "../page/withPage";
import { getPage } from "../page/actions";
import Cart from "./cart";
import Drawer from "../../components/drawer/drawer";
import withTranslations from "../translations/withTranslations";

class CartPage extends React.PureComponent {
  render() {
    const { match, history, translations } = this.props;

    return (
      <Drawer
        wide={true}
        onClick={e => {
          if (history.location.state && history.location.state.returnUrl) {
            history.push(history.location.state.returnUrl);
          } else {
            history.goBack();
          }
        }}
      >
        <Cart
          history={history}
          url={match.url}
          title={translations.get("cart_title")}
        />
      </Drawer>
    );
  }

  static fetchData(store, { url }) {
    return store.dispatch(
      fetchCartPage({
        url
      })
    );
  }
}

export default withPage(
  withTranslations(CartPage, ["cart_title"]),
  getPage,
  REDUCER_NAME
);
