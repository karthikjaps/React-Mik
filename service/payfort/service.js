import fetch from "node-fetch";

/**
 * Documentation: https://docs.payfort.com/docs/merchant-page-two/build/index.html#integration-flow
 *
 * 1 The Customer begins the checkout process on the Merchant’s website.
 *
 * 2 The Merchant displays the form he developed to collect the card’s details.
 *
 * 3 The Customer enters the card’s details on the Merchant form.
 *
 * 4 PayFort validates the card format.
 *
 * 5 PayFort creates a token for the card details and sends it back to the Merchant.
 *
 * 6 The Merchant stores the Token and proceeds with the transaction.
 *
 * 7 The Merchant sends a payment request along with the Token to PayFort.
 *
 * 8 PayFort sends the Merchant the 3-D Secure URL, and response indicating that a check is required:
 *
 *     a The Merchant redirects the Customer to check his card enrollment
 *     b The Customer enters authentication data
 *     c 3-D Secure authentication is completed and PayFort receives the authentication results
 *
 * Remember - In this case, PayFort returns status “20: On hold” and message “064: 3-D Secure check requested”. For example, PayFort is waiting for the Merchant to authenticate the Customer.
 * 9 PayFort completes the operation based on the 3-D Secure response and returns the response to the Merchant.
 *
 * 10 The payment results are displayed to the Customer.
 */
export default class PayfortService {
  getTokenizeServiceUrl() {
    if (process.env.NODE_ENV === "development") {
      return `https://sbcheckout.payfort.com/FortAPI/paymentPage`;
    }

    return `https://checkout.payfort.com/FortAPI/paymentPage`;
  }

  getPurchaseServiceUrl() {
    if (process.env.NODE_ENV === "development") {
      return `https://sbpaymentservices.payfort.com/FortAPI/paymentApi`;
    }

    return `https://paymentservices.payfort.com/FortAPI/paymentApi`;
  }

  async tokenize({ data }) {
    const params = new URLSearchParams();

    for (let key in data) {
      params.append(key, data[key]);
    }

    try {
      return fetch(this.getTokenizeServiceUrl(), {
        method: "POST",
        body: params,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
        }
      })
        .then(response => response.text())
        .then(response => response);
    } catch (error) {
      console.error(`Url: ${this.getTokenizeServiceUrl()}, Error: ${error}`);
      throw error;
    }
  }

  async purchase({ data }) {
    try {
      return fetch(this.getPurchaseServiceUrl(), {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(response => response.json())
        .then(response => response);
    } catch (error) {
      console.error(`Url: ${this.getPurchaseServiceUrl()}, Error: ${error}`);
      throw error;
    }
  }
}
