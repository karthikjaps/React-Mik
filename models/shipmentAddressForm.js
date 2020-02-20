import Joi from "joi";
import JoiMessages from "./helpers/joi-messages";

export const schema = () => {
  return Joi.object().keys({
    firstName: Joi.string()
      .required()
      .label("First name"),
    lastName: Joi.string()
      .required()
      .label("Last name"),
    streetAddress: Joi.string()
      .required()
      .label("Street Address"),
    buildingNumber: Joi.string()
      .required()
      .label("Building Number"),
    city: Joi.string()
      .required()
      .label("City"),
    country: Joi.string()
      .required()
      .label("Country"),
    phoneNumber: Joi.string()
      .required()
      .label("Phone Number")
  });
};

export const validationMessages = () => {
  return {
    firstName: {
      "any.required": "shipmentAddress_firstName_required",
      "any.empty": "shipmentAddress_firstName_required"
    },
    lastName: {
      "any.required": "shipmentAddress_lastName_required",
      "any.empty": "shipmentAddress_lastName_required"
    },
    streetAddress: {
      "any.required": "shipmentAddress_streetAddress_required",
      "any.empty": "shipmentAddress_streetAddress_required"
    },
    buildingNumber: {
      "any.required": "shipmentAddress_buildingNumber_required",
      "any.empty": "shipmentAddress_buildingNumber_required"
    },
    city: {
      "any.required": "shipmentAddress_city_required",
      "any.empty": "shipmentAddress_city_required"
    },
    country: {
      "any.required": "shipmentAddress_country_required",
      "any.empty": "shipmentAddress_country_required"
    },
    phoneNumber: {
      "any.required": "shipmentAddress_phone_required",
      "any.empty": "shipmentAddress_phone_required",
      "string.min": "shipmentAddress_phone_invalid",
      "string.max": "shipmentAddress_phone_invalid"
    }
  };
};

export const validateShipmentAddressForm = data =>
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
