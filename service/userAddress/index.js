import MockAuthenticationService from "./service.mock";
import {
  toUserAddressesResponse,
  toUserAddressResponse,
  toUserAddressesJson,
  toUpdateAddressJson,
  toCreateAddressJson,
  toOrderConfiguration,
  toSendPhoneValidate,
  toSendPhoneValidateResponse,
  toVerifyPhoneValidate,
  toVerifyPhoneValidateResponse
} from "./adapter";

export default class UserAddress {
  constructor({ service } = {}) {
    this.service = service || new MockAuthenticationService();
  }

  getUserAddresses(data) {
    return this.service
      .getUserAddress(data)
      .then(response => {
        return toUserAddressesResponse(response);
      })
      .catch(error => {
        console.error(error);
        throw error;
      });
  }

  setOrderAddress(data) {
    return this.service
      .setOrderAddress({ data: toUserAddressesJson(data) })
      .then(response => {
        return toOrderConfiguration(response);
      })
      .catch(error => {
        console.error(error);
        throw error;
      });
  }

  createUserAddress(data) {
    return this.service
      .createUserAddress({ data: toCreateAddressJson(data) })
      .then(response => {
        return toUserAddressesResponse(response);
      })
      .catch(error => {
        console.error(error);
        throw error;
      });
  }

  updateUserAddresses(data) {
    return this.service
      .updateUserAddress({ data: toUpdateAddressJson(data) })
      .then(response => {
        return toUserAddressResponse(response);
      })
      .catch(error => {
        console.error(error);
        throw error;
      });
  }

  sendPhoneValidate(data) {
    return this.service
      .sendPhoneValidate({ data: toSendPhoneValidate(data) })
      .then(response => {
        return toSendPhoneValidateResponse(response);
      })
      .catch(error => {
        console.error(error);
        throw error;
      });
  }

  verifyPhoneValidate(data) {
    return this.service
      .verifyPhoneValidate({ data: toVerifyPhoneValidate(data) })
      .then(response => {
        return toVerifyPhoneValidateResponse(response);
      })
      .catch(error => {
        console.error(error);
        throw error;
      });
  }
}
