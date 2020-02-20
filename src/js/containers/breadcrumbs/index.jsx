import React from "react";
import { connect } from "react-redux";
import { Link, withRouter, matchPath } from "react-router-dom";

import {
  selectRoutes,
  selectProductRoutesByUrl,
  selectCategoryRoutesByUrl
} from "../routes/reducer";
import withTranslations from "../translations/withTranslations";
import { getUrl } from "../../../../server/helpers/routing";

class Breadcrumbs extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      location,
      routes,
      categoryRoutes,
      productRoutes,
      translations
    } = this.props;
    const breadcrumbs = generateBreadcrumbs(
      location.pathname,
      routes,
      categoryRoutes,
      productRoutes,
      translations
    );

    if (!breadcrumbs) {
      return "";
    }

    return (
      <section className="breadcrumbs">
        <div className="breadcrumbs__content">{breadcrumbs}</div>
      </section>
    );
  }
}

const generateBreadcrumbs = (
  path,
  routes,
  categoryRoutes,
  productRoutes,
  translations
) => {
  let paths = path.split("/");

  // remove the last element if there is / at the end of the url
  paths =
    paths[paths.length - 1] === "" ? paths.slice(0, paths.length - 1) : paths;

  // remove the first element if the second one is an empty string which means that we are in the root of the website
  paths = paths[1] === "" ? paths.slice(2) : paths;

  const breadcrumbs = paths
    .map((path, index) => {
      // Add the > symbol only between two links
      const arrow = index !== paths.length - 1 ? " › " : " ";

      // do not show any breadcrumbs if on root
      if (index === 0 && index === paths.length - 1) {
        return;
      }

      // Create the first link
      if (index === 0) {
        return (
          <li className="breadcrumbs__links__item" key={index}>
            <Link className="breadcrumbs__links__item__link" to={getUrl("/")}>
              {translations.get("breadcrumbs_label")}
            </Link>
          </li>
        );
      }

      // Build the path for the current URL
      const url = paths.slice(0, index + 1).join("/");

      const routeCategory = categoryRoutes.find(item => {
        return matchPath(url, {
          path: item.get("url"),
          exact: true
        });
      });
      const routeProduct = productRoutes.find(item => {
        return matchPath(url, {
          path: item.get("url"),
          exact: true
        });
      });
      const route = routeCategory || routeProduct;

      const linkText = (route && route.get("title")) || paths[index];

      if (index === paths.length - 1) {
        return (
          <li className="breadcrumbs__links__item" key={index}>
            <span className="breadcrumbs__links__item__link breadcrumbs__links__item__link--last">
              {linkText}
            </span>
          </li>
        );
      }

      // do not display link to language-store
      if (index === 1) {
        return null;
      }

      // HTML structure for every link except the first
      return (
        <li className="breadcrumbs__links__item" key={index}>
          <Link className="breadcrumbs__links__item__link" to={url}>
            {linkText}
          </Link>
        </li>
      );
    })
    .filter(n => n);

  if (breadcrumbs.length) {
    return <ul className="breadcrumbs__links">{breadcrumbs}</ul>;
  }

  return "";
};

const mapStateToProps = state => ({
  routes: selectRoutes(state),
  categoryRoutes: selectCategoryRoutesByUrl(state),
  productRoutes: selectProductRoutesByUrl(state)
});

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(withTranslations(Breadcrumbs, ["breadcrumbs_label"]))
);
