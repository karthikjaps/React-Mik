import Modernizr from "modernizr";
import React, { Fragment } from "react";
import { withRouter, Link } from "react-router-dom";

import {
  getParameterByName,
  updateQueryStringParameter,
  removeQueryParameter,
  isElementInViewport
} from "../../util/util";
import Overlay from "../overlay/overlay";
import MultitierMenu from "./multitierMenu";
import DesktopMenu from "./desktopMenu";
import withTranslations from "../../containers/translations/withTranslations";
import {
  getUrl,
  getUrlForLang,
  getUrlForStore
} from "../../../../server/helpers/routing";

const menuQueryItem = "_nav";
const swipeSlope = 5; // reciprocal of the swipe slope (1 means 45 deg, 5 means approx 11 deg)

// This extends PureComponent instead of functional component because we use ref
class Nav extends React.PureComponent {
  constructor(props) {
    super(props);

    const { history, onSetNavItemActive } = this.props;

    history.listen((location, action) => {
      onSetNavItemActive({
        href: location.pathname
      });
    });

    this.handleLinkClick = this.handleLinkClick.bind(this);
    this.toggle = this.toggle.bind(this);
    this.updateHistory = this.updateHistory.bind(this);
    this.updateSlide = this.updateSlide.bind(this);
  }

  componentDidMount() {
    this.init();
  }

  componentDidUpdate() {
    // remove query string params if visible
    history.replaceState(
      null,
      "",
      location.pathname + removeQueryParameter(location.search, menuQueryItem)
    );
  }

  render() {
    const {
      nav,
      profileMenu,
      logo,
      isLoggedIn,
      url,
      groups,
      selectedStoreId,
      langs,
      translations,
      history,
      isLoading
    } = this.props;

    return (
      <Fragment>
        <nav className="nav checkbox">
          <div className="nav__hamburger">
            <input
              type="checkbox"
              id="hamburger"
              ref={n => (this.element = n)}
              className="nav__hamburger__input"
            />
            <label htmlFor="hamburger" className="nav__hamburger__label">
              {translations.get("nav_toggle")}
            </label>
            <div
              className={`nav__side-nav ${
                process.env.ALWAYS_SHOW_NAV
                  ? "nav__side-nav--always-open-on-dekstop"
                  : ""
              }`}
              ref={n => (this.sideBarEl = n)}
            >
              <div className="nav__header">
                <div className="nav-close">
                  <label htmlFor="hamburger" className="nav-close__button" />
                </div>
                {process.env.SHOW_HEADER_LOGO && (
                  <div className="nav__header__logo">
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      title={logo.title}
                      className="nav__header__logo__img"
                    />
                  </div>
                )}
                {!isLoggedIn && (
                  <div className="nav__header__text">
                    <Link
                      to={{
                        pathname: getUrl("/login"),
                        state: { returnUrl: url }
                      }}
                      title="Login"
                      className="nav__header__text__link"
                    >
                      {translations.get("nav_signIn")}
                    </Link>
                  </div>
                )}
              </div>
              <div className="nav__body">
                <MultitierMenu data={nav} onLinkClick={this.handleLinkClick} />
                {/* TODO: this should use the MultitierMenu component */}
                <section className="multitier-menu-section">
                  <div className="multitier-menu multilang-container">
                    <div className="multilang-subtitle">
                      <span>{translations.get("desktopMenu_language")}</span>
                    </div>
                    <div className="multilang-langs-container">
                      {langs &&
                        langs.map(n => (
                          <Fragment key={n.get("id")}>
                            {n.get("isActive") ? (
                              <div className="multilang-item multilang-item--active">
                                <span className="multilang-item__text multilang-item__text--active">
                                  {n.get("title")}
                                </span>
                              </div>
                            ) : (
                              <a
                                href={`${getUrlForLang(
                                  history.location.pathname,
                                  n.get("url")
                                )}${history.location.search}`}
                                title={n.get("title")}
                                className="multilang-item"
                              >
                                <span className="multilang-item__text">
                                  {n.get("title")}
                                </span>
                              </a>
                            )}
                          </Fragment>
                        ))}
                    </div>
                  </div>
                  <div className="multitier-menu multistore-container">
                    <div className="multistore-subtitle">
                      <span>{translations.get("desktopMenu_country")}</span>
                    </div>
                    <div className="multistore-flags-container">
                      {groups &&
                        groups.map(n => (
                          <Fragment key={n.get("id")}>
                            {n.get("id") === selectedStoreId ? (
                              <div className="multistore-item multistore-item--active">
                                <img
                                  src={n.get("countryFlag")}
                                  alt={n.get("title")}
                                  title={n.get("title")}
                                  className="multistore-item__img"
                                />
                                <div className="multistore-item__checked">
                                  <img
                                    src="/img/mock/checked.svg"
                                    alt="selected"
                                    title="selected"
                                    className="multistore-item__checked__icon"
                                  />
                                </div>
                              </div>
                            ) : (
                              <a
                                href={`${getUrlForStore(
                                  history.location.pathname,
                                  n.get("id")
                                )}${history.location.search}`}
                                title={n.get("title")}
                                className="multistore-item"
                              >
                                <img
                                  src={n.get("countryFlag")}
                                  alt={n.get("title")}
                                  title={n.get("title")}
                                  className="multistore-item__img"
                                />
                              </a>
                            )}
                          </Fragment>
                        ))}
                    </div>
                  </div>
                </section>
                {isLoggedIn && (
                  <MultitierMenu
                    data={profileMenu}
                    className="profile"
                    onLinkClick={this.handleLinkClick}
                  />
                )}
              </div>
            </div>
          </div>
        </nav>
        <DesktopMenu
          data={nav}
          history={history}
          className="desktop-menu-section"
          isLoading={isLoading}
        />
        <Overlay className="nav-overlay" ref={n => (this.overlay = n)} />
      </Fragment>
    );
  }

