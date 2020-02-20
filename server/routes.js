import Api from "../service/main";

/**
 * Returns the routing table which will be used by SSR.
 * The routing table is stored in the form of an array, where each item contains:
 *  - {string} url: The URL of the route
 *  - {string} title: The friendly name of the URL
 *  - {string} name: The name of the component to render (case-sensitive)
 *  - {boolean} exact: A boolean dictating whether the URL is an exact match
 */
export const getRoutes = async data => {
  // retrieve the navigation from the shared Umbraco SDK
  const { pages } = await Api.router.getRoutingTable(data);

  // iterate route data to create Route components
  return pages.reduce((array, item) => {
    switch (item.value.toLowerCase()) {
      case "home":
        array.push({
          url: item.url,
          title: item.name,
          name: "Home",
          exact: true,
          isPublic: true,
          id: parseInt(item.id)
        });
        break;
      case "page":
        array.push({
          url: item.url,
          title: item.name,
          name: "Page",
          exact: true,
          isPublic: true,
          showBreadcrumbs: true,
          id: parseInt(item.id)
        });
        break;
      case "settings":
        array.push({
          url: item.url,
          title: item.name,
          name: "Settings",
          exact: true,
          isPublic: true,
          id: parseInt(item.id)
        });
        break;
      case "catalogue":
        array.push({
          url: item.url,
          title: item.name,
          name: "Catalogue",
          exact: true,
          isPublic: true,
          id: parseInt(item.id)
        });
        break;
      case "category":
        array.push({
          url: item.url,
          title: item.name,
          name: "Catalogue",
          exact: true,
          isPublic: true,
          showBreadcrumbs: true,
          id: parseInt(item.id)
        });
        break;
      case "product":
        array.push({
          url: item.url,
          title: item.name,
          name: "Product",
          exact: true,
          isPublic: true,
          showBreadcrumbs: true,
          id: parseInt(item.id)
        });
        break;
      case "quickproduct":
        array.push({
          url: item.url,
          title: item.name,
          name: "QuickProduct",
          exact: true,
          modal: true,
          isPublic: true,
          showBreadcrumbs: false,
          id: parseInt(item.id)
        });
        break;
      case "promotion":
        array.push({
          url: item.url,
          title: item.name,
          name: "Promotion",
          exact: true,
          isPublic: true,
          showBreadcrumbs: false,
          id: parseInt(item.id)
        });
        break;
      case "storelocator":
        array.push({
          url: item.url,
          title: item.name,
          name: "StoreLocator",
          exact: true,
          modal: false,
          isPublic: true,
          showBreadcrumbs: true,
          id: parseInt(item.id)
        });
        break;
      case "login":
        array.push({
          url: item.url,
          title: item.name,
          name: "Login",
          exact: true,
          modal: true,
          isPublic: true,
          id: parseInt(item.id)
        });
        break;
      case "logout":
        array.push({
          url: item.url,
          title: item.name,
          name: "Logout",
          exact: true,
          isPublic: false,
          id: parseInt(item.id)
        });
        break;
      case "register":
        array.push({
          url: item.url,
          title: item.name,
          name: "Register",
          exact: true,
          modal: true,
          isPublic: true,
          id: parseInt(item.id)
        });
        break;
      case "forgotpassword":
        array.push({
          url: item.url,
          title: item.name,
          name: "ForgotPassword",
          exact: true,
          modal: true,
          isPublic: true,
          id: parseInt(item.id)
        });
        break;
      case "resetpassword":
        array.push({
          url: item.url,
          title: item.name,
          name: "ResetPassword",
          exact: true,
          modal: true,
          isPublic: true,
          id: parseInt(item.id)
        });
        break;
      case "passwordupdated":
        array.push({
          url: item.url,
          title: item.name,
          name: "PasswordUpdated",
          exact: true,
          modal: true,
          isPublic: true,
          id: parseInt(item.id)
        });
        break;
      case "emailsent":
        array.push({
          url: item.url,
          title: item.name,
          name: "EmailSent",
          exact: true,
          modal: true,
          isPublic: true,
          id: parseInt(item.id)
        });
        break;
      case "editprofile":
        array.push({
          url: item.url,
          title: item.name,
          name: "EditProfile",
          exact: true,
          modal: false,
          isPublic: false,
          showBreadcrumbs: true,
          id: parseInt(item.id)
        });
        break;
      case "orderhistory":
        array.push({
          url: item.url,
          title: item.name,
          name: "OrderHistory",
          exact: true,
          modal: false,
          isPublic: false,
          showBreadcrumbs: true,
          id: parseInt(item.id)
        });
        break;
      case "wishlist":
        array.push({
          url: item.url,
          title: item.name,
          name: "Wishlist",
          exact: true,
          modal: false,
          isPublic: false,
          showBreadcrumbs: true,
          id: parseInt(item.id)
        });
        break;
      case "cart":
        array.push({
          url: item.url,
          title: item.name,
          name: "Cart",
          exact: true,
          modal: true,
          isPublic: true,
          id: parseInt(item.id)
        });
        break;
      case "payment":
        array.push({
          url: item.url,
          title: item.name,
          name: "Payment",
          exact: true,
          isPublic: false,
          id: parseInt(item.id)
        });
      case "checkout":
        array.push({
          url: item.url,
          title: item.name,
          name: "Checkout",
          exact: true,
          modal: false,
          isPublic: false,
          id: parseInt(item.id)
        });
        break;
      case "paymentresponse":
        array.push({
          url: item.url,
          title: item.name,
          name: "PaymentResponse",
          exact: true,
          isPublic: true,
          showBreadcrumbs: false,
          id: parseInt(item.id)
        });
        break;
      case "delivery":
        array.push({
          url: item.url,
          title: item.name,
          name: "Delivery",
          exact: true,
          modal: false,
          isPublic: false,
          id: parseInt(item.id)
        });
        break;
      case "deliveryaddress":
        array.push({
          url: item.url,
          title: item.name,
          name: "DeliveryAddress",
          exact: true,
          modal: true,
          isPublic: false,
          id: parseInt(item.id)
        });
        break;
      case "shipmentaddress":
        array.push({
          url: item.url,
          title: item.name,
          name: "ShipmentAddress",
          exact: true,
          modal: false,
          isPublic: false,
          id: parseInt(item.id)
        });
        break;
      case "shipmentaddressdetails":
        array.push({
          url: item.url,
          title: item.name,
          name: "ShipmentAddressDetails",
          exact: true,
          modal: true,
          isPublic: false,
          id: parseInt(item.id)
        });
        break;
      case "notifyme":
        array.push({
          url: item.url,
          title: item.name,
          name: "NotifyMe",
          exact: true,
          modal: true,
          isPublic: true,
          showBreadcrumbs: false,
          id: parseInt(item.id)
        });
        break;
    }
    return array;
  }, []);
};
