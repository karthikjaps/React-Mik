import { returnUrlParamsRegEx, PURCHASE_COMMAND } from "./constants";

export const toTokenizeRequest = data => {
  if (data) {
    const { payfortDetails } = data;

    return {
      service_command: payfortDetails.serviceCommand,
      access_code: payfortDetails.accessCode,
      merchant_identifier: payfortDetails.merchantIdentifier,
      merchant_reference: payfortDetails.merchantReference,
      language: payfortDetails.language,
      expiry_date: toExpiryDateRequest(data.creditCardExpiry),
      card_number: data.creditCardNumber,
      card_holder_name: data.creditCardName,
      card_security_code: data.creditCardCVC,
      signature: payfortDetails.signature
    };
  }
};

const toExpiryDateRequest = data =>
  data
    .split("/")
    .reverse()
    .join("");

export const toTokenizeHtmlResponse = data => {
  if (data) {
    const match = returnUrlParamsRegEx.exec(data);
    if (match) {
      const tempObj = JSON.parse(match[1]);
      return {
        responseCode: tempObj.response_code,
        cardNumber: tempObj.card_number,
        responseMessage: tempObj.response_message,
        serviceCommand: tempObj.service_command,
        cardHolderName: tempObj.card_holder_name,
        signature: tempObj.signature,
        merchantIdentifier: tempObj.merchant_identifier,
        merchantReference: tempObj.merchant_reference,
        accessCode: tempObj.access_code,
        expiryDate: tempObj.expiry_date,
        language: tempObj.language,
        status: tempObj.status,
        token: tempObj.token_name
      };
    }
  }
  return null;
};

export const toPurchaseRequest = data => {
  const { payfortDetails } = data;

  if (data) {
    return {
      command: PURCHASE_COMMAND,
      // check_3ds: "NO",
      amount: data.amount,
      currency: data.currency,
      customer_email: data.email,
      token_name: data.token,
      signature: payfortDetails.signature,
      access_code: payfortDetails.accessCode,
      merchant_identifier: payfortDetails.merchantIdentifier,
      merchant_reference: payfortDetails.merchantReference,
      return_url: `${data.host}/payfort/return`,
      language: payfortDetails.language
    };
  }
};

export const toPurchaseResponse = data => {
  if (data) {
    return {
      responseCode: data.response_code,
      cardNumber: data.card_number,
      cardHolderName: data.card_holder_name,
      signature: data.signature,
      merchantIdentifier: data.merchant_identifier,
      accessCode: data.access_code,
      expiryDate: data.expiry_date,
      language: data.language,
      serviceCommand: data.service_command,
      responseMessage: data.response_message,
      merchantReference: data.merchant_reference,
      status: data.status,
      secureUrl: data["3ds_url"]
    };
  }
};
