import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { Link } from "react-router-dom";
import { fromJS } from "immutable";

import Nav from "../../components/nav/nav";
import SearchForm from "../../components/search/searchForm";
import { fetchNavigation, setNavItemActive, fetchHeader } from "./actions";
import { selectNav } from "./reducer";
import { selectLangs } from "../multiLanguage/reducer";
import { selectItemCount } from "../cart/reducer";
import { fetchCart } from "../cart/actions";
import { selectIsLoggedIn, selectProfile } from "../profile/reducer";
import { selectGroups, selectSelectedStore } from "../multiStore/reducer";
import MultiStoreSelector from "../multiStore/";
import MultiLanguageSelector from "../multiLanguage/";
import ProfilePopup from "../../components/nav/profilePopup";
import withTranslations from "../translations/withTranslations";
import { selectIsLoading } from "../catalogue/reducer";
import { STORE_ID } from "../../../../service/catalogueConfig/constants";
import { getUrl } from "../../../../server/helpers/routing";
import { SEARCH_QUERY_STRING_PARAM } from "../catalogue/constants";

class Header extends React.PureComponent {
  constructor(props) {
    super(props);

    this.searchToggle = this.searchToggle.bind(this);

    this.state = {
      logo: {
        src: "/img/logo.svg",
        alt: process.env.NAME,
        title: process.env.NAME
      },
      wishlist: {
        src: "/img/icons/header/header_wishlist_icon.svg"
      },
      account: {
        src: "/img/icons/header/header_account_icon.svg"
      },
      cart: {
        src: "/img/icons/header/header_bag_icon.svg"
      },
      search: {
        src: "/img/icons/header/search_icon_white.svg"
      },
      searchOpen: false,
      profileMenu: null
    };
  }

