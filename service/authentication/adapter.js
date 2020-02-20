import { STATUS_SUCCESS, STATUS_FAIL } from "../constants";

export const toLoginRequestJson = data => {
  if (data) {
    return {
      user_email: data.email,
      user_password: data.password
    };
  }
  return null;
};
export const toSocialMediaLoginRequestJson = data => {
  if (data) {
    return {
      user_email: data.email,
      first_name: data.first_name,
      last_name: data.last_name,
      type: data.type
    };
  }
  return null;
};

export const toRegisterRequestJson = data => {
  if (data) {
    return {
      first_name: data.firstName,
      last_name: data.lastName,
      user_email: data.email,
      user_password: data.password
    };
  }
  return null;
};

export const toUpdateProfileRequestJson = data => {
  if (data) {
    return {
      first_name: data.firstName,
      last_name: data.lastName,
      user_email: data.email
    };
  }
  return null;
};

export const toChangePasswordRequestJson = data => {
  if (data) {
    return {
      old_password: data.currentPassword,
      new_password: data.newPassword,
      com_password: data.confirmPassword,
      email: data.email
    };
  }
  return null;
};

export const toForgotPasswordRequestJson = data => {
  if (data) {
    return {
      user_email: data.email
    };
  }
  return null;
};

export const toResetPasswordRequestJson = data => {
  if (data) {
    return {
      customer_id: data.userId,
      token: data.token,
      new_password: data.newPassword
    };
  }
  return null;
};

export const toAuthentication = data => {
  if (data) {
    if (data.status === STATUS_SUCCESS) {
      const { data: responseData } = data;

      return {
        profile: toProfile(responseData[0])
      };
    }
    if (data.status === STATUS_FAIL) {
      throw Error(data.message);
    }
  }
  return null;
};

const toProfile = data => ({
  id: data.user_id,
  email: data.user_email,
  name: data.user_name,
  prefix: data.user_prefix,
  firstName: data.first_name,
  lastName: data.last_name
});

export const toChangePassword = data => {
  if (data) {
    if (data.status === STATUS_SUCCESS) {
      const { data: responseData } = data;

      return responseData;
    }
    if (data.status === STATUS_FAIL) {
      throw Error(data.message);
    }
  }
  return null;
};

export const toForgotPassword = data => {
  if (data) {
    if (data.status === STATUS_SUCCESS) {
      const { data: responseData } = data;

      return responseData;
    }
    if (data.status === STATUS_FAIL) {
      throw Error(data.message);
    }
  }
  return null;
};

export const toResetPassword = data => {
  if (data) {
    if (data.status === STATUS_SUCCESS) {
      const { data: responseData } = data;

      return responseData;
    }
    if (data.status === STATUS_FAIL) {
      throw Error(data.message);
    }
  }
  return null;
};

export const toSignOutResponse = data => {
  if (data) {
    if (data.status === STATUS_SUCCESS) {
      const { data: responseData } = data;

      return responseData;
    }
    if (data.status === STATUS_FAIL) {
      throw Error(data.message);
    }
  }
  return null;
};
