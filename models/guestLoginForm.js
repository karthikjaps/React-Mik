import Joi from "joi";
import JoiMessages from "./helpers/joi-messages";

export const schema = () => {
  return Joi.object().keys({
    email: Joi.string()
      .required()
      .email()
      .label("Email Address")
  });
};

export const validationMessages = () => {
  return {
    email: {
      "any.required": "loginForm_email_required",
      "any.empty": "loginForm_email_required",
      "string.email": "loginForm_email_valid"
    }
  };
};

export const validateGuestLoginForm = data =>
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
