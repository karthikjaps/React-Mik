import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Circle
} from "react-google-maps";

const CIRCLE_COLOUR = "#f00";

const GoogleMapsWrapper = withScriptjs(
  withGoogleMap(props => {
    const { onMapMounted, ...otherProps } = props;
    return (
      <GoogleMap
        {...otherProps}
        ref={c => {
          onMapMounted && onMapMounted(c);
        }}
      >
        {props.children}
      </GoogleMap>
    );
  })
);

class MapForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onMapClicked = this.onMapClicked.bind(this);

    this.state = {
      latitude: process.env.googleMapDefaultLongitude,
      longitude: process.env.googleMapDefaultLongitude,
      hasValue: false
    };

    this.mapMountedPromise = new Promise((resolve, reject) => {
      this.handleMapMounted = c => {
        if (!c || this.mapRef) return;
        this.mapRef = c;
        resolve();
      };
    });
  }

  componentDidMount() {
    const { initialLatitude, initialLongitude } = this.props;
    let isMapWithProp = false;
    if (initialLatitude && initialLatitude) {
      this.setState({ latitude: initialLatitude });
      this.setState({ longitude: initialLongitude });
    } else {
      isMapWithProp = true;
    }

    if (isMapWithProp) {
      if (
        navigator &&
        navigator.geolocation &&
        process.env.googleMapUseGeolocation
      ) {
        navigator.geolocation.getCurrentPosition(
          position => {
            this.setState({ latitude: position.coords.latitude });
            this.setState({ longitude: position.coords.longitude });
            this.props.onPositionChanged(
              position.coords.latitude,
              position.coords.longitude
            );
            this.props.onPositionChanged(
              position.coords.latitude,
              position.coords.longitude
            );

            this.mapMountedPromise.then(() => {
              this.mapRef.panTo(
                new google.maps.LatLng(
                  position.coords.latitude,
                  position.coords.longitude
                )
              );
            });
          },
          error => {
            console.error(error);
          },
          { timeout: 10000 }
        );
      }
    }
  }

  onMapClicked(e) {
    this.setState({ hasValue: true });
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();
    this.props.onPositionChanged(lat, lng);
    this.setState({ latitude: lat });
    this.setState({ longitude: lng });
  }

  render() {
    const googleMapUrl =
      process.env.googleMapAPIUrl + process.env.googleMapAPIKey;
    const {
      initialLatitude,
      initialLongitude,
      defaultZoom,
      loadingElement,
      containerElement,
      mapElement,
      radius
    } = this.props;
    return (
      <GoogleMapsWrapper
        onClick={this.onMapClicked}
        googleMapURL={googleMapUrl}
        onMapMounted={this.handleMapMounted}
        loadingElement={loadingElement}
        containerElement={containerElement}
        mapElement={mapElement}
        defaultZoom={defaultZoom}
        defaultCenter={{
          lat: this.state.latitude,
          lng: this.state.longitude
        }}
      >
        {((initialLatitude && initialLongitude) || this.state.hasValue) && (
          <Circle
            center={{
              lat: this.state.latitude,
              lng: this.state.longitude
            }}
            radius={radius}
            options={{
              fillColor: CIRCLE_COLOUR,
              strokeColor: CIRCLE_COLOUR
            }}
          />
        )}
      </GoogleMapsWrapper>
    );
  }
}

export default MapForm;
