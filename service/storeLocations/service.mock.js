import AuthenticatedApiService from "../authenticatedApiService";

export default class StoreLocationsMockService extends AuthenticatedApiService {
  post({ id, url, data }) {
    return Promise.resolve({
      status: "SUCCESS",
      message: ["SUCCESS"],
      data: {
        locations: [
          {
            id: 1,
            city: "Valetta",
            country_id: "MT",
            displayaddress: "Republic Street, National Exhibition Centre",
            friday_hours: "14:00-24:00",
            latitude: "35.899329",
            longitude: "14.514374",
            monday_hours: "10:00-22:00",
            phone: "123456789",
            saturday_hours: "10:00-24:00",
            store_name: "Mikyajy مكياجي",
            sunday_hours: "10:00-22:00",
            thursday_hours: "10:00-24:00",
            tuesday_hours: "10:00-22:00",
            wednesday_hours: "10:00-22:00"
          },
          {
            id: 2,
            city: "Abu Dhabi",
            country_id: "AE",
            displayaddress:
              "MUSHRIF MALL, Abu Dhabi National Exhibition Centre",
            friday_hours: "10:00-24:00",
            latitude: "",
            longitude: "",
            monday_hours: "10:00-22:00",
            phone: "02 665 9245",
            saturday_hours: "10:00-24:00",
            store_name: "Mikyajy مكياجي",
            sunday_hours: "10:00-22:00",
            thursday_hours: "10:00-24:00",
            tuesday_hours: "10:00-22:00",
            wednesday_hours: "10:00-22:00"
          },
          {
            id: 3,
            city: "Riffa",
            country_id: "BH",
            displayaddress: "LULU HYPERMARKET RIFFA",
            friday_hours: "14:00-24:00",
            latitude: "26.123423",
            longitude: " 50.553009",
            monday_hours: "10:00-22:00",
            phone: "",
            saturday_hours: "10:00-24:00",
            store_name: "Mikyajy مكياجي",
            sunday_hours: "10:00-22:00",
            thursday_hours: "10:00-24:00",
            tuesday_hours: "10:00-22:00",
            wednesday_hours: "10:00-22:00"
          },
          {
            id: 4,
            city: "Birkirkara",
            country_id: "MT",
            displayaddress: "Old Street",
            friday_hours: "10:00-22:00",
            latitude: "35.891329",
            longitude: "14.464374",
            monday_hours: "10:00-22:00",
            phone: "123456789",
            saturday_hours: "10:00-24:00",
            store_name: "Mikyajy مكياجي",
            sunday_hours: "10:00-22:00",
            thursday_hours: "10:00-24:00",
            tuesday_hours: "10:00-22:00",
            wednesday_hours: "10:00-22:00"
          },
          {
            id: 5,
            city: "Bugibba",
            country_id: "MT",
            displayaddress: "Long Street",
            friday_hours: "14:00-24:00",
            latitude: "35.951329",
            longitude: "14.414374",
            monday_hours: "10:00-22:00",
            phone: "123456789",
            saturday_hours: "10:00-24:00",
            store_name: "Mikyajy مكياجي",
            sunday_hours: "10:00-22:00",
            thursday_hours: "10:00-24:00",
            tuesday_hours: "10:00-22:00",
            wednesday_hours: "10:00-22:00"
          }
        ]
      }
    });
  }
}
