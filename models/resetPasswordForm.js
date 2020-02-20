import Joi from "joi";
import JoiMessages from "./helpers/joi-messages";

export const schema = () => {
  return Joi.object().keys({
    newPassword: Joi.string()
      .required()
      .label("New Password"),
    confirmPassword: Joi.any()
      .valid(Joi.ref("newPassword"))
      .required()
      .label("Confirm Password")
  });
};

export const validationMessages = () => {
  return {
    newPassword: {
      "any.required": "resetPassword_newPassword_required"
    },
    confirmPassword: {
      "any.required": "resetPassword_confirmPassword_required",
      "any.allowOnly": "resetPassword_confirmPassword_different"
    }
  };
};

export const validateResetPasswordForm = data =>
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
