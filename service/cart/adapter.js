import { STATUS_FAIL, STATUS_SUCCESS } from "../constants";
import { toPriceString } from "../adapter";
import { TAX_RATE } from "./constants";
import { toSwatchOptionArray } from "../catalogue/adapter";

export const toCart = data => {
  if (data) {
    if (data.status === STATUS_SUCCESS) {
      const { data: responseData } = data;

      return {
        items: toCartItemArray(responseData.cart),
        outOfStock: toCartItemArray(responseData.out_of_stock),
        ...toFee(responseData.fee)
      };
    }
    if (data.status === STATUS_FAIL) {
      throw Error(data.message);
    }
  }
  return {
    items: [],
    voucher: null
  };
};

export const toFee = data => ({
  couponCode: data.coupon_code,
  discountPercentage: data.discount_percentage,
  isCouponApplied: data.is_coupon_applied,
  paymentMethodFee: toPriceString(data.cod_fee, true),
  paymentMethodFeeValue: data.cod_fee,
  subTotal: toPriceString(data.sub_total, true),
  discount: toPriceString(data.discount, true),
  shippingTotal: toPriceString(data.shipping_hand, true),
  shippingTotalValue: data.shipping_hand,
  discountValue: data.discount,
  subTotalAfterDiscount: toPriceString(data.subtotal_after_discount, true),
  taxFromSubTotal: toPriceString(data.sub_total * TAX_RATE, true),
  grandTotal: toPriceString(data.grand_total, true),
  grandTotalValue: data.grand_total,
  voucher: toVoucherObject(data)
});

export const toVoucher = data => {
  if (data) {
    if (data.status === STATUS_SUCCESS) {
      const responseData = data.data[0].fee;

      return {
        voucher: toVoucherObject(responseData)
      };
    }
    if (data.status === STATUS_FAIL) {
      throw Error(data.message[0]);
    }
  }
  return null;
};

export const toRemoveVoucher = data => {
  if (data) {
    if (data.status === STATUS_SUCCESS) {
      const responseData = data.data[0].fee;

      return toFee(responseData);
    }
    if (data.status === STATUS_FAIL) {
      throw Error(data.message[0]);
    }
  }
  return null;
};

const toVoucherObject = data => ({
  valid: true,
  couponCode: data.coupon_code,
  discount: toPriceString(-1 * data.discount, true),
  discountValue: data.discount,
  discountPercentage: data.discount_percentage,
  subTotal: toPriceString(data.subtotal, true),
  subTotalAfterDiscount: toPriceString(data.subtotal_after_discount, true),
  taxFromSubTotal: toPriceString(data.sub_total * TAX_RATE, true),
  grandTotal: toPriceString(data.grand_total, true)
});

export const toSubmitCartRequest = data => {
  if (data && data.length) {
    return {
      products: data.map(n => ({
        product_id: n.productId,
        product_qty: n.quantity,
        options: n.selectedOptions && [
          {
            id: "Swatches",
            options: toOptionItemArray(n.selectedOptions)
          }
        ]
      }))
    };
  }
  return [];
};

const toOptionItemArray = data => {
  if (data && data.length) {
    return data.map(n => toOptionItem(n));
  }
  return [];
};

export const toOptionItem = data => {
  if (data) {
    return {
      option_id: data.id,
      option_value: data.value,
      option_price: data.price,
      option_title: data.title,
      position: data.position,
      option_type_id: data.typeId,
      option_type: data.type,
      swatch_code: data.swatchCode,
      is_required: data.isRequired,
      dependence_option_ids: data.dependenceOptionIds,
      max_qty: data.maxQuantity,
      swatch_image: data.thumbnail,
      swatch_product_main_image: data.image,
      stock_status: data.true,
      dependence_options: data.dependenceOptions
    };
  }
  return null;
};

export const toSubmitCouponRequest = data => {
  if (data) {
    return {
      coupon_code: data
    };
  }
  return [];
};

export const toRemoveCouponRequest = data => {
  if (data) {
    return {
      coupon_code: data,
      is_remove: 1
    };
  }
  return [];
};

const toCartItemArray = data => {
  if (data && data.length) {
    return data.map(n => ({
      quantity: n.product_qty,
      item: toCartItem(n),
      selectedOptions: toSwatchOptionArray(n.selected_options)
    }));
  }
  return [];
};

export const toCartItem = data => {
  if (data) {
    return {
      url: `/shop${data.product_url || ""}`,
      id: data.product_id,
      sku: data.product_sku,
      title: data.product_name,
      type: data.product_type,
      rrp: data.markdown_price ? toPriceString(data.product_price, true) : "",
      price: data.markdown_price
        ? toPriceString(data.markdown_price, true)
        : toPriceString(data.product_price, true),
      discount: data.discount_percentage,
      description: data.product_description,
      shortDescription: data.product_short_description,
      ingredients: data.product_ingredients,
      tips: data.product_tips,
      isAvailable: data.stock_status,
      maxQuantity: data.product_max_qty,
      availableQuantity: data.available_quantity,
      image: data.product_image,
      images: data.product_images,
      brand: data.brand,
      discountAmount: data.discountAmount,
      promotionCode: data.promotionCode,
      rmsPromotionCode: data.rmsPromotionCode,
      hasError: data.hasError,
      message: data.message
    };
  }
  return null;
};
