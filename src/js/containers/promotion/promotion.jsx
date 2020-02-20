import React from "react";
import { connect } from "react-redux";
import { matchPath } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import moment from "moment";

import {
  getPromotion,
  resetPromotionTitle,
  setWishlistItems,
  setWishlistItem,
  resetWishlist,
  resetWishlistItem
} from "./actions";
import {
  selectItem,
  selectProductId,
  selectIsLoading,
  selectDataTimestamp,
  selectWishlistItems,
  selectMainBannersMobile,
  selectMainBanners,
  selectSubheaderBanners,
  selectSecondaryBanners
} from "./reducer";
import { DATA_TTL } from "./constants";
import { selectCurrencyCode } from "../catalogueSort/reducer";
import ProductSection from "../../components/product/productSection";
import { selectPromotionRoutesByUrl } from "../routes/reducer";
import { addProductToCart } from "../cart/actions";
import { STORE_ID } from "../../../../service/catalogueConfig/constants";
import { selectIsLoggedIn } from "../profile/reducer";
import {
  addProductToWishlist,
  removeProductFromWishlist,
  getWishlistProducts
} from "../wishlist/actions";
import { getUrl } from "../../../../server/helpers/routing";
import { ADD_TO_CART_QUERY_STRING } from "../catalogue/constants";
import BannerSlide from "../../components/banners/bannerSlide";
import StripeBanner from "../../components/banners/stripeBanner";

class Promotion extends React.PureComponent {
  constructor(props) {
    super(props);

    let isStripeBanner = true;

    const timeOut =
      typeof localStorage !== "undefined" &&
      localStorage.getItem("STRIP_BANNER_TIME");

    if (timeOut) {
      if (moment().diff(timeOut, "minutes") < 9) {
        isStripeBanner = false;
      }
    }

    this.state = {
      showStripeBanner: isStripeBanner
    };

    this.handleOnAddToCart = this.handleOnAddToCart.bind(this);
    this.handleAddToWishlist = this.handleAddToWishlist.bind(this);
    this.handleRemoveFromWishlist = this.handleRemoveFromWishlist.bind(this);
  }

  componentDidMount() {
    const {
      onGetPromotion,
      productId,
      promotionRoutes,
      url,
      item,
      dataTimestamp,
      isLoggedIn,
      wishlistItems,
      onSetWishlistItems,
      onGetWishlistPromotions
    } = this.props;

    const routePromotion = promotionRoutes.find(item => {
      return matchPath(url, {
        path: item.get("url"),
        exact: true
      });
    });
    const routeProductId = routePromotion ? routePromotion.get("id") : null;

    if (
      productId !== routeProductId ||
      moment(dataTimestamp).add(DATA_TTL, "milliseconds") < moment()
    ) {
      onGetPromotion({
        storeId: localStorage.getItem("STORE_ID") || STORE_ID,
        productId: routeProductId
      });
    }

    if (isLoggedIn) {
      if (!(wishlistItems && wishlistItems.size)) {
        onGetWishlistPromotions();
      } else {
        onSetWishlistItems();
      }
    }
  }

  componentDidUpdate(prevProps) {
    const {
      isLoggedIn,
      wishlistItems,
      onSetWishlistItems,
      onGetWishlistPromotions
    } = this.props;
    if (isLoggedIn) {
      if (
        prevProps.wishlistItems.size !== wishlistItems.size ||
        prevProps.isLoggedIn !== isLoggedIn
      ) {
        if (!(wishlistItems && wishlistItems.size)) {
          onGetWishlistPromotions().then(() => {
            onSetWishlistItems();
          });
        } else {
          onSetWishlistItems();
        }
      }
    }
  }

  componentWillUnmount() {
    this.props.onResetPromotionTitle();
    this.props.onResetWishlist();
  }

  handleOnAddToCart(data) {
    const { item } = this.props;
    const swatchOptions = item && item.get("swatchOptions");
    const option = swatchOptions
      ? swatchOptions.find(n => n.get("id") === data.swatchOptionId)
      : null;

    return this.props
      .onAddPromotionToCart({
        ...data,
        selectedOptions: option ? [option.toJS()] : []
      })
      .then(() => {
        this.props.history.push({
          search: ADD_TO_CART_QUERY_STRING
        });
      })
      .catch(error => console.error(error));
  }

