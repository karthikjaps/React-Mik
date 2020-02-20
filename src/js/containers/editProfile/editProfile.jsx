import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  setValidationMessages,
  resetValidationMessages,
  editProfile,
  fetchEditProfile
} from "./actions";
import { selectMessages, selectUserProfile } from "./reducer";
import EditProfileSection from "../../components/editProfile/editProfileSection";
import withSubmit from "../app/withSubmit";
import { validateEditProfileForm } from "../../../../models/editProfileForm";
import { getUrl } from "../../../../server/helpers/routing";

const RETURN_URL = "/";

const SUCCESS_URL = "/";

class EditProfile extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      returnUrl: this.props.returnUrl || RETURN_URL,
      successUrl: this.props.successUrl || SUCCESS_URL,
      apiErrorMessage: "",
      validator: validateEditProfileForm,
      submitHandler: this.props.onEditProfile,
      submitSuccessCallback: this.submitSuccessCallback.bind(this),
      submitFailureCallback: this.submitFailureCallback.bind(this)
    };
    this.submit = this.props.submit.bind(this);
  }

  componentDidMount() {
    const { onLoadEditProfile } = this.props;

    onLoadEditProfile(); // TODO: Optimize this
  }

  submitSuccessCallback() {
    this.props.history.push(getUrl(this.state.successUrl));
  }

  submitFailureCallback(err) {
    this.setState({
      apiErrorMessage: err.message
    });
  }

  render() {
    const { url, messages, history, userProfile } = this.props;

    return (
      <EditProfileSection
        userProfile={userProfile}
        url={url}
        messages={messages}
        apiErrorMessage={this.state.apiErrorMessage}
        handleSubmit={e => {
          this.setState({
            apiErrorMessage: ""
          });
          return this.submit(e);
        }}
        returnUrl={this.state.returnUrl}
        handleClose={history.goBack}
      />
    );
  }

  static fetchData(store) {
    return store.dispatch(fetchEditProfile());
  }

  static fetchValidationMessages(store, data) {
    return store.dispatch(setValidationMessages(data));
  }
}

const mapStateToProps = createStructuredSelector({
  userProfile: selectUserProfile,
  messages: selectMessages
});

const mapDispatchToProps = dispatch => ({
  onSetValidationMessages: data => dispatch(setValidationMessages(data)),
  onResetValidationMessages: data => dispatch(resetValidationMessages(data)),
  onEditProfile: data => dispatch(editProfile(data)),
  onLoadEditProfile: data => dispatch(fetchEditProfile(data))
});

export default withSubmit(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(EditProfile)
);
