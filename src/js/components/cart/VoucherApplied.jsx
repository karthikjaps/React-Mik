import React from "react";
import withTranslations from "../../containers/translations/withTranslations";

const VoucherApplied = ({ voucherCode, translations, voucherRemove }) => {
  return (
    <div className="voucher-container">
      <div className="form-field form-field--voucher form-field--material">
        <div className="voucher-code__container">
          <div className="voucher__label">{voucherCode}</div>
          <div className="voucher__applied">
            <img
              src="/img/icons/coupon_success.svg"
              className="voucher__applied__img"
            />
            <span className="voucher__applied__image-text">
              {translations.get("voucherApplied_label")}
            </span>
          </div>
        </div>
      </div>

      <div
        role="button"
        className="voucher-remove"
        onClick={() => voucherRemove(voucherCode)}
      >
        {translations.get("voucher_remove")}
      </div>
    </div>
  );
};

export default withTranslations(VoucherApplied, [
  "voucherApplied_label",
  "voucher_remove"
]);
