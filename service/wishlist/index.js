import MockService from "./service.mock";

import {
  toProductWishlistJson,
  toProductWishlist,
  toWishlistData,
  toWishlistProductCartJson
} from "./adapter";

export default class Wishlist {
  constructor({ service } = {}) {
    this.service = service || new MockService();
  }

  addToWishlist(data) {
    return this.service
      .addToWishlist({ data: toProductWishlistJson(data) })
      .then(response => {
        return toProductWishlist(response);
      });
  }

  getWishlistProducts(data) {
    return this.service
      .getWishlistProducts({ data: toWishlistData(data) })
      .then(response => {
        return toProductWishlist(response);
      })
      .catch(error => {
        console.error(error);
        throw error;
      });
  }

  addWishlistProductToCart(data) {
    return this.service
      .addWishlistProductToCart({
        data: toWishlistProductCartJson(data)
      })
      .then(response => {
        return toProductWishlist(response);
      })
      .catch(error => {
        console.error(error);
        throw error;
      });
  }

  removeProductFromWishlist(data) {
    return this.service
      .removeProductFromWishlist({ data: toWishlistProductCartJson(data) })
      .then(response => {
        return toProductWishlist(response);
      })
      .catch(error => {
        console.error(error);
        throw error;
      });
  }
}
