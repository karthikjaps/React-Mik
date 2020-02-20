import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import { fetchQuickLinks, fetchSocial } from "./actions";
import Social from "../../components/social/social";
import withTranslations from "../translations/withTranslations";
import { STORE_ID } from "../../../../service/catalogueConfig/constants";
import { getUrl } from "../../../../server/helpers/routing";
import { selectTrustIcons, selectQuickLinks, selectSocial } from "./reducer";
import TrustIcons from "../../components/social/trustIcons";
// import NewsletterForm from "../../components/newsletter/newsletterForm";

class Footer extends React.PureComponent {
  componentDidMount() {
    const { quickLinks, social } = this.props;
    if (!quickLinks.length) {
      this.props.onFetchQuickLinks({
        storeId: localStorage.getItem("STORE_ID") || STORE_ID
      });
    }
    if (!social.length) {
      this.props.onFetchSocial({
        storeId: localStorage.getItem("STORE_ID") || STORE_ID
      });
    }
  }

  render() {
    const { quickLinks, social, trustIcons, translations } = this.props;

    return (
      <footer className="footer">
        <div className="footer-wrapper">
          <div className="footer-content">
            <TrustIcons icons={trustIcons} />
            <ul className="quick-links">
              {quickLinks.map((n, index) => (
                <li key={index} className="quick-link">
                  <h3 className="quick-link__title">{n.get("title")}</h3>
                  <ul className="quick-link__links">
                    {n.get("links").map((m, index) => (
                      <li key={index} className="quick-link__links-item">
                        {m.get("isInternal") ? (
                          <Link
                            to={getUrl(m.get("url"))}
                            target={m.get("isNewWindow") ? "_blank" : ""}
                            className="quick-link__links-item__link"
                          >
                            {m.get("title")}
                          </Link>
                        ) : (
                          <a
                            href={m.get("url")}
                            target={m.get("isNewWindow") ? "_blank" : ""}
                            rel="noopener"
                            className="quick-link__links-item__link"
                          >
                            {m.get("title")}
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
              <li className={"quick-link newsletter__container"}>
                <h3 className="quick-link__title">
                  {translations.get("footer_followusonsocialmedia")}
                </h3>
                <span className="quick-link__links-item">
                  {translations.get("footer_label")}
                </span>
                {/*<NewsletterForm method="post" /> */}
                <Social links={social} />
              </li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }

  static fetchData(store, { path }, { lang, storeId }) {
    return Promise.all([
      store.dispatch(fetchQuickLinks({ lang, storeId })),
      store.dispatch(fetchSocial({ lang, storeId }))
    ]);
  }
}

const mapStateToProps = createStructuredSelector({
  trustIcons: selectTrustIcons,
  quickLinks: selectQuickLinks,
  social: selectSocial
});

// specifies the behaviour, which callback prop dispatches which action
const mapDispatchToProps = dispatch => ({
  onFetchSocial: data => dispatch(fetchSocial(data)),
  onFetchQuickLinks: data => dispatch(fetchQuickLinks(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslations(Footer, ["footer_label, footer_followusonsocialmedia"]));
