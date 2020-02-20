import React from "react";

import { REDUCER_NAME } from "./constants";
import { fetchRegisterPage } from "./actions";
import withPage from "../page/withPage";
import { getPage } from "../page/actions";
import Register from "./register";
import Modal from "../../components/modal/modal";
import withTranslations from "../translations/withTranslations";

class RegisterPage extends React.PureComponent {
  render() {
    const { match, history, location, translations } = this.props;

    let returnUrl = location.state ? location.state.returnUrl : null;

    return (
      <Modal narrow={true} onClick={history.goBack}>
        <Register
          history={history}
          url={match.url}
          title={translations.get("register_title")}
          returnUrl={returnUrl}
        />
      </Modal>
    );
  }

  static fetchData(store, { url }) {
    return store.dispatch(
      fetchRegisterPage({
        url
      })
    );
  }
}

export default withPage(
  withTranslations(RegisterPage, ["register_title"]),
  getPage,
  REDUCER_NAME
);
