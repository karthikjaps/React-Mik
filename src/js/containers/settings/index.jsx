import React from "react";
import { connect } from "react-redux";

import AddToHomeScreen from "../a2hs/a2hs";
import PushNotificationToggle from "../../components/push/push";
import withPage from "../page/withPage";
import { REDUCER_NAME } from "./constants";
import { fetchSettings, setPushEnabled, getSettings } from "./actions";
import { selectIsPushEnabled } from "./reducer";
import { createStructuredSelector } from "reselect";
import withTranslations from "../translations/withTranslations";

class Settings extends React.PureComponent {
  // returns the JSX that will be rendered for this component
  render() {
    const { settings, onSetPushEnabled, translations } = this.props;
    return (
      <section>
        <ul className="setting__list">
          {process.env.ALLOW_PUSH_NOTIFICATON && (
            <li className="setting__list__item">
              <PushNotificationToggle
                title="Push Notifications"
                html="Enable push notifications"
                isPushEnabled={settings.isPushEnabled}
                onSetPushEnabled={onSetPushEnabled}
              />
            </li>
          )}
          <li className="setting__list__item">
            <AddToHomeScreen className="setting__list__item__title">
              {translations.get("settings_label")}
            </AddToHomeScreen>
          </li>
          <li className="setting__list__item">
            <a
              href={process.env.AUTHOR.URL}
              target="_blank"
              className="setting__list__item__title"
            >
              {`About ${process.env.AUTHOR.NAME}`}
            </a>
          </li>
        </ul>
      </section>
    );
  }

  static fetchData(store, { url }) {
    store.dispatch(fetchSettings({ url }));
  }
}

const mapStateToProps = createStructuredSelector({
  isPushEnabled: selectIsPushEnabled
});

const mapDispatchToProps = dispatch => ({
  onSetPushEnabled: data => dispatch(setPushEnabled(data))
});

export default withPage(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(withTranslations(Settings, ["settings_label"])),
  getSettings,
  REDUCER_NAME
);
