import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Field, formValueSelector, reduxForm } from "redux-form/immutable";
import { Link } from "react-router-dom";

import TextBox from "../form/textBox";
import CheckBox from "../form/checkBox";
import InputButton from "../buttons/inputButton";
import withTranslations from "../../containers/translations/withTranslations";
import { getUrl } from "../../../../server/helpers/routing";

const EditProfileForm = ({
  action,
  method,
  messages,
  handleSubmit,
  submitting,
  returnUrl,
  onCancel,
  enableChangePassword,
  apiErrorMessage,
  initialValues,
  translations
}) => {
  const currentPasswordMessage = apiErrorMessage && [
    { message: apiErrorMessage }
  ];

  return (
    <section className="edit-profile-form">
      <form
        onSubmit={handleSubmit}
        action={getUrl(action)}
        method={method}
        className="form"
      >
        <div className="edit-profile-form__intro">
          {translations.get("editProfile_intro")}{" "}
          {initialValues && initialValues.get("firstName")}
        </div>
        <div className="edit-profile-form__section">
          <Field
            name="firstName"
            label={translations.get("editProfile_firstName")}
            component={TextBox}
            type="text"
            messages={
              messages.firstName &&
              messages.firstName.map((message, ...n) => ({
                message: translations.get(message.message),
                ...n
              }))
            }
            autoComplete="given-name"
            material={true}
            className="edit-profile"
          />
          <Field
            name="lastName"
            label={translations.get("editProfile_lastName")}
            component={TextBox}
            type="text"
            messages={
              messages.lastName &&
              messages.lastName.map((message, ...n) => ({
                message: translations.get(message.message),
                ...n
              }))
            }
            autoComplete="family-name"
            material={true}
            className="edit-profile"
          />
          <Field
            name="email"
            label={translations.get("editProfile_email")}
            component={TextBox}
            type="text"
            messages={
              messages.email &&
              messages.email.map((message, ...n) => ({
                message: translations.get(message.message),
                ...n
              }))
            }
            autoComplete="email"
            material={true}
            className="single"
          />
          <Field
            name="changePassword"
            label={translations.get("editProfile_changePassword")}
            component={CheckBox}
            material={true}
            className="single edit-profile-form__checkbox"
          />
          {enableChangePassword && (
            <Fragment>
              <Field
                name="currentPassword"
                label={translations.get("editProfile_currentPassword")}
                component={TextBox}
                type="password"
                messages={
                  messages.currentPassword &&
                  messages.currentPassword.map((message, ...n) => ({
                    message: translations.get(message.message),
                    ...n
                  }))
                }
                autoComplete="current-password"
                material={true}
                className="single"
              />
              <Field
                name="newPassword"
                label={translations.get("editProfile_newPassword")}
                component={TextBox}
                type="password"
                messages={
                  messages.newPassword &&
                  messages.newPassword.map((message, ...n) => ({
                    message: translations.get(message.message),
                    ...n
                  }))
                }
                autoComplete="new-password"
                material={true}
                className=""
              />
              <Field
                name="confirmPassword"
                label={translations.get("editProfile_confirmPassword")}
                component={TextBox}
                type="password"
                messages={
                  messages.confirmPassword &&
                  messages.confirmPassword.map((message, ...n) => ({
                    message: translations.get(message.message),
                    ...n
                  }))
                }
                autoComplete="confirm-password"
                material={true}
                className=""
              />
            </Fragment>
          )}
        </div>
        <div className="edit-profile-form__buttons">
          <div className="edit-profile-form__buttons">
            <InputButton
              type="submit"
              value={translations.get("editProfile_submit")}
              className="form__buttons__button edit-profile-form__button"
              loading={submitting}
              disabled={submitting}
            />
            <Link
              to={getUrl(returnUrl)}
              className="button button--ghost form__buttons__button form__buttons__button--cancel edit-profile-form__button"
              title={translations.get("editProfile_cancel")}
            >
              {translations.get("editProfile_cancel")}
            </Link>
          </div>
        </div>
      </form>
    </section>
  );
};

const selector = formValueSelector("editProfileForm");

export default connect(state => ({
  enableChangePassword: selector(state, "changePassword")
}))(
  reduxForm({
    form: "editProfileForm",
    enableReinitialize: true
  })(
    withTranslations(EditProfileForm, [
      "catalogueSection_label",
      "catalogueFilters_filter",
      "editProfile_submit",
      "editProfile_cancel",
      "editProfile_changePassword",
      "editProfile_currentPassword",
      "editProfile_newPassword",
      "editProfile_confirmPassword",
      "editProfile_firstName",
      "editProfile_lastName",
      "editProfile_email",
      "editProfile_intro",
      "editProfile_firstName_required",
      "editProfile_lastName_required",
      "editProfile_email_required",
      "editProfile_email_valid",
      "editProfile_currentPassword_required",
      "editProfile_newPassword_required",
      "editProfile_confirmPassword_required",
      "editProfile_confirmPassword_different"
    ])
  )
);
