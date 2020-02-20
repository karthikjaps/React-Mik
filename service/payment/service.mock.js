import ApiService from "../apiService";

export default class PaymentMockService extends ApiService {
  placeOrder({ data }) {
    return Promise.resolve({
      status: "SUCCESS",
      message: ["Thank you for your purchase!"],
      data: {
        order_date: "2019-05-03 07:22:42",
        order_total: 400,
        order_number: "110001580",
        billing_phone: "9712000339",
        shipping_phone: "9712000339",
        payment_method: "Cash on Delivery",
        contact_config: {
          email: "support@mikyajy.com",
          contact_phone: "8001242030",
          whatsapp_contact_phone: "966559774497",
          contact_message: "Please fill the contact form for any queries"
        },
        order_status: "Waiting for confirmation"
      }
    });
  }

  savePaymentMethod({ data }) {
    return Promise.resolve({
      status: "SUCCESS",
      data: [
        {
          fee: {
            sub_total: 68200,
            grand_total: 68200,
            discount: 0,
            tax: 0,
            coupon_code: "",
            discount_percentage: "0%",
            sub_total_after_discount: 68200,
            subtotal_after_discount: 68200,
            is_coupon_applied: false,
            shipping_hand: 0,
            cod_fee: 0,
            v2: {
              subtotal: 68200,
              grand_total: 68200,
              cod_fee: null,
              shipping_hand: 0,
              payment_name: "COD",
              payment_fee: null
            }
          }
        }
      ]
    });
  }
}
