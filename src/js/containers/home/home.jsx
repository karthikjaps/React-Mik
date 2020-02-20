import React, { Fragment } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import moment from "moment";

import {
  getHome,
  setWishlistItems,
  setWishlistItem,
  resetWishlistItem,
  resetWishlist
} from "./actions";
import {
  selectMainBanners,
  selectTwoColumnBanners,
  selectThreeColumnBanners,
  selectMainBannersMobile,
  selectProducts,
  selectSubheaderBanners,
  selectDataTimestamp,
  selectWishlistItems
} from "./reducer";
import { selectCurrencyCode } from "../catalogueSort/reducer";
import { DATA_TTL } from "./constants";
import BannerSlide from "../../components/banners/bannerSlide";
import ThreeColumnBanners from "../../components/home/three-column-banners";
import TwoColumnBanners from "../../components/home/two-column-banners";
import CatalogueCarousel from "../../components/catalogue/catalogueCarousel";
import { STORE_ID } from "../../../../service/catalogueConfig/constants";
import StripeBanner from "../../components/banners/stripeBanner";
import { selectIsLoggedIn } from "../profile/reducer";
import {
  addProductToWishlist,
  removeProductFromWishlist,
  getWishlistProducts
} from "../wishlist/actions";
import { getUrl } from "../../../../server/helpers/routing";

class Home extends React.PureComponent {
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

    this.onHandleAddToWishlist = this.onHandleAddToWishlist.bind(this);
    this.onHandleRemoveFromWishlist = this.onHandleRemoveFromWishlist.bind(
      this
    );
  }

  componentDidMount() {
    const {
      onGetHome,
      dataTimestamp,
      isLoggedIn,
      onGetWishlistProducts,
      onSetWishlistItems,
      wishlistItems
    } = this.props;

    if (moment(dataTimestamp).add(DATA_TTL, "milliseconds") < moment()) {
      onGetHome({ storeId: localStorage.getItem("STORE_ID") || STORE_ID });
    }

    if (isLoggedIn) {
      if (!(wishlistItems && wishlistItems.size)) {
        onGetWishlistProducts();
      } else {
        onSetWishlistItems();
      }
    }
  }

  componentDidUpdate(prevProps) {
    const {
      wishlistItems,
      onSetWishlistItems,
      isLoggedIn,
      onGetWishlistProducts
    } = this.props;
    if (isLoggedIn) {
      if (
        prevProps.wishlistItems.size !== wishlistItems.size ||
        prevProps.isLoggedIn !== isLoggedIn
      ) {
        if (!(wishlistItems && wishlistItems.size)) {
          onGetWishlistProducts().then(() => {
            onSetWishlistItems();
          });
        } else {
          onSetWishlistItems();
        }
      }
    }
  }

  componentWillUnmount() {
    this.props.onResetWishlist();
  }

  onHandleAddToWishlist(event, { id }) {
    event.preventDefault();
    const {
      isLoggedIn,
      onAddProductToWishlist,
      onSetWishlistItem,
      history
    } = this.props;

    if (!isLoggedIn) {
      history.push(getUrl("/login"));
    } else {
      onAddProductToWishlist(id);
      onSetWishlistItem(id);
    }
  }

  onHandleRemoveFromWishlist(event, { id }) {
    event.preventDefault();

    const {
      isLoggedIn,
      onRemoveProductFromWishlist,
      onResetWishlistItem,
      wishlistItems,
      onGetWishlistProducts,
      history
    } = this.props;

    if (!isLoggedIn) {
      history.push(getUrl("/login"));
    } else {
      onGetWishlistProducts().then(() => {
        let wishlistItem;
        wishlistItem = wishlistItems.find(
          n => parseInt(n.get("id")) === parseInt(id)
        );
        wishlistItem &&
          onRemoveProductFromWishlist({
            wishlistItemId: wishlistItem.get("wishlistItemId")
          });
      });
      onResetWishlistItem(id);
    }
  }

  render() {
    const {
      mainBanners,
      mainBannersMobile,
      subheaderBanners,
      twoColumnBanners,
      threeColumnBanners,
      products,
      currencyCode
    } = this.props;
    const { showStripeBanner } = this.state;
    return (
      <Fragment>
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
        <div key="home-content" className="home-content">
          <ThreeColumnBanners
            key="three-column-banners"
            data={threeColumnBanners}
          />
          {products.map(i => {
            return (
              <section
                key={i.get("title")}
                className="home__catalogue home__catalogue--new-arrivals"
              >
                <div className="page__subtitle__wrapper">
                  <h2 className="page__subtitle">
                    <span className="page__subtitle__text">
                      {i.get("title")}
                    </span>
                  </h2>
                </div>
                <CatalogueCarousel
                  items={i.get("items")}
                  handleAddToWishlist={this.onHandleAddToWishlist}
                  handleRemoveFromWishlist={this.onHandleRemoveFromWishlist}
                  currencyCode={currencyCode}
                />
              </section>
            );
          })}
          <TwoColumnBanners key="two-column-banners" data={twoColumnBanners} />
        </div>
      </Fragment>
    );
  }

  static fetchData(store, {}, { storeId }) {
    return store.dispatch(getHome({ storeId }));
  }
}

const mapStateToProps = createStructuredSelector({
  mainBanners: selectMainBanners,
  mainBannersMobile: selectMainBannersMobile,
  subheaderBanners: selectSubheaderBanners,
  twoColumnBanners: selectTwoColumnBanners,
  threeColumnBanners: selectThreeColumnBanners,
  products: selectProducts,
  dataTimestamp: selectDataTimestamp,
  isLoggedIn: selectIsLoggedIn,
  wishlistItems: selectWishlistItems,
  currencyCode: selectCurrencyCode
});

const mapDispatchToProps = dispatch => ({
  onGetHome: data => dispatch(getHome(data)),
  onSetWishlistItems: data => dispatch(setWishlistItems(data)),
  onGetWishlistProducts: data => dispatch(getWishlistProducts(data)),
  onAddProductToWishlist: data => dispatch(addProductToWishlist(data)),
  onSetWishlistItem: data => dispatch(setWishlistItem(data)),
  onResetWishlist: () => dispatch(resetWishlist()),
  onRemoveProductFromWishlist: data =>
    dispatch(removeProductFromWishlist(data)),
  onResetWishlistItem: data => dispatch(resetWishlistItem(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
