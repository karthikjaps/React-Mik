import MockAuthenticationService from "./service.mock";
import {
  toAuthentication,
  toLoginRequestJson,
  toRegisterRequestJson,
  toUpdateProfileRequestJson,
  toChangePasswordRequestJson,
  toChangePassword,
  toSignOutResponse,
  toForgotPasswordRequestJson,
  toForgotPassword,
  toResetPasswordRequestJson,
  toResetPassword,
  toSocialMediaLoginRequestJson
} from "./adapter";

export default class Authentication {
  constructor({ service } = {}) {
    this.service = service || new MockAuthenticationService();
  }

  login(data) {
    return this.service
      .login({ data: toLoginRequestJson(data) })
      .then(response => toAuthentication(response))
      .catch(error => {
        console.error(error);
        throw error;
      });
  }
  socialMediaLogin(data) {
    return this.service
      .socialMediaLogin({ data: toSocialMediaLoginRequestJson(data) })
      .then(response => toAuthentication(response))
      .catch(error => {
        console.error(error);
        throw error;
      });
  }

  register(data) {
    return this.service
      .register({ data: toRegisterRequestJson(data) })
      .then(response => toAuthentication(response))
      .catch(error => {
        console.error(error);
        throw error;
      });
  }

  getProfile(data) {
    return this.service
      .getProfile()
      .then(response => toAuthentication(response))
      .catch(error => {
        console.error(error);
        throw error;
      });
  }

  updateProfile(data) {
    return this.service
      .updateProfile({ data: toUpdateProfileRequestJson(data) })
      .then(response => toAuthentication(response))
      .catch(error => {
        console.error(error);
        throw error;
      });
  }

  changePassword(data) {
    return this.service
      .changePassword({ data: toChangePasswordRequestJson(data) })
      .then(response => toChangePassword(response))
      .catch(error => {
        console.error(error);
        throw error;
      });
  }

  signOut(data) {
    return this.service
      .signOut()
      .then(response => toSignOutResponse(response))
      .catch(error => {
        console.error(error);
        throw error;
      });
  }

  forgotPassword(data) {
    return this.service
      .forgotPassword({ data: toForgotPasswordRequestJson(data) })
      .then(response => toForgotPassword(response))
      .catch(error => {
        console.error(error);
        throw error;
      });
  }

  resetPassword(data) {
    return this.service
      .resetPassword({ data: toResetPasswordRequestJson(data) })
      .then(response => toResetPassword(response))
      .catch(error => {
        console.error(error);
        throw error;
      });
  }
}
