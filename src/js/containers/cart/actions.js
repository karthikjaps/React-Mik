import {
  SET_LOADING,
  SET_CART,
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  REDUCER_NAME,
  RESET_ITEMS,
  SET_ITEMS,
  ADD_VOUCHER,
  REMOVE_VOUCHER,
  SET_CART_TOTALS,
  RESET_CART,
  SET_INVALID_VOUCHER
} from "./constants";
import Api from "../../../../service/main";
import { renderPage, getPage } from "../page/actions";
import { CART_STORAGE_KEY } from "../../../../service/constants";

const isLoading = data => ({
  type: SET_LOADING,
  data
});

const setCart = data => ({
  type: SET_CART,
  data
});

const resetCart = data => ({
  type: RESET_CART,
  data
});

export const setCartTotals = data => ({
  type: SET_CART_TOTALS,
  data
});

const setItems = data => ({
  type: SET_ITEMS,
  data
});

const resetItems = data => ({
  type: RESET_ITEMS,
  data
});

const addProduct = data => ({
  type: ADD_PRODUCT,
  data
});

export const removeProduct = () => ({
  type: REMOVE_PRODUCT
});

const setVoucher = data => ({
  type: ADD_VOUCHER,
  data
});

const setInvalidVoucher = data => ({
  type: SET_INVALID_VOUCHER,
  data
});

const removeVoucherApplied = data => ({
  type: REMOVE_VOUCHER,
  data
});

export const addProductToCart = data => dispatch =>
  new Promise((resolve, reject) => {
    const item = {
      quantity: data.quantity,
      productId: data.productId,
      selectedOptions: data.selectedOptions
    };

    // TODO: session key should be a constant
    const cartJson = localStorage.getItem(CART_STORAGE_KEY);
    let cart = [];
    if (cartJson) {
      cart = JSON.parse(cartJson);
    }
    if (!Array.isArray(cart)) {
      cart = [];
    }
    cart.push(item);

    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    dispatch(addProduct(item));
    resolve();
  });

export const removeProductFromCart = ({ productId }) => dispatch =>
  new Promise(resolve => {
    const cartJson = localStorage.getItem(CART_STORAGE_KEY);
    let cart = [];
    if (cartJson) {
      cart = JSON.parse(cartJson);
    }
    const index = cart.findIndex(n => n.productId === productId);
    cart.splice(index, 1);
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));

    dispatch(submitCart(cart))
      .then(response => resolve(response))
      .catch(error => {
        throw error;
      });
  });

export const updateProductQuantity = ({ productId, quantity }) => dispatch =>
  new Promise(resolve => {
    const cartJson = localStorage.getItem(CART_STORAGE_KEY);
    let cart = [];
    if (cartJson) {
      cart = JSON.parse(cartJson);
    }
    const index = cart.findIndex(n => n.productId === productId);
    const item = cart[index];
    cart[index] = { ...item, quantity };
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));

    dispatch(submitCart(cart))
      .then(response => resolve(response))
      .catch(error => {
        throw error;
      });
  });

export const fetchCart = data => dispatch => {
  dispatch(isLoading(true));

  const cartJson = localStorage.getItem(CART_STORAGE_KEY);
  let cart = [];
  if (cartJson) {
    cart = JSON.parse(cartJson);
  }
  dispatch(setItems({ items: cart }));
  dispatch(isLoading(false));
};

export const submitCart = data => dispatch => {
  dispatch(isLoading(true));

  return Api.cart
    .submitCart(data)
    .then(response => {
      const items = response
        ? response.items.map(n => ({
            quantity: n.quantity,
            productId: n.item.id,
            selectedOptions: n.selectedOptions
          }))
        : [];

      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
      dispatch(setCart(response));
      dispatch(setCartTotals(response));
      dispatch(setVoucher(response));

      dispatch(isLoading(false));
    })
    .catch(error => {
      throw error;
    });
};

export const submitVoucher = data => dispatch => {
  dispatch(isLoading(true));
  return Api.cart
    .submitVoucher(data)
    .then(response => {
      dispatch(setVoucher(response));
      dispatch(isLoading(false));
    })
    .catch(error => {
      dispatch(isLoading(false));
      dispatch(setInvalidVoucher({ valid: false, couponCode: data }));
      throw error;
    });
};

export const removeVoucher = data => dispatch => {
  dispatch(isLoading(true));

  return Api.cart
    .removeVoucher(data)
    .then(response => {
      dispatch(removeVoucherApplied(response));
      dispatch(isLoading(false));
    })
    .catch(error => {
      dispatch(isLoading(false));
      dispatch(setInvalidVoucher(null));
      throw error;
    });
};

export const clearCart = data => dispatch => {
  localStorage.setItem(CART_STORAGE_KEY, []);
  dispatch(resetItems());
  dispatch(resetCart());
};

export const fetchCartPage = data => dispatch =>
  renderPage({
    reducerName: REDUCER_NAME,
    get: getPage,
    data
  })(dispatch);
