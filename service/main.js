/* This class is used to define which modules will be consumed from API
 */
import Router from "./router/";
import RouterService from "./router/service";
import Navigation from "./navigation/";
import NavigationService from "./navigation/service";
import Home from "./home/";
import HomeService from "./home/service";
import Pages from "./pages/";
import PagesService from "./pages/service";
import Authentication from "./authentication/";
import AuthenticationService from "./authentication/service";
import Header from "./header/";
import Session from "./session/";
import Catalogue from "./catalogue/";
import CatalogueService from "./catalogue/service";
import CatalogueConfig from "./catalogueConfig";
import CatalogueConfigService from "./catalogueConfig/service";
import QuickLinks from "./quickLinks/";
import QuickLinksService from "./quickLinks/service";
import Social from "./social/";
import SocialService from "./social/service";
import UserAddressService from "./userAddress/service";
import UserAddress from "./userAddress/";
import Payment from "./payment/";
import PaymentService from "./payment/service";
import Payfort from "./payfort/";
import PayfortService from "./payfort/service";
import Cart from "./cart/";
import CartService from "./cart/service";
import Cities from "./cities/";
import CitiesService from "./cities/service";
import LanguageKeys from "./language/";
import LanguageService from "./language/service";
import Groups from "./groups/";
import GroupsService from "./groups/service";
import Wishlist from "./wishlist";
import WishlistService from "./wishlist/service";
import OrderHistory from "./orderHistory";
import OrderHistoryService from "./orderHistory/service";
import StoreLocations from "./storeLocations";
import StoreLocationsService from "./storeLocations/service";
import Newsletter from "./newsletter";
import NewsletterService from "./newsletter/service";
import NotifyMe from "./newsletter";
import NotifyMeService from "./newsletter/service";
import Promotion from "./promotion";
import PromotionService from "./promotion/service";

/**
 * Singleton class defining all API service dependencies.
 * When initialising a new module, if no service is injected, it will connect to a mock service by default.
 */
class Main {
  constructor() {
    if (!Main.instance) {
      this.router = new Router({ service: new RouterService() });
      this.navigation = new Navigation({ service: new NavigationService() });
      this.header = new Header();
      this.home = new Home({ service: new HomeService() });
      this.pages = new Pages({ service: new PagesService() });
      this.authentication = new Authentication({
        service: new AuthenticationService()
      });
      this.quickLinks = new QuickLinks({ service: new QuickLinksService() });
      this.social = new Social({ service: new SocialService() });
      this.session = new Session();
      this.catalogue = new Catalogue({ service: new CatalogueService() });
      this.catalogueConfig = new CatalogueConfig({
        service: new CatalogueConfigService()
      });
      this.userAddress = new UserAddress({
        service: new UserAddressService()
      });
      this.payment = new Payment({ service: new PaymentService() });
      this.payfort = new Payfort({ service: new PayfortService() });
      this.cart = new Cart({ service: new CartService() });
      this.cities = new Cities({ service: new CitiesService() });
      this.language = new LanguageKeys({ service: new LanguageService() });
      this.groups = new Groups({ service: new GroupsService() });
      this.wishlist = new Wishlist({ service: new WishlistService() });
      this.orderHistory = new OrderHistory({
        service: new OrderHistoryService()
      });
      this.storeLocations = new StoreLocations({
        service: new StoreLocationsService()
      });
      this.newsletter = new Newsletter({
        service: new NewsletterService()
      });
      this.notifyMe = new NotifyMe({
        service: new NotifyMeService()
      });
      this.promotion = new Promotion({
        service: new PromotionService()
      });

      Main.instance = this;
    }
    return Main.instance;
  }
}

const instance = new Main();
Object.freeze(instance);
export default instance;
