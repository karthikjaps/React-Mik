import React from "react";
import { connect } from "react-redux";
import { matchPath } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import moment from "moment";

import {
  PAGE_NUMBER_QUERY_STRING_PARAM,
  PAGE_SIZE_QUERY_STRING_PARAM,
  PAGE_SIZE_VALUE,
  DATA_TTL,
  SORT_QUERY_STRING_PARAM,
  DEFAULT_SORTING_ORDER,
  SEARCH_QUERY_STRING_PARAM,
  PROMOTIONS_SORTING_ORDER,
  ADD_TO_CART_QUERY_STRING
} from "./constants";
import {
  getCatalogue,
  updateCatalogue,
  resetCategoryTitle,
  setWishlistItems,
  setWishlistItem,
  resetWishlistItem,
  resetWishlist
} from "./actions";
import {
  selectTitle,
  selectItems,
  selectIsLoading,
  selectDataTimestamp,
  selectCategoryId,
  selectHasMore,
  selectIsCategoryLoading,
  selectPage,
  selectIsScrollLoading,
  selectWishlistItems
} from "./reducer";
import { selectCurrencyCode } from "../catalogueSort/reducer";
import CatalogueSection from "../../components/catalogue/catalogueSection";
import { selectCategoryRoutesByUrl } from "../routes/reducer";
import { STORE_ID } from "../../../../service/catalogueConfig/constants";
import {
  decodeFilters,
  decodeFiltersFromObject
} from "../../../../server/helpers/routing";
import { selectIsLoggedIn } from "../profile/reducer";
import {
  addProductToWishlist,
  getWishlistProducts,
  removeProductFromWishlist
} from "../wishlist/actions";
import { getUrl } from "../../../../server/helpers/routing";
import { addProductToCart } from "../cart/actions";
import { DEFAULT_CATEGORY_ID } from "../../../../service/catalogue/constants";

