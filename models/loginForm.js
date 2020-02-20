import Joi from "joi";
import JoiMessages from "./helpers/joi-messages";

export const schema = () => {
  return Joi.object().keys({
    email: Joi.string()
      .required()
      .email()
      .label("Email Address"),
    password: Joi.string()
      .required()
      .label("Password")
  });
};

export const validationMessages = () => {
  return {
    email: {
      "any.required": "loginForm_email_required",
      "any.empty": "loginForm_email_required",
      "string.email": "loginForm_email_valid"
    },
    password: {
      "any.required": "loginForm_password_required",
      "any.empty": "loginForm_password_required"
    }
  };
};

export const validateLoginForm = data =>
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
