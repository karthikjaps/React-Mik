import { STATUS_SUCCESS, STATUS_FAIL } from "../constants";
import { DEFAULT_PAGE_SIZE } from "./constants";

export const toOffsetLimit = ({ page, pageSize }) => {
  page = parseInt(page);
  pageSize = parseInt(pageSize);

  const offset = (page - 1) * pageSize;
  return {
    offset: offset || 0,
    limit: parseInt(pageSize) || DEFAULT_PAGE_SIZE
  };
};

export const toOrderHistory = data => {
  if (data) {
    if (data.status === STATUS_SUCCESS) {
      const { data: responseData } = data;

      return {
        orders: toOrderHistoryArray(responseData)
      };
    }
    if (data.status === STATUS_FAIL) {
      throw Error(data.message);
    }
  }
  return null;
};

export const toOrderHistoryArray = data => {
  if (data && data.length) {
    return data.map(n => toOrderItem(n));
  }
  return [];
};

export const toOrderItem = data => {
  if (data) {
    return {
      id: data.order_id,
      status: data.order_status,
      isCancel: data.is_cancel,
      date: data.order_date,
      dateFormatted: data.order_date_formatted,
      deliveryDate: data.delivery_date,
      paymentMethod: data.payment_method,
      total: data.order_total,
      couponCode: data.coupon_code,
      items: toProductItemArray(data.order_items)
    };
  }
  return null;
};

export const toProductItemArray = data => {
  if (data && data.length) {
    return data.map(n => toProductItem(n));
  }
  return [];
};

export const toProductItem = data => {
  if (data) {
    return {
      title: data.product_name,
      image: data.product_image,
      price: data.price,
      quantity: data.qty
    };
  }
  return null;
};

export const toCancelOrderJson = data => {
  if (data) {
    return { order_id: data.orderId };
  }
};

export const toCancelOrder = data => {
  if (data) {
    if (data.status === STATUS_SUCCESS) {
      const { data: responseData } = data;

      return {
        data: responseData
      };
    }
    if (data.status === STATUS_FAIL) {
      throw Error(data.message);
    }
  }
  return null;
};
