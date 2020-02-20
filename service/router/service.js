import AuthenticatedApiService from "../authenticatedApiService";

export default class RouterService extends AuthenticatedApiService {
  constructor() {
    super();

    this.defaultRoutes = {
      root: "en",
      urlsAndDocTypes: [
        {
          url: "/",
          value: "home"
        },
        {
          url: "/settings",
          value: "settings"
        },
        {
          url: "/privacy-policy",
          value: "page"
        },
        {
          url: "/terms-conditions",
          value: "page"
        },
        {
          url: "/payment-methods",
          value: "page"
        },
        {
          url: "/about-us",
          value: "page"
        },
        {
          url: "/contact-us",
          value: "page"
        },
        {
          url: "/delivery-policy",
          value: "page"
        },
        {
          url: "/faq",
          value: "page"
        },
        {
          url: "/returns-exchange",
          value: "page"
        },
        {
          url: "/privacy-policy-ar",
          value: "page"
        },
        {
          url: "/terms-conditions-ar",
          value: "page"
        },
        {
          url: "/payment-methods-ar",
          value: "page"
        },
        {
          url: "/about-us-ar",
          value: "page"
        },
        {
          url: "/contact-us-ar",
          value: "page"
        },
        {
          url: "/delivery-policy-ar",
          value: "page"
        },
        {
          url: "/faq-ar",
          value: "page"
        },
        {
          url: "/returns-exchange-ar",
          value: "page"
        },
        {
          url: "/shop",
          value: "catalogue"
        },
        {
          url: "/checkout/delivery",
          value: "delivery"
        },
        {
          url: "/checkout/delivery/:addressId/:addressAction",
          value: "deliveryAddress"
        },
        {
          url: "/checkout/payment",
          value: "payment"
        },
        {
          url: "/checkout/payment-successful",
          value: "paymentresponse"
        },
        {
          url: "/checkout/payment-failed",
          value: "paymentresponse"
        },
        {
          url: "/login",
          value: "login"
        },
        {
          url: "/logout",
          value: "logout"
        },
        {
          url: "/register",
          value: "register"
        },
        {
          url: "/shipment-address",
          value: "shipmentAddress"
        },
        {
          url: "/shipment-address/:addressId/:addressAction",
          value: "shipmentAddressDetails"
        },
        {
          url: "/forgot-password",
          value: "forgotPassword"
        },
        {
          url: "/reset-password",
          value: "resetPassword"
        },
        {
          url: "/password-updated",
          value: "passwordUpdated"
        },
        {
          url: "/email-sent",
          value: "emailSent"
        },
        {
          url: "/edit-profile",
          value: "editProfile"
        },
        {
          url: "/order-history",
          value: "orderHistory"
        },
        {
          url: "/wishlist",
          value: "wishlist"
        },
        {
          url: "/cart",
          value: "cart"
        },
        {
          url: "/checkout",
          value: "checkout"
        },
        {
          url: "/store-locator",
          value: "storeLocator"
        },
        {
          url: "/shop/product/:productId",
          value: "quickProduct"
        },
        {
          url: "/shop/notify-me",
          value: "notifyMe"
        }
      ]
    };
  }

  getServiceUrl() {
    return `${super.getServiceUrl()}/connector/catalog/get_routes`;
  }

  getDefaultRoutes() {
    return Promise.resolve({
      status: "SUCCESS",
      message: ["SUCCESS"],
      data: this.defaultRoutes
    });
  }

  getRoutesFromApi(data) {
    return super.post({
      url: `${this.getServiceUrl()}`,
      data
    });
  }
}
