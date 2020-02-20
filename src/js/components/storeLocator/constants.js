export const DETAILS_ZOOM = 12;

export const MAP_DATA = {
  AE: {
    mapCenter: {
      lat: 25.198682, // Dubai
      lng: 55.279872
    },
    zoom: 7
  },
  SA: {
    mapCenter: {
      lat: 24.73846, // Riyadh
      lng: 46.721397
    },
    zoom: 5
  }
};

export const DEFAULT_CENTER = MAP_DATA["SA"].mapCenter;
export const DEFAULT_ZOOM = MAP_DATA["SA"].zoom;
