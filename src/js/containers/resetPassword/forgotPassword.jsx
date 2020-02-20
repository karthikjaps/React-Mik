import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  setValidationMessages,
  resetValidationMessages,
  forgotPassword
} from "./actions";
import { selectMessages } from "./reducer";
import ForgotPasswordCard from "../../components/resetPassword/forgotPasswordCard";
import withSubmit from "../app/withSubmit";
import { validateForgotPasswordForm } from "../../../../models/forgotPasswordForm";
import { USER_PROFILE_STORAGE_KEY } from "../../../../service/constants";
import { getUserSession } from "../profile/actions";
import Modal from "../../components/modal/modal";
import { RETURN_URL } from "./constants";
import { getUrl } from "../../../../server/helpers/routing";

class ForgotPassword extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      returnUrl: this.props.returnUrl || RETURN_URL,
      apiErrorMessage: "",
      validator: validateForgotPasswordForm,
      submitHandler: this.props.onForgotPassword,
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
    this.props.history.push(getUrl("/email-sent"));
  }

  submitFailureCallback(err) {
    this.setState({
      apiErrorMessage: err.message
    });
  }

  render() {
    const { title, html, url, messages, history } = this.props;

    return (
      <Modal narrow={true} onClick={history.goBack}>
        <ForgotPasswordCard
          url={url}
          title={title}
          html={html}
          messages={messages}
          apiErrorMessage={this.state.apiErrorMessage}
          handleSubmit={e => {
            this.setState({
              apiErrorMessage: ""
            });
            return this.submit(e);
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
  onForgotPassword: data => dispatch(forgotPassword(data))
});

export default withSubmit(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ForgotPassword)
);
