import AuthenticatedApiService from "../authenticatedApiService";

export default class PromotionMockService extends AuthenticatedApiService {
  constructor() {
    super();
    this.promotions = [
      {
        product_id: 2856,
        product_name: "Tool Kit",
        type: "simple",
        product_url: "/promo/tool_kit",
        product_regular_price: 135,
        product_price: 135,
        product_description:
          "Rushing to meet with friends, or to work, or to a casual evening out? One of those times when you procrastinated getting ready and have to be out the door in 10? Tool Kit to the rescue! Power-packed with handy essentials that can help you whip up a quick and chic makeup look. The colors in this kit will complement every outfit you have as it contains gorgeous nudes for lips and, staple blacks and browns for eyes. The 3-in-1 pencils give you the coverage of a matte lipstick, the subtle base of an eyeshadow, and the blendability of a blusher, designed for touch-ups on the go.",
        product_short_description:
          "An all-inclusive kit loaded with everyday essentials for girls on the go! Packed with easy-to-carry lip, eye and cheek staples, this set is all you need for a quick makeup look and touch ups throughout the day.",
        detailed_description:
          "• 2 double-ended Lip Liners in gorgeous nudes. • 2 double-ended Eyeliner/Eyebrow pencils. • 2 triple-action pencils in pink & brown that you can use as lipstick, eyeshadow and blusher. • 1 Mascara, coz no look’s complete without it. • 1 Eye Pencil, coz well, you know! • 1 Lip Gloss in case you don’t feel like matte.",
        product_sku: "202391257",
        discount_percentage: 0,
        max_qty: 10,
        product_rate: 0,
        product_images: [
          "https://mikyajy.ga/magento/media/catalog/product/cache/2/thumbnail/9df78eab33525d08d6e5fb8d27136e95/2/0/202391257_1.png"
        ],
        product_image:
          "https://mikyajy.ga/magento/media/catalog/product/cache/2/thumbnail/9df78eab33525d08d6e5fb8d27136e95/2/0/202391257_1.png",
        manufacturer_name: "",
        brand: "",
        product_review_number: 0,
        star_number_5: 0,
        star_number_4: 0,
        star_number_3: 0,
        star_number_1: 0,
        stock_status: true,
        configurable_attribute: "",
        options: [],
        review: [],
        product_attributes: [
          {
            title: "Made In",
            value: "Germany"
          },
          {
            title: "Detailed Description",
            value:
              "• 2 double-ended Lip Liners in gorgeous nudes. • 2 double-ended Eyeliner/Eyebrow pencils. • 2 triple-action pencils in pink & brown that you can use as lipstick, eyeshadow and blusher. • 1 Mascara, coz no look’s complete without it. • 1 Eye Pencil, coz well, you know! • 1 Lip Gloss in case you don’t feel like matte."
          },
          {
            title: "Product Ingredients",
            value:
              "DUO LIPLINER: HYDROGENATED PALM KERNEL GLYCERIDES, TALC, HYDROGENATED VEGETABLE OIL, CAPRYLIC / CAPRIC TRIGLYCERIDE, HYDRPGENATED, PALM GLYCERIDES, RHUS SUCCEDANEA, TOCOPHEROL, ASCORBYL PALMITATE. MAY CONTAIN: CI 77891, CI 15850, CI 77491, CI 77742, MICA, CI 45380, CI 45410, CI 77492, CI 77499, CI 19140, CI 15985, CI 16035, CI 42090, CI 45370, CI 73360, CI 75470, CI 77163, CI 77947\r\n EYELINER PENCIL: CI 77499, HYDROGENATED PALM KERNEL GLYCERIDES, CAPRYLIC/ CAPRIC TRIGLYCERIDE, HYDROGENATED VEGETABLE OIL, HYDROGENATED PALM GLYCERIDES, RHUS SUCCEDANEA, TALC, TOCOPHEROL, ALOE BARBADENSIS, CHAMOMILLA RECUTITA, GLYCINE SOJA, ASCORBYL PALMITATE, CALENDULA OFFICINALIS\r\n EYEBROW PENCIL: CI 77499, CI77491, CI77492, CI 77510, RHUS SUCCEDANEA, HYDROGENATED COCO-GLYCERIDES, POLYETHYLENE, HYDROGENATED VEGETABLE OIL, CERESIN, CETYL STEARATE, CERA ALBA, TALC, METHYLPARABEN, PROPYLPARABEN, BHT\r\n ALL IN ONE PENCIL PINK: ISODODECANE, POLYBUTENE, SYNTHETIC WAX, CYCLOPENTASILOXANE, CETEARYL BEHENATE, CERA MICROCRISTALLINA, DIMETHYLIMIDAZOLIDINONE RICE STARCH, CAPRYLIC/ CAPRIC, TRIGLYCERIDE, GLYCERYL, CAPRYLATE, PENTAERYTHRITYL TERRA-DI-T-BUTYL HYDROXYHYDROCINNAMATE [+/- : MICA, CI 77891, CI 19140, CI 77499, CI 77491, CI 15850, CI 77492]\r\n ALL IN ONE PENCIL BROWN: ISODODECANE, POLYBUTENE, SYNTHETIC WAX, CYCLOPENTASILOXANE, CETEARYL BEHENATE, CERA MICROCRISTALLINA, DIMETHYLIMIDAZOLIDINONE RICE STARCH, CAPRYLIC/ CAPRIC, TRIGLYCERIDE, GLYCERYL, CAPRYLATE, PENTAERYTHRITYL TERRA-DI-T-BUTYL HYDROXYHYDROCINNAMATE [+/- : MICA, CI 77891, CI 77491, CI 77492, CI 77499]\r\n MASCARA: AQUA, CERA ALBA, C11-12 ISOPARAFFIN, ACACIA SENEGAL GUM, BUTYLENE GLYCOL, MAGNESIUM ALUMINUM SILICATE, CETEARETH-12, ETHYLENE/VA COPOLYMER, CANDELILLA CERA, DISTEARDIMONIUM HECTORITE, VP/HEXADECENE COPOLYMER, PHENOXYETHANOL, CAPRYLYL GLYCOL, ETHYLHEXYGLYCERIN, HYDROXYETHYLCELLULOSE, HYDROLYZED KERATIN, ALCOHOL DENAT, TOCOPHEROL, ASCORBYL PALMITATE, POTASSIUM PHOSPHATE, HELIANTHUS ANNUUS SEED OIL CI 77499, CI77007\r\n EYELINER: AQUA, BUTYLENE GLYCOL, POLYESTER-5, VP/HEXADECENE COPOLYMER, PHENOXYETHANOL, MAGNESIUM ALUMINUM SILICATE, STEARIC ACID, VP/VA COPOLYMER, COPERNICIA CERIFERA CERA, ETHYLHEXYLGLYCERIN, CAPRYLYL GLYCOL, CETYL ALCOHOL, MICROCRYSTALLINE CELLULOSE, XANTHAN GUM, CETEARETH-12, AMINOMETHYL PROPANOL, CELLULOSE GUM, CITRIC ACID, SODIUM ACETATE, CI 77499, CI 77007\r\n LIPGLOSS: SIMMONDSIA, CHNESIS SEED OIL, POLYBUTENE, HYDROGENATED COTTON SEED OIL, SILICA, PHONEXYETHANOL, TOCOPHEROL, PARFUM, ASCORBYL, PALMITATE"
          },
          {
            title: "Size",
            value: "لا"
          }
        ],
        product_media_gallery: [
          {
            type: "image",
            url:
              "https://mikyajy.ga/magento/media/catalog/product/cache/2/thumbnail/9df78eab33525d08d6e5fb8d27136e95/2/0/202391257_1.png",
            thumbnail_image: ""
          },
          {
            type: "video",
            url: "http://www.youtube.com/watch?v=s4dgzf9uSyk",
            thumbnail_image:
              "https://mikyajy.ga/magento/media/iwd_video/img/s4dgzf9uSyk.jpg"
          },
          {
            type: "video",
            url: "http://www.youtube.com/watch?v=sBLp9hwe06k",
            thumbnail_image:
              "https://mikyajy.ga/magento/media/iwd_video/img/sBLp9hwe06k.jpg"
          }
        ],
        related_products: [
          {
            product_id: "3062",
            product_name: "#WowBrows",
            brand: "",
            product_image:
              "https://mikyajy.ga/magento/media/catalog/product/cache/2/thumbnail/600x600/040ec09b1e35df139433887a97daa66f/2/1/211073461_1.png",
            product_regular_price: 119,
            product_price: 119,
            product_url: "/makeup/_wowbrows",
            discount_percentage: -68,
            stock_status: true,
            markdown_price: "",
            multibuy_text: "",
            product_tag: {
              text: null,
              icon: ""
            }
          }
        ],
        upsell_products: [],
        markdown_price: "",
        multibuy_text: "",
        pdp_offer: "",
        product_tag: {
          text: null,
          icon: ""
        },
        product_videos: [
          {
            video_url: "https://www.youtube.com/watch?v=s4dgzf9uSyk",
            image_url: "http://mikyajy.ga/magento/focus/video_placeholder.png"
          },
          {
            video_url: "https://www.youtube.com/watch?v=sBLp9hwe06k",
            image_url: "http://mikyajy.ga/magento/focus/video_placeholder.png"
          }
        ],
        banners: [
          {
            type: "banners",
            data: {
              aspectRatio: 1.13,
              title: "Header Banner",
              NumberernalItemAspectratio: 1,
              welcomeImage: "",
              type: "fullwidth",
              for_app: false,
              items: [
                {
                  image_url:
                    "https://mikyajy.ga/magento/media/focus/product_banner/MAIN_BANNER_2_latest.jpg",
                  redirection_url: "/shop",
                  title: "Lorem ipsum Lorem ipsum",
                  CTA_label: "SHOP NOW",
                  summary:
                    "Check out our crazy deals on all face products online and in-store!",
                  app_redirection_url: "."
                }
              ]
            }
          },
          {
            type: "banners",
            data: {
              aspectRatio: 1,
              title: "Secondary Banners",
              NumberernalItemAspectratio: 1,
              welcomeImage: "",
              type: "secondary",
              for_app: false,
              items: [
                {
                  image_url:
                    "https://mikyajy.ga/magento/media/focus/product_banner/MAIN_BANNER_2_latest.jpg",
                  redirection_url: "/shop",
                  title: "Secondary Banner",
                  CTA_label: null,
                  summary: null,
                  app_redirection_url: "."
                }
              ]
            }
          },
          {
            type: "banners",
            data: {
              aspectRatio: 1.13,
              title: "Product Notification Banner",
              NumberernalItemAspectratio: 1,
              welcomeImage: "",
              type: "subheaderwidth",
              for_app: false,
              items: [
                {
                  image_url:
                    "https://mikyajy.ga/magento/media/focus/product_banner/",
                  redirection_url: "https://mikyajy.com/shop/just_arrived",
                  title:
                    "Free Deliveries And Free COD Deliveries on Orders Above SAR249",
                  CTA_label: "Shop now",
                  summary: null,
                  app_redirection_url: "."
                }
              ]
            }
          }
        ]
      }
    ];
  }

  getProduct({ data: { product_id } }) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          status: "SUCCESS",
          data: [this.promotions.find(n => n.product_id === product_id)]
        });
      }, 300);
    });
  }
}
