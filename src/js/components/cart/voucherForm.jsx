import React from "react";
import { connect } from "react-redux";

import { Field, reduxForm, formValueSelector } from "redux-form/immutable";

import TextBox from "../form/textBox";

const VoucherForm = ({
  voucherUpdate,
  voucher,
  labelApply,
  labelPlaceholder
}) => {
  return (
    <form className="form">
      <Field
        name="voucher"
        component={TextBox}
        type="text"
        autoComplete="user-name"
        material={true}
        className="voucher"
        placeholder={labelPlaceholder}
        border={true}
        hasButtonInside={true}
        buttonValue={labelApply}
        handleButtonClick={() => {
          voucherUpdate(voucher);
        }}
      />
    </form>
  );
};

const selector = formValueSelector("VoucherForm");

export default connect(state => ({
  voucher: selector(state, "voucher")
}))(
  reduxForm({
    form: "VoucherForm",
    destroyOnUnmount: false
  })(VoucherForm)
);
