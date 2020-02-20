import React from "react";
import { Field, reduxForm } from "redux-form/immutable";

import withTranslations from "../../containers/translations/withTranslations";
import { getUrl } from "../../../../server/helpers/routing";

const AddToBagForm = ({
  action,
  submitting,
  handleSubmit,
  onSubmit,
  initialValues,
  translations
}) => {
  return (
    <form
      action={getUrl(action)}
      method="post"
      className="form form--add-to-bag"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="add-to-bag-form__wrapper">
        <Field component="input" type="hidden" name="productId" />
        <div className="form__buttons form__buttons--right add-to-bag-form__buttons">
          {initialValues.get("isSuccess") ? (
            <span className="add-to-bag__success-message">
              {translations.get("product_addedToBag")}
            </span>
          ) : (
            <input
              type="submit"
              value={translations.get("product_addToBag")}
              className="wishlist__add-to-bag"
              disabled={submitting}
            />
          )}
        </div>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "addWishlistItemToBag"
})(withTranslations(AddToBagForm, ["product_addedToBag", "product_addToBag"]));
