import React from "react";
import withTranslations from "../../containers/translations/withTranslations";

const VoucherRefused = ({ voucherCode, translations, voucherRemove }) => {
  return (
    <div className="voucher-container">
      <div className="form-field form-field--voucher form-field--material">
        <div className="voucher-container-refused">
          <div className="voucher__label--refused">{voucherCode}</div>
          <div className="voucher__refused">
            <img
              src="/img/icons/error_close.svg"
              className="voucher__refused__icon--close"
              onClick={() => voucherRemove("")}
            />
          </div>
        </div>
        <div className="voucher-refused--desc">
          <img
            src="/img/icons/error.svg"
            className="voucher-refused__icon--error"
          />
          <span>{translations.get("voucherRefused_incorrect")}</span>
        </div>
      </div>
    </div>
  );
};

export default withTranslations(VoucherRefused, [
  "voucherRefused_refused",
  "voucherRefused_incorrect"
]);
