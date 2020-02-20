import React from "react";
import { connect } from "react-redux";
import { Field } from "redux-form/immutable";
import { selectConfigStore } from "../multiStore/reducer";

import { fetchCities, resetCities } from "./actions";
import { selectCities, selectIsLoading } from "./reducer";
import TextBox from "../../components/form/textBox";
import DropDown from "../../components/form/dropDown";
import withTranslations from "../translations/withTranslations";

class Cities extends React.PureComponent {
  componentDidMount() {
    const { onLoadCities, cities, configStore } = this.props;

    if (!(cities && cities.size) && configStore && configStore.size) {
      onLoadCities({
        countryCode: configStore.get("countryCode"),
        lang: configStore.get("localeIdentifier").slice(0, 2)
      });
    }
  }

  componentWillUnmount() {
    this.props.onResetCities();
  }

  render() {
    const {
      name,
      label,
      cities,
      messages,
      className,
      onChange,
      isLoading,
      readOnly,
      translations,
      configStore
    } = this.props;

    if (configStore && configStore.get("countryCode") === "INT") {
      return (
        <Field
          label={label}
          name={name}
          component={TextBox}
          messages={messages}
          className={className}
          material={true}
          disabled={isLoading || readOnly}
        />
      );
    } else {
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
          <option key="-1" value="" className="form-field__input">
            {label}
          </option>
          {cities.map((city, index) => {
            return (
              <option key={index} value={city}>
                {city}
              </option>
            );
          })}
        </Field>
      );
    }
  }

  static fetchData(store, { url }) {
    return null;
    // return store.dispatch(fetchCities({ countryCode: "SA" })); // TODO: Hardcoded for now
  }
}

const mapStateToProps = state => ({
  cities: selectCities(state),
  isLoading: selectIsLoading(state),
  configStore: selectConfigStore(state)
});

const mapDispatchToProps = dispatch => ({
  onLoadCities: data => dispatch(fetchCities(data)),
  onResetCities: () => dispatch(resetCities())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslations(Cities, ["cities_label"]));
