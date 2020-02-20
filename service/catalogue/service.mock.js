import AuthenticatedApiService from "../authenticatedApiService";
import { toOffsetLimit } from "./adapter";

let ID = 10000;

export default class CatalogueMockService extends AuthenticatedApiService {
  constructor() {
    super();
    this.products = [
      {
        product_id: "80",
        product_sku: "3607347336914",
        product_name: "Chopard Oud Malaki - Eau de Parfum 80ml",
        product_type: "simple",
        product_description:
          "<p>\r\nChopard Oud Malaki is a Floral fragrance for unisex. A new and distinct language in the world of perfumes that represents you in an elegant and wonderful way. \r\nOnce you apply Chopard Oud Malaki you will notice a lingering quality of warmer and softer hints that hide an essence of elegant and calming feelings.\r\nWith the unique mixture of the floral fresh flowers, Lilies of the valley, Musk, Chocolate and Litchi<br/> \r\n</p>",
        product_short_description:
          "Chopard Oud Malaki is a Floral fragrance for unisex.",
        product_ingredients:
          "flowers, grasses, spices, fruit, wood, roots, resins, balsams, leaves",
        product_tips: "Here will be tips for Chopard Oud Malaki",
        product_regular_price: 485,
        special_price_time_left: 0,
        product_price: 485,
        product_rate: 0,
        discount_percentage: 0,
        stock_status: true,
        max_qty: 3,
        available_quantity: 3,
        product_review_number: 0,
        product_image: "/img/mock/product_81.png",
        product_images: [
          "/img/mock/product_81.png",
          "/img/mock/product_80.png",
          "/img/mock/product_117.png"
        ],
        manufacturer_name: "",
        brand: "CHOPARD"
      },
      {
        product_id: "117",
        product_sku: "3386460058728",
        product_name: "Mont Blanc Emblem Eau de Toilette",
        product_type: "simple",
        product_description:
          "<p>\r\nMont Blanc Emblem Eau de Toilette is a Floral fragrance for unisex. A new and distinct language in the world of perfumes that represents you in an elegant and wonderful way. \r\nOnce you apply Mont Blanc Emblem Eau de Toilette you will notice a lingering quality of warmer and softer hints that hide an essence of elegant and calming feelings.\r\nWith the unique mixture of the floral fresh flowers, Lilies of the valley, Musk, Chocolate and Litchi<br/> \r\n</p>",
        product_short_description:
          "Mont Blanc Emblem Eau de Toilette is a Floral fragrance for unisex.",
        product_ingredients:
          "flowers, grasses, spices, fruit, wood, roots, resins, balsams, leaves",
        product_tips: "Here will be tips for Mont Blanc Emblem Eau de Toilette",
        product_regular_price: 400,
        special_price_time_left: 0,
        product_price: 336,
        product_rate: 0,
        discount_percentage: 15,
        stock_status: true,
        max_qty: 1,
        available_quantity: 1,
        product_review_number: 0,
        product_image: "/img/mock/product_117.png",
        product_images: [
          "/img/mock/product_117.png",
          "/img/mock/product_118.png",
          "/img/mock/product_80.png"
        ],
        manufacturer_name: "",
        brand: "MONT BLANC"
      },
      {
        product_id: "81",
        product_sku: "3607347336915",
        product_name: "Chopard Oud Malaki - Eau de Parfum 80ml",
        product_type: "simple",
        product_description:
          "<p>\r\nChopard Oud Malaki is a Floral fragrance for unisex. A new and distinct language in the world of perfumes that represents you in an elegant and wonderful way. \r\nOnce you apply Chopard Oud Malaki you will notice a lingering quality of warmer and softer hints that hide an essence of elegant and calming feelings.\r\nWith the unique mixture of the floral fresh flowers, Lilies of the valley, Musk, Chocolate and Litchi<br/> \r\n</p>",
        product_short_description:
          "Chopard Oud Malaki is a Floral fragrance for unisex.",
        product_ingredients:
          "flowers, grasses, spices, fruit, wood, roots, resins, balsams, leaves",
        product_tips: "Here will be tips for Chopard Oud Malaki",
        product_regular_price: 485,
        special_price_time_left: 0,
        product_price: 485,
        product_rate: 0,
        discount_percentage: 0,
        stock_status: true,
        max_qty: 3,
        available_quantity: 3,
        product_review_number: 0,
        product_image: "/img/mock/product_81.png",
        product_images: [
          "/img/mock/product_81.png",
          "/img/mock/product_80.png",
          "/img/mock/product_118.png"
        ],
        manufacturer_name: "",
        brand: "CHOPARD"
      },
      {
        product_id: "118",
        product_sku: "3386460058729",
        product_name: "Mont Blanc Emblem Eau de Toilette",
        product_type: "simple",
        product_description:
          "<p>\r\nMont Blanc Emblem Eau de Toilette is a Floral fragrance for unisex. A new and distinct language in the world of perfumes that represents you in an elegant and wonderful way. \r\nOnce you apply Mont Blanc Emblem Eau de Toilette you will notice a lingering quality of warmer and softer hints that hide an essence of elegant and calming feelings.\r\nWith the unique mixture of the floral fresh flowers, Lilies of the valley, Musk, Chocolate and Litchi<br/> \r\n</p>",
        product_short_description:
          "Mont Blanc Emblem Eau de Toilette is a Floral fragrance for unisex.",
        product_ingredients:
          "flowers, grasses, spices, fruit, wood, roots, resins, balsams, leaves",
        product_tips: "Here will be tips for Mont Blanc Emblem Eau de Toilette",
        product_regular_price: 420,
        special_price_time_left: 0,
        product_price: 380,
        product_rate: 0,
        discount_percentage: 10,
        stock_status: true,
        max_qty: 1,
        available_quantity: 1,
        product_review_number: 0,
        product_image: "/img/mock/product_118.png",
        product_images: [
          "/img/mock/product_118.png",
          "/img/mock/product_119.png",
          "/img/mock/product_118.png"
        ],
        manufacturer_name: "",
        brand: "MONT BLANC"
      },
      {
        product_id: "119",
        product_sku: "3386460058730",
        product_name: "Mont Blanc Emblem Eau de Toilette",
        product_type: "simple",
        product_description:
          "<p>\r\nMont Blanc Emblem Eau de Toilette is a Floral fragrance for unisex. A new and distinct language in the world of perfumes that represents you in an elegant and wonderful way. \r\nOnce you apply Mont Blanc Emblem Eau de Toilette you will notice a lingering quality of warmer and softer hints that hide an essence of elegant and calming feelings.\r\nWith the unique mixture of the floral fresh flowers, Lilies of the valley, Musk, Chocolate and Litchi<br/> \r\n</p>",
        product_short_description:
          "Mont Blanc Emblem Eau de Toilette is a Floral fragrance for unisex.",
        product_ingredients:
          "flowers, grasses, spices, fruit, wood, roots, resins, balsams, leaves",
        product_tips: "Here will be tips for Mont Blanc Emblem Eau de Toilette",
        product_regular_price: 420,
        special_price_time_left: 0,
        product_price: 380,
        product_rate: 0,
        discount_percentage: 10,
        stock_status: true,
        max_qty: 1,
        available_quantity: 1,
        product_review_number: 0,
        product_image: "/img/mock/product_119.png",
        product_images: [
          "/img/mock/product_119.png",
          "/img/mock/product_118.png",
          "/img/mock/product_119.png"
        ],
        manufacturer_name: "",
        brand: "MONT BLANC"
      },
      {
        product_id: "189",
        product_sku: "3386460058730",
        product_name: "Matte Comfort Lipstick",
        product_type: "simple",
        product_description:
          "<p>\r\nMont Blanc Emblem Eau de Toilette is a Floral fragrance for unisex. A new and distinct language in the world of perfumes that represents you in an elegant and wonderful way. \r\nOnce you apply Mont Blanc Emblem Eau de Toilette you will notice a lingering quality of warmer and softer hints that hide an essence of elegant and calming feelings.\r\nWith the unique mixture of the floral fresh flowers, Lilies of the valley, Musk, Chocolate and Litchi<br/> \r\n</p>",
        product_short_description:
          "Mont Blanc Emblem Eau de Toilette is a Floral fragrance for unisex.",
        product_ingredients:
          "flowers, grasses, spices, fruit, wood, roots, resins, balsams, leaves",
        product_tips: "Here will be tips for Mont Blanc Emblem Eau de Toilette",
        product_regular_price: 420,
        special_price_time_left: 0,
        product_price: 380,
        product_rate: 0,
        discount_percentage: 10,
        stock_status: false,
        max_qty: 1,
        available_quantity: 1,
        product_review_number: 0,
        product_image: "/img/mock/product_189.png",
        product_images: [
          "/img/mock/product_119.png",
          "/img/mock/product_118.png",
          "/img/mock/product_119.png"
        ],
        manufacturer_name: "",
        brand: "MONT BLANC"
      },
      {
        product_id: "188",
        product_sku: "3386460058730",
        product_name: "Flawless Matt Powder",
        product_type: "simple",
        product_description:
          "<p>\r\nMont Blanc Emblem Eau de Toilette is a Floral fragrance for unisex. A new and distinct language in the world of perfumes that represents you in an elegant and wonderful way. \r\nOnce you apply Mont Blanc Emblem Eau de Toilette you will notice a lingering quality of warmer and softer hints that hide an essence of elegant and calming feelings.\r\nWith the unique mixture of the floral fresh flowers, Lilies of the valley, Musk, Chocolate and Litchi<br/> \r\n</p>",
        product_short_description:
          "Mont Blanc Emblem Eau de Toilette is a Floral fragrance for unisex.",
        product_ingredients:
          "flowers, grasses, spices, fruit, wood, roots, resins, balsams, leaves",
        product_tips: "Here will be tips for Mont Blanc Emblem Eau de Toilette",
        product_regular_price: 420,
        special_price_time_left: 0,
        product_price: 380,
        product_rate: 0,
        discount_percentage: 50,
        stock_status: false,
        max_qty: 1,
        available_quantity: 1,
        product_review_number: 0,
        product_image: "/img/mock/product_187.png",
        product_images: [
          "/img/mock/product_119.png",
          "/img/mock/product_118.png",
          "/img/mock/product_119.png"
        ],
        manufacturer_name: "",
        brand: "MONT BLANC"
      },
      {
        product_id: "186",
        product_sku: "3386460058730",
        product_name: "22K Pro Contour Cream Palette",
        product_type: "simple",
        product_description:
          "<p>\r\nMont Blanc Emblem Eau de Toilette is a Floral fragrance for unisex. A new and distinct language in the world of perfumes that represents you in an elegant and wonderful way. \r\nOnce you apply Mont Blanc Emblem Eau de Toilette you will notice a lingering quality of warmer and softer hints that hide an essence of elegant and calming feelings.\r\nWith the unique mixture of the floral fresh flowers, Lilies of the valley, Musk, Chocolate and Litchi<br/> \r\n</p>",
        product_short_description:
          "Mont Blanc Emblem Eau de Toilette is a Floral fragrance for unisex.",
        product_ingredients:
          "flowers, grasses, spices, fruit, wood, roots, resins, balsams, leaves",
        product_tips: "Here will be tips for Mont Blanc Emblem Eau de Toilette",
        product_regular_price: 420,
        special_price_time_left: 0,
        product_price: 380,
        product_rate: 0,
        discount_percentage: 50,
        stock_status: false,
        max_qty: 1,
        available_quantity: 1,
        product_review_number: 0,
        product_image: "/img/mock/product_186.png",
        product_images: [
          "/img/mock/product_119.png",
          "/img/mock/product_118.png",
          "/img/mock/product_119.png"
        ],
        manufacturer_name: "",
        brand: "MONT BLANC"
      }
    ];
    this.filters = [
      {
        title: "Categories",
        code: "type",
        type: 4,
        is_multiselect: true,
        value: [
          {
            image: "http://18.138.5.71/focus/images/type3.png",
            label: "Makeup",
            id: "18"
          },
          {
            image: "http://18.138.5.71/focus/images/type4.png",
            label: "Accessories",
            id: "19"
          }
        ]
      },
      {
        title: "Color",
        code: "origins",
        type: 5,
        is_multiselect: true,
        value: [
          {
            image: "http://18.138.5.71/focus/images/origin1.png",
            label: "Black",
            id: "24"
          },
          {
            image: "http://18.138.5.71/focus/images/origin2.png",
            label: "Beige",
            id: "22"
          },
          {
            image: "http://18.138.5.71/focus/images/origin3.png",
            label: "Brown",
            id: "23"
          },
          {
            image: "http://18.138.5.71/focus/images/origin3.png",
            label: "Bronze",
            id: "21"
          }
        ]
      },
      {
        title: "Size",
        code: "size",
        type: 2,
        is_multiselect: true,
        value: [
          {
            image: "",
            label: "50 ml",
            id: "61"
          },
          {
            image: "",
            label: "75 ml",
            id: "62"
          },
          {
            image: "",
            label: "85 ml",
            id: "90"
          },
          {
            image: "",
            label: "90 ml",
            id: "33"
          },
          {
            image: "",
            label: "100 ml",
            id: "70"
          },
          {
            image: "",
            label: "120 ml",
            id: "105"
          },
          {
            image: "",
            label: "110 ml",
            id: "69"
          }
        ]
      },
      {
        title: "السعر",
        code: "price",
        type: 1,
        is_multiselect: false,
        value: [
          {
            min: 0,
            max: 3400,
            id: "0-3400"
          }
        ]
      },
      {
        title: "Fragrance",
        code: "fragrance",
        type: 3,
        is_multiselect: true,
        value: [
          {
            image: "",
            label: "Woody",
            id: "16"
          },
          {
            image: "",
            label: "Floral",
            id: "14"
          },
          {
            image: "",
            label: "Oriental",
            id: "15"
          },
          {
            image: "",
            label: "Fresh",
            id: "13"
          }
        ]
      }
    ];
  }

  getProducts({ data: { categoryId, page, pageSize } }) {
    const { offset, limit } = toOffsetLimit({ page, pageSize });

    let products = [];
    if (isNaN(offset) || isNaN(limit)) {
      products = this.products;
    } else {
      products = this.products.slice(offset, limit + offset);
    }

    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          status: "SUCCESS",
          message: [40],
          data: {
            category_title: "Powder",
            pageCount: Math.ceil(this.products.length / pageSize),
            itemCount: this.products.length,
            products: products.sort(() => Math.random() - 0.5)
          }
        });
      }, 300);
    });
  }

  getFilters({ data }) {
    return Promise.resolve({
      status: "SUCCESS",
      message: ["SUCCESS"],
      data: {
        filter: this.filters
      }
    });
  }

  getProduct({ data: { product_id } }) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          status: "SUCCESS",
          data: [this.products.find(n => n.product_id === product_id)]
        });
      }, 300);
    });
  }
}
