export const getCMSPageSlug = routeName => {
  switch (routeName) {
    case "/page-not-found":
      return "404_page";
    case "/":
      return "home";
    case "/privacy-policy":
      return "privacy_policy";
    case "/terms-conditions":
      return "terms_condition";
    case "/about-us":
      return "about_us";
    case "/contact-us":
      return "contact_us";
    case "/delivery-policy":
      return "shipping_policy";
    case "/faq":
      return "faq";
    case "/payment-methods":
      return "payment_methods";
    case "/returns-exchange":
      return "shipping_return_policy";
    default:
      return undefined;
  }
};