  init() {
    const self = this;
    self.isVisible = false;
    self.startX = 0;
    self.currentX = 0;
    self.touchingSideNav = false;

    self.element.addEventListener("click", e => {
      // toggle the overlay on click of the burger icon
      self.toggle();
    });

    self.overlay.addEventListener("click", e => {
      self.toggle();
    });

    // handle touch gestures to allow swipe out
    let touchX = 0;
    let touchY = 0;

    document.body.addEventListener(
      "touchstart",
      event => {
        if (!self.isVisible) {
          // slide out
          touchX = event.changedTouches[0].clientX;
          touchY = event.changedTouches[0].clientY;
        } else {
          // slide in/slide animation
          self.startX = event.touches[0].pageX;
          self.currentX = self.startX;
          self.touchingSideNav = true;
          self.sideBarEl.classList.add("touching");
          requestAnimationFrame(() => {
            self.updateSlide(self);
          });
        }
      },
      Modernizr.passiveeventlisteners ? { passive: true } : false
    );

    document.body.addEventListener(
      "touchmove",
      event => {
        if (!self.touchingSideNav) {
          return;
        }
        self.currentX = event.touches[0].pageX;
      },
      Modernizr.passiveeventlisteners ? { passive: true } : false
    );

    document.body.addEventListener(
      "touchend",
      event => {
        if (!self.isVisible) {
          if (
            isElementInViewport(self.element) &&
            self.element.parentElement.clientHeight
          ) {
            // calculate the difference
            let x =
              Math.abs(event.changedTouches[0].clientX) - Math.abs(touchX);
            let y =
              Math.abs(event.changedTouches[0].clientY) - Math.abs(touchY);

            if (
              Math.abs(x) > swipeSlope * Math.abs(y) &&
              x > 80 &&
              4 * Math.abs(touchX) < window.innerWidth
            ) {
              // swiped right
              // KF: DISABLED DUE TO UX CONFLICT WITH PRICE SLIDER
              // self.toggle();
            }
          }
        } else {
          if (!self.touchingSideNav) {
            return;
          }
          self.touchingSideNav = false;
          self.sideBarEl.classList.remove("touching");

          const translateX = Math.min(0, self.currentX - self.startX);
          self.sideBarEl.style.transform = "";

          // user slided left by more than 1/3 the width of the sidebar
          if (translateX + self.sideBarEl.clientWidth / 3 < 0) {
            self.toggle();
          }
        }
      },
      Modernizr.passiveeventlisteners ? { passive: true } : false
    );

    window.onpopstate = function(event) {
      // user pressed back/forward button
      if (
        !getParameterByName(menuQueryItem, location.search) &&
        self.isVisible
      ) {
        // hide
        self.toggle(true);
      } else if (
        getParameterByName(menuQueryItem, location.search) &&
        !self.isVisible
      ) {
        // show
        self.toggle(true);
      }
    };

    // remove query string params if visible
    window.history.replaceState(
      null,
      "",
      window.location.pathname +
        removeQueryParameter(location.search, menuQueryItem)
    );
  }

  handleLinkClick(e) {
    // reset the menu
    this.toggle(true);
    setTimeout(() => {
      this.collapseAll();
    }, 300);
  }

  updateSlide(self) {
    if (!self.touchingSideNav) {
      return;
    }
    requestAnimationFrame(() => {
      self.updateSlide(self);
    });

    const translateX = Math.min(0, self.currentX - self.startX);
    self.sideBarEl.style.transform = `translateX(${translateX}px)`;
  }

  updateHistory() {
    if (!this.isVisible) {
      // hide
      window.history.back();
    } else {
      // show
      window.history.pushState(
        null,
        "",
        updateQueryStringParameter(location.search, menuQueryItem, "1")
      );
    }
  }

  collapseAll() {
    Array.from(
      this.element.parentElement.querySelectorAll(
        ".multitier-menu__item__toggle, .multitier-submenu__item__toggle"
      )
    ).forEach(n => (n.checked = false));
  }

  // toggle the overlay and the state of the navigation
  toggle(isFromHistory) {
    const self = this;

    if (
      isElementInViewport(self.element) &&
      self.element.parentElement.clientHeight
    ) {
      self.isVisible = !self.isVisible;

      if (self.isVisible) {
        self.element.checked = true;
      } else {
        self.element.checked = false;
      }

      if (self.isVisible) {
        self.overlay.setVisible(true);
        document.body.style.overflowY = "hidden";
      } else {
        // delay hiding the element to show animation
        setTimeout(() => {
          self.overlay.setVisible(false);
          document.body.style.overflowY = "visible";
          this.sideBarEl.scrollTo(0, 0);
        }, 300);
      }

      self.overlay.toggle();
    }

    if (!isFromHistory) {
      self.updateHistory();
    }
  }
}

export default withRouter(
  withTranslations(Nav, [
    "nav_toggle",
    "nav_signIn",
    "desktopMenu_country",
    "desktopMenu_language"
  ])
);
