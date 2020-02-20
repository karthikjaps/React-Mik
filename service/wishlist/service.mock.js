import AuthenticatedApiService from "../authenticatedApiService";

export default class WishlistMockService extends AuthenticatedApiService {
  constructor() {
    super();

    this.wishlist = [
      {
        product_id: "3622",
        product_sku: "3388714256102",
        product_name: "inspir me Gold 100ml",
        product_type: "simple",
        product_regular_price: 360,
        product_price: 108,
        discount_percentage: 70,
        product_rate: 0,
        stock_status: true,
        product_review_number: 0,
        product_image:
          "http://shop.arabianoud.com/media/catalog/product/cache/1/thumbnail/600x600/040ec09b1e35df139433887a97daa66f/placeholder/default/new8_2.png",
        manufacturer_name: "",
        brand: " ",
        is_show_price: true,
        wishlist_item_id: "5498",
        options: [],
        selected_all_required_options: true,
        product_qty: "2.0000",
        available_quantity: 36,
        product_sharing_message:
          " http://shop.arabianoud.com/index.php/100-9726.html",
        product_sharing_url:
          "http://shop.arabianoud.com/index.php/100-9726.html",
        show_price_v2: {
          product_regular_price: 360,
          special_price_label: "Special Price",
          product_price: 108
        }
      },
      {
        product_id: "3600",
        product_sku: "3388714256102",
        product_name: "inspir me Gold 100ml",
        product_type: "simple",
        product_regular_price: 360,
        product_price: 108,
        discount_percentage: 70,
        product_rate: 0,
        stock_status: true,
        product_review_number: 0,
        product_image:
          "http://shop.arabianoud.com/media/catalog/product/cache/1/thumbnail/600x600/040ec09b1e35df139433887a97daa66f/placeholder/default/new8_2.png",
        manufacturer_name: "",
        brand: " ",
        is_show_price: true,
        wishlist_item_id: "5499",
        options: [],
        selected_all_required_options: true,
        product_qty: "2.0000",
        available_quantity: 36,
        product_sharing_message:
          " http://shop.arabianoud.com/index.php/100-9726.html",
        product_sharing_url:
          "http://shop.arabianoud.com/index.php/100-9726.html",
        show_price_v2: {
          product_regular_price: 360,
          special_price_label: "Special Price",
          product_price: 108
        }
      }
    ];
  }

  getWishlistProducts({ data }) {
    return Promise.resolve({
      status: "SUCCESS",
      message: [2],
      data: {
        wishlist_products: this.wishlist,
        wishlist_info: [
          {
            wishlist_items_qty: 2,
            sharing_message:
              " http://shop.arabianoud.com/index.php/wishlist/shared/index/code/cfa3f0cfe630657bb9e2eeedf65afc25/",
            cart_qty: 1,
            sharing_url:
              "http://shop.arabianoud.com/index.php/wishlist/shared/index/code/cfa3f0cfe630657bb9e2eeedf65afc25/"
          }
        ],
        other: [
          {
            wishlist_items_qty: 2,
            sharing_message:
              " http://shop.arabianoud.com/index.php/wishlist/shared/index/code/cfa3f0cfe630657bb9e2eeedf65afc25/",
            cart_qty: 1,
            sharing_url:
              "http://shop.arabianoud.com/index.php/wishlist/shared/index/code/cfa3f0cfe630657bb9e2eeedf65afc25/"
          }
        ]
      }
    });
  }

  addToWishlist({ data }) {
    return Promise.resolve({
      status: "SUCCESS",
      message: [2],
      data: {
        wishlist_products: this.wishlist,
        wishlist_info: [
          {
            wishlist_items_qty: 2,
            sharing_message:
              " http://shop.arabianoud.com/index.php/wishlist/shared/index/code/cfa3f0cfe630657bb9e2eeedf65afc25/",
            cart_qty: 1,
            sharing_url:
              "http://shop.arabianoud.com/index.php/wishlist/shared/index/code/cfa3f0cfe630657bb9e2eeedf65afc25/"
          }
        ],
        other: [
          {
            wishlist_items_qty: 2,
            sharing_message:
              " http://shop.arabianoud.com/index.php/wishlist/shared/index/code/cfa3f0cfe630657bb9e2eeedf65afc25/",
            cart_qty: 1,
            sharing_url:
              "http://shop.arabianoud.com/index.php/wishlist/shared/index/code/cfa3f0cfe630657bb9e2eeedf65afc25/"
          }
        ]
      }
    });
  }
}
