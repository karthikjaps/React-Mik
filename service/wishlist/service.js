import AuthenticatedApiService from "../authenticatedApiService";

export default class WishlistService extends AuthenticatedApiService {
  getServiceUrl() {
    return `${super.getServiceUrl()}connector/wishlist/`;
  }

  getWishlistProducts({ data }) {
    return super.post({
      url: `${this.getServiceUrl()}get_wishlist_products`,
      data
    });
  }

  addToWishlist({ data }) {
    return super.post({
      url: `${this.getServiceUrl()}add_products_to_wishlist`,
      data
    });
  }

  addWishlistProductToCart({ data }) {
    return super.post({
      url: `${this.getServiceUrl()}add_wishlist_product_to_cart`,
      data
    });
  }

  removeProductFromWishlist({ data }) {
    return super.post({
      url: `${this.getServiceUrl()}remove_product_from_wishlist`,
      data
    });
  }
}