  componentDidMount() {
    const {
      onSetNavItemActive,
      onFetchCart,
      onFetchHeader,
      onFetchNavigation,
      nav
    } = this.props;

    // set initial navigation item
    onSetNavItemActive({
      href: location.pathname
    });

    // fetch cart from session storage
    onFetchCart();
    if (!nav.size) {
      onFetchHeader({ storeId: localStorage.getItem("STORE_ID") || STORE_ID });
      onFetchNavigation({
        storeId: localStorage.getItem("STORE_ID") || STORE_ID
      });
    }

    this.setState({
      profileMenu: fromJS([
        {
          id: 1,
          title: this.props.translations.get("myAccount_title"),
          url: "#",
          isActive: false,
          children: [
            {
              id: 11,
              title: this.props.translations.get("myAccount_myProfile"),
              url: "/edit-profile",
              isActive: false,
              icon: {
                title: "profile.svg",
                imageUrl: "/img/icons/my-account/profile.svg",
                alternateText: "profile.svg",
                width: "",
                height: ""
              }
            },
            {
              id: 12,
              title: this.props.translations.get("myAccount_myAddress"),
              url: "/shipment-address",
              isActive: false,
              icon: {
                title: "address.svg",
                imageUrl: "/img/icons/my-account/address.svg",
                alternateText: "address.svg",
                width: "",
                height: ""
              }
            },
            {
              id: 13,
              title: this.props.translations.get("myAccount_myOrders"),
              url: "/order-history",
              isActive: false,
              icon: {
                title: "orders.svg",
                imageUrl: "/img/icons/my-account/orders.svg",
                alternateText: "orders.svg",
                width: "",
                height: ""
              }
            },
            {
              id: 14,
              title: this.props.translations.get("myAccount_myWishlist"),
              url: "/wishlist",
              isActive: false,
              icon: {
                title: "wishlist.svg",
                imageUrl: "/img/icons/my-account/wishlist.svg",
                alternateText: "wishlist.svg",
                width: "",
                height: ""
              }
            },
            {
              id: 15,
              title: this.props.translations.get("myAccount_signOut"),
              url: "/logout",
              isActive: false,
              icon: {
                title: "sign-out.svg",
                imageUrl: "/img/icons/my-account/sign-out.svg",
                alternateText: "sign-out.svg",
                width: "",
                height: ""
              }
            }
          ]
        }
      ])
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.translations !== this.props.translations) {
      this.setState({
        profileMenu: fromJS([
          {
            id: 1,
            title: this.props.translations.get("myAccount_title"),
            url: "#",
            isActive: false,
            children: [
              {
                id: 11,
                title: this.props.translations.get("myAccount_myProfile"),
                url: "/edit-profile",
                isActive: false,
                icon: {
                  title: "profile.svg",
                  imageUrl: "/img/icons/my-account/profile.svg",
                  alternateText: "profile.svg",
                  width: "",
                  height: ""
                }
              },
              {
                id: 12,
                title: this.props.translations.get("myAccount_myAddress"),
                url: "/shipment-address",
                isActive: false,
                icon: {
                  title: "address.svg",
                  imageUrl: "/img/icons/my-account/address.svg",
                  alternateText: "address.svg",
                  width: "",
                  height: ""
                }
              },
              {
                id: 13,
                title: "My Orders",
                url: "/order-history",
                isActive: false,
                icon: {
                  title: "orders.svg",
                  imageUrl: "/img/icons/my-account/orders.svg",
                  alternateText: "orders.svg",
                  width: "",
                  height: ""
                }
              },
              {
                id: 14,
                title: this.props.translations.get("myAccount_myWishlist"),
                url: "/wishlist",
                isActive: false,
                icon: {
                  title: "wishlist.svg",
                  imageUrl: "/img/icons/my-account/wishlist.svg",
                  alternateText: "wishlist.svg",
                  width: "",
                  height: ""
                }
              },
              {
                id: 15,
                title: this.props.translations.get("myAccount_signOut"),
                url: "/logout",
                isActive: false,
                icon: {
                  title: "sign-out.svg",
                  imageUrl: "/img/icons/my-account/sign-out.svg",
                  alternateText: "sign-out.svg",
                  width: "",
                  height: ""
                }
              }
            ]
          }
        ])
      });
    }
  }

  searchToggle() {
    this.setState({ searchOpen: !this.state.searchOpen });
  }

  render() {
    const {
      url,
      langs,
      onSetNavItemActive,
      cartItemCount,
      isLoggedIn,
      profile,
      nav,
      groups,
      selectedStore,
      history,
      isLoading,
      translations
    } = this.props;

    const { searchOpen } = this.state;
    let searchParams = new URLSearchParams(history.location.search);
    const initialSearchTerm = searchParams.get(SEARCH_QUERY_STRING_PARAM);
    const selectedStoreId = selectedStore && selectedStore.get("id");

    return (
      <div>
        <header className="header">
          <div className="header__background" />
          <div className="header__container">
            {process.env.SHOW_HEADER_LOGO && (
              <Link to={getUrl("/")} className="header__logo">
                <img
                  src={this.state.logo.src}
                  title={this.state.logo.title}
                  alt={this.state.logo.alt}
                  className="header__logo__img"
                />
              </Link>
            )}
            <div className="header__left">
              <div className="search--mobile">
                {!searchOpen ? (
                  <img
                    src="/img/icons/header/search_icon_white.svg"
                    className="header__icon__img search__icon"
                    onClick={() => this.searchToggle()}
                  />
                ) : (
                  <img
                    src="/img/icons/close_icon.svg"
                    className="header__icon__img search__icon"
                    onClick={() => this.searchToggle()}
                  />
                )}
              </div>
              <div className="header__icon header__icon--lang">
                <MultiLanguageSelector
                  history={history}
                  url={history.location.pathname}
                />
              </div>
              <div className="header__icon header__icon--flag">
                <MultiStoreSelector
                  history={history}
                  url={history.location.pathname}
                />
              </div>
            </div>
            <div className="header__right">
              <div className="header__icon header__icon--wishlist">
                <Link
                  to={!isLoggedIn ? getUrl("/login") : getUrl("/wishlist")}
                  className="header__icon__link"
                >
                  <img
                    src={this.state.wishlist.src}
                    className="header__icon__img"
                  />
                  <span className="header__icon__text">
                    {translations.get("wishlist_icon_text") || "Wishlist"}
                  </span>
                </Link>
              </div>
              <div className="header__icon header__icon--cart">
                <Link
                  to={{
                    pathname: getUrl("/cart"),
                    state: { returnUrl: history.location.pathname }
                  }}
                  className="header__icon__link"
                >
                  <img
                    src={this.state.cart.src}
                    className="header__icon__img"
                  />
                  {!!cartItemCount && (
                    <span className="header__icon__notification">
                      {cartItemCount}
                    </span>
                  )}
                  <span className="header__icon__text">
                    {translations.get("cart_icon_text") || "Cart"}
                  </span>
                </Link>
              </div>
              <div className="header__icon header__icon--account">
                {isLoggedIn && this.state.profileMenu ? (
                  <ProfilePopup
                    className="header__dropdown"
                    label={
                      <>
                        <img
                          src={this.state.account.src}
                          className="header__icon__img"
                        />
                        <span className="header__icon__text">
                          {profile.get("name")}
                        </span>
                      </>
                    }
                    options={this.state.profileMenu.first().get("children")}
                  />
                ) : (
                  <Link
                    to={{
                      pathname: getUrl("/login"),
                      state: { returnUrl: url }
                    }}
                    className="header__icon__link"
                  >
                    <img
                      src={this.state.account.src}
                      className="header__icon__img"
                    />
                    <span className="header__icon__text">
                      {translations.get("profile_icon_text") || "Sign In"}
                    </span>
                  </Link>
                )}
              </div>
            </div>
          </div>
          {searchOpen && (
            <div className="search__field-container">
              <div className="search__field-container__content">
                <img
                  src="/img/icons/header/search_icon_small.svg"
                  className="header__icon__img header__icon__img--search"
                  onClick={() => this.searchToggle()}
                />
                <SearchForm
                  action="/shop"
                  method="post"
                  initialValues={{ search: initialSearchTerm }}
                  className="mobile"
                  isLoading={isLoading}
                  fieldPlaceholder={translations.get("search_placeholder")}
                  onSubmit={e => {
                    const searchTerm = e.get ? e.get("search") : e.search;
                    let searchParams = new URLSearchParams(
                      history.location.search
                    );
                    if (searchTerm) {
                      searchParams.set(SEARCH_QUERY_STRING_PARAM, searchTerm);
                    } else {
                      searchParams.delete(SEARCH_QUERY_STRING_PARAM);
                    }
                    history.push(getUrl(`/shop?${searchParams.toString()}`), {
                      searchTerm
                    });
                  }}
                />
              </div>
            </div>
          )}
        </header>
        <Nav
          nav={nav}
          profileMenu={this.state.profileMenu}
          logo={this.state.logo}
          onSetNavItemActive={onSetNavItemActive}
          isLoggedIn={isLoggedIn}
          url={url}
          groups={groups}
          selectedStoreId={selectedStoreId}
          langs={langs}
          isLoading={isLoading}
        />
      </div>
    );
  }

  static fetchData(store, { path }, { lang, storeId }) {
    return Promise.all([
      store.dispatch(fetchHeader({ path, lang, storeId })),
      store.dispatch(fetchNavigation({ lang, storeId }))
    ]);
  }
}

const mapStateToProps = createStructuredSelector({
  langs: selectLangs,
  cartItemCount: selectItemCount,
  isLoggedIn: selectIsLoggedIn,
  profile: selectProfile,
  nav: selectNav,
  groups: selectGroups,
  selectedStore: selectSelectedStore,
  isLoading: selectIsLoading
});

const mapDispatchToProps = dispatch => ({
  onSetNavItemActive: data => dispatch(setNavItemActive(data)),
  onFetchCart: data => dispatch(fetchCart(data)),
  onFetchHeader: data => dispatch(fetchHeader(data)),
  onFetchNavigation: data => dispatch(fetchNavigation(data))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(
    withTranslations(Header, [
      "myAccount_title",
      "myAccount_myProfile",
      "myAccount_myAddress",
      "myAccount_myOrders",
      "myAccount_myWishlist",
      "myAccount_signOut",
      "search_placeholder",
      "wishlist_icon_text",
      "cart_icon_text",
      "profile_icon_text"
    ])
  )
);
