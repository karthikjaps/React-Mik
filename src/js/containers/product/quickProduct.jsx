import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import moment from "moment";

import {
  getProduct,
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
import QuickProductSection from "../../components/product/quickProductSection";
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
import Card from "../../components/card/card";
import { ADD_TO_CART_QUERY_STRING } from "../catalogue/constants";

class QuickProduct extends React.PureComponent {
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
      item,
      dataTimestamp,
      isLoggedIn,
      wishlistItems,
      onSetWishlistItems,
      onGetWishlistProducts,
      params
    } = this.props;

    const productIdParam = parseInt(params.productId);

    if (
      productId !== productIdParam ||
      moment(dataTimestamp).add(DATA_TTL, "milliseconds") < moment()
    ) {
      onGetProduct({
        storeId: localStorage.getItem("STORE_ID") || STORE_ID,
        productId: productIdParam
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
    const { item, isLoading, currencyCode, history, returnUrl } = this.props;

    return (
      <Card className="quick-product-card" closeUrl={returnUrl}>
        <QuickProductSection
          item={item}
          isLoading={isLoading}
          onAddToCart={this.handleOnAddToCart}
          currencyCode={currencyCode}
        />
      </Card>
    );
  }

  static fetchData(store, { url, params }, { storeId }) {
    return store.dispatch(
      getProduct({
        productId: parseInt(params.productId),
        storeId
      })
    );
  }
}

const mapStateToProps = createStructuredSelector({
  item: selectItem,
  productId: selectProductId,
  isLoading: selectIsLoading,
  dataTimestamp: selectDataTimestamp,
  isLoggedIn: selectIsLoggedIn,
  wishlistItems: selectWishlistItems,
  currencyCode: selectCurrencyCode
});

const mapDispatchToProps = dispatch => ({
  onGetProduct: data => dispatch(getProduct(data)),
  onAddProductToCart: data => dispatch(addProductToCart(data)),
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
)(QuickProduct);
