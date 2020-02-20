import ApiService from "../apiService";

export default class PaymentMockService extends ApiService {
  constructor() {
    super();

    this.data = [
      {
        id: 1,
        value: "cashondelivery",
        label: "+AED 5 Cash on Delivery Easier way to Pay"
      },
      {
        id: 2,
        value: "payfort_mobile",
        label: "Credit Card Pay with MasterCard, Visa or Visa Electron."
      }
    ];
  }

  saveOrderConfiguration({ data }) {
    return Promise.resolve({
      status: "SUCCESS",
      data: []
    });
  }
}
