import React from "react";
import Modal from "../../components/modal/modal";
import Card from "../../components/card/card";
import AddressFormContainer from "./addressFormContainer";
import withTranslations from "../translations/withTranslations";
import { getUrl } from "../../../../server/helpers/routing";

const RETURN_URL = "/shipment-address/";

const ShipmentAddressModal = ({ match, history, translations }) => {
  return (
    <Modal onClick={() => history.push(getUrl(RETURN_URL))}>
      <Card closeUrl={getUrl(RETURN_URL)}>
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

export default withTranslations(ShipmentAddressModal, [
  "shipmentAddress_address"
]);
