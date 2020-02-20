import AuthenticatedApiService from "../authenticatedApiService";

export default class LanguageMockService extends AuthenticatedApiService {
  constructor() {
    super();
    this.data = [
      {
        breadcrumbs_label: "Home",
        cart_toast_label: "OK",
        catalogueSort_sort: "Sort",
        catalogueSort_sortby: "Sort by",
        cities_label: "City *",
        errorPage_title: "Unexpected Error",
        errorPage_message:
          "Unfortunately the website encountered an error. Please try again later.",
        errorPage_webSiteName: "Mikyaji",
        footer_label:
          "Follow us and we’ll keep you in the loop for latest products, special offers, exclusive news and more!",
        paymentResponse_orderNumber: "Order Number",
        paymentResponse_orderDate: "Order Date",
        paymentResponse_deliveryDate: "Delivery Date",
        paymentResponse_total: "Total",
        paymentResponse_paymentMethod: "Payment Method",
        paymentResponse_continueShopping: "Continue Shopping",
        paymentResponse_finish: "Finish",
        settings_label: "Add To Homescreen",
        shipmentAddress_address: "Shipment address",
        shipmentAddress_backToShopping: "Back To Shopping",
        cart_noresults_title: "Your shopping bag is empty",
        cart_noresults_subheading: "Why not start from our makeup section",
        cart_noresults_shopAll: "Shop All",
        voucherApplied_label: "APPLIED",
        cartTotals_orderSummary: "Order Summary",
        cartTotals_subTotal: "Subtotal",
        cartTotals_promotion: "Promotion",
        cartTotals_discount: "Discount",
        cartTotals_taxes: "Taxes",
        cartTotals_total: "Total",
        cartTotals_proceed: "Proceed to Payment",
        cartTotals_logIn: "Log in to checkout",
        voucherRefused_refused: "COUPON INCORRECT",
        voucherRefused_incorrect: "Code entered is unknown. Try another one.",
        catalogueSection_label: "Your search returns no result.",
        catalogueItem_label: "Out of Stock",
        catalogueFilters_reset: "Reset All",
        catalogueFilters_apply: "Apply Filter",
        catalogueFilters_price: "Price Range Selected",
        catalogueFilters_filter: "Filter",
        credits_head: "© 2019 Mikyajy",
        credits_privacy: "Privacy Policy",
        credits_terms: "Terms & Conditions",
        login_back: "Back To Shopping",
        login_guest: "Guest Checkout",
        login_signIn: "Sign in to your account",
        login_signInEmail: "Sign in with your email",
        login_forgot: "Forgot password",
        login_account: "Don't have a Mikyajy account?",
        login_SignUp: "Sign me up",
        login_signInSocial: "Sign in with your social account",
        desktopMenu_submenu: "Shop Now &rsaquo;",
        desktopMenu_country: "country",
        nav_toggle: "Toggle Menu",
        nav_signIn: "Sign in to your account",
        payment_newBilling: "Add new billing address",
        payment_title: "Payment",
        payment_agree: "I agree to the&nbsp;",
        payment_terms: "Terms & Conditions",
        product_wishlist: "Wishlist",
        product_addedToBag: "Added to Bag",
        register_back: "Back To Shopping",
        register_or: "OR",
        register_signUp: "Sign up using your email address",
        register_agree:
          "By clicking REGISTER, you are agreeing to the Mikyajy&nbsp;",
        register_terms: "Terms & conditions",
        register_privacy: "Privacy policy",
        register_alreadyAccount: "Already have an account?",
        register_signIn: "Sign in",
        register_social: "Sign up with your social account",
        resetPassword_request: "REQUEST TO RESET PASSWORD RECEIVED",
        resetPassword_signUp: "Sign up with your social account",
        resetPassword_thanks:
          " Thank you! We have sent you an email with instructions to reset your password. Might take a couple of minutes and don't forget to check your junk mail to ensure you received it.",
        resetPassword_loginAgain: "Login again",
        resetPassword_back: "Back to Homepage",
        resetPassword_passwordUpdated: "Password Updated",
        resetPassword_passwordUpdatedDesc:
          "Your password has been successfully updated. You can login with the new password now.",
        resetPassword_setPassword: "Set your password",
        resetPassword_newPassword: " Please enter a new password.",
        resetPassword_forgotYourPassword: "Forgot your password?",
        resetPassword_notToWorry:
          "Not to worry! We'll send you a link to reset your password. Enter your account email address below.",
        resetPassword_or: "Or",
        resetPassword_backLogin: "Back to login",
        shipment_address: "Shipment address",
        shipment_newAddress: "+ New address",
        shipment_defaultAddress: "This is your default delivery address",
        shipment_billingAddress: "This is your default billing address",
        shipment_editAddress: "Edit address"
      }
    ];
  }

  getLangKeys(code) {
    return Promise.resolve({
      status: "SUCCESS",
      data: this.data
    });
  }
}
