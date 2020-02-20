import React from "react";
import { Link } from "react-router-dom";
import withTranslations from "../../containers/translations/withTranslations";
import { getUrl } from "../../../../server/helpers/routing";

class MultitierMenu extends React.PureComponent {
  render() {
    const { data, className, groups, translations } = this.props;

    return (
      <section
        className={`multitier-menu-section ${
          className ? `multitier-menu-section--${className}` : ""
        }`}
      >
        <ul
          className={`multitier-menu ${
            className ? `multitier-menu--${className}` : ""
          }`}
        >
          {data &&
            data.map(n => (
              <li key={n.get("id")} className="multitier-menu__item">
                <input
                  id={`multitier-menu-item-${n.get("id")}`}
                  className="multitier-menu__item__toggle"
                  type="checkbox"
                  name={`multitier-menu-item-toggle`}
                  defaultChecked={false}
                />
                {n.get("children") && n.get("children").size ? (
                  <label
                    htmlFor={`multitier-menu-item-${n.get("id")}`}
                    className="multitier-menu__item__label"
                  >
                    {n.get("title")}
                  </label>
                ) : (
                  <Link
                    to={getUrl(n.get("url"))}
                    title={n.get("title")}
                    className="multitier-menu__item__label multitier-menu__item__label--no-children"
                    onClick={() => {
                      this.setState({
                        isOverlayVisible: false
                      });
                      this.props.onLinkClick();
                    }}
                  >
                    {n.get("title")}
                  </Link>
                )}
                <ul className="multitier-menu__item__content multitier-submenu">
                  {n.get("children") &&
                    n.get("children").map(m => (
                      <li
                        key={`${m.get("id")}`}
                        className="multitier-submenu__item"
                      >
                        <input
                          id={`multitier-submenu-item-${n.get("id")}-${m.get(
                            "id"
                          )}`}
                          className="multitier-submenu__item__toggle"
                          type="checkbox"
                          name={`multitier-submenu-item-toggle-${n.get(
                            "id"
                          )}-${m.get("id")}`}
                          defaultChecked={false}
                        />
                        {m.get("children") && m.get("children").size ? (
                          <label
                            htmlFor={`multitier-submenu-item-${n.get(
                              "id"
                            )}-${m.get("id")}`}
                            className="multitier-submenu__item__label"
                          >
                            {m.get("title")}
                          </label>
                        ) : (
                          <Link
                            to={getUrl(m.get("url"))}
                            title={m.get("title")}
                            className="multitier-submenu__item__label multitier-submenu__item__label--no-children"
                            onClick={() => {
                              this.setState({
                                isOverlayVisible: false
                              });
                              this.props.onLinkClick();
                            }}
                          >
                            {m.get("title")}
                          </Link>
                        )}
                        <ul className="multitier-submenu__item__content multitier-subsubmenu">
                          {m.get("children") &&
                            m.get("children").map(o => (
                              <li
                                key={`${o.get("id")}`}
                                className="multitier-subsubmenu__item"
                              >
                                <Link
                                  to={getUrl(o.get("url"))}
                                  title={o.get("title")}
                                  className="multitier-subsubmenu__item__link"
                                  onClick={() => {
                                    this.setState({
                                      isOverlayVisible: false
                                    });
                                    this.props.onLinkClick();
                                  }}
                                >
                                  {o.get("title")}
                                  {!!o.get("new") && (
                                    <span className="multitier-item__new__tag">
                                      {translations.get("newTag_menu") || "NEW"}
                                    </span>
                                  )}
                                </Link>
                              </li>
                            ))}
                        </ul>
                      </li>
                    ))}
                </ul>
              </li>
            ))}
        </ul>
      </section>
    );
  }
}

export default withTranslations(MultitierMenu, [
  "desktopMenu_country",
  "newTag_menu"
]);
