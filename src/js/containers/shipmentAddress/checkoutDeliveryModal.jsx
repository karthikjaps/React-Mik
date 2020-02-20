import React from "react";
import { Link } from "react-router-dom";
import Modal from "../../components/modal/modal";
import Card from "../../components/card/card";
import AddressFormContainer from "./addressFormContainer";
import withTranslations from "../translations/withTranslations";
import { getUrl } from "../../../../server/helpers/routing";

const RETURN_URL = "/checkout/delivery/";

const CheckoutDeliveryModal = ({ match, history, translations }) => {
  return (
    <Modal onClick={() => history.push(getUrl(RETURN_URL))}>
      <Card closeUrl={getUrl(RETURN_URL)}>
        <div className="card__pre-header">
          <Link to={getUrl("/shop")} className="card__pre-header__link">
            {translations.get("shipmentAddress_backToShopping")}
          </Link>
        </div>
        <div className="shipment-address-form__title">
          {translations.get("shipmentAddress_address")}
        </div>
        <AddressFormContainer
          match={match}
          history={history}
          returnUrl={RETURN_URL}
          showCancelButton
        />
      </Card>
    </Modal>
  );
};

export default withTranslations(CheckoutDeliveryModal, [
  "shipmentAddress_address",
  "shipmentAddress_backToShopping"
]);
