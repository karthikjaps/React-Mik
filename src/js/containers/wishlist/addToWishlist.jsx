import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import { getUrl } from "../../../../server/helpers/routing";
import { selectIsLoggedIn } from "../profile/reducer";
import {
  addProductToWishlist,
  getWishlistProducts,
  removeProductFromWishlist
} from "./actions";
import { selectWishlistProducts, selectIsLoading } from "./reducer";

class AddToWishlist extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isSelected: false
    };

    this.onHandleAddRemoveToggle = this.onHandleAddRemoveToggle.bind(this);
  }

  componentDidMount() {
    const {
      onGetWishlistProducts,
      item,
      isLoggedIn,
      wishlistProducts
    } = this.props;

    if (isLoggedIn) {
      if (!(wishlistProducts && wishlistProducts.size)) {
        onGetWishlistProducts().then(() => {
          if (wishlistProducts && item) {
            this.onSetSelectedProduct(item, wishlistProducts);
          }
        });
      } else {
        this.onSetSelectedProduct(item, wishlistProducts);
      }
    }
  }

  componentDidUpdate(prevProps) {
    const {
      item,
      isLoggedIn,
      wishlistProducts,
      onGetWishlistProducts
    } = this.props;

    if (isLoggedIn) {
      if (
        prevProps.wishlistProducts.size !== wishlistProducts.size ||
        prevProps.isLoggedIn !== isLoggedIn
      ) {
        if (!(wishlistProducts && wishlistProducts.size)) {
          onGetWishlistProducts().then(() => {
            if (wishlistProducts && item) {
              this.onSetSelectedProduct(item, wishlistProducts);
            }
          });
        } else {
          this.onSetSelectedProduct(item, wishlistProducts);
        }
      }
    }
  }

  onSetSelectedProduct(item, wishlistItems) {
    const wishlistProducts = wishlistItems.toJS();
    for (let i = 0; i < wishlistProducts.length; i++) {
      if (parseInt(wishlistProducts[i].id) === parseInt(item.get("id"))) {
        return this.setState({ isSelected: true });
      }
    }
  }

  onHandleAddRemoveToggle(event) {
    const {
      isLoggedIn,
      history,
      item,
      wishlistProducts,
      onGetWishlistProducts,
      onAddProductToWishlist,
      onRemoveProductFromWishlist
    } = this.props;

    if (!isLoggedIn) {
      history.push({
        pathname: getUrl("/login"),
        state: { returnUrl: item.get("url") }
      });
    } else {
      if (!this.state.isSelected) {
        onAddProductToWishlist(item.get("id"));
        this.setState({ isSelected: true });
      } else {
        onGetWishlistProducts().then(() => {
          let wishlistItem;
          wishlistItem = wishlistProducts.find(
            n => parseInt(n.get("id")) === parseInt(item.get("id"))
          );
          wishlistItem &&
            onRemoveProductFromWishlist({
              wishlistItemId: wishlistItem.get("wishlistItemId")
            });
        });

        this.setState({ isSelected: false });
      }
    }
  }

  render() {
    const { translations, isLoading, className, item } = this.props;

    const { isSelected } = this.state;

    let wishlistTitle = isSelected
      ? translations.get("product_wishlist_added")
      : translations.get("product_wishlist");

    return (
      <div className={`${className}__wishlist`}>
        <span
          className={`${className}__wishlist-item ${
            isSelected ? `${className}__wishlist-item--added ` : ""
          }`}
          onClick={this.onHandleAddRemoveToggle}
        >
          {wishlistTitle}
        </span>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsLoading,
  isLoggedIn: selectIsLoggedIn,
  wishlistProducts: selectWishlistProducts
});

const mapDispatchToProps = dispatch => ({
  onAddProductToWishlist: data => dispatch(addProductToWishlist(data)),
  onGetWishlistProducts: data => dispatch(getWishlistProducts(data)),
  onRemoveProductFromWishlist: data => dispatch(removeProductFromWishlist(data))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AddToWishlist)
);
