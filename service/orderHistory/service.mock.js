import AuthenticatedApiService from "../authenticatedApiService";

export default class OrderHistoryMockService extends AuthenticatedApiService {
  getOrderHistory({ data }) {
    return Promise.resolve({
      status: "SUCCESS",
      message: ["SUCCESS"],
      data: [
        {
          order_id: "800000072",
          order_status: "في انتظار التاكيد",
          is_cancel: true,
          order_date: "2019-07-09 11:55:36",
          order_date_formatted: "Jul 09, 2019 11:55 AM",
          order_total: 138,
          coupon_code: "",
          recipient: "Michal Test",
          order_items: [
            {
              product_name: "Limited Edition Pencils On The Go",
              product_image:
                "https://d1mtmoz9htnetc.cloudfront.net/catalog/product/cache/2/thumbnail/600x600/040ec09b1e35df139433887a97daa66f/placeholder/default/mikyajy_logo_1000x1000_2.png",
              price: 69,
              qty: 1
            },
            {
              product_name: "Glam Girl Beyond Bronze",
              product_image:
                "https://d1mtmoz9htnetc.cloudfront.net/catalog/product/cache/2/thumbnail/600x600/040ec09b1e35df139433887a97daa66f/2/1/212152292_1.png",
              price: 89,
              qty: 1
            }
          ]
        },
        {
          order_id: "800000071",
          order_status: "في انتظار التاكيد",
          is_cancel: true,
          order_date: "2019-07-09 11:02:15",
          order_date_formatted: "Jul 09, 2019 11:02 AM",
          order_total: 42,
          coupon_code: "",
          recipient: "Michal Test",
          order_items: [
            {
              product_name: "Line & Shadow Kohl Pencil-207388479",
              product_image:
                "https://d1mtmoz9htnetc.cloudfront.net/catalog/product/cache/2/thumbnail/600x600/040ec09b1e35df139433887a97daa66f/placeholder/default/mikyajy_logo_1000x1000_2.png",
              price: 42,
              qty: 1
            }
          ]
        },
        {
          order_id: "800000064",
          order_status: "في انتظار التاكيد",
          is_cancel: true,
          order_date: "2019-06-27 07:01:37",
          order_date_formatted: "Jun 27, 2019 07:01 PM",
          order_total: 159,
          coupon_code: "",
          recipient: "Michal Test",
          order_items: [
            {
              product_name: "Censored Collection ",
              product_image:
                "https://d1mtmoz9htnetc.cloudfront.net/catalog/product/cache/2/thumbnail/600x600/040ec09b1e35df139433887a97daa66f/placeholder/default/mikyajy_logo_1000x1000_2.png",
              price: 159,
              qty: 1
            }
          ]
        },
        {
          order_id: "800000063",
          order_status: "في انتظار التاكيد",
          is_cancel: true,
          order_date: "2019-06-27 06:59:16",
          order_date_formatted: "Jun 27, 2019 06:59 PM",
          order_total: 159,
          coupon_code: "",
          recipient: "Michal Test",
          order_items: [
            {
              product_name: "Censored Collection ",
              product_image:
                "https://d1mtmoz9htnetc.cloudfront.net/catalog/product/cache/2/thumbnail/600x600/040ec09b1e35df139433887a97daa66f/placeholder/default/mikyajy_logo_1000x1000_2.png",
              price: 159,
              qty: 1
            }
          ]
        },
        {
          order_id: "800000062",
          order_status: "في انتظار التاكيد",
          is_cancel: true,
          order_date: "2019-06-27 06:56:33",
          order_date_formatted: "Jun 27, 2019 06:56 PM",
          order_total: 85,
          coupon_code: "",
          recipient: "Michal Test",
          order_items: [
            {
              product_name: "22K Perfecting Make Up Primer 101",
              product_image:
                "https://d1mtmoz9htnetc.cloudfront.net/catalog/product/cache/2/thumbnail/600x600/040ec09b1e35df139433887a97daa66f/placeholder/default/mikyajy_logo_1000x1000_2.png",
              price: 85,
              qty: 1
            }
          ]
        },
        {
          order_id: "800000061",
          order_status: "في انتظار التاكيد",
          is_cancel: true,
          order_date: "2019-06-27 06:53:46",
          order_date_formatted: "Jun 27, 2019 06:53 PM",
          order_total: 39,
          coupon_code: "",
          recipient: "Michal Test",
          order_items: [
            {
              product_name: "Lips & Tips-212433318",
              product_image:
                "https://d1mtmoz9htnetc.cloudfront.net/catalog/product/cache/2/thumbnail/600x600/040ec09b1e35df139433887a97daa66f/placeholder/default/mikyajy_logo_1000x1000_2.png",
              price: 59,
              qty: 1
            }
          ]
        },
        {
          order_id: "800000060",
          order_status: "في انتظار التاكيد",
          is_cancel: true,
          order_date: "2019-06-27 06:36:04",
          order_date_formatted: "Jun 27, 2019 06:36 PM",
          order_total: 39,
          coupon_code: "",
          recipient: "Michal Test",
          order_items: [
            {
              product_name: "Lips & Tips-212433318",
              product_image:
                "https://d1mtmoz9htnetc.cloudfront.net/catalog/product/cache/2/thumbnail/600x600/040ec09b1e35df139433887a97daa66f/placeholder/default/mikyajy_logo_1000x1000_2.png",
              price: 59,
              qty: 1
            }
          ]
        },
        {
          order_id: "800000059",
          order_status: "في انتظار التاكيد",
          is_cancel: true,
          order_date: "2019-06-27 05:23:56",
          order_date_formatted: "Jun 27, 2019 05:23 PM",
          order_total: 39,
          coupon_code: "",
          recipient: "Michal Test",
          order_items: [
            {
              product_name: "Lips & Tips-212433318",
              product_image:
                "https://d1mtmoz9htnetc.cloudfront.net/catalog/product/cache/2/thumbnail/600x600/040ec09b1e35df139433887a97daa66f/placeholder/default/mikyajy_logo_1000x1000_2.png",
              price: 59,
              qty: 1
            }
          ]
        },
        {
          order_id: "800000058",
          order_status: "في انتظار التاكيد",
          is_cancel: true,
          order_date: "2019-06-27 05:19:54",
          order_date_formatted: "Jun 27, 2019 05:19 PM",
          order_total: 69,
          coupon_code: "",
          recipient: "Michal Test",
          order_items: [
            {
              product_name: "Mad About Matte Lip Cream",
              product_image:
                "https://d1mtmoz9htnetc.cloudfront.net/catalog/product/cache/2/thumbnail/600x600/040ec09b1e35df139433887a97daa66f/placeholder/default/mikyajy_logo_1000x1000_2.png",
              price: 99,
              qty: 1
            }
          ]
        },
        {
          order_id: "800000057",
          order_status: "في انتظار التاكيد",
          is_cancel: true,
          order_date: "2019-06-27 05:13:00",
          order_date_formatted: "Jun 27, 2019 05:13 PM",
          order_total: 39,
          coupon_code: "",
          recipient: "Michal Test",
          order_items: [
            {
              product_name: "Lips & Tips-212433318",
              product_image:
                "https://d1mtmoz9htnetc.cloudfront.net/catalog/product/cache/2/thumbnail/600x600/040ec09b1e35df139433887a97daa66f/placeholder/default/mikyajy_logo_1000x1000_2.png",
              price: 59,
              qty: 1
            }
          ]
        }
      ]
    });
  }
}
