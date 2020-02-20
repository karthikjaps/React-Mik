import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm, formValueSelector } from "redux-form/immutable";
import { Link } from "react-router-dom";

import ProductPrice from "./productPrice";
import Stepper from "../form/stepper";
import InputButton from "../buttons/inputButton";
import withTranslations from "../../containers/translations/withTranslations";
import { getUrl } from "../../../../server/helpers/routing";
import AddToWishlist from "../../containers/wishlist/addToWishlist";
import CatalogueCarouselUseWith from "../../components/catalogue/catalogueCarouselUseWith";

const AddToBagForm = ({
  action,
  submitting,
  change,
  item,
  handleSubmit,
  onSubmit,
  initialValues,
  translations,
  quantity,
  selectedOptionId,
  currencyCode,
  handleAddToWishlist,
  handleRemoveFromWishlist,
  displayCarouselUseWith
}) => {
  const selectedOption =
    item &&
    item.get("swatchOptions") &&
    item.get("swatchOptions").find(n => n.get("id") === selectedOptionId);

  return (
    <form
      action={getUrl(action)}
      method="post"
      className="form form--add-to-bag"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="add-to-bag-form__wrapper">
        <Field component="input" type="hidden" name="productId" />
        <ProductPrice
          item={selectedOption || item}
          currencyCode={currencyCode}
        />
        <Field
          name="quantity"
          component={Stepper}
          className="add-to-bag-form__stepper"
          maxValue={item && item.get("maxQuantity")}
          readOnly
          change={change}
          quantity={quantity}
        />
      </div>
      <Field component="input" type="hidden" name="swatchOptionId" />
      {item && item.get("swatchOptions") && (
        <div className="add-to-bag-form__swatch-options">
          <div className="add-to-bag-form__swatch-options__color">
            {`${translations.get("selected_swatch_color")}: ${
              selectedOption ? selectedOption.get("swatchCode") : ""
            }`}
          </div>
          <div className="add-to-bag-form__swatch-options__wrapper">
            {item.get("swatchOptions").map(n => (
              <div
                className={`add-to-bag-form__swatch-options__item ${
                  selectedOptionId === n.get("id")
                    ? "add-to-bag-form__swatch-options__item--selected"
                    : ""
                }`}
                key={n.get("id")}
                onClick={() => change("swatchOptionId", n.get("id"))}
              >
                {n.get("thumbnail") ? (
                  <img
                    className="add-to-bag-form__swatch-options__item__img"
                    src={n.get("thumbnail")}
                    title={n.get("swatchCode")}
                  />
                ) : (
                  <span className="add-to-bag-form__swatch-options__item__code">
                    {n.get("swatchCode")}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
      <AddToWishlist
        translations={translations}
        item={item}
        className="add-to-bag-form"
      />
      {item.get("upsellProducts") &&
        !!item.get("upsellProducts").size &&
        displayCarouselUseWith && (
          <CatalogueCarouselUseWith
            translations={translations}
            className="use-it-with"
            items={item.get("upsellProducts")}
            handleAddToWishlist={handleAddToWishlist}
            handleRemoveFromWishlist={handleRemoveFromWishlist}
            currencyCode={currencyCode}
          />
        )}
      <div className="form__buttons form__buttons--right add-to-bag-form__buttons">
        {initialValues.get("isSuccess") ? (
          <span className="add-to-bag__success-message">
            {translations.get("product_addedToBag")}
          </span>
        ) : (
          <InputButton
            type="submit"
            value={translations.get("product_addToBag")}
            className="form__buttons__button button add-to-bag-form__button"
            loading={submitting}
            disabled={
              submitting ||
              (item && item.get("swatchOptions") && !selectedOptionId)
            }
          />
        )}
      </div>
    </form>
  );
};

const selector = formValueSelector("addToBagForm");

export default connect(state => ({
  quantity: selector(state, "quantity"),
  selectedOptionId: selector(state, "swatchOptionId")
}))(
  reduxForm({
    form: "addToBagForm"
  })(
    withTranslations(AddToBagForm, [
      "product_wishlist",
      "product_wishlist_added",
      "product_addedToBag",
      "product_addToBag",
      "selected_swatch_color"
    ])
  )
);
