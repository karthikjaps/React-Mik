import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectLangs, selectSelectedLang } from "./reducer";
import { fetchLangs } from "./actions";
import { getTranslations } from "../translations/actions";
import { getUrlForLang } from "../../../../server/helpers/routing";

class MultiLanguageSelector extends React.PureComponent {
  componentDidMount() {
    const { langs, onFetchLangs } = this.props;

    if (!langs.size) {
      onFetchLangs();
    }
  }

  render() {
    const { langs, selectedLang, url, history } = this.props;

    if (selectedLang) {
      return (
        <div className="header-dropdown profile-popup">
          <div className="profile-popup__label--white">
            {selectedLang.get("label")}
          </div>
          <div className="profile-popup__content profile-popup__content--inverse">
            {langs &&
              langs.map(n => (
                <div key={n.get("id")} className="profile-popup__item">
                  {n.get("isActive") ? (
                    <span className="profile-popup__item__link profile-popup__item__selected">
                      {n.get("title")}
                    </span>
                  ) : (
                    <a
                      href={`${getUrlForLang(url, n.get("url"))}${
                        history.location.search
                      }`}
                      title={n.get("title")}
                      className="profile-popup__item__link"
                    >
                      {n.get("title")}
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
    return store.dispatch(fetchLangs({ lang, storeId }));
  }
}

const mapStateToProps = createStructuredSelector({
  langs: selectLangs,
  selectedLang: selectSelectedLang
});

const mapDispatchToProps = dispatch => ({
  onFetchLangs: data => dispatch(fetchLangs(data)),
  onGetTranslations: data => dispatch(getTranslations(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MultiLanguageSelector);
