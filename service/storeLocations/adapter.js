import { STATUS_SUCCESS, STATUS_FAIL } from "../constants";

export const toStoreLocationsRequest = ({ storeId }) => ({
  store_id: storeId
});

export const toStoreLocations = data => {
  if (data) {
    if (data.status === STATUS_SUCCESS) {
      const { data: responseData } = data;
      return toStoreLocationsArray(responseData.locations);
    }
    if (data.status === STATUS_FAIL) {
      throw Error(data.message);
    }
  }
  return [];
};

export const toStoreLocationsArray = data => {
  if (data && data.length) {
    return data.map(n => toStoreLocation(n));
  }
  return [];
};

export const toStoreLocation = data => {
  if (data) {
    return {
      id: data.id,
      name: data.store_name,
      address: data.displayaddress,
      city: data.city,
      countryId: data.country_id,
      latitude: data.latitude,
      longitude: data.longitude,
      phone: data.phone,
      mondayHours: data.monday_hours,
      tuesdayHours: data.tuesday_hours,
      wednesdayHours: data.wednesday_hours,
      thursdayHours: data.thursday_hours,
      fridayHours: data.friday_hours,
      saturdayHours: data.saturday_hours,
      sundayHours: data.sunday_hours
    };
  }
};
