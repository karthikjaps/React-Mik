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
      .label("Email Address")
  });
};

export const schemaWithPasswords = () => {
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
    currentPassword: Joi.string()
      .required()
      .label("Current Password"),
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
    firstName: {
      "any.required": "editProfile_firstName_required",
      "any.empty": "editProfile_firstName_required"
    },
    lastName: {
      "any.required": "editProfile_lastName_required",
      "any.empty": "editProfile_lastName_required"
    },
    email: {
      "any.required": "editProfile_email_required",
      "any.empty": "editProfile_email_required",
      "string.email": "editProfile_email_valid"
    },
    currentPassword: {
      "any.required": "editProfile_currentPassword_required"
    },
    newPassword: {
      "any.required": "editProfile_newPassword_required"
    },
    confirmPassword: {
      "any.required": "editProfile_confirmPassword_required",
      "any.allowOnly": "editProfile_confirmPassword_different"
    }
  };
};

export const validateEditProfileForm = data =>
  new Promise(resolve => {
    const currentSchema = data.changePassword ? schemaWithPasswords : schema;

    Joi.validate(
      data,
      currentSchema(),
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