  handleAddToWishlist(event, { id }) {
    event.preventDefault();

    const {
      isLoggedIn,
      onAddPromotionToWishlist,
      onSetWishlistItem,
      history
    } = this.props;

    if (!isLoggedIn) {
      history.push(getUrl("/login"));
    } else {
      onAddPromotionToWishlist(id);
      onSetWishlistItem(id);
    }
  }

  handleRemoveFromWishlist(event, { id }) {
    event.preventDefault();

    const {
      isLoggedIn,
      onRemovePromotionFromWishlist,
      onResetWishlistItem,
      wishlistItems,
      onGetWishlistPromotions,
      history
    } = this.props;

    if (!isLoggedIn) {
      history.push(getUrl("/login"));
    } else {
      onGetWishlistPromotions().then(() => {
        let wishlistItem;
        wishlistItem = wishlistItems.find(
          n => parseInt(n.get("id")) === parseInt(id)
        );
        wishlistItem &&
          onRemovePromotionFromWishlist({
            wishlistItemId: wishlistItem.get("wishlistItemId")
          });
      });
      onResetWishlistItem(id);
    }
  }

  render() {
    const {
      item,
      isLoading,
      currencyCode,
      mainBannersMobile,
      mainBanners,
      secondaryBanners,
      subheaderBanners
    } = this.props;
    const { showStripeBanner } = this.state;

    return (
      <>
        <BannerSlide
          key="main-banner-mobile"
          data={mainBannersMobile}
          className="main-banner main-banner--mobile"
        />
        <BannerSlide
          key="main-banner-desktop"
          data={mainBanners}
          className="main-banner main-banner--desktop"
        />
        {showStripeBanner && (
          <StripeBanner
            key="stripe-banner"
            data={subheaderBanners}
            className="strip-banner"
            handleClose={() => {
              localStorage.setItem("STRIP_BANNER_TIME", moment().format());
              this.setState({
                showStripeBanner: false
              });
            }}
          />
        )}
        <BannerSlide
          key="secondary-banner-desktop"
          data={secondaryBanners}
          className="main-banner secondary-banner"
        />
        <ProductSection
          item={item}
          isLoading={isLoading}
          onAddToCart={this.handleOnAddToCart}
          currencyCode={currencyCode}
          handleAddToWishlist={this.handleAddToWishlist}
          handleRemoveFromWishlist={this.handleRemoveFromWishlist}
          displayProductVideoBottom={false}
          displayProductMediaGallery={false}
        />
      </>
    );
  }

  static fetchData(store, { url }, { storeId }) {
    const promotionRoutes = selectPromotionRoutesByUrl(store.getState());
    const routePromotion = promotionRoutes.find(
      item =>
        !!matchPath(url, {
          path: item.get("url"),
          exact: true
        })
    );
    const routeProductId = routePromotion ? routePromotion.get("id") : null;

    return store.dispatch(
      getPromotion({
        productId: routeProductId,
        storeId
      })
    );
  }
}

const mapStateToProps = createStructuredSelector({
  mainBanners: selectMainBanners,
  mainBannersMobile: selectMainBannersMobile,
  secondaryBanners: selectSecondaryBanners,
  subheaderBanners: selectSubheaderBanners,
  item: selectItem,
  productId: selectProductId,
  isLoading: selectIsLoading,
  promotionRoutes: selectPromotionRoutesByUrl,
  dataTimestamp: selectDataTimestamp,
  isLoggedIn: selectIsLoggedIn,
  wishlistItems: selectWishlistItems,
  currencyCode: selectCurrencyCode
});

const mapDispatchToProps = dispatch => ({
  onGetPromotion: data => dispatch(getPromotion(data)),
  onAddPromotionToCart: data => dispatch(addProductToCart(data)),
  onResetPromotionTitle: () => dispatch(resetPromotionTitle()),
  onSetWishlistItems: data => dispatch(setWishlistItems(data)),
  onGetWishlistPromotions: data => dispatch(getWishlistProducts(data)),
  onAddPromotionToWishlist: data => dispatch(addProductToWishlist(data)),
  onSetWishlistItem: data => dispatch(setWishlistItem(data)),
  onResetWishlist: () => dispatch(resetWishlist()),
  onRemovePromotionFromWishlist: data =>
    dispatch(removeProductFromWishlist(data)),
  onResetWishlistItem: data => dispatch(resetWishlistItem(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Promotion);
