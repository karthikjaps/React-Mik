import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectGroups, selectSelectedStore } from "./reducer";
import { fetchGroups } from "./actions";
import { getUrlForStore } from "../../../../server/helpers/routing";

class MultiStoreSelector extends React.PureComponent {
  componentDidMount() {
    const { groups, onFetchGroups } = this.props;

    if (!groups.size) {
      onFetchGroups();
    }
  }

  render() {
    const { groups, selectedStore, url, history } = this.props;

    if (selectedStore) {
      return (
        <div className={`header-dropdown profile-popup header-tooltip`}>
          <div className="profile-popup__label">
            <img
              src={selectedStore.get("countryFlag")}
              title={selectedStore.get("name")}
              className="header__icon__img header__icon__img--flag"
            />
          </div>
          <div className="profile-popup__content profile-popup__content--inverse">
            {groups &&
              groups.map(n => (
                <div key={n.get("groupId")} className="profile-popup__item">
                  <img
                    src={n.get("countryFlag")}
                    alt={n.get("name")}
                    title={n.get("name")}
                    className="profile-popup__nav__item__icon"
                  />
                  {n.get("id") === selectedStore.get("id") ? (
                    <span className="profile-popup__item__link profile-popup__item__selected">
                      {n.get("name")}
                    </span>
                  ) : (
                    <a
                      href={`${getUrlForStore(url, n.get("id"))}${
                        history.location.search
                      }`}
                      title={n.get("name")}
                      className="profile-popup__item__link"
                    >
                      {n.get("name")}
                    </a>
                  )}
                </div>
              ))}
          </div>
        </div>
      );
    }

    return null;
  }

  static fetchData(store, {}, { lang, storeId }) {
    return store.dispatch(fetchGroups({ lang, storeId }));
  }
}

const mapStateToProps = createStructuredSelector({
  groups: selectGroups,
  selectedStore: selectSelectedStore
});

const mapDispatchToProps = dispatch => ({
  onFetchGroups: data => dispatch(fetchGroups(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MultiStoreSelector);