class Catalogue extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      filters: null
    };

    this.getCatalogueRequestObject = this.getCatalogueRequestObject.bind(this);
    this.handleGetMoreContent = this.handleGetMoreContent.bind(this);
    this.onHandleAddToWishlist = this.onHandleAddToWishlist.bind(this);
    this.onHandleRemoveFromWishlist = this.onHandleRemoveFromWishlist.bind(
      this
    );
    this.handleOnAddToCart = this.handleOnAddToCart.bind(this);
    this.handleQuickViewButtonClick = this.handleQuickViewButtonClick.bind(
      this
    );
  }

  componentDidMount() {
    const {
      onGetCatalogue,
      categoryRoutes,
      dataTimestamp,
      categoryId,
      url,
      queryString
    } = this.props;

    const routeCategory = categoryRoutes.find(item => {
      return matchPath(url, {
        path: item.get("url"),
        exact: true
      });
    });
    const routeCategoryId = routeCategory ? routeCategory.get("id") : null;
    const requestData = this.getCatalogueRequestObject({
      page: 1,
      routeCategoryId
    });

    this.setState({ filters: requestData.filter });

    let searchParams = new URLSearchParams(queryString);
    const searchTerm = searchParams.get(SEARCH_QUERY_STRING_PARAM);

    if (searchTerm) {
      onGetCatalogue({
        storeId: localStorage.getItem("STORE_ID") || STORE_ID,
        keyWord: searchTerm,
        ...requestData
      });
    } else if (
      routeCategoryId !== categoryId ||
      moment(dataTimestamp).add(DATA_TTL, "milliseconds") < moment()
    ) {
      onGetCatalogue({
        storeId: localStorage.getItem("STORE_ID") || STORE_ID,
        categoryId: routeCategoryId,
        ...requestData
      });
    }
    this.setWishlist();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.queryString !== this.props.queryString) {
      const requestData = this.getCatalogueRequestObject({ page: 1 });

      let searchParams = new URLSearchParams(this.props.queryString);
      const searchTerm = searchParams.get(SEARCH_QUERY_STRING_PARAM);

      if (searchTerm) {
        this.props.onGetCatalogue({
          storeId: localStorage.getItem("STORE_ID") || STORE_ID,
          keyWord: searchTerm,
          ...requestData
        });
      } else {
        this.props.onGetCatalogue({
          storeId: localStorage.getItem("STORE_ID") || STORE_ID,
          categoryId: this.props.categoryId,
          ...requestData
        });
      }
    } else if (prevProps.url !== this.props.url) {
      const routeCategory = this.props.categoryRoutes.find(item => {
        return matchPath(this.props.url, {
          path: item.get("url"),
          exact: true
        });
      });
      const routeCategoryId = routeCategory ? routeCategory.get("id") : null;

      if (routeCategoryId !== this.props.categoryId) {
        const requestData = this.getCatalogueRequestObject({
          page: 1,
          routeCategoryId
        });
        this.props.onGetCatalogue({
          storeId: localStorage.getItem("STORE_ID") || STORE_ID,
          categoryId: routeCategoryId,
          ...requestData
        });
      }
    }

    const {
      wishlistItems,
      isLoggedIn,
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
    this.props.onResetCategoryTitle();
    this.props.onResetWishlist();
  }

  handleGetMoreContent() {
    const {
      isLoading,
      isCategoryLoading,
      isScrollLoading,
      page,
      categoryId,
      onUpdateCatalogue,
      queryString
    } = this.props;
    if (!isLoading && !isCategoryLoading && !isScrollLoading) {
      let searchParams = new URLSearchParams(queryString);
      const searchTerm = searchParams.get(SEARCH_QUERY_STRING_PARAM);

      if (searchTerm) {
        const requestData = this.getCatalogueRequestObject({ page: page + 1 });

        onUpdateCatalogue({
          storeId: localStorage.getItem("STORE_ID") || STORE_ID,
          keyWord: searchTerm,
          ...requestData
        });
      } else {
        const requestData = this.getCatalogueRequestObject({ page: page + 1 });

        onUpdateCatalogue({
          storeId: localStorage.getItem("STORE_ID") || STORE_ID,
          categoryId: categoryId,
          ...requestData
        });
      }
    }
  }

  getCatalogueRequestObject({ page, routeCategoryId }) {
    this.setWishlist();

    const requestPage = page || 1;
    const pageSize = this.props.limit || PAGE_SIZE_VALUE;
    let searchParams = new URLSearchParams(this.props.queryString);
    const sortingOrder = parseInt(
      searchParams.get(SORT_QUERY_STRING_PARAM) ||
        (!routeCategoryId || routeCategoryId === DEFAULT_CATEGORY_ID
          ? PROMOTIONS_SORTING_ORDER
          : DEFAULT_SORTING_ORDER)
    );
    const filter = decodeFilters(searchParams);

    return {
      page: requestPage,
      pageSize,
      sortingOrder,
      filter
    };
  }

  setWishlist() {
    const {
      wishlistItems,
      onSetWishlistItems,
      isLoggedIn,
      onGetWishlistProducts
    } = this.props;

    if (isLoggedIn) {
      if (!(wishlistItems && wishlistItems.size)) {
        onGetWishlistProducts().then(() => {
          onSetWishlistItems();
        });
      } else {
        onSetWishlistItems();
      }
    }
  }

  onHandleAddToWishlist(event, { id }) {
    event.preventDefault();

    const {
      isLoggedIn,
      onAddProductToWishlist,
      onGetWishlistProducts,
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

  onHandleRemoveFromWishlist(event, { id }) {
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
      history.push({
        pathname: getUrl("/login"),
        state: { returnUrl: history.location.pathname }
      });
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

  handleOnAddToCart(data) {
    return this.props
      .onAddProductToCart({
        ...data
      })
      .then(() => {
        // TODO: mark the product as added
        // (it might be usefull in the future but we don't need it now)
      })
      .catch(error => console.error(error));
  }

  handleQuickViewButtonClick(redirectUrl) {
    event.preventDefault();

    if (redirectUrl) {
      this.props.history.push(redirectUrl, { returnUrl: this.props.url });
    }
  }

  render() {
    const {
      categoryId,
      title,
      items,
      url,
      queryString,
      limit,
      hidePagination,
      hideTitle,
      hideFilters,
      hasMore,
      isLoading,
      isCategoryLoading,
      history,
      currencyCode
    } = this.props;

    let searchParams = new URLSearchParams(this.props.queryString);
    const searchTerm = searchParams.get(SEARCH_QUERY_STRING_PARAM);

    return (
      <CatalogueSection
        categoryId={categoryId}
        title={title}
        items={items}
        isLoading={isLoading}
        isCategoryLoading={isCategoryLoading}
        limit={limit}
        url={url}
        queryString={queryString}
        hideTitle={hideTitle}
        hidePagination={hidePagination}
        hideFilters={hideFilters}
        handleGetMoreContent={this.handleGetMoreContent}
        hasMore={hasMore}
        searchTerm={searchTerm}
        history={history}
        filters={this.state.filters}
        handleAddToWishlist={this.onHandleAddToWishlist}
        handleRemoveFromWishlist={this.onHandleRemoveFromWishlist}
        handleAddToCart={this.handleOnAddToCart}
        handleQuickViewButtonClick={this.handleQuickViewButtonClick}
        currencyCode={currencyCode}
      />
    );
  }

  static fetchData(store, { url, query }, { storeId }) {
    const categoryRoutes = selectCategoryRoutesByUrl(store.getState());
    const dataTimestamp = selectDataTimestamp(store.getState());

    const routeCategory = categoryRoutes.find(item => {
      return matchPath(url, {
        path: item.get("url"),
        exact: true
      });
    });
    const routeCategoryId = routeCategory ? routeCategory.get("id") : null;

    if (moment(dataTimestamp).add(DATA_TTL, "milliseconds") < moment()) {
      const page = parseInt(query[PAGE_NUMBER_QUERY_STRING_PARAM] || 1);
      const pageSize = parseInt(
        query[PAGE_SIZE_QUERY_STRING_PARAM] || PAGE_SIZE_VALUE
      );
      const sortingOrder = parseInt(
        query[SORT_QUERY_STRING_PARAM] ||
          (!(routeCategoryId && !isNaN(routeCategoryId)) ||
          routeCategoryId === DEFAULT_CATEGORY_ID
            ? PROMOTIONS_SORTING_ORDER
            : DEFAULT_SORTING_ORDER)
      );
      const searchTerm = query[SEARCH_QUERY_STRING_PARAM];
      const filter = decodeFiltersFromObject(query);

      if (searchTerm) {
        return store.dispatch(
          getCatalogue({
            storeId,
            keyWord: searchTerm,
            page,
            pageSize,
            sortingOrder,
            filter
          })
        );
      } else {
        return store.dispatch(
          getCatalogue({
            storeId,
            categoryId: routeCategoryId,
            page,
            pageSize,
            sortingOrder,
            filter
          })
        );
      }
    }

    return Promise.resolve();
  }

  static setData(store, data) {
    return store.dispatch(getCatalogue(data));
  }
}

const mapStateToProps = createStructuredSelector({
  title: selectTitle,
  items: selectItems,
  isLoading: selectIsLoading,
  isScrollLoading: selectIsScrollLoading,
  isCategoryLoading: selectIsCategoryLoading,
  hasMore: selectHasMore,
  page: selectPage,
  dataTimestamp: selectDataTimestamp,
  categoryRoutes: selectCategoryRoutesByUrl,
  categoryId: selectCategoryId,
  isLoggedIn: selectIsLoggedIn,
  wishlistItems: selectWishlistItems,
  currencyCode: selectCurrencyCode
});

const mapDispatchToProps = dispatch => ({
  onGetCatalogue: data => dispatch(getCatalogue(data)),
  onUpdateCatalogue: data => dispatch(updateCatalogue(data)),
  onResetCategoryTitle: () => dispatch(resetCategoryTitle()),
  onSetWishlistItems: data => dispatch(setWishlistItems(data)),
  onGetWishlistProducts: data => dispatch(getWishlistProducts(data)),
  onAddProductToWishlist: data => dispatch(addProductToWishlist(data)),
  onSetWishlistItem: data => dispatch(setWishlistItem(data)),
  onResetWishlist: () => dispatch(resetWishlist()),
  onRemoveProductFromWishlist: data =>
    dispatch(removeProductFromWishlist(data)),
  onResetWishlistItem: data => dispatch(resetWishlistItem(data)),
  onAddProductToCart: data => dispatch(addProductToCart(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Catalogue);
