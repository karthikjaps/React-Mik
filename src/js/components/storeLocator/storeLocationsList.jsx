import React from "react";
import StoreLocationFields from "./storeLocationFields";

const StoreLocationsList = ({
  locations,
  onSelectLocation,
  dayOfWeek,
  selectedLocationId,
  translations
}) => (
  <section
    className={`store-locations-list ${
      selectedLocationId ? "store-locations-list--hidden" : ""
    }`}
  >
    <div className="store-locations-list__title">
      <h1 className="store-locations-list__title__text">
        {translations.get("mikyajy_stores") || "Mikyajy stores"}
      </h1>
    </div>
    <div className="store-locations-list__section">
      {locations &&
        locations.map((n, index) => (
          <div key={index} className="store-locations-list__item">
            <div className="store-locations-list__item__column--first">
              <span
                className="store-locations-list__item__icon"
                onClick={() => onSelectLocation(n.get("id"))}
              >
                <img
                  src="/img/icons/store_location.svg"
                  className="store-locations-list__item__icon__img"
                />
              </span>
            </div>
            <div className="store-locations-list__item__column--second">
              <StoreLocationFields
                location={n}
                dayOfWeek={dayOfWeek}
                translations={translations}
              />
              {n.get("longitude") && n.get("latitude") && (
                <span
                  className="store-locations-list__item__line store-locations-list__item__link"
                  onClick={() => onSelectLocation(n.get("id"))}
                >
                  {translations.get("view_on_map") || "View on map"}
                </span>
              )}
            </div>
          </div>
        ))}
    </div>
  </section>
);

export default StoreLocationsList;
