import AppAbstract from "../app/abstract";
import HomePage from "../home/";
import Home from "../home/home";
import Page from "../page/";
import PageNotFound from "../pageNotFound/";
import Settings from "../settings/";
import CataloguePage from "../catalogue";
import PaymentPage from "../payment";
import Catalogue from "../catalogue/catalogue";
import CatalogueFilters from "../catalogueFilters";
import CatalogueSort from "../catalogueSort";
import ProductPage from "../product";
import Product from "../product/product";
import QuickProductPage from "../product/quickProductPage";
import QuickProduct from "../product/quickProduct";
import PromotionPage from "../promotion";
import Promotion from "../promotion/promotion";
import DeliveryPage from "../delivery";
import LoginPage from "../login";
import Logout from "../login/logout";
import RegisterPage from "../register";
import ForgotPassword from "../resetPassword/forgotPassword";
import ResetPassword from "../resetPassword/resetPassword";
import EmailSent from "../resetPassword/emailSent";
import PasswordUpdated from "../resetPassword/passwordUpdated";
import EditProfilePage from "../editProfile";
import OrderHistoryPage from "../orderHistory";
import WishlistPage from "../wishlist";
import CartPage from "../cart";
import ShipmentAddressPage from "../shipmentAddress";
import CheckoutDeliveryModal from "../shipmentAddress/checkoutDeliveryModal";
import ShipmentAddressModal from "../shipmentAddress/shipmentAddressModal";
import CheckoutPage from "../checkout";
import PaymentResponsePage from "../paymentResponse";
import StoreLocatorPage from "../storeLocator";
import NotifyMePage from "../notifyMe";

// TODO: the below code makes code-splitting difficult
/**
 * Returns a configuration object describing the server-side implementation for each route name.
 * Note that multiple routes may share the same `routeName`.
 * The component defined in `component` will be rendered by the server-side.
 * Methods enumerated in `fetchData` will be fetched on the server-side.
 * @param {string} routeName The name of the route for which the configuration is being fetched
 */
export const getRouteComponent = routeName => {
  switch (routeName) {
    case "AppAbstract":
      return {
        component: AppAbstract,
        fetchData: [AppAbstract.fetchData]
      };
    case "Home":
      return {
        component: HomePage,
        fetchData: [HomePage.fetchData, Home.fetchData]
      };
    case "Page":
      return {
        component: Page,
        fetchData: [Page.fetchData]
      };
    case "PageNotFound":
      return {
        component: PageNotFound,
        fetchData: [PageNotFound.fetchData]
      };
    case "Settings":
      return {
        component: Settings,
        fetchData: [Settings.fetchData]
      };
    case "Catalogue":
      return {
        component: CataloguePage,
        fetchData: [
          CataloguePage.fetchData,
          Catalogue.fetchData,
          CatalogueFilters.fetchData
        ]
      };
    case "Product":
      return {
        component: ProductPage,
        fetchData: [ProductPage.fetchData, Product.fetchData]
      };
    case "QuickProduct":
      return {
        component: QuickProductPage,
        fetchData: [QuickProductPage.fetchData, QuickProduct.fetchData]
      };
    case "Promotion":
      return {
        component: PromotionPage,
        fetchData: [PromotionPage.fetchData, Promotion.fetchData]
      };
    case "Delivery":
      return {
        component: DeliveryPage,
        fetchData: [DeliveryPage.fetchData]
      };
    case "DeliveryAddress":
      return {
        component: CheckoutDeliveryModal,
        fetchData: []
      };
    case "ShipmentAddress":
      return {
        component: ShipmentAddressPage,
        fetchData: [ShipmentAddressPage.fetchData]
      };
    case "ShipmentAddressDetails":
      return {
        component: ShipmentAddressModal,
        fetchData: []
      };
    case "Payment":
      return {
        component: PaymentPage,
        fetchData: [PaymentPage.fetchData]
      };
    case "Login":
      return {
        component: LoginPage,
        fetchData: [LoginPage.fetchData]
      };
    case "Logout":
      return {
        component: Logout,
        fetchData: []
      };
    case "Register":
      return {
        component: RegisterPage,
        fetchData: [RegisterPage.fetchData]
      };
    case "ForgotPassword":
      return {
        component: ForgotPassword,
        fetchData: []
      };
    case "ResetPassword":
      return {
        component: ResetPassword,
        fetchData: []
      };
    case "EmailSent":
      return {
        component: EmailSent,
        fetchData: []
      };
    case "PasswordUpdated":
      return {
        component: PasswordUpdated,
        fetchData: []
      };
    case "EditProfile":
      return {
        component: EditProfilePage,
        fetchData: [EditProfilePage.fetchData]
      };
    case "OrderHistory":
      return {
        component: OrderHistoryPage,
        fetchData: [OrderHistoryPage.fetchData]
      };
    case "Wishlist":
      return {
        component: WishlistPage,
        fetchData: [WishlistPage.fetchData]
      };
    case "Cart":
      return {
        component: CartPage,
        fetchData: [CartPage.fetchData]
      };
    case "Checkout":
      return {
        component: CheckoutPage,
        fetchData: [CheckoutPage.fetchData]
      };
    case "PaymentResponse":
      return {
        component: PaymentResponsePage,
        fetchData: [PaymentResponsePage.fetchData]
      };
    case "StoreLocator":
      return {
        component: StoreLocatorPage,
        fetchData: [PaymentResponsePage.fetchData]
      };
    case "NotifyMe":
      return {
        component: NotifyMePage,
        fetchData: [NotifyMePage.fetchData]
      };
    default:
      return undefined;
  }
};
