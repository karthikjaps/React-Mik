import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  setValidationMessages,
  resetValidationMessages,
  resetPassword
} from "./actions";
import { selectMessages } from "./reducer";
import ResetPasswordCard from "../../components/resetPassword/resetPasswordCard";
import withSubmit from "../app/withSubmit";
import { validateResetPasswordForm } from "../../../../models/resetPasswordForm";
import { USER_PROFILE_STORAGE_KEY } from "../../../../service/constants";
import { getUserSession } from "../profile/actions";
import Modal from "../../components/modal/modal";
import { getParameterByName } from "../../util/util";
import {
  USER_ID_QUERY_STRING_PARAM,
  TOKEN_QUERY_STRING_PARAM,
  RETURN_URL
} from "./constants";
import { getUrl } from "../../../../server/helpers/routing";

class ResetPassword extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      returnUrl: this.props.returnUrl || RETURN_URL,
      apiErrorMessage: "",
      validator: validateResetPasswordForm,
      submitHandler: this.props.onResetPassword,
      submitSuccessCallback: this.submitSuccessCallback.bind(this),
      submitFailureCallback: this.submitFailureCallback.bind(this)
    };

    this.submit = this.props.submit.bind(this);
  }

  componentDidMount() {
    let sessionData = getUserSession();

    if (sessionData && sessionData[USER_PROFILE_STORAGE_KEY]) {
      const profile = JSON.parse(sessionData[USER_PROFILE_STORAGE_KEY]);
      if (profile) {
        this.props.history.push(getUrl(this.state.returnUrl));
      }
    }
  }

  submitSuccessCallback() {
    this.props.history.push(getUrl("/password-updated"));
  }

  submitFailureCallback(err) {
    this.setState({
      apiErrorMessage: err.message
    });
  }

  render() {
    const { title, html, url, messages, history, location } = this.props;

    return (
      <Modal narrow={true} onClick={history.goBack}>
        <ResetPasswordCard
          url={url}
          title={title}
          html={html}
          messages={messages}
          apiErrorMessage={this.state.apiErrorMessage}
          handleSubmit={e => {
            this.setState({
              apiErrorMessage: ""
            });
            const userId = getParameterByName(
              USER_ID_QUERY_STRING_PARAM,
              location.search
            );
            const token = getParameterByName(
              TOKEN_QUERY_STRING_PARAM,
              location.search
            );
            const data = { ...e.toJS(), userId, token };
            return this.submit(data);
          }}
          handleClose={history.goBack}
        />
      </Modal>
    );
  }

  static fetchValidationMessages(store, data) {
    return store.dispatch(setValidationMessages(data));
  }
}

const mapStateToProps = createStructuredSelector({
  messages: selectMessages
});

const mapDispatchToProps = dispatch => ({
  onSetValidationMessages: data => dispatch(setValidationMessages(data)),
  onResetValidationMessages: data => dispatch(resetValidationMessages(data)),
  onResetPassword: data => dispatch(resetPassword(data))
});

export default withSubmit(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ResetPassword)
);
