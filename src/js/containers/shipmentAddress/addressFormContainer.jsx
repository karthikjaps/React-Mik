import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { fromJS } from "immutable";

import {
  setValidationMessages,
  resetValidationMessages,
  updateUserAddress,
  createUserAddress,
  submitShipmentAddress,
  sendPhoneValidate,
  verifyPhoneValidate
} from "./actions";
import { selectMessages, selectShipmentAddress } from "./reducer";
import withSubmit from "../app/withSubmit";
import ShipmentAddressForm from "../../components/shipment/shipmentAddressForm";
import { validateShipmentAddressForm } from "../../../../models/shipmentAddressForm";
import { selectProfile, selectIsLoggedIn } from "../profile/reducer";
import { selectConfigStore } from "../multiStore/reducer";
import {
  DEFAULT_ACTION,
  CREATE_ACTION,
  EDIT_ACTION,
  SEND_VERIFICATION_CODE,
  SUBMIT_VERIFICATION_CODE,
  RESEND_VERIFICATION_CODE,
  VERIFICATION_CODE_SENT,
  VERIFICATION_CODE_VERIFIED,
  NUMBER_ALREADY_VERFIED
} from "./constants";
import { GUEST_PROFILE_STORAGE_KEY } from "../../../../service/constants";
import { getUrl } from "../../../../server/helpers/routing";
import { validatePhoneVerificationForm } from "../../../../models/phoneValidationForm";

function getDefaultShipmentAddress(phoneCode, countryCode) {
  return fromJS({
    country: countryCode,
    phoneNumber: phoneCode
  });
}

