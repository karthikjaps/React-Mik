import AuthenticatedApiService from "../authenticatedApiService";

export default class CatalogueConfigMockService extends AuthenticatedApiService {
  constructor() {
    super();
    this.catalogueConfigurations = [
      {
        store_config: {
          country_code: "SA",
          country_name: "Saudi Arabia",
          locale_identifier: "en_US",
          currency_symbol: null,
          currency_code: "SAR",
          store_id: 1,
          store_name: "English"
        },
        sorting_options: [
          {
            title: "Price",
            items: [
              {
                title: "Low To High",
                value: 1,
                image: "http://18.138.5.71//focus/images/price_h_l.png"
              },
              {
                title: "High To Low",
                value: 2,
                image: "http://18.138.5.71//focus/images/price_l_h.png"
              }
            ]
          },
          {
            title: "Name",
            items: [
              {
                title: "A To Z",
                value: 3,
                image: "http://18.138.5.71//focus/images/a-z.png"
              },
              {
                title: "Z To A",
                value: 4,
                image: "http://18.138.5.71//focus/images/z-a.png"
              }
            ]
          },
          {
            title: "Availability",
            items: [
              {
                title: "Low To High",
                value: 5,
                image: "http://18.138.5.71//focus/images/availability.png"
              },
              {
                title: "High To Low",
                value: 6,
                image: "http://18.138.5.71//focus/images/availability.png"
              }
            ]
          },
          {
            title: "Popularity",
            items: [
              {
                title: "Low To High",
                value: 7,
                image: "http://18.138.5.71//focus/images/popular.png"
              },
              {
                title: "High To Low",
                value: 8,
                image: "http://18.138.5.71//focus/images/popular.png"
              }
            ]
          }
        ]
      }
    ];
  }

  getCatalogueConfig(data) {
    return Promise.resolve({
      status: "SUCCESS",
      data: [
        this.catalogueConfigurations.find(
          n => n.store_config.store_id == data.storeId
        )
      ]
    });
  }
}
