import React from "react";

const dayKeys = [
  "sundayHours",
  "mondayHours",
  "tuesdayHours",
  "wednesdayHours",
  "thursdayHours",
  "fridayHours",
  "saturdayHours"
];

const StoreLocationFields = ({ location, dayOfWeek, translations }) => (
  <>
    <span className="store-locations-list__item__line store-locations-list__item__line--name">
      {location.get("name")}
    </span>
    <span className="store-locations-list__item__line">
      {`${location.get("address")} ${location.get("city")}`}
    </span>
    <span className="store-locations-list__item__line">
      {location.get("phone")}
    </span>
    <span className="store-locations-list__item__line">
      {`${translations.get("opening-hours") || "Opening hours"}: ${location.get(
        dayKeys[dayOfWeek]
      )}`}
    </span>
  </>
);

export default StoreLocationFields;