class AddressFormContainer extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      action: props.match.params.addressAction || DEFAULT_ACTION,
      returnUrl: props.returnUrl,
      validator: validateShipmentAddressForm,
      queryStringParam: "User-Address",
      sendValidationFailureMessage: "",
      sendValidationStatus: undefined,
      verifyValidationFailureMessage: "",
      verifyValidationStatus: undefined
    };
    this.submit = this.props.submit.bind(this);
    this.handlePhoneVerification = this.handlePhoneVerification.bind(this);
  }

  componentWillUnmount() {
    this.props.onResetValidationMessages();
  }

  handlePhoneVerification(e) {
    const { onResetValidationMessages, onSetValidationMessages } = this.props;
    let data = null;

    if (e.toJS) {
      data = e.toJS();
    } else {
      data = e;
    }

    const completePhoneNumber = `${data.phoneNumber}`.replace(/\s/g, "");

    if (data.action == SEND_VERIFICATION_CODE) {
      this.setState({
        sendValidationFailureMessage: ""
      });
      validatePhoneVerificationForm(data).then((errors, values) => {
        if (!errors) {
          onResetValidationMessages();
          this.props
            .onSendPhoneValidate({ phoneNumber: completePhoneNumber })
            .then(response => {
              this.setState({ sendValidationStatus: response.status });
              if (
                response.status !== VERIFICATION_CODE_SENT &&
                response.status !== NUMBER_ALREADY_VERFIED
              ) {
                this.setState({
                  sendValidationFailureMessage: response.message
                });
              }
            })
            .catch(error => {
              this.setState({
                sendValidationFailureMessage: error.message
              });
            });
        } else {
          return onSetValidationMessages({ messages: errors });
        }
      });
    } else if (data.action == SUBMIT_VERIFICATION_CODE) {
      this.setState({
        verifyValidationFailureMessage: ""
      });
      this.props
        .onVerifyPhoneValidate({
          phoneNumber: completePhoneNumber,
          verificationCode: data.verificationCode
        })
        .then(response => {
          this.setState({ verifyValidationStatus: response.status });
          if (response.status !== VERIFICATION_CODE_VERIFIED) {
            this.setState({
              verifyValidationFailureMessage: response.message
            });
          }
        })
        .catch(error => {
          this.setState({
            verifyValidationFailureMessage: error.message
          });
        });
    } else if (data.action == RESEND_VERIFICATION_CODE) {
      this.setState({
        sendValidationFailureMessage: ""
      });
      this.props
        .onSendPhoneValidate({ phoneNumber: completePhoneNumber })
        .then(response => {
          this.setState({ sendValidationStatus: response.status });
          if (response.status !== VERIFICATION_CODE_SENT) {
            this.setState({
              sendValidationFailureMessage: response.message
            });
          }
        })
        .catch(error => {
          this.setState({
            sendValidationFailureMessage: error.message
          });
        });
    }
  }

  render() {
    const {
      match,
      history,
      onCreate,
      onUpdate,
      onSubmitAddress,
      shipmentAddresses,
      messages,
      profile,
      showCancelButton,
      isLoggedIn,
      onResetValidationMessages,
      onSetValidationMessages,
      configStore
    } = this.props;

    let currentAddress =
      shipmentAddresses &&
      shipmentAddresses.find(
        n => n.get("addressId") === match.params.addressId
      );

    if (!currentAddress && configStore) {
      currentAddress = getDefaultShipmentAddress(
        configStore.get("countryCallingCode"),
        configStore.get("countryCode")
      );
    }

    return (
      <ShipmentAddressForm
        initialValues={currentAddress}
        method="post"
        messages={messages}
        isLoggedIn={isLoggedIn}
        onSubmit={e => {
          if (this.state.action === CREATE_ACTION) {
            if (profile) {
              const data = { ...profile.toJS(), ...e.toJS() };

              return this.setState(
                {
                  submitHandler: onCreate
                },
                () => this.submit(data)
              );
            } else {
              const data = e.toJS();

              const email = JSON.parse(
                localStorage.getItem(GUEST_PROFILE_STORAGE_KEY)
              );

              // TODO: should be in adapter
              // toCreateAddressJson
              const address = {
                prefix: null,
                name: `${data.firstName} ${data.lastName}`,
                firstName: data.firstName,
                lastName: data.lastName,
                streetAddress: data.streetAddress,
                buildingNumber: data.buildingNumber,
                city: data.city,
                zip: "8966",
                country_code: data.country,
                email,
                phoneCode: data.phoneCode,
                phoneNumber: data.phoneNumber
              };

              return validateShipmentAddressForm(data).then(
                (errors, values) => {
                  if (!errors) {
                    onResetValidationMessages();
                    return onSubmitAddress({
                      email,
                      billingAddress: address,
                      shippingAddress: address,
                      loggedIn: isLoggedIn
                    }).then(() => history.push(getUrl("/checkout/payment")));
                  } else {
                    return onSetValidationMessages({ messages: errors });
                  }
                }
              );
            }
          } else if (this.state.action === EDIT_ACTION) {
            const data = {
              ...e.toJS(),
              addressId: match.params.addressId,
              loggedIn: isLoggedIn
            };
            return this.setState(
              {
                submitHandler: onUpdate
              },
              () => this.submit(data)
            );
          }
        }}
        handlePhoneVerification={this.handlePhoneVerification}
        handlePhoneChange={() =>
          this.setState({ sendValidationStatus: undefined })
        }
        sendValidationFailureMessage={this.state.sendValidationFailureMessage}
        sendValidationStatus={this.state.sendValidationStatus}
        verifyValidationFailureMessage={
          this.state.verifyValidationFailureMessage
        }
        verifyValidationStatus={this.state.verifyValidationStatus}
        returnUrl={this.state.returnUrl}
        onCancel={e => {
          e.preventDefault();
          history.push(getUrl(this.state.returnUrl));
        }}
        showCancelButton={showCancelButton}
      />
    );
  }
}

const mapStateToProps = createStructuredSelector({
  messages: selectMessages,
  shipmentAddresses: selectShipmentAddress,
  isLoggedIn: selectIsLoggedIn,
  profile: selectProfile,
  configStore: selectConfigStore
});

const mapDispatchToProps = dispatch => ({
  onCreate: data => dispatch(createUserAddress(data)),
  onUpdate: data => dispatch(updateUserAddress(data)),
  onSubmitAddress: data => dispatch(submitShipmentAddress(data)),
  onSetValidationMessages: data => dispatch(setValidationMessages(data)),
  onResetValidationMessages: data => dispatch(resetValidationMessages(data)),
  onSendPhoneValidate: data => dispatch(sendPhoneValidate(data)),
  onVerifyPhoneValidate: data => dispatch(verifyPhoneValidate(data))
});

export default withSubmit(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AddressFormContainer)
);
