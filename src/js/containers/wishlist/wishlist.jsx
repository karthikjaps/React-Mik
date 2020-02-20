import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import moment from "moment";

import { selectIsLoggedIn } from "../profile/reducer";
import {
  getWishlistProducts,
  addWishlistProductToCart,
  removeProductFromWishlist
} from "./actions";
import {
  selectWishlistProducts,
  selectIsLoading,
  selectDataTimestamp,
  selectIsWishlistLoaded
} from "./reducer";
import { selectCurrencyCode } from "../catalogueSort/reducer";
import { addProductToCart } from "../cart/actions";
import { DATA_TTL } from "./constants";
import WishlistItem from "../../components/wishlist/wishlistItem";
import WishlistEmpty from "../../components/wishlist/wishlistEmpty";
import { ADD_TO_CART_QUERY_STRING } from "../catalogue/constants";

class Wishlist extends React.PureComponent {
  componentDidMount() {
    const {
      onLoadWishlist,
      wishlistProducts,
      isLoggedIn,
      dataTimestamp
    } = this.props;

    if (isLoggedIn) {
      if (
        !(wishlistProducts && wishlistProducts.size) ||
        moment(dataTimestamp).add(DATA_TTL, "milliseconds") < moment()
      )
        onLoadWishlist();
    }
  }

  componentDidUpdate(prevProps) {
    const { isLoggedIn, wishlistProducts, onLoadWishlist } = this.props;
    if (
      prevProps.wishlistProducts.size !== wishlistProducts.size ||
      prevProps.isLoggedIn !== isLoggedIn
    ) {
      if (!(wishlistProducts && wishlistProducts.size) && isLoggedIn) {
        onLoadWishlist();
      }
    }
  }

  render() {
    const {
      history,
      wishlistProducts,
      isLoading,
      onAddWishlistProductToCart,
      onAddProductToCart,
      onRemoveProductFromWishlist,
      isWishlistLoaded,
      currencyCode
    } = this.props;

    return (
      <section
        className={`cart-section ${
          wishlistProducts.size ? "" : "cart-section--no-results"
        }`}
      >
        <div className="cart-section__content">
          {isLoading ? (
            <div className="cart-section__details cart-section__details--loading" />
          ) : (
            <div className="cart-section__details">
              {!wishlistProducts.size && isWishlistLoaded && <WishlistEmpty />}
              <div className="cart-product-section">
                <div className="cart-product-list">
                  {wishlistProducts &&
                    wishlistProducts.size > 0 &&
                    wishlistProducts.map((item, index) => (
                      <div className="cart-product-list__item" key={index}>
                        <WishlistItem
                          data={item}
                          currencyCode={currencyCode}
                          onAddToCart={() => {
                            onAddWishlistProductToCart({
                              wishlistItemId: item.get("wishlistItemId")
                            })
                              .then(() => {
                                onAddProductToCart({
                                  productId: item.get("id"),
                                  quantity: "1"
                                });
                              })
                              .then(() => {
                                history.push({
                                  search: ADD_TO_CART_QUERY_STRING
                                });
                              })
                              .catch(error => console.error(error));
                          }}
                          onRemoveItem={() => {
                            onRemoveProductFromWishlist({
                              wishlistItemId: item.get("wishlistItemId"),
                              productId: item.get("id")
                            });
                          }}
                        />
                      </div>
                    ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    );
  }

  static fetchData(store) {
    return store.dispatch(getWishlistProducts());
  }
}

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsLoading,
  dataTimestamp: selectDataTimestamp,
  isLoggedIn: selectIsLoggedIn,
  wishlistProducts: selectWishlistProducts,
  isWishlistLoaded: selectIsWishlistLoaded,
  currencyCode: selectCurrencyCode
});

const mapDispatchToProps = dispatch => ({
  onLoadWishlist: data => dispatch(getWishlistProducts(data)),
  onAddWishlistProductToCart: data => dispatch(addWishlistProductToCart(data)),
  onAddProductToCart: data => dispatch(addProductToCart(data)),
  onRemoveProductFromWishlist: data => dispatch(removeProductFromWishlist(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Wishlist);
