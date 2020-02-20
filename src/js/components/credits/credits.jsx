import React from "react";
import { Link } from "react-router-dom";
import withTranslations from "../../containers/translations/withTranslations";
import { getUrl } from "../../../../server/helpers/routing";

class Credits extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      mada: {
        src: "/img/icons/credits/mada.png"
      },
      visa: {
        src: "/img/icons/credits/visa.svg"
      },
      mastercard: {
        src: "/img/icons/credits/mastercard.svg"
      }
    };
  }

  render() {
    const { translations } = this.props;
    return (
      <div className="credits">
        <div className="credits-container">
          <div className="credits__block--main">
            <div className="credits__item credits__item--head">
              {translations.size > 0 ? translations.get("credits_head") : ""}
            </div>
            <div className="credits__item">
              <Link
                to={getUrl("/privacy-policy")}
                className="credits__item__link"
              >
                <span>
                  {translations.size > 0
                    ? translations.get("credits_privacy")
                    : ""}
                </span>
              </Link>
            </div>
            <div className="credits__item">
              <Link
                to={getUrl("/terms-conditions")}
                className="credits__item__link"
              >
                <span>
                  {translations.size > 0
                    ? translations.get("credits_terms")
                    : ""}
                </span>
              </Link>
            </div>
          </div>
          <div className="credits__block--aside">
            <div className="credits__item">
              <img className="credits__item__img" src={this.state.mada.src} />
            </div>
            <div className="credits__item">
              <img className="credits__item__img" src={this.state.visa.src} />
            </div>
            <div className="credits__item">
              <img
                className="credits__item__img"
                src={this.state.mastercard.src}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withTranslations(Credits, [
  "credits_head",
  "credits_privacy",
  "credits_terms"
]);
