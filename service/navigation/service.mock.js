import AuthenticatedApiService from "../authenticatedApiService";

export default class NavigationMockService extends AuthenticatedApiService {
  constructor() {
    super();

    this.data = [
      {
        type: "banners",
        data: {
          aspectRatio: 1.13,
          title: "Header Banner",
          NumberernalItemAspectratio: 1,
          welcomeImage: "http://52.77.143.184/focus/home/images/banner.png",
          type: "fullwidth",
          items: [
            {
              image_url: "http://18.138.5.71/focus/banners/main_banner1.png",
              redirection_url: null,
              title: "A Perfect Gift for Fab Fashionistas",
              CTA_label: "Shop Now",
              summary: "Color-matched lip creams, lip pencils & nail enamels"
            },
            {
              image_url: "http://18.138.5.71/focus/banners/main_banner2.png",
              redirection_url: null,
              title: "Steal the Show & Make a Statement",
              CTA_label: "Shop Now",
              summary: "24 eyeshadows in matte, shimmer & metallic tones"
            },
            {
              image_url: "http://18.138.5.71/focus/banners/main_banner3.png",
              redirection_url: null,
              title: "A Set of Enchanting Mini Perfumes",
              CTA_label: "Shop Now",
              summary: "4 of Mikyajy's fave Eau De Parfums in travel-size minis"
            }
          ]
        }
      },
      {
        type: "categories",
        data: {
          aspectRatio: 1.13,
          title: "WHAT YOU MAY LIKE ",
          NumberernalItemAspectratio: 1,
          welcomeImage: "http://52.77.143.184/focus/home/images/Winter.png",
          type: "horizontallist",
          items: [
            {
              category_name: "Makeup",
              category_title: "Makeup",
              category_id: "122",
              category_image:
                "http://52.77.143.184/media/catalog/category/men_1__1.png",
              image_thumbnail:
                "http://52.77.143.184/media/catalog/category/men_1_.png",
              children: [],
              products: []
            },
            {
              category_name: "face",
              category_title: "face",
              category_id: "122",
              category_image:
                "http://52.77.143.184/media/catalog/category/unisex.png",
              image_thumbnail:
                "http://52.77.143.184/media/catalog/category/unisex_1.png",
              children: [],
              products: []
            },
            {
              category_name: "Accessories",
              category_title: "Accessories",
              category_id: "123",
              category_image:
                "http://52.77.143.184/media/catalog/category/Group_5076_3x.png",
              image_thumbnail:
                "http://52.77.143.184/media/catalog/category/banner_1.png",
              children: [],
              products: []
            },
            {
              category_name: "Gift Sets & Accessories",
              category_title: "GIFT SETS & ACCESSORIES",
              category_id: "125",
              category_image:
                "http://52.77.143.184/media/catalog/category/gifts_accessories_1_1.png",
              image_thumbnail:
                "http://52.77.143.184/media/catalog/category/gifts_accessories_1.png",
              children: [],
              products: []
            }
          ]
        }
      },
      {
        type: "categories",
        data: {
          aspectRatio: 1.13,
          title: "CATEGORIES",
          NumberernalItemAspectratio: 1,
          welcomeImage:
            "http://localhost/mikayjy_m1/focus/home/images/banner.png",
          type: "complex_grid",
          items: [
            {
              category_name: "Makeup",
              category_id: "122",
              images: [
                {
                  image_url:
                    "http://localhost/mikayjy_m1/focus/header_banner/3D_Cheek_Palette_285x167.jpg",
                  redirection_url: "://products?category_id=122"
                },
                {
                  image_url:
                    "http://localhost/mikayjy_m1/focus/header_banner/Longwear_foundation_285x167.jpg",
                  redirection_url: "://products?category_id=122"
                }
              ],
              category_url: "makeup.html",
              children: [
                {
                  category_name: "Face",
                  category_id: "128",
                  images: null,
                  category_url: "makeup/face.html",
                  children: [
                    {
                      category_name: "Prime & Fix",
                      category_id: "132",
                      images: null,
                      category_url: "makeup/face/prime_fix.html",
                      children: null
                    },
                    {
                      category_name: "Conceal & Correct",
                      category_id: "133",
                      images: null,
                      category_url: "makeup/face/conceal_correct.html",
                      children: null
                    },
                    {
                      category_name: "Foundation",
                      category_id: "134",
                      images: null,
                      category_url: "makeup/face/foundation.html",
                      children: null
                    },
                    {
                      category_name: "Contour & Highlights",
                      category_id: "135",
                      images: null,
                      category_url: "makeup/face/contour_highlights.html",
                      children: null
                    },
                    {
                      category_name: "Blush",
                      category_id: "136",
                      images: null,
                      category_url: "makeup/face/blush.html",
                      children: null
                    },
                    {
                      category_name: "Powder",
                      category_id: "137",
                      images: null,
                      category_url: "makeup/face/powder.html",
                      children: null
                    },
                    {
                      category_name: "Face Brushes",
                      category_id: "138",
                      images: null,
                      category_url: "makeup/face/face_brushes.html",
                      children: null
                    },
                    {
                      category_name: "Cleanliness Assential",
                      category_id: "139",
                      images: null,
                      category_url: "makeup/face/cleanliness_assential.html",
                      children: null
                    },
                    {
                      category_name: "Face Kits",
                      category_id: "140",
                      images: null,
                      category_url: "makeup/face/face_kits.html",
                      children: null
                    },
                    {
                      category_name: "CONTOUR & HIGHLIGHT",
                      category_id: "177",
                      images: null,
                      category_url: "makeup/face/contour_highlight.html",
                      children: null
                    },
                    {
                      category_name: "CLEANSING ESSENTIALS",
                      category_id: "184",
                      images: null,
                      category_url: "makeup/face/cleansing_essentials.html",
                      children: null
                    }
                  ]
                },
                {
                  category_name: "Eyes",
                  category_id: "129",
                  images: null,
                  category_url: "makeup/eyes.html",
                  children: [
                    {
                      category_name: "EYE KITS",
                      category_id: "172",
                      images: null,
                      category_url: "makeup/eyes/eye_kits.html",
                      children: null
                    },
                    {
                      category_name: "EYEBROW",
                      category_id: "174",
                      images: null,
                      category_url: "makeup/eyes/eyebrow.html",
                      children: null
                    },
                    {
                      category_name: "EYELINER",
                      category_id: "175",
                      images: null,
                      category_url: "makeup/eyes/eyeliner.html",
                      children: null
                    },
                    {
                      category_name: "EYESHADOW",
                      category_id: "176",
                      images: null,
                      category_url: "makeup/eyes/eyeshadow.html",
                      children: null
                    },
                    {
                      category_name: "MASCARA",
                      category_id: "189",
                      images: null,
                      category_url: "makeup/eyes/mascara.html",
                      children: null
                    },
                    {
                      category_name: "EYE TOOLS",
                      category_id: "194",
                      images: null,
                      category_url: "makeup/eyes/eye_tools.html",
                      children: null
                    }
                  ]
                },
                {
                  category_name: "Lips",
                  category_id: "130",
                  images: null,
                  category_url: "makeup/lips.html",
                  children: [
                    {
                      category_name: "LIPSTICK",
                      category_id: "169",
                      images: null,
                      category_url: "makeup/lips/lipstick.html",
                      children: null
                    },
                    {
                      category_name: "LIP LINER",
                      category_id: "170",
                      images: null,
                      category_url: "makeup/lips/lip_liner.html",
                      children: null
                    },
                    {
                      category_name: "LIP KITS",
                      category_id: "173",
                      images: null,
                      category_url: "makeup/lips/lip_kits.html",
                      children: null
                    }
                  ]
                },
                {
                  category_name: "Nails",
                  category_id: "131",
                  images: null,
                  category_url: "makeup/nails.html",
                  children: [
                    {
                      category_name: "NAIL ENAMEL",
                      category_id: "171",
                      images: null,
                      category_url: "makeup/nails/nail_enamel.html",
                      children: null
                    },
                    {
                      category_name: "NAIL POLISH REMOVERS",
                      category_id: "188",
                      images: null,
                      category_url: "makeup/nails/nail_polish_removers.html",
                      children: null
                    },
                    {
                      category_name: "NAIL KIT",
                      category_id: "201",
                      images: null,
                      category_url: "makeup/nails/nail_kit.html",
                      children: null
                    }
                  ]
                }
              ]
            },
            {
              category_name: "Accessories",
              category_id: "123",
              images: [
                {
                  image_url:
                    "http://localhost/mikayjy_m1/focus/header_banner/3D_Cheek_Palette_285x167.jpg",
                  redirection_url: "://products?category_id=122"
                },
                {
                  image_url:
                    "http://localhost/mikayjy_m1/focus/header_banner/Longwear_foundation_285x167.jpg",
                  redirection_url: "://products?category_id=122"
                }
              ],
              category_url: "accessories.html",
              children: [
                {
                  category_name: "Brushes",
                  category_id: "141",
                  images: null,
                  category_url: "accessories/brushes.html",
                  children: [
                    {
                      category_name: "EYE BRUSHES",
                      category_id: "196",
                      images: null,
                      category_url: "accessories/brushes/eye_brushes.html",
                      children: null
                    },
                    {
                      category_name: "LIP BRUSHES",
                      category_id: "200",
                      images: null,
                      category_url: "accessories/brushes/lip_brushes.html",
                      children: null
                    }
                  ]
                },
                {
                  category_name: "Brush Sets",
                  category_id: "142",
                  images: null,
                  category_url: "accessories/brush_sets.html",
                  children: [
                    {
                      category_name: "BRUSH CLEANSERS",
                      category_id: "195",
                      images: null,
                      category_url:
                        "accessories/brush_sets/brush_cleansers.html",
                      children: null
                    },
                    {
                      category_name: "MAKEUP BRUSH SETS",
                      category_id: "198",
                      images: null,
                      category_url:
                        "accessories/brush_sets/makeup_brush_sets.html",
                      children: null
                    }
                  ]
                },
                {
                  category_name: "Makeup Accessories",
                  category_id: "143",
                  images: null,
                  category_url: "accessories/makeup_accessories.html",
                  children: null
                },
                {
                  category_name: "Lash & Brow Accessories",
                  category_id: "144",
                  images: null,
                  category_url: "accessories/lash_brow_accessories.html",
                  children: [
                    {
                      category_name: "FALSE LASHES",
                      category_id: "178",
                      images: null,
                      category_url:
                        "accessories/lash_brow_accessories/false_lashes.html",
                      children: null
                    },
                    {
                      category_name: "LASH ACCESSORIES",
                      category_id: "193",
                      images: null,
                      category_url:
                        "accessories/lash_brow_accessories/lash_accessories.html",
                      children: null
                    },
                    {
                      category_name: "BROW ACCESSORIES",
                      category_id: "197",
                      images: null,
                      category_url:
                        "accessories/lash_brow_accessories/brow_accessories.html",
                      children: null
                    }
                  ]
                },
                {
                  category_name: "Cleanliness Assential",
                  category_id: "145",
                  images: null,
                  category_url: "accessories/cleanliness_assential.html",
                  children: null
                },
                {
                  category_name: "Nail Accessories",
                  category_id: "146",
                  images: null,
                  category_url: "accessories/nail_accessories.html",
                  children: [
                    {
                      category_name: "MANICURE SETS",
                      category_id: "185",
                      images: null,
                      category_url:
                        "accessories/nail_accessories/manicure_sets.html",
                      children: null
                    },
                    {
                      category_name: "MANICURE TOOLS",
                      category_id: "186",
                      images: null,
                      category_url:
                        "accessories/nail_accessories/manicure_tools.html",
                      children: null
                    }
                  ]
                },
                {
                  category_name: "Bags & Boxes",
                  category_id: "147",
                  images: null,
                  category_url: "accessories/bags_boxes.html",
                  children: [
                    {
                      category_name: "MAKEUP BAGS",
                      category_id: "180",
                      images: null,
                      category_url: "accessories/bags_boxes/makeup_bags.html",
                      children: null
                    },
                    {
                      category_name: "TRAVEL CASES",
                      category_id: "199",
                      images: null,
                      category_url: "accessories/bags_boxes/travel_cases.html",
                      children: null
                    }
                  ]
                },
                {
                  category_name: "Beauty Accessories",
                  category_id: "148",
                  images: null,
                  category_url: "accessories/beauty_accessories.html",
                  children: [
                    {
                      category_name: "ATOMISERS",
                      category_id: "179",
                      images: null,
                      category_url:
                        "accessories/beauty_accessories/atomisers.html",
                      children: null
                    },
                    {
                      category_name: "SHARPENERS",
                      category_id: "181",
                      images: null,
                      category_url:
                        "accessories/beauty_accessories/sharpeners.html",
                      children: null
                    },
                    {
                      category_name: "MIRRORS",
                      category_id: "192",
                      images: null,
                      category_url:
                        "accessories/beauty_accessories/mirrors.html",
                      children: null
                    }
                  ]
                },
                {
                  category_name: "CLEANSING ESSENTIALS",
                  category_id: "182",
                  images: null,
                  category_url: "accessories/cleansing_essentials.html",
                  children: [
                    {
                      category_name: "MAKEUP REMOVERS",
                      category_id: "183",
                      images: null,
                      category_url:
                        "accessories/cleansing_essentials/makeup_removers.html",
                      children: null
                    },
                    {
                      category_name: "WIPES",
                      category_id: "187",
                      images: null,
                      category_url:
                        "accessories/cleansing_essentials/wipes.html",
                      children: null
                    },
                    {
                      category_name: "COTTON PADS",
                      category_id: "202",
                      images: null,
                      category_url:
                        "accessories/cleansing_essentials/cotton_pads.html",
                      children: null
                    }
                  ]
                },
                {
                  category_name: "MAKE UP ACCESSORIES",
                  category_id: "190",
                  images: null,
                  category_url: "accessories/make_up_accessories.html",
                  children: [
                    {
                      category_name: "MAKEUP SPONGES",
                      category_id: "191",
                      images: null,
                      category_url:
                        "accessories/make_up_accessories/makeup_sponges.html",
                      children: null
                    }
                  ]
                }
              ]
            },
            {
              category_name: "Fragarance",
              category_id: "124",
              images: [
                {
                  image_url:
                    "http://localhost/mikayjy_m1/focus/header_banner/3D_Cheek_Palette_285x167.jpg",
                  redirection_url: "://products?category_id=122"
                },
                {
                  image_url:
                    "http://localhost/mikayjy_m1/focus/header_banner/Longwear_foundation_285x167.jpg",
                  redirection_url: "://products?category_id=122"
                }
              ],
              category_url: "fragarance.html",
              children: [
                {
                  category_name: "Just arrived",
                  category_id: "149",
                  images: null,
                  category_url: "fragarance/just_arrived.html",
                  children: null
                },
                {
                  category_name: "Best Sellers",
                  category_id: "150",
                  images: null,
                  category_url: "fragarance/best_sellers.html",
                  children: null
                },
                {
                  category_name: "Perfume Oil",
                  category_id: "151",
                  images: null,
                  category_url: "fragarance/perfume_oil.html",
                  children: null
                },
                {
                  category_name: "Eau De Perfum",
                  category_id: "152",
                  images: null,
                  category_url: "fragarance/eau_de_perfum.html",
                  children: null
                },
                {
                  category_name: "Eau De Toilette",
                  category_id: "153",
                  images: null,
                  category_url: "fragarance/eau_de_toilette.html",
                  children: null
                },
                {
                  category_name: "Body Mists",
                  category_id: "154",
                  images: null,
                  category_url: "fragarance/body_mists.html",
                  children: null
                }
              ]
            },
            {
              category_name: "Gifts",
              category_id: "125",
              images: [
                {
                  image_url:
                    "http://localhost/mikayjy_m1/focus/header_banner/3D_Cheek_Palette_285x167.jpg",
                  redirection_url: "://products?category_id=122",
                  product_name: "Gift 1"
                },
                {
                  image_url:
                    "http://localhost/mikayjy_m1/focus/header_banner/Longwear_foundation_285x167.jpg",
                  redirection_url: "://products?category_id=122",
                  product_name: "Gift 1"
                }
              ],
              category_url: "gifts.html",
              children: null
            },
            {
              category_name: "Just Arrived",
              category_id: "126",
              images: [
                {
                  image_url:
                    "http://localhost/mikayjy_m1/focus/header_banner/3D_Cheek_Palette_285x167.jpg",
                  redirection_url: "://products?category_id=122",
                  product_name: "Gift 1"
                },
                {
                  image_url:
                    "http://localhost/mikayjy_m1/focus/header_banner/Longwear_foundation_285x167.jpg",
                  redirection_url: "://products?category_id=122",
                  product_name: "Gift 1"
                }
              ],
              category_url: "just_arrived.html",
              children: null
            }
          ]
        }
      },
      {
        type: "banners",
        data: {
          aspectRatio: 1.13,
          title: "new banners",
          NumberernalItemAspectratio: 1,
          welcomeImage: "http://52.77.143.184/focus/home/images/banner.png",
          type: "fullwidth",
          items: [
            {
              image_url:
                "http://52.77.143.184/focus/offer_banner/Group_5097_2x.png",
              redirection_url: null,
              is_offer_banner: true,
              start_time: 1524657600000,
              end_time: 1524744000000
            }
          ]
        }
      },
      {
        type: "products",
        data: {
          title: "NEW Arrivals",
          aspectRatio: 1.13,
          NumberernalItemAspectratio: 1,
          welcomeImage: "http://52.77.143.184/focus/home/images/banner.png",
          type: "grid",
          items: [
            {
              product_id: "3127",
              product_sku: "212444050",
              product_name: "22K Matte Comfort Lipstick + 18% Moisturizing",
              product_type: "Spray",
              product_regular_price: 100,
              product_price: 100,
              discount_percentage: 0,
              product_rate: 0,
              stock_status: true,
              product_review_number: 0,
              product_image:
                "http://18.138.5.71/media/catalog/product/cache/1/thumbnail/600x600/040ec09b1e35df139433887a97daa66f/placeholder/default/mikyajy_logo_1000x1000_2.png",
              manufacturer_name: "Itcan",
              brand: " "
            },
            {
              product_id: "2869",
              product_sku: "207797601",
              product_name: "22K Powder Matte Lipstick",
              product_type: "Spray",
              product_regular_price: 100,
              product_price: 100,
              discount_percentage: 0,
              product_rate: 0,
              stock_status: true,
              product_review_number: 0,
              product_image:
                "http://18.138.5.71/media/catalog/product/cache/1/thumbnail/600x600/040ec09b1e35df139433887a97daa66f/2/0/207341152_302_1.png",
              manufacturer_name: "Itcan",
              brand: " "
            },
            {
              product_id: "3119",
              product_sku: "212363217",
              product_name: "Style",
              product_type: "Spray",
              product_regular_price: 100,
              product_price: 100,
              discount_percentage: 0,
              product_rate: 0,
              stock_status: true,
              product_review_number: 0,
              product_image:
                "http://18.138.5.71/media/catalog/product/cache/1/thumbnail/600x600/040ec09b1e35df139433887a97daa66f/placeholder/default/mikyajy_logo_1000x1000_2.png",
              manufacturer_name: "Itcan",
              brand: " "
            },
            {
              product_id: "2948",
              product_sku: "208667779",
              product_name: "Breathable Nail Enamel",
              product_type: "Spray",
              product_regular_price: 100,
              product_price: 100,
              discount_percentage: 0,
              product_rate: 0,
              stock_status: true,
              product_review_number: 0,
              product_image:
                "http://18.138.5.71/media/catalog/product/cache/1/thumbnail/600x600/040ec09b1e35df139433887a97daa66f/2/0/208667779_901_1.png",
              manufacturer_name: "Itcan",
              brand: " "
            },
            {
              product_id: "3038",
              product_sku: "210704962",
              product_name: "22K LongWear Waterproof Lipliner",
              product_type: "Spray",
              product_regular_price: 100,
              product_price: 100,
              discount_percentage: 0,
              product_rate: 0,
              stock_status: true,
              product_review_number: 0,
              product_image:
                "http://18.138.5.71/media/catalog/product/cache/1/thumbnail/600x600/040ec09b1e35df139433887a97daa66f/2/1/210704962_701_1.png",
              manufacturer_name: "Itcan",
              brand: " "
            },
            {
              product_id: "3119",
              product_sku: "212363217",
              product_name: "Style",
              product_type: "Spray",
              product_regular_price: 100,
              product_price: 100,
              discount_percentage: 0,
              product_rate: 0,
              stock_status: true,
              product_review_number: 0,
              product_image:
                "http://18.138.5.71/media/catalog/product/cache/1/thumbnail/600x600/040ec09b1e35df139433887a97daa66f/placeholder/default/mikyajy_logo_1000x1000_2.png",
              manufacturer_name: "Itcan",
              brand: " "
            }
          ]
        }
      },
      {
        type: "banners",
        data: {
          aspectRatio: 1.13,
          title: "Banners",
          NumberernalItemAspectratio: 1,
          welcomeImage: "http://52.77.143.184/focus/home/images/banner.png",
          type: "3column",
          items: [
            {
              image_url: "http://18.138.5.71/focus/banners/sec_banner1.png",
              title: "Face - 3 for 199",
              CTA_label: "SHOP NOW",
              redirection_url: null
            },
            {
              image_url: "http://18.138.5.71/focus/banners/sec_banner2.png",
              title: "24 Glam Eyeshadows",
              CTA_label: "SHOP NOW",
              redirection_url: null
            },
            {
              image_url: "http://18.138.5.71/focus/banners/sec_banner3.png",
              title: "A Mini Vanity Case",
              CTA_label: "Avail the Offer",
              redirection_url: null
            }
          ]
        }
      },
      {
        type: "banners",
        data: {
          aspectRatio: 1.13,
          title: "Banners",
          NumberernalItemAspectratio: 1,
          welcomeImage: "http://52.77.143.184/focus/home/images/banner.png",
          type: "2column",
          items: [
            {
              image_url: "http://18.138.5.71/focus/banners/ft_banner1.png",
              title: "Ramadan Gifting",
              CTA_label: "Watch Now",
              redirection_url: null
            },
            {
              image_url: "http://18.138.5.71/focus/banners/ft_banner2.png",
              title: "Creators Club",
              CTA_label: "Join Now",
              redirection_url: null
            }
          ]
        }
      },
      {
        type: "banners",
        data: {
          aspectRatio: 1.13,
          title: "Header Banner",
          NumberernalItemAspectratio: 1,
          welcomeImage: "http://52.77.143.184/focus/home/images/banner.png",
          type: "mobilewidth",
          items: [
            {
              image_url: "http://18.138.5.71/focus/banners/mobile_banner1.png",
              redirection_url: null,
              title: "A Perfect Gift for Fab Fashionistas",
              CTA_label: "Shop Now",
              summary: "Color-matched lip creams, lip pencils & nail enamels"
            },
            {
              image_url: "http://18.138.5.71/focus/banners/mobile_banner2.png",
              redirection_url: null,
              title: "Steal the Show & Make a Statement",
              CTA_label: "Shop Now",
              summary: "24 eyeshadows in matte, shimmer & metallic tones"
            },
            {
              image_url: "http://18.138.5.71/focus/banners/mobile_banner3.png",
              redirection_url: null,
              title: "A Set of Enchanting Mini Perfumes",
              CTA_label: "Shop Now",
              summary: "4 of Mikyajy's fave Eau De Parfums in travel-size minis"
            }
          ]
        }
      }
    ];
  }

  async get({ data }) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          status: "SUCCESS",
          message: ["SUCCESS"],
          data: this.data
        });
      }, 300);
    });
  }
}
