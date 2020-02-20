import Joi from "joi";
import JoiMessages from "./helpers/joi-messages";

export const schema = () => {
  return Joi.object().keys({
    firstName: Joi.string()
      .required()
      .label("First Name"),
    lastName: Joi.string()
      .required()
      .label("Last Name"),
    email: Joi.string()
      .required()
      .email()
      .label("Email Address"),
    password: Joi.string()
      .required()
      .label("Password"),
    confirmPassword: Joi.any()
      .valid(Joi.ref("password"))
      .required()
      .label("Confirm Password"),
    agreeTaC: Joi.boolean()
      .invalid(false)
      .required()
  });
};

export const validationMessages = () => {
  return {
    firstName: {
      "any.required": "register_firstName_required",
      "any.empty": "register_firstName_required"
    },
    lastName: {
      "any.required": "register_lastName_required",
      "any.empty": "register_lastName_required"
    },
    email: {
      "any.required": "register_email_required",
      "any.empty": "register_email_required",
      "string.email": "register_email_valid"
    },
    password: {
      "any.required": "register_password_required"
    },
    confirmPassword: {
      "any.required": "register_confirmPassword_required",
      "any.allowOnly": "register_confirmPassword_different"
    },
    agreeTaC: {
      "any.required": "register_agreeTaC_required",
      "any.invalid": "register_agreeTaC_required"
    }
  };
};

export const validateRegisterForm = data =>
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
