import React from "react";

import InputButton from "../buttons/inputButton";
import {
  PURCHASE_COMMAND,
  DECIMAL_MULTIPLIER
} from "../../../../service/payfort/constants";

export const PayfortRedirectionForm = ({
  accessCode,
  merchantIdentifier,
  merchantReference,
  amount,
  currency,
  email,
  language,
  signature,
  host,
  submitText,
  savingPayment
}) => (
  <form action={process.env.PAYFORT_REDIRECT_URL} method="post">
    <input type="hidden" name="command" value={PURCHASE_COMMAND} />
    <input type="hidden" name="access_code" value={accessCode} />
    <input
      type="hidden"
      name="merchant_identifier"
      value={merchantIdentifier}
    />
    <input type="hidden" name="merchant_reference" value={merchantReference} />
    <input type="hidden" name="amount" value={amount * DECIMAL_MULTIPLIER} />
    <input type="hidden" name="currency" value={currency} />
    <input type="hidden" name="language" value={language} />
    <input type="hidden" name="customer_email" value={email} />
    <input type="hidden" name="signature" value={signature} />
    <input type="hidden" name="return_url" value={`${host}/payfort/return`} />
    <InputButton
      type="submit"
      disabled={savingPayment}
      className="form__buttons__button payment-form__button"
      value={submitText}
    />
  </form>
);
