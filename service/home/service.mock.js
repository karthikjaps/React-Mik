import AuthenticatedApiService from "../authenticatedApiService";

export default class HomeMockService extends AuthenticatedApiService {
  constructor() {
    super();
    this.homeContent = [
      {
        type: "banners",
        data: {
          aspectRatio: 1.13,
          title: "Header Banner",
          NumberernalItemAspectratio: 1,
          welcomeImage:
            "https://mikyajy.com/magento/focus/home/images/banner.png",
          type: "fullwidth",
          items: [
            {
              image_url:
                "https://mikyajy.com/magento/focus/header_banner/Banner1.jpg",
              redirection_url:
                "/shop/gifts/all_gifts/mad_about_matte_lip_cream",
              title: "When in Doubt, Matte it Out",
              CTA_label: "Shop Now",
              summary: "4 lip creams that give an immaculate matte finish "
            },
            {
              image_url:
                "https://mikyajy.com/magento/focus/header_banner/Banner2.jpg",
              redirection_url: "/shop/fragrance/gift_sets",
              title: "An Irresistible Aroma of Passion",
              CTA_label: "Shop Now",
              summary: "Layer it up with Shower Gel, Body Lotion & Body Mist"
            },
            {
              image_url:
                "https://mikyajy.com/magento/focus/header_banner/Banner3.jpg",
              redirection_url:
                "/shop/gifts/all_gifts/tempting_mattes_212464149",
              title: "For the Love of Marvelous Mattes",
              CTA_label: "Shop Now",
              summary: "3 trendy matte shades for day-to-night glamour"
            }
          ]
        }
      },
      {
        type: "products",
        data: {
          title: "BEST SELLERS",
          aspectRatio: 1.13,
          NumberernalItemAspectratio: 1,
          welcomeImage:
            "https://mikyajy.com/magento/focus/home/images/banner.png",
          type: "grid",
          items: [
            {
              product_id: "3622",
              product_sku: "207388479",
              product_name: "Line & Shadow Kohl Pencil-207388479",
              product_regular_price: 42,
              product_price: 42,
              discount_percentage: 0,
              product_rate: 0,
              stock_status: true,
              product_review_number: 0,
              product_image:
                "https://mikyajy.com/magento/media/catalog/product/cache/0/thumbnail/600x600/040ec09b1e35df139433887a97daa66f/2/0/207388479_101_1.png",
              product_url:
                "/gifts/bestsellers/line_shadow_kohl_pencil_207388479"
            },
            {
              product_id: "3667",
              product_sku: "207687612",
              product_name: "Censored Collection ",
              product_regular_price: 159,
              product_price: 159,
              discount_percentage: 0,
              product_rate: 0,
              stock_status: true,
              product_review_number: 0,
              product_image:
                "https://mikyajy.com/magento/media/catalog/product/cache/0/thumbnail/600x600/040ec09b1e35df139433887a97daa66f/2/0/207687612_1.png",
              product_url: "/gifts/all_gifts/censored_collection_"
            },
            {
              product_id: "4045",
              product_sku: "212433318",
              product_name: "Lips & Tips-212433318",
              product_regular_price: 59,
              product_price: 59,
              discount_percentage: 0,
              product_rate: 0,
              stock_status: true,
              product_review_number: 0,
              product_image:
                "https://mikyajy.com/magento/media/catalog/product/cache/0/thumbnail/600x600/040ec09b1e35df139433887a97daa66f/2/1/212433318_1.png",
              product_url: "/gifts/all_gifts/lips_tips_212433318"
            },
            {
              product_id: "4048",
              product_sku: "212464157",
              product_name: "Mad About Matte Lip Cream",
              product_regular_price: 99,
              product_price: 99,
              discount_percentage: 0,
              product_rate: 0,
              stock_status: false,
              product_review_number: 0,
              product_image:
                "https://mikyajy.com/magento/media/catalog/product/cache/0/thumbnail/600x600/040ec09b1e35df139433887a97daa66f/2/1/212464157_1.png",
              product_url: "/gifts/all_gifts/mad_about_matte_lip_cream"
            }
          ]
        }
      },
      {
        type: "products",
        data: {
          title: "Just Arrived",
          aspectRatio: 1.13,
          NumberernalItemAspectratio: 1,
          welcomeImage:
            "https://mikyajy.com/magento/focus/home/images/banner.png",
          type: "grid",
          items: [
            {
              product_id: "4042",
              product_sku: "212432471",
              product_name: "Censored Collection Refillable Travel Sprays",
              product_regular_price: 99,
              product_price: 99,
              discount_percentage: 0,
              product_rate: 0,
              stock_status: true,
              product_review_number: 0,
              product_image:
                "https://mikyajy.com/magento/media/catalog/product/cache/0/thumbnail/600x600/040ec09b1e35df139433887a97daa66f/2/1/212432471_1.png",
              product_url:
                "/gifts/all_gifts/censored_collection_refillable_travel_sprays"
            },
            {
              product_id: "4049",
              product_sku: "212464165",
              product_name: "Diva Nail Collection",
              product_regular_price: 99,
              product_price: 99,
              discount_percentage: 0,
              product_rate: 0,
              stock_status: true,
              product_review_number: 0,
              product_image:
                "https://mikyajy.com/magento/media/catalog/product/cache/0/thumbnail/600x600/040ec09b1e35df139433887a97daa66f/2/1/212464165_1.png",
              product_url: "/makeup/nails/nail_kit/diva_nail_collection"
            },
            {
              product_id: "4051",
              product_sku: "212464181",
              product_name: "Perfect Eye Definer Kit",
              product_regular_price: 129,
              product_price: 129,
              discount_percentage: 0,
              product_rate: 0,
              stock_status: true,
              product_review_number: 0,
              product_image:
                "https://mikyajy.com/magento/media/catalog/product/cache/0/thumbnail/600x600/040ec09b1e35df139433887a97daa66f/2/1/212464181_1.png",
              product_url: "/gifts/all_gifts/perfect_eye_definer_kit"
            },
            {
              product_id: "4052",
              product_sku: "212464190",
              product_name: "Super Glam Makeup And Brush Kit",
              product_regular_price: 199,
              product_price: 199,
              discount_percentage: 0,
              product_rate: 0,
              stock_status: true,
              product_review_number: 0,
              product_image:
                "https://mikyajy.com/magento/media/catalog/product/cache/0/thumbnail/600x600/040ec09b1e35df139433887a97daa66f/2/1/212464190_1.png",
              product_url: "/gifts/all_gifts/super_glam_makeup_and_brush_kit"
            }
          ]
        }
      },
      {
        type: "banners",
        data: {
          aspectRatio: 1.13,
          title: "Secondary Banner",
          NumberernalItemAspectratio: 1,
          welcomeImage:
            "https://mikyajy.com/magento/focus/home/images/banner.png",
          type: "3column",
          items: [
            {
              video_url: "https://www.youtube.com/embed/tgbNymZ7vqY",
              title: "Video",
              CTA_label: "Video Test"
            },
            {
              image_url:
                "https://mikyajy.com/magento/focus/header_banner/SEC_BANNER_2_DESK_674x329.jpg",
              redirection_url: "/shop/gifts/all_gifts/pink_chic",
              title: "Charmingly Chic",
              CTA_label: "Shop Now"
            },
            {
              image_url:
                "https://mikyajy.com/magento/focus/header_banner/SEC_BANNER_3_DESK_329x329.jpg",
              redirection_url: "/shop",
              title: "A Mini Vanity Case",
              CTA_label: "Avail the Offer"
            }
          ]
        }
      },
      {
        type: "banners",
        data: {
          aspectRatio: 1.13,
          title: "Footer Banners",
          NumberernalItemAspectratio: 1,
          welcomeImage:
            "https://mikyajy.com/magento/focus/home/images/banner.png",
          type: "2column",
          items: [
            {
              image_url:
                "https://mikyajy.com/magento/focus/header_banner/Desktop_674_x_677.jpg",
              redirection_url: "/shop/just_arrived",
              title: "Ramadan Gifting",
              CTA_label: "Shop Now"
            },
            {
              image_url:
                "https://mikyajy.com/magento/focus/header_banner/CC_IMAGE_DESK_674x677.jpg",
              redirection_url: "http://www.mikyajycc.com/",
              title: "MIKYAJY CREATORS CLUB",
              CTA_label: "JOIN NOW"
            }
          ]
        }
      },
      {
        type: "banners",
        data: {
          aspectRatio: 1.13,
          title: "Mobile Banners",
          NumberernalItemAspectratio: 1,
          welcomeImage:
            "https://mikyajy.com/magento/focus/home/images/banner.png",
          type: "mobilewidth",
          items: [
            {
              image_url:
                "https://mikyajy.com/magento/focus/header_banner/MAIN_BANNER_1_MOB_750x914.jpg",
              redirection_url:
                "/shop/gifts/all_gifts/mad_about_matte_lip_cream",
              title: "When in Doubt, Matte it Out",
              CTA_label: "Shop Now",
              summary: "4 lip creams that give an immaculate matte finish "
            },
            {
              image_url:
                "https://mikyajy.com/magento/focus/header_banner/MAIN_BANNER_2_MOBILE_750x914px.jpg",
              redirection_url: "/shop/fragrance/gift_sets",
              title: "An Irresistible Aroma of Passion",
              CTA_label: "Shop Now",
              summary: "Layer it up with Shower Gel, Body Lotion & Body Mist"
            },
            {
              image_url:
                "https://mikyajy.com/magento/focus/header_banner/MAIN_BANNER_3_MOBILE_750x914px.jpg",
              redirection_url:
                "/shop/gifts/all_gifts/tempting_mattes_212464149",
              title: "For the Love of Marvelous Mattes",
              CTA_label: "Shop Now",
              summary: "3 trendy matte shades for day-to-night glamour"
            }
          ]
        }
      }
    ];
  }

  getHomeContent() {
    return Promise.resolve({
      status: "SUCCESS",
      message: ["SUCCESS"],
      data: this.homeContent
    });
  }
}
