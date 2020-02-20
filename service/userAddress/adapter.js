import { STATUS_SUCCESS, STATUS_FAIL } from "../constants";
import { toFee } from "../cart/adapter";

export const toUserAddressesResponse = data => {
  if (data) {
    if (data.status === STATUS_SUCCESS) {
      return toUserAddressesArray(data.data);
    }
    if (data.status === STATUS_FAIL) {
      throw Error(data.message);
    }
  }
  return null;
};

export const toUserAddressesArray = data => {
  if (data && data.length) {
    return data.map(n => toUserAddress(n));
  }
  return [];
};

export const toUserAddressResponse = data => {
  if (data) {
    if (data.status === STATUS_SUCCESS) {
      return toUserAddress(data.data);
    }
    if (data.status === STATUS_FAIL) {
      throw Error(data.message);
    }
  }
  return null;
};

export const toUserAddress = data => {
  if (data) {
    return {
      addressId: data.address_id,
      prefix: data.prefix,
      name: data.name,
      firstName: data.firstname,
      middleName: data.middlename,
      lastName: data.lastname,
      streetAddress: data.street,
      city: data.city,
      buildingNumber: data.building_number,
      stateName: data.state_name,
      stateId: data.state_id,
      stateCode: data.state_code,
      zip: data.zip,
      countryName: data.country_name,
      country: data.country_code,
      countryFlag: data.country_flag,
      phone: data.phone,
      phoneCode: data.address_country_code,
      phoneNumber: data.address_country_code + data.phone,
      addressCityCode: data.address_city_code,
      addressCountryCode: data.address_country_code,
      isVerified: data.is_verified,
      email: data.email,
      isDefaultShipping: data.is_default_shipping,
      isDefaultBilling: data.is_default_billing
    };
  }
};

export const toUserAddressesJson = data => {
  if (data) {
    return {
      customer_email: data.email,
      billingAddress: toAddressJson(data.billingAddress),
      shippingAddress: toAddressJson(data.shippingAddress)
    };
  }
};

export const toAddressJson = data => {
  if (data) {
    return {
      prefix: data.prefix,
      name: data.name,
      street: data.streetAddress,
      building_number: data.buildingNumber,
      city: data.city,
      zip: data.zip,
      country_code: data.country || data.country_code,
      email: data.email,
      phone: data.phoneNumber
    };
  }
};

export const toUpdateAddressJson = data => {
  if (data) {
    return {
      address_id: data.addressId,
      first_name: data.firstName, // useless for API
      last_name: data.lastName, // useless for API
      name: `${data.firstName} ${data.lastName}`,
      street: data.streetAddress,
      building_number: data.buildingNumber,
      city: data.city,
      country_code: data.country,
      phone: data.phoneNumber.replace(/\s/g, ""),
      is_default_shipping: data.isDefaultShipping, // TODO: doesn't used by API
      is_default_billing: data.isDefaultBilling
    };
  }
};

export const toCreateAddressJson = data => {
  if (data) {
    return {
      name: `${data.firstName} ${data.lastName}`,
      city: data.city,
      other_title: data.otherTitle || "New", // TODO
      street: data.streetAddress,
      building_number: data.buildingNumber,
      address_city_code: data.addressCityCode || "50", // TODO
      last_name: data.lastName, // useless for API
      country_code: data.country, // TODO: hardcode for now
      first_name: data.firstName, // useless for API
      address_type: data.addressType || "1", // TODO: Set address type '1' for default address
      user_prefix: data.prefix || "Ms.", // TODO: hardcoded for now
      zip: data.zip || "8966", // TODO: hardcoded for now
      phone: data.phoneNumber.replace(/\s/g, ""),
      address_country_code: data.countryCode || "", // TODO
      state_name: data.stateName,
      company: data.company,
      is_default_shipping: data.isDefaultShipping, // TODO: doesn't used by API
      is_default_billing: data.isDefaultBilling
    };
  }
};

export const toOrderConfiguration = data => {
  if (data) {
    if (data.status === STATUS_SUCCESS) {
      const { data: responseData } = data;

      if (responseData && responseData[0]) {
        const { payment_method_list, fee } = responseData[0];

        return {
          paymentMethods: toPaymentMethodArray(payment_method_list),
          fee: toFee(fee)
        };
      }
    }
    if (data.status === STATUS_FAIL) {
      throw Error(data.message);
    }
  }
  return null;
};

const toPaymentMethod = data => {
  if (data) {
    return {
      content: data.content,
      description: data.description,
      icon: data.icon_payment,
      iconPwa: toPaymentIconArray(data.payment_icon_pwa),
      paymentMethod: data.payment_method,
      shortDescription: data.short_description,
      title: data.title
    };
  }
};

const toPaymentMethodArray = data => {
  if (data && data.length) {
    return data.map(n => toPaymentMethod(n));
  }
  return [];
};

const toPaymentIcon = data => {
  if (data) {
    return {
      url: data
    };
  }
};

const toPaymentIconArray = data => {
  if (data && data.length) {
    return data.map(n => toPaymentIcon(n));
  }
  return [];
};

export const toSendPhoneValidate = data => {
  if (data) {
    return {
      phone_number: data.phoneNumber
    };
  }
};

export const toSendPhoneValidateResponse = data => {
  if (data) {
    if (data.status === STATUS_SUCCESS) {
      return toSendPhoneValidateResponseData(data.data);
    }
    if (data.status === STATUS_FAIL) {
      throw Error(data.message);
    }
  }
  return null;
};

const toSendPhoneValidateResponseData = data => ({
  status: data.status,
  message: data.message
});

export const toVerifyPhoneValidate = data => {
  if (data) {
    return {
      phone_number: data.phoneNumber,
      validate_code: data.verificationCode
    };
  }
};

export const toVerifyPhoneValidateResponse = data => {
  if (data) {
    if (data.status === STATUS_SUCCESS) {
      return toVerifyPhoneValidateResponseData(data.data);
    }
    if (data.status === STATUS_FAIL) {
      throw Error(data.message);
    }
  }
  return null;
};

const toVerifyPhoneValidateResponseData = data => ({
  status: data.status,
  message: data.message
});
