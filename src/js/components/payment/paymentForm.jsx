import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm, formValueSelector } from "redux-form/immutable";
import { Link } from "react-router-dom";

import Radio from "../form/radio";
import InputButton from "../buttons/inputButton";
import CheckBox from "../form/checkBox";
import {
  availablePaymentMethods,
  PAYFORT_MOBILE_PAYMENT_METHOD,
  CASH_ON_DELIVERY_PAYMENT_METHOD
} from "../../../../service/payment/constants";
import withTranslations from "../../containers/translations/withTranslations";
import { PayfortRedirectionForm } from "./payfortRedirectionForm";
import { getUrl } from "../../../../server/helpers/routing";

class PaymentForm extends React.PureComponent {
  constructor(props) {
    super(props);

    this.handleTogglePaymentMethod = this.handleTogglePaymentMethod.bind(this);
  }

  componentDidMount() {
    this.props.onSavePaymentMethod(CASH_ON_DELIVERY_PAYMENT_METHOD);
  }

  handleTogglePaymentMethod(e) {
    const { onSavePaymentMethod } = this.props;
    if (availablePaymentMethods.includes(e.target.value)) {
      return onSavePaymentMethod(e.target.value);
    }
  }

  render() {
    const {
      action,
      method,
      handleSubmit,
      onSubmit,
      options,
      submitting,
      selectedAddress,
      messages,
      translations,
      initialValues,
      paymentMethod,
      payfort,
      currencyIndex,
      savingPayment
    } = this.props;

    const formattedOptions =
      options &&
      options.map(item => ({
        label: toFormattedLabel(
          item.get("title"),
          item.get("content"),
          item.get("iconPwa")
        ),
        value: item.get("paymentMethod"),
        id: item.get("paymentMethod"),
        disabled: item.get("isDisabled")
      }));

    return (
      <div className="payment-option__list">
        <form
          onSubmit={handleSubmit(onSubmit)}
          action={getUrl(action)}
          method={method}
          className="form form--payment"
        >
          <Field component="input" type="hidden" name="email" />
          <div className="payment-section__wrapper">
            <div className="payment-section__title">
              <span className="payment-section__title__text">
                {translations.get("payment_title")}
              </span>
            </div>
            <div className="payment-section__billing__address">
              <span className="payment-section__billing__address__text">
                {translations.get("payment_newBilling")}
              </span>
            </div>
            <Field
              name="paymentMethod"
              component={Radio}
              options={formattedOptions}
              material="true"
              className="single"
              onChange={this.handleTogglePaymentMethod}
              value={initialValues.get("paymentMethod")}
            />
            {selectedAddress && (
              <div className="payment-section__shipping-to">
                <span className="payment-section__shipping-to__span shipping-to__label">
                  {translations.get("payment_shipTo")}
                </span>
                <ShippingAddress address={selectedAddress} />
              </div>
            )}
            <div className="payment-section__consents">
              <div className="payment-agree_checkbox-label">
                <span>
                  {translations.get("payment_agree")}
                  <Link
                    to={getUrl("/terms-conditions")}
                    target="_blank"
                    tabIndex="-1"
                    className=""
                  >
                    {translations.get("payment_terms")}
                  </Link>
                </span>
              </div>
              <Field
                name="agreeOffers"
                label={translations.get("payment_agreeTnC")}
                component={CheckBox}
                material={true}
                className="single"
              />
            </div>
            <div className="form__buttons form__buttons--center payment-form__buttons">
              {paymentMethod !== PAYFORT_MOBILE_PAYMENT_METHOD && (
                <InputButton
                  type="submit"
                  className="form__buttons__button payment-form__button"
                  loading={submitting}
                  disabled={submitting || savingPayment}
                  value={translations.get("payment_submit")}
                />
              )}
            </div>
          </div>
        </form>
        {paymentMethod === PAYFORT_MOBILE_PAYMENT_METHOD && (
          <PayfortRedirectionForm
            email={initialValues.get("email")}
            amount={initialValues.get("amount")}
            accessCode={payfort.get("accessCode")}
            merchantIdentifier={payfort.get("merchantIdentifier")}
            merchantReference={payfort.get("merchantReference")}
            currency={currencyIndex}
            language={localStorage.getItem("LANG").toLowerCase()}
            signature={payfort.get("signature")}
            token={payfort.get("token")}
            host={window.location.origin}
            submitText={translations.get("payment_submit")}
            savingPayment={savingPayment}
          />
        )}
      </div>
    );
  }
}

const ShippingAddress = ({ address }) => (
  <>
    {address.get("name") && <span>{`${address.get("name")}, `}</span>}
    {address.get("streetAddress") && (
      <span>{`${address.get("streetAddress")}, `}</span>
    )}
    {address.get("city") && <span>{`${address.get("city")}, `}</span>}
    {address.get("zip") && <span>{`${address.get("zip")}, `}</span>}
    {address.get("country") && <span>{`${address.get("country")}, `}</span>}
    {address.get("phone") && <span>{`${address.get("phone")}`}</span>}
  </>
);

const toFormattedLabel = (title, description, icons) => (
  <div className="radio-group__container radio-group__container--payment">
    <div className="radio-group__text">
      <span
        className="radio-group__item__label__span--title"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <span
        className="radio-group__item__label__span--desc"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
    <div className="radio-group__icons">
      {icons &&
        icons.map((n, index) => (
          <div key={index} className="radio-group__icon">
            <img
              src={n.get("url")}
              alt="title"
              className="radio-group__icon__img"
            />
          </div>
        ))}
    </div>
  </div>
);

export default connect(state => ({
  paymentMethod: formValueSelector("paymentForm")(state, "paymentMethod")
}))(
  reduxForm({
    form: "paymentForm",
    enableReinitialize: false
  })(
    withTranslations(PaymentForm, [
      "payment_newBilling",
      "payment_title",
      "payment_agree",
      "payment_terms",
      "payment_submit",
      "payment_shipTo",
      "payment_agreeTnC",
      "payment_cardNumber",
      "payment_cardName",
      "payment_cardExpiry",
      "payment_cardCsc",
      "payment_agreeTaC_required"
    ])
  )
);
