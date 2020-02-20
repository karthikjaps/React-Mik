import React from "react";
import GoogleMapReact from "google-map-react";
import LocationPointer from "./locationPointer";
import { DEFAULT_CENTER, DEFAULT_ZOOM } from "./constants";

const StoreLocationsMap = ({
  locations,
  translations,
  selectedLocationId,
  onSelectLocation,
  center,
  zoom,
  dayOfWeek
}) => (
  <section
    className={`store-locations-map ${
      selectedLocationId ? "" : "store-locations-map--hidden"
    }`}
  >
    <div className="store-locations-map__title">
      <span
        className="store-locations-map__back"
        onClick={() => onSelectLocation(undefined)}
      >
        {translations.get("map_back") || "Back"}
      </span>
      <h1 className="store-locations-map__title__text">
        {translations.get("mikyajy_stores") || "Mikyajy stores"}
      </h1>
    </div>
    <div className="store-locations-map__wrapper">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBo8RhQnRxVCep1-2bQG7UG6fSCV4FM-vM" }}
        center={center || DEFAULT_CENTER}
        zoom={zoom || DEFAULT_ZOOM}
      >
        {locations &&
          locations.map(n => (
            <LocationPointer
              key={n.get("id")}
              location={n}
              lat={n.get("latitude")}
              lng={n.get("longitude")}
              selectedLocationId={selectedLocationId}
              onSelectLocation={onSelectLocation}
              translations={translations}
              dayOfWeek={dayOfWeek}
            />
          ))}
      </GoogleMapReact>
    </div>
  </section>
);

export default StoreLocationsMap;
