import ApiService from "../apiService";

export default class UserAddressMockService extends ApiService {
  constructor() {
    super();

    this.addresses = [
      {
        address_id: "1",
        prefix: "Ms.",
        name: "first new",
        firstname: "first",
        middlename: null,
        lastname: "new",
        street: "test new",
        city: "Jeddah",
        state_name: null,
        state_id: 0,
        state_code: null,
        zip: "8966",
        country_name: "Saudi Arabia",
        country_code: "SA",
        country_flag: "http://18.138.5.71//focus/images/sa.png",
        phone: "+91505555553",
        address_city_code: "",
        address_country_code: "",
        is_verified: "0",
        email: "test.ios@test.com",
        is_default_shipping: false,
        is_default_billing: false
      },
      {
        address_id: "2",
        prefix: "Ms.",
        name: "first new",
        firstname: "first",
        middlename: null,
        lastname: "new",
        street: "test second",
        city: "Jeddah",
        state_name: null,
        state_id: 0,
        state_code: null,
        zip: "8966",
        country_name: "Saudi Arabia",
        country_code: "SA",
        country_flag: "http://18.138.5.71//focus/images/sa.png",
        phone: "+91505555553",
        address_city_code: "",
        address_country_code: "",
        is_verified: "0",
        email: "test.ios@test.com",
        is_default_shipping: true,
        is_default_billing: false
      }
    ];
  }

  getUserAddress(data) {
    return Promise.resolve({
      status: "SUCCESS",
      message: ["SUCCESS"],
      data: this.addresses
    });
  }

  setOrderAddress(data) {
    return Promise.resolve({
      status: "SUCCESS",
      message: ["SUCCESS"],
      data: {}
    });
  }
}
