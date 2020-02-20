import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Cookies from "js-cookie";

import Card from "../../components/card/card";
import { DELAY, COOKIE_KEY } from "./constants";
import { trackEntryPopupView } from "./analytics";
import {
  setValidationMessages,
  resetValidationMessages,
  postUserEmail
} from "./actions";
import withTranslations from "../translations/withTranslations";
import Modal from "../../components/modal/modal";
import NewsletterForm from "../../components/newsletter/newsletterForm";
import { selectMessages } from "./reducer";
import withSubmit from "../app/withSubmit";
import { validateNewsletterForm } from "../../../../models/newsletterForm";
import { getUrl } from "../../../../server/helpers/routing";

class EntryPopup extends React.PureComponent {
  constructor(props) {
    super(props);

    this.element;

    this.state = {
      isVisible: false,
      isInitialised: false
    };

    this.toggle = this.toggle.bind(this);

    this.state = {
      apiErrorMessage: "",
      newsletterSubscribeSuccess: false,
      validator: validateNewsletterForm,
      submitHandler: postUserEmail,
      submitSuccessCallback: this.submitSuccessCallback.bind(this),
      submitFailureCallback: this.submitFailureCallback.bind(this)
    };
    this.submit = this.props.submit.bind(this);
  }

  submitSuccessCallback() {
    this.setState({
      newsletterSubscribeSuccess: true
    });
  }

  submitFailureCallback(err) {
    this.setState({
      apiErrorMessage: err.message
    });
  }

  componentDidMount() {
    const entryPopupId = "newsletter";

    // ************ Temporarily disabled ************
    // setTimeout(() => {
    //   // check if we have already shown this popup
    //   const cookie = Cookies.get(COOKIE_KEY)
    //     ? JSON.parse(Cookies.get(COOKIE_KEY))
    //     : [];

    //   if (!cookie.includes(entryPopupId)) {
    //     trackEntryPopupView({
    //       id: entryPopupId
    //     });

    //     this.init();

    //     // add the ID to the cookie
    //     cookie.push(entryPopupId);
    //     Cookies.set(COOKIE_KEY, JSON.stringify(cookie), { expires: 1 });
    //   }
    // }, DELAY);
  }

  render() {
    const { messages, translations } = this.props;

    if (this.state.isInitialised) {
      return (
        <section
          ref={n => (this.element = n)}
          style={{ display: this.state.isVisible ? "block" : "none" }}
        >
          <Modal onClick={this.toggle} wide={true} modalClassName="entry-popup">
            <Card
              className="entry-popup"
              onCloseClick={this.toggle}
              closeUrl={getUrl("/")}
            >
              <div className="entry-popup__columns">
                <div className="entry-popup__columns__column">
                  <img
                    className="entry-popup__img"
                    src="/img/mock/entry-popup.png"
                  />
                </div>
                <div className="entry-popup__columns__column">
                  <div className="entry-popup__content">
                    {this.state.newsletterSubscribeSuccess ? (
                      <>
                        <img
                          src="/img/icons/check_mark.svg"
                          className="entry-popup__icon--success"
                          alt="success"
                        />
                        <h2 className="entry-popup__content__title entry-popup__content__title--success">
                          {translations.get("entryPopup_success_title")}
                        </h2>
                        <span className="entry-popup__content__summary entry-popup__content__summary--success">
                          {translations.get("entryPopup_success_message")}
                        </span>
                        <Link
                          to={getUrl("/")}
                          onClick={this.toggle}
                          className="button button--newsletter-success"
                        >
                          {translations.get("newsletter_continue_shopping")}
                        </Link>
                      </>
                    ) : (
                      <>
                        <h2 className="entry-popup__content__title">
                          {translations.get("entryPopup_title")}
                        </h2>
                        <span className="entry-popup__content__summary">
                          {translations.get("entryPopup_summary")}
                        </span>
                      </>
                    )}
                    {!this.state.newsletterSubscribeSuccess && (
                      <div className="entry-popup__content__form">
                        <NewsletterForm
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
              {!this.state.newsletterSubscribeSuccess && (
                <div className="entry-popup__footer">
                  <span
                    className="entry-popup__footer__decline"
                    onClick={this.toggle}
                  >
                    {translations.get("entryPopup_decline")}
                  </span>
                  <span className="entry-popup__footer__privacy-policy">
                    {translations.get("entryPopup_privacy-policy")}
                  </span>
                </div>
              )}
            </Card>
          </Modal>
        </section>
      );
    } else {
      return null;
    }
  }

  init() {
    this.setState({ isInitialised: true });

    this.toggle();
  }

  // toggle the overlay and the state of the navigation
  toggle() {
    if (!this.state.isVisible) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "visible";
    }

    this.setState({ isVisible: !this.state.isVisible });
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
    )(EntryPopup),
    [
      "entryPopup_title",
      "entryPopup_summary",
      "entryPopup_decline",
      "entryPopup_privacy-policy",
      "entryPopup_success_title",
      "entryPopup_success_message",
      "newsletter_continue_shopping"
    ]
  )
);
