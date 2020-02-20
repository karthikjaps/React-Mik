import React from "react";
import { connect } from "react-redux";
import { Field } from "redux-form/immutable";
import { selectConfigStore } from "../multiStore/reducer";

import { fetchCountries, resetCountries } from "./actions";
import { selectCountries, selectIsLoading } from "./reducer";
import DropDown from "../../components/form/dropDown";
import withTranslations from "../translations/withTranslations";

class Countries extends React.PureComponent {
  componentDidMount() {
    const {
      onLoadCountries,
      countries,
      change,
      name,
      configStore
    } = this.props;

    if (!(countries && countries.size) && configStore && configStore.size) {
      onLoadCountries({
        lang: configStore.get("localeIdentifier").slice(0, 2)
      }).then(() => {
        change(
          name,
          configStore.get("countryCode") === "INT"
            ? ""
            : configStore.get("countryCode")
        );
      });
    }
  }

  componentWillUnmount() {
    this.props.onResetCountries();
  }

  render() {
    const {
      name,
      label,
      countries,
      messages,
      className,
      onChange,
      isLoading,
      readOnly,
      translations,
      configStore
    } = this.props;

    return (
      <Field
        label={label}
        name={name}
        component={DropDown}
        messages={messages}
        className={className}
        material={true}
        disabled={isLoading || readOnly}
      >
        {countries &&
          configStore &&
          (configStore.get("countryCode") === "INT" ? (
            <>
              <option key="-1" value="" className="form-field__input">
                {translations.get("countries_label")}
              </option>
              {countries
                .sort(function(a, b) {
                  if (a < b) {
                    return -1;
                  }
                  if (a > b) {
                    return 1;
                  }
                  return 0;
                })
                .map((value, key) => {
                  return (
                    <option key={index} value={key}>
                      {value}
                    </option>
                  );
                })}
            </>
          ) : (
            <option value={configStore.get("countryCode")}>
              {countries.get(configStore.get("countryCode"))}
            </option>
          ))}
      </Field>
    );
  }

  static fetchData(store, { url }) {
    return null;
    // return store.dispatch(fetchCities({ countryCode: "SA" })); // TODO: Hardcoded for now
  }
}

const mapStateToProps = state => ({
  countries: selectCountries(state),
  isLoading: selectIsLoading(state),
  configStore: selectConfigStore(state)
});

const mapDispatchToProps = dispatch => ({
  onLoadCountries: data => dispatch(fetchCountries(data)),
  onResetCountries: () => dispatch(resetCountries())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslations(Countries, ["countries_label"]));
