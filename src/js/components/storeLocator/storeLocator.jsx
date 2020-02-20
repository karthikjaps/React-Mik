import React from "react";
import withTranslations from "../../containers/translations/withTranslations";
import StoreLocationsMap from "./storeLocationsMap";
import StoreLocationsList from "./storeLocationsList";
import { MAP_DATA, DETAILS_ZOOM } from "./constants";

class StoreLocator extends React.PureComponent {
  constructor(props) {
    super(props);

    const today = new Date();
    const dayOfWeek = today.getDay();

    this.state = {
      dayOfWeek,
      selectedLocationId: undefined,
      mapCenter: undefined,
      zoom: undefined
    };
    this.handleSelectLocation = this.handleSelectLocation.bind(this);
  }

  componentDidMount() {
    const { countryCode } = this.props;
    this.setState(MAP_DATA[countryCode]);
  }

  componentDidUpdate(prevProps) {
    const { countryCode } = this.props;
    if (countryCode && countryCode !== prevProps.countryCode) {
      this.setState(MAP_DATA[countryCode]);
    }
  }

  handleSelectLocation(id) {
    const { locations, countryCode } = this.props;

    if (id && id !== this.state.selectedLocationId) {
      this.setState({ selectedLocationId: id });

      const selectedLocation =
        locations && locations.find(n => n.get("id") === id);

      if (
        selectedLocation &&
        parseFloat(selectedLocation.get("latitude")) &&
        parseFloat(selectedLocation.get("longitude"))
      ) {
        this.setState({
          mapCenter: {
            lat: parseFloat(selectedLocation.get("latitude")),
            lng: parseFloat(selectedLocation.get("longitude"))
          },
          zoom: DETAILS_ZOOM
        });
      }
    } else {
      this.setState({
        selectedLocationId: undefined,
        ...MAP_DATA[countryCode]
      });
    }
  }

  render() {
    const { locations, translations } = this.props;

    return (
      <div className="store-locations">
        <StoreLocationsMap
          locations={locations}
          translations={translations}
          selectedLocationId={this.state.selectedLocationId}
          onSelectLocation={this.handleSelectLocation}
          center={this.state.mapCenter}
          zoom={this.state.zoom}
          dayOfWeek={this.state.dayOfWeek}
        />
        <StoreLocationsList
          locations={locations}
          translations={translations}
          selectedLocationId={this.state.selectedLocationId}
          onSelectLocation={this.handleSelectLocation}
          dayOfWeek={this.state.dayOfWeek}
        />
      </div>
    );
  }
}

export default withTranslations(StoreLocator, [
  "mikyajy_stores",
  "opening-hours",
  "view_on_map",
  "map_back"
]);
