import React from "react";

import { REDUCER_NAME } from "./constants";
import { fetchProductPage } from "./actions";
import withPage from "../page/withPage";
import { getPage } from "../page/actions";
import NotifyMe from "./notifyMe";
import Modal from "../../components/modal/modal";
import { getUrl } from "../../../../server/helpers/routing";

class NotifyMePage extends React.PureComponent {
  render() {
    const { match, history, location, translations } = this.props;

    let returnUrl = location.state ? location.state.returnUrl : getUrl("/shop");

    return (
      <Modal
        modalClassName="entry-popup"
        onClick={() => history.push(returnUrl)}
      >
        <NotifyMe
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

export default withPage(NotifyMePage, getPage, REDUCER_NAME);
