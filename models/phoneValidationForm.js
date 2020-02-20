import Joi from "joi";
import JoiMessages from "./helpers/joi-messages";

export const schema = () => {
  return Joi.object().keys({
    phoneNumber: Joi.string()
      .required()
      .label("Phone Number")
  });
};

export const validationMessages = () => {
  return {
    phoneNumber: {
      "any.required": "shipmentAddress_phone_required",
      "any.empty": "shipmentAddress_phone_required"
    }
  };
};

export const validatePhoneVerificationForm = data =>
  new Promise(resolve => {
    Joi.validate(
      data,
      schema(),
      { abortEarly: false, allowUnknown: true },
      (errors, values) => {
        if (errors) {
          let errorMessages = JoiMessages.transform(
            errors.details,
            values,
            validationMessages(),
            { singleErrorPerField: true }
          );
          resolve(errorMessages, values);
        }
        resolve();
      }
    );
  });
