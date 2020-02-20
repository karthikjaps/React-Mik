import { STATUS_SUCCESS, STATUS_FAIL } from "../constants";
import { toSwatchOptionArray } from "../catalogue/adapter";
import { toPriceString } from "../adapter";

const LIMIT = 100;

export const toProductWishlistJson = data => {
  if (data) {
    return { products: [{ product_id: parseInt(data) }] };
  }
};

export const toProductWishlist = data => {
  if (data) {
    if (data.status === STATUS_SUCCESS) {
      const { data: responseData } = data;
      return {
        other: responseData.other,
        info: responseData.wishlist_info,
        wishlistProducts: toWishlistProductsArray(
          responseData.wishlist_products
        )
      };
    }

    if (data.status === STATUS_FAIL) {
      throw Error(data.message);
    }
  }
  return null;
};

const toWishlistProductsArray = data => {
  if (data && data.length) {
    return data.map(item => {
      return toWishlistProduct(item);
    });
  } else {
    return [];
  }
};

export const toWishlistData = data => {
  return {
    offset: 0,
    limit: LIMIT
  };
};

const toWishlistProduct = data => {
  if (data) {
    return {
      id: data.product_id,
      sku: data.product_sku,
      title: data.product_name,
      type: data.product_type,
      rrp: data.markdown_price ? toPriceString(data.product_price, true) : "",
      price: data.markdown_price
        ? toPriceString(data.markdown_price, true)
        : toPriceString(data.product_price, true),
      discount: data.discount_percentage,
      productRate: data.product_rate,
      isAvailable: data.stock_status,
      brand: data.brand,
      availableQuantity: data.available_quantity,
      image: data.product_image,
      productSharingMessage: data.product_sharing_message,
      productReviewNumber: data.product_review_number,
      wishlistItemId: data.wishlist_item_id,
      manufacturerName: data.manufacturer_name,
      isShowPrice: data.is_show_price,
      options: [],
      swatchOptions:
        data.options &&
        data.options.find(n => n.id === "swatch") &&
        toSwatchOptionArray(data.options.find(n => n.id === "swatch").options),
      selectedAllRequiredOptions: data.selected_all_required_options,
      product_qty: data.product_qty,
      product_sharing_url: data.product_sharing_url,
      showPriceV2: toShowPrice(data.show_price_v2),
      url: `/shop${data.product_url || ""}`
    };
  }
};

const toShowPrice = data => {
  if (data) {
    return {
      product_regular_price: data.product_regular_price,
      specialPriceLabel: data.special_price_label,
      productPrice: data.product_price
    };
  }
};

export const toWishlistProductCartJson = data => {
  if (data) {
    return {
      wishlist_item_id: data.wishlistItemId
    };
  }
};
