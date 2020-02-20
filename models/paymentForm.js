import Joi from "joi";
import JoiMessages from "./helpers/joi-messages";

export const schema = () => {
  return Joi.object().keys({
    agreeTaC: Joi.boolean()
      .invalid(false)
      .required()
  });
};

export const validationMessages = () => {
  return {
    agreeTaC: {
      "any.required": "payment_agreeTaC_required",
      "any.invalid": "payment_agreeTaC_required"
    }
  };
};

export const validatePaymentForm = data =>
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
