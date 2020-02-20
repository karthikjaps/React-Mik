import React from "react";
import { connect } from "react-redux";
import { matchPath } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import moment from "moment";

import {
  getProduct,
  resetProductTitle,
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
  selectWishlistItems
} from "./reducer";
import { DATA_TTL } from "./constants";
import { selectCurrencyCode } from "../catalogueSort/reducer";
import ProductSection from "../../components/product/productSection";
import { selectProductRoutesByUrl } from "../routes/reducer";
import { addProductToCart } from "../cart/actions";
import { STORE_ID } from "../../../../service/catalogueConfig/constants";
import { trackProductDetail } from "./analytics";
import { selectIsLoggedIn } from "../profile/reducer";
import {
  addProductToWishlist,
  removeProductFromWishlist,
  getWishlistProducts
} from "../wishlist/actions";
import { getUrl } from "../../../../server/helpers/routing";
import { ADD_TO_CART_QUERY_STRING } from "../catalogue/constants";

class Product extends React.PureComponent {
  constructor(props) {
    super(props);

    this.handleOnAddToCart = this.handleOnAddToCart.bind(this);
    this.handleAddToWishlist = this.handleAddToWishlist.bind(this);
    this.handleRemoveFromWishlist = this.handleRemoveFromWishlist.bind(this);
  }

  componentDidMount() {
    const {
      onGetProduct,
      productId,
      productRoutes,
      url,
      item,
      dataTimestamp,
      isLoggedIn,
      wishlistItems,
      onSetWishlistItems,
      onGetWishlistProducts
    } = this.props;

    const routeProduct = productRoutes.find(item => {
      return matchPath(url, {
        path: item.get("url"),
        exact: true
      });
    });
    const routeProductId = routeProduct ? routeProduct.get("id") : null;

    if (
      productId !== routeProductId ||
      moment(dataTimestamp).add(DATA_TTL, "milliseconds") < moment()
    ) {
      onGetProduct({
        storeId: localStorage.getItem("STORE_ID") || STORE_ID,
        productId: routeProductId
      });
    } else {
      trackProductDetail([item.toJS()]);
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
      isLoggedIn,
      wishlistItems,
      onSetWishlistItems,
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
    this.props.onResetProductTitle();
    this.props.onResetWishlist();
  }

  handleOnAddToCart(data) {
    const { item } = this.props;
    const swatchOptions = item && item.get("swatchOptions");
    const option = swatchOptions
      ? swatchOptions.find(n => n.get("id") === data.swatchOptionId)
      : null;

    return this.props
      .onAddProductToCart({
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

  handleRemoveFromWishlist(event, { id }) {
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
    const { item, isLoading, currencyCode } = this.props;

    return (
      <ProductSection
        item={item}
        isLoading={isLoading}
        onAddToCart={this.handleOnAddToCart}
        currencyCode={currencyCode}
        handleAddToWishlist={this.handleAddToWishlist}
        handleRemoveFromWishlist={this.handleRemoveFromWishlist}
        displayProductVideoBottom={true}
        displayProductMediaGallery={true}
      />
    );
  }

  static fetchData(store, { url }, { storeId }) {
    const productRoutes = selectProductRoutesByUrl(store.getState());
    const routeProduct = productRoutes.find(
      item =>
        !!matchPath(url, {
          path: item.get("url"),
          exact: true
        })
    );
    const routeProductId = routeProduct ? routeProduct.get("id") : null;

    return store.dispatch(
      getProduct({
        productId: routeProductId,
        storeId
      })
    );
  }
}

const mapStateToProps = createStructuredSelector({
  item: selectItem,
  productId: selectProductId,
  isLoading: selectIsLoading,
  productRoutes: selectProductRoutesByUrl,
  dataTimestamp: selectDataTimestamp,
  isLoggedIn: selectIsLoggedIn,
  wishlistItems: selectWishlistItems,
  currencyCode: selectCurrencyCode
});

const mapDispatchToProps = dispatch => ({
  onGetProduct: data => dispatch(getProduct(data)),
  onAddProductToCart: data => dispatch(addProductToCart(data)),
  onResetProductTitle: () => dispatch(resetProductTitle()),
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
)(Product);
