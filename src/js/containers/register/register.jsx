import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  setValidationMessages,
  resetValidationMessages,
  register
} from "./actions";
import { selectMessages } from "./reducer";
import RegisterCard from "../../components/register/registerCard";
import withSubmit from "../app/withSubmit";
import { validateRegisterForm } from "../../../../models/registerForm";
import { USER_PROFILE_STORAGE_KEY } from "../../../../service/constants";
import { getUserSession } from "../profile/actions";
import { getUrl } from "../../../../server/helpers/routing";

const RETURN_URL = "/";

class Register extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      returnUrl: this.props.returnUrl || RETURN_URL,
      authFailureMessage: "",
      validator: validateRegisterForm,
      submitHandler: this.props.onRegister,
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
    this.props.history.push(getUrl(this.state.returnUrl));
  }

  submitFailureCallback(err) {
    this.setState({
      authFailureMessage: err.message
    });
  }

  render() {
    const { title, html, url, messages, history } = this.props;

    return (
      <RegisterCard
        url={url}
        title={title}
        html={html}
        messages={messages}
        authFailureMessage={this.state.authFailureMessage}
        handleSubmit={e => {
          this.setState({
            authFailureMessage: ""
          });
          return this.submit(e);
        }}
        handleClose={history.goBack}
      />
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
  onRegister: data => dispatch(register(data))
});

export default withSubmit(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Register)
);
