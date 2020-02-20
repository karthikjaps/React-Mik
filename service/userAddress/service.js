import AuthenticatedApiService from "../authenticatedApiService";

export default class UserAddressService extends AuthenticatedApiService {
  getServiceUrl() {
    return `${super.getServiceUrl()}connector/`;
  }

  getUserAddress() {
    return super.get({
      url: `${this.getServiceUrl()}customer/get_user_addresses`
    });
  }

  createUserAddress({ data }) {
    return super.post({
      url: `${this.getServiceUrl()}customer/save_address`,
      data
    });
  }

  updateUserAddress({ data }) {
    return super.post({
      url: `${this.getServiceUrl()}customer/update_address`,
      data
    });
  }

  setOrderAddress({ data }) {
    return super.post({
      url: `${this.getServiceUrl()}checkout/get_order_config`,
      data
    });
  }

  sendPhoneValidate({ data }) {
    return super.post({
      url: `${this.getServiceUrl()}checkout/send_phone_validate`,
      data
    });
  }

  verifyPhoneValidate({ data }) {
    return super.post({
      url: `${this.getServiceUrl()}checkout/check_phone_validate`,
      data
    });
  }
}
