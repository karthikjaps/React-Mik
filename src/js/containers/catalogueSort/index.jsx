import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { fetchCatalogueConfig } from "./actions";
import { selectSortingOptions, selectIsLoading } from "./reducer";
import { SORT_QUERY_STRING_PARAM } from "../catalogue/constants";
import Overlay from "../../components/overlay/overlay";
import withTranslations from "../translations/withTranslations";

class CatalogueSort extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isOverlayVisible: false
    };
  }

  render() {
    const {
      sortingOptions,
      url,
      queryString,
      translations,
      defaultOption
    } = this.props;
    const searchParams = new URLSearchParams(queryString);
    const sortingOrder =
      searchParams.get(SORT_QUERY_STRING_PARAM) || defaultOption;

    return (
      <div className="catalogue-sort">
        <input
          id="catalogue-sort-checkbox"
          className="catalogue-sort__toggle"
          type="checkbox"
          onClick={() => this.setState({ isOverlayVisible: true })}
        />
        <label
          htmlFor="catalogue-sort-checkbox"
          className="catalogue-sort__label"
        >
          {translations.get("catalogueSort_sort")}
        </label>
        <div className="catalogue-sort__content">
          <div className="catalogue-sort__link">
            <span>{translations.get("catalogueSort_sortby")}</span>
          </div>
          {sortingOptions &&
            sortingOptions.map(n => {
              return (
                n.get("items") &&
                n.get("items").map(m => {
                  searchParams.set(SORT_QUERY_STRING_PARAM, m.get("value"));
                  const src = `${url}?${searchParams.toString()}`;

                  return (
                    <div
                      key={m.get("value")}
                      className={`catalogue-sort__link ${m.get("value") ==
                        sortingOrder && "catalogue-sort__link--active"}`}
                    >
                      <Link
                        to={src}
                        title={n.get("title") + " " + m.get("title")}
                        onClick={() =>
                          setTimeout(() => {
                            this.setState({ isOverlayVisible: false });
                            document.getElementById(
                              "catalogue-sort-checkbox"
                            ).checked = false;
                          }, 200)
                        }
                      >
                        {n.get("title") + " " + m.get("title")}
                      </Link>
                    </div>
                  );
                })
              );
            })}
        </div>
        <Overlay
          className="catalogue-sort__overlay"
          isVisible={this.state.isOverlayVisible}
          onClick={() => {
            this.setState({ isOverlayVisible: false });
            document.getElementById("catalogue-sort-checkbox").checked = false;
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  sortingOptions: selectSortingOptions(state),
  isLoading: selectIsLoading(state)
});

const mapDispatchToProps = dispatch => ({
  onLoadCatalogueConfig: data => dispatch(fetchCatalogueConfig(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  withTranslations(CatalogueSort, [
    "catalogueSort_sort",
    "catalogueSort_sortby"
  ])
);
