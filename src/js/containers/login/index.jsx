import React from "react";

import { REDUCER_NAME } from "./constants";
import { fetchLoginPage } from "./actions";
import withPage from "../page/withPage";
import { getPage } from "../page/actions";
import Login from "./login";
import Modal from "../../components/modal/modal";
import withTranslations from "../translations/withTranslations";

class LoginPage extends React.PureComponent {
  render() {
    const { translations, match, history, location } = this.props;

    let returnUrl = location.state ? location.state.returnUrl : null;

    return (
      <Modal wide={true} onClick={history.goBack}>
        <Login
          history={history}
          url={match.url}
          title={translations.get("login_title")}
          returnUrl={returnUrl}
        />
      </Modal>
    );
  }

  static fetchData(store, { url }) {
    return store.dispatch(
      fetchLoginPage({
        url
      })
    );
  }
}

export default withPage(
  withTranslations(LoginPage, ["login_title"]),
  getPage,
  REDUCER_NAME
);
