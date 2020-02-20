import AuthenticatedApiService from "../authenticatedApiService";

export default class AuthenticationService extends AuthenticatedApiService {
  getServiceUrl() {
    return `${super.getServiceUrl()}/connector/customer`;
  }

  login({ data }) {
    return super.post({
      url: `${this.getServiceUrl()}/sign_in`,
      data
    });
  }

  socialMediaLogin({ data }) {
    return super.post({
      url: `${this.getServiceUrl()}/social_media_login`,
      data
    });
  }

  register({ data }) {
    return super.post({
      url: `${this.getServiceUrl()}/register`,
      data
    });
  }

  getProfile() {
    return super.get({
      url: `${this.getServiceUrl()}/get_profile`
    });
  }

  updateProfile({ data }) {
    return super.post({
      url: `${this.getServiceUrl()}/change_user`,
      data
    });
  }

  changePassword({ data }) {
    return super.post({
      url: `${this.getServiceUrl()}/change_password`,
      data
    });
  }

  signOut() {
    return super.get({
      url: `${this.getServiceUrl()}/sign_out`
    });
  }

  forgotPassword({ data }) {
    return super.post({
      url: `${this.getServiceUrl()}/forgot_password`,
      data
    });
  }

  resetPassword({ data }) {
    return super.post({
      url: `${this.getServiceUrl()}/reset_password`,
      data
    });
  }
}
