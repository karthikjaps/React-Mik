import React from "react";
import { compose } from "redux";
import { Field, reduxForm } from "redux-form/immutable";
import { connect } from "react-redux";

import Stepper from "../form/stepper";

const CartQuantityForm = ({
  change,
  quantity,
  item,
  onStepperButtonClick,
  formId
}) => {
  return (
    <form className="form">
      <Field
        name={`quantity_${item.get("id")}`}
        component={Stepper}
        className="cart-product-form__stepper"
        maxValue={item && item.get("maxQuantity")}
        readOnly
        change={change}
        onButtonClick={onStepperButtonClick}
        quantity={quantity}
      />
      <div className="cart-product__wishlist">
        <span className="cart-product__wishlist__icon" />
      </div>
    </form>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    form: `cartQuantityForm${ownProps.formId ? `_${ownProps.formId}` : ""}`
  };
};

export default compose(
  connect(mapStateToProps),
  reduxForm({})
)(CartQuantityForm);
