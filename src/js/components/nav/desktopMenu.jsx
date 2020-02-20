import React from "react";
import { Link } from "react-router-dom";
import debounce from "lodash/debounce";
import SearchForm from "../search/searchForm";
import withTranslations from "../../containers/translations/withTranslations";
import { SEARCH_QUERY_STRING_PARAM } from "../../containers/catalogue/constants";
import { getUrl } from "../../../../server/helpers/routing";

class DesktopMenu extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hoveredMenuId: "",
      subMenuOpen: false,
      navHovered: false,
      searchOpen: false
    };

    this.showMenu = this.showMenu.bind(this);
    this.showSubMenu = this.showSubMenu.bind(this);
    this.hideSubMenu = this.hideSubMenu.bind(this);
    this.searchToggle = this.searchToggle.bind(this);
    this.hideSubMenuFromMainMenu = this.hideSubMenuFromMainMenu.bind(this);
    this.debounceHideSubMenuFromMainMenu = debounce(
      this.hideSubMenuFromMainMenu,
      200
    );
    this.debounceHideSubMenu = debounce(this.hideSubMenu, 100);
  }

  showMenu(id) {
    this.setState({ hoveredMenuId: id, navHovered: true });
  }

  showSubMenu() {
    this.setState({ subMenuOpen: true, navHovered: false });
  }

  hideSubMenu() {
    if (!this.state.navHovered) {
      this.setState({
        hoveredMenuId: "",
        subMenuOpen: false
      });
    }
  }
  hideSubMenuFromMainMenu() {
    if (!this.state.subMenuOpen) {
      this.setState({
        hoveredMenuId: "",
        subMenuOpen: false,
        navHovered: false
      });
    }
  }

  searchToggle() {
    this.setState({ searchOpen: !this.state.searchOpen });
  }

  render() {
    const { data, className, translations, history, isLoading } = this.props;
    const { hoveredMenuId, searchOpen } = this.state;

    let searchParams = new URLSearchParams(history.location.search);
    const initialSearchTerm = searchParams.get(SEARCH_QUERY_STRING_PARAM);

    return (
      <section
        className={className || ""}
        onMouseLeave={this.debounceHideSubMenuFromMainMenu}
      >
        <div className="desktop-menu-container">
          <ul className="desktop-menu">
            {data &&
              data.map(n => (
                <li
                  key={n.get("id")}
                  className={`desktop-menu__item ${
                    n.get("id") === hoveredMenuId
                      ? "desktop-menu__item--visible"
                      : ""
                  }`}
                  onMouseEnter={() => this.showMenu(n.get("id"))}
                >
                  <input
                    id={`desktop-menu-item-${n.get("id")}`}
                    className="desktop-menu__item__toggle"
                    type="radio"
                    name={`desktop-menu-item-toggle`}
                    defaultChecked={false}
                  />
                  <Link
                    to={getUrl(n.get("url"))}
                    title={n.get("title")}
                    className={`desktop-menu__item__label ${
                      n.get("children") && n.get("children").size
                        ? ""
                        : "desktop-menu__item__label--no-children"
                    }`}
                  >
                    {n.get("title")}
                  </Link>
                  <div
                    className="desktop-submenu-wrapper"
                    onMouseEnter={this.showSubMenu}
                    onMouseLeave={this.debounceHideSubMenu}
                  >
                    <ul
                      className={`desktop-submenu ${
                        n.get("children").size > 4
                          ? "desktop-submenu--two-rows"
                          : ""
                      } ${
                        n
                          .get("children")
                          .reduce(
                            (accumulator, item) =>
                              accumulator + item.get("children").size,
                            0
                          ) > 0
                          ? "desktop-submenu--has-subsubitems"
                          : ""
                      }`}
                    >
                      {n.get("children") &&
                        n.get("children").map(m => (
                          <li
                            key={`${m.get("id")}`}
                            className={`desktop-submenu__item ${n.get(
                              "children"
                            ).size > 4 && "desktop-submenu__item--two-rows"}`}
                          >
                            <input
                              id={`desktop-submenu-item-${n.get("id")}-${m.get(
                                "id"
                              )}`}
                              className="desktop-submenu__item__toggle"
                              type="radio"
                              name={`desktop-submenu-item-toggle-${n.get(
                                "id"
                              )}-${m.get("id")}`}
                              defaultChecked={false}
                            />
                            <div className="desktop-submenu-item__container">
                              <Link
                                to={getUrl(m.get("url"))}
                                title={m.get("title")}
                                className={`desktop-submenu__item__label ${
                                  m.get("children").size
                                    ? "desktop-submenu__item__label--has-subsubitems"
                                    : ""
                                }`}
                                onClick={this.hideSubMenu}
                              >
                                {m.get("title")}
                              </Link>
                              {!!m.get("children").size && (
                                <ul className="desktop-submenu__item__content desktop-subsubmenu">
                                  {m.get("children") &&
                                    m.get("children").map(o => (
                                      <li
                                        key={`${o.get("id")}`}
                                        className="desktop-subsubmenu__item"
                                      >
                                        <Link
                                          to={getUrl(o.get("url"))}
                                          title={o.get("title")}
                                          className="desktop-subsubmenu__item__link"
                                          onClick={this.hideSubMenu}
                                        >
                                          {o.get("title")}
                                        </Link>
                                        {!!o.get("new") && (
                                          <span className="desktop-item__new__tag">
                                            {translations.get("newTag_menu") ||
                                              "NEW"}
                                          </span>
                                        )}
                                      </li>
                                    ))}
                                </ul>
                              )}
                            </div>
                          </li>
                        ))}
                    </ul>
                    {n.get("images") && !!n.get("images").size && (
                      <ul
                        className={`desktop-submenu desktop-submenu--images ${
                          n.get("children") && n.get("children").size
                            ? ""
                            : "desktop-submenu--horizontal"
                        }`}
                      >
                        {n.get("images").map((m, index) => (
                          <li
                            key={index}
                            className="desktop-submenu__item desktop-submenu__item--image"
                          >
                            <Link
                              to={getUrl(m.get("url"))}
                              title={m.get("title")}
                              className="desktop-submenu__item__link desktop-submenu__item__link--image"
                              onClick={this.hideSubMenu}
                            >
                              <img
                                src={m.get("imageUrl")}
                                alt={m.get("title")}
                                title={m.get("title")}
                                className="desktop-submenu__item__link__image"
                              />
                              {m.get("title") && (
                                <span className="desktop-submenu__item__link--image__title">
                                  {m.get("title")}
                                </span>
                              )}
                              {m.get("title") && (
                                <span className="desktop-submenu__item__link--image__cta">
                                  {translations.get("desktopMenu_submenu")}
                                </span>
                              )}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </li>
              ))}
          </ul>

          <div className="search-container--desktop">
            {!searchOpen ? (
              <div
                className="search__wrapper"
                onClick={() => this.searchToggle()}
              >
                <span className="search__label">
                  {translations.get("search_placeholder")}
                </span>
                <img
                  src="/img/icons/header/search_icon_black.svg"
                  className="header__icon__img search__icon"
                />
              </div>
            ) : (
              <SearchForm
                action="/shop"
                method="post"
                initialValues={{ search: initialSearchTerm }}
                className="desktop"
                isLoading={isLoading}
                fieldPlaceholder={translations.get("search_placeholder")}
                onSubmit={e => {
                  const searchTerm = e.get("search");
                  let searchParams = new URLSearchParams(
                    history.location.search
                  );
                  if (searchTerm) {
                    searchParams.set(SEARCH_QUERY_STRING_PARAM, searchTerm);
                  } else {
                    searchParams.delete(SEARCH_QUERY_STRING_PARAM);
                    this.searchToggle();
                  }
                  history.push(getUrl(`/shop?${searchParams.toString()}`), {
                    searchTerm
                  });
                }}
              />
            )}
          </div>
        </div>
      </section>
    );
  }
}

export default withTranslations(DesktopMenu, [
  "desktopMenu_submenu",
  "search_placeholder",
  "newTag_menu"
]);
