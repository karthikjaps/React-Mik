import React from "react";
import StoreLocationFields from "./storeLocationFields";

const LocationPointer = ({
  key,
  location,
  translations,
  selectedLocationId,
  onSelectLocation,
  dayOfWeek
}) => (
  <div key={key} className="location-pointer">
    {location.get("id") && selectedLocationId === location.get("id") && (
      <div className="location-pointer__label">
        <div className="location-pointer__label__content">
          <img
            src="/img/icons/close_icon_black.svg"
            className="location-pointer__label__close-icon"
            onClick={() => onSelectLocation(location.get("id"))}
          />
          <StoreLocationFields
            location={location}
            dayOfWeek={dayOfWeek}
            translations={translations}
          />
        </div>
      </div>
    )}
    <div
      className="location-pointer__icon"
      onClick={() => onSelectLocation(location.get("id"))}
    >
      <img
        src="/img/icons/map_location.svg"
        className="location-pointer__icon__img"
      />
    </div>
  </div>
);

export default LocationPointer;
