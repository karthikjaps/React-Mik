import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Card from "../../components/card/card";
import {
  setValidationMessages,
  resetValidationMessages,
  postUserEmail
} from "./actions";
import withTranslations from "../translations/withTranslations";
import NotifyMeForm from "../../components/notifyMe/notifyMeForm";
import { selectMessages } from "./reducer";
import withSubmit from "../app/withSubmit";
import { validateNotifyMeForm } from "../../../../models/notifyMeForm";
import { getUrl } from "../../../../server/helpers/routing";

class NotifyMe extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      apiErrorMessage: "",
      notifyMeSuccess: false,
      validator: validateNotifyMeForm,
      submitHandler: postUserEmail,
      submitSuccessCallback: this.submitSuccessCallback.bind(this),
      submitFailureCallback: this.submitFailureCallback.bind(this)
    };
    this.submit = this.props.submit.bind(this);
  }

  submitSuccessCallback() {
    this.setState({
      notifyMeSuccess: true
    });
  }

  submitFailureCallback(err) {
    this.setState({
      apiErrorMessage: err.message
    });
  }

  render() {
    const { messages, translations, history, returnUrl } = this.props;

    return (
      <Card className="entry-popup" closeUrl={returnUrl}>
        <div className="entry-popup__columns">
          <div className="entry-popup__columns__column">
            <img className="entry-popup__img" src="/img/mock/entry-popup.png" />
          </div>
          <div className="entry-popup__columns__column">
            <div className="entry-popup__content">
              {this.state.notifyMeSuccess ? (
                <>
                  <img
                    src="/img/icons/check_mark.svg"
                    className="entry-popup__icon--success"
                    alt="success"
                  />
                  <h2 className="entry-popup__content__title entry-popup__content__title--success">
                    {translations.get("notifyMe_success_title") || "Thank you!"}
                  </h2>
                  <span className="entry-popup__content__summary entry-popup__content__summary--success">
                    {translations.get("notifyMe_success_message") ||
                      "Your form has been successfully submitted!"}
                  </span>
                  <Link
                    to={getUrl("/")}
                    className="button button--newsletter-success"
                  >
                    {translations.get("newsletter_continue_shopping") ||
                      "Continue shopping"}
                  </Link>
                </>
              ) : (
                <>
                  <h2 className="entry-popup__content__title">
                    {translations.get("notifyMe_title") || "Notify Me!"}
                  </h2>
                  <span className="entry-popup__content__summary">
                    {translations.get("notifyMe_summary") ||
                      "Enter your email and we shall update you once the item is back in stock"}
                  </span>
                </>
              )}
              {!this.state.notifyMeSuccess && (
                <div className="entry-popup__content__form">
                  <NotifyMeForm
                    method="post"
                    messages={messages}
                    apiErrorMessage={this.state.apiErrorMessage}
                    onSubmit={e => {
                      this.setState({
                        apiErrorMessage: ""
                      });
                      return this.submit(e);
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        {!this.state.notifyMeSuccess && (
          <div className="entry-popup__footer">
            <span
              className="entry-popup__footer__decline"
              onClick={() => history.push(returnUrl)}
            >
              {translations.get("notifyMe_decline") ||
                "No thanks, I don't want to be notified"}
            </span>
            <span className="entry-popup__footer__privacy-policy">
              {translations.get("entryPopup_privacy-policy") ||
                "BY SIGNING UP YOU ARE AGREEING TO OUR PRIVACY POLICY"}
            </span>
          </div>
        )}
      </Card>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  messages: selectMessages
});

const mapDispatchToProps = dispatch => ({
  onSetValidationMessages: data => dispatch(setValidationMessages(data)),
  onResetValidationMessages: data => dispatch(resetValidationMessages(data))
});

export default withSubmit(
  withTranslations(
    connect(
      mapStateToProps,
      mapDispatchToProps
    )(NotifyMe),
    [
      "notifyMe_title",
      "notifyMe_summary",
      "notifyMe_decline",
      "entryPopup_privacy-policy",
      "notifyMe_success_title",
      "notifyMe_success_message",
      "notifyMe_continue_shopping"
    ]
  )
);
