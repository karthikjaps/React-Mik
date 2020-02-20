import ApiService from "../apiService";

const USERNAME = "test.ios@test.com";
const PASSWORD = "password";

export default class AuthenticationMockService extends ApiService {
  constructor() {
    super();

    this.profile = [
      {
        user_id: "12163",
        user_email: "test.ios@test.com",
        user_name: "Test Test",
        user_prefix: "Test Test",
        first_name: "Test",
        middle_name: null,
        last_name: "Test",
        login_type: "2",
        user_profile:
          "http://shop.arabianoud.com/focus/customer/1543491946image:13716",
        cart_qty: null
      }
    ];
  }

  login({ data }) {
    if (data.user_email === USERNAME && data.user_password === PASSWORD) {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve({
            status: "SUCCESS",
            message: [40],
            data: this.profile
          });
        }, 300);
      });
    }

    return Promise.reject({
      status: "FAIL",
      message: ["Invalid login or password"],
      data: []
    });
  }
}
