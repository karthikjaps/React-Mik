import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  setValidationMessages,
  resetValidationMessages,
  login,
  socialMediaLogin
} from "./actions";
import { selectMessages } from "./reducer";
import LoginCard from "../../components/login/loginCard";
import withSubmit from "../app/withSubmit";
import { validateLoginForm } from "../../../../models/loginForm";
import { validateGuestLoginForm } from "../../../../models/guestLoginForm";
import { USER_PROFILE_STORAGE_KEY } from "../../../../service/constants";
import { getUserSession } from "../profile/actions";
import { setGuestInSession } from "./actions";
import { getUrl } from "../../../../server/helpers/routing";
import { ENGINE_METHOD_DIGESTS } from "constants";

const RETURN_URL = "/";

class Login extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      returnUrl: this.props.returnUrl || RETURN_URL,
      authFailureMessage: "",
      validator: validateLoginForm,
      submitHandler: this.props.onLogin,
      submitSuccessCallback: this.submitSuccessCallback.bind(this),
      submitFailureCallback: this.submitFailureCallback.bind(this)
    };

    this.submit = this.props.submit.bind(this);
    this.handleGuestSubmit = this.handleGuestSubmit.bind(this);
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

  handleGuestSubmit(event) {
    const {
      onResetValidationMessages,
      onSetValidationMessages,
      onSetGuestInSession
    } = this.props;
    const email = event.get("email");
    return validateGuestLoginForm({ email }).then((errors, values) => {
      if (!errors) {
        onResetValidationMessages();
        onSetGuestInSession(email);
        this.props.history.push(getUrl("/checkout/delivery"));
      } else {
        return onSetValidationMessages({ messages: errors });
      }
    });
  }

  render() {
    const {
      title,
      html,
      url,
      messages,
      history,
      onSocialMediaLogin
    } = this.props;

    return (
      <LoginCard
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
        handleGuestSubmit={this.handleGuestSubmit}
        handleClose={history.goBack}
        handleSocialMediaSubmit={event => {
          this.setState({
            authFailureMessage: ""
          });
          let socialMediaData = null;

          if (event.profileObj) {
            socialMediaData = {
              email: event.profileObj.email,
              first_name: event.profileObj.givenName,
              last_name: event.profileObj.familyName,
              type: 0
            };
          } else {
            socialMediaData = {
              email: event.email,
              first_name: event.first_name,
              last_name: event.last_name,
              type: 1
            };
          }
          onSocialMediaLogin(socialMediaData).then(response => {
            this.props.history.push(getUrl(this.state.returnUrl));
          });
        }}
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
  onSetGuestInSession: data => setGuestInSession(data),
  onSetValidationMessages: data => dispatch(setValidationMessages(data)),
  onResetValidationMessages: data => dispatch(resetValidationMessages(data)),
  onLogin: data => dispatch(login(data)),
  onSocialMediaLogin: data => dispatch(socialMediaLogin(data))
});

export default withSubmit(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login)
);
