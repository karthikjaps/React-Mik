import AuthenticatedApiService from "../authenticatedApiService";

export default class RouterMockService extends AuthenticatedApiService {
  constructor() {
    super();

    this.defaultRoutes = {
      root: "en",
      urlsAndDocTypes: [
        {
          url: "/",
          value: "home"
        },
        {
          url: "/settings",
          value: "settings"
        },
        {
          url: "/privacy-policy",
          value: "page"
        },
        {
          url: "/terms-conditions",
          value: "page"
        },
        {
          url: "/payment-methods",
          value: "page"
        },
        {
          url: "/about-us",
          value: "page"
        },
        {
          url: "/contact-us",
          value: "page"
        },
        {
          url: "/delivery-policy",
          value: "page"
        },
        {
          url: "/faq",
          value: "page"
        },
        {
          url: "/returns-exchange",
          value: "page"
        },
        {
          url: "/shop/",
          value: "catalogue"
        },
        {
          url: "/shop/:category",
          value: "catalogue"
        },
        {
          url: "/shop/:category",
          value: "catalogue"
        },
        {
          url: "/shop/:parentCategory/:category",
          value: "catalogue"
        },
        {
          url: "/shop/:parentParentCategory/:parentCategory/:category",
          value: "catalogue"
        },
        {
          url: "/shop/:parentParentCategory/:parentCategory/:category/:product",
          value: "product"
        },
        {
          url: "/checkout/delivery",
          value: "delivery"
        },
        {
          url: "/checkout/delivery/:addressId/:addressAction",
          value: "deliveryAddress"
        },
        {
          url: "/checkout/payment",
          value: "payment"
        },
        {
          url: "/checkout/payment-successful",
          value: "paymentResponse"
        },
        {
          url: "/checkout/payment-failed",
          value: "paymentResponse"
        },
        {
          url: "/login",
          value: "login"
        },
        {
          url: "/logout",
          value: "logout"
        },
        {
          url: "/register",
          value: "register",
          name: "Register"
        },
        {
          url: "/shipment-address",
          value: "shipmentAddress"
        },
        {
          url: "/shipment-address/:addressId/:addressAction",
          value: "shipmentAddressDetails"
        },
        {
          url: "/forgot-password",
          value: "forgotPassword"
        },
        {
          url: "/reset-password",
          value: "resetPassword"
        },
        {
          url: "/password-updated",
          value: "passwordUpdated"
        },
        {
          url: "/email-sent",
          value: "emailSent"
        },
        {
          url: "/edit-profile",
          value: "editProfile",
          name: "My Profile"
        },
        {
          url: "/order-history",
          value: "orderHistory"
        },
        {
          url: "/wishlist",
          value: "wishlist"
        },
        {
          url: "/cart",
          value: "cart",
          name: "Shopping Cart"
        },
        {
          url: "/checkout",
          value: "checkout",
          name: "Checkout"
        },
        {
          url: "/store-locator",
          value: "storeLocator"
        },
        {
          url: "/shop/product/:productId",
          value: "quickProduct"
        },
        {
          url: "/shop/notify-me",
          value: "notifyMe"
        }
      ]
    };

    this.productRoutes = [
      { url: "/makeup", value: "category", id: "122", name: "Makeup" },
      {
        url: "/accessories",
        value: "category",
        id: "123",
        name: "Accessories"
      },
      { url: "/fragarance", value: "category", id: "124", name: "Fragarance" },
      { url: "/gifts", value: "category", id: "125", name: "Gifts" },
      {
        url: "/just_arrived",
        value: "category",
        id: "126",
        name: "Just Arrived"
      },
      { url: "/sale", value: "category", id: "127", name: "Sale" },
      { url: "/makeupe/face", value: "category", id: "128", name: "Face" },
      { url: "/makeupe/eyes", value: "category", id: "129", name: "Eyes" },
      { url: "/makeupe/lips", value: "category", id: "130", name: "Lips" },
      { url: "/makeupe/nails", value: "category", id: "131", name: "Nails" },
      {
        url: "/makeupe/face/prime_fix",
        value: "category",
        id: "132",
        name: "Prime & Fix"
      },
      {
        url: "/makeupe/face//conceal_correct",
        value: "category",
        id: "133",
        name: "Conceal & Correct"
      },
      {
        url: "/makeupe/face/foundation",
        value: "category",
        id: "134",
        name: "Foundation"
      },
      {
        url: "/makeupe/face/contour_highlights",
        value: "category",
        id: "135",
        name: "Contour & Highlights"
      },
      {
        url: "/makeupe/face/blush",
        value: "category",
        id: "136",
        name: "Blush"
      },
      {
        url: "/makeupe/face/powder",
        value: "category",
        id: "137",
        name: "Powder"
      },
      {
        url: "/makeupe/face/face_brushes",
        value: "category",
        id: "138",
        name: "Face Brushes"
      },
      {
        url: "/makeupe/face/cleanliness_assential",
        value: "category",
        id: "139",
        name: "Cleanliness Assential"
      },
      {
        url: "/makeupe/face/face_kits",
        value: "category",
        id: "140",
        name: "Face Kits"
      },
      {
        url: "/accessories/brushes",
        value: "category",
        id: "141",
        name: "Brushes"
      },
      {
        url: "/accessories/brush_sets",
        value: "category",
        id: "142",
        name: "Brush Sets"
      },
      {
        url: "/accessories/makeup_accessories",
        value: "category",
        id: "143",
        name: "Makeup Accessories"
      },
      {
        url: "/accessories/lash_brow_accessories",
        value: "category",
        id: "144",
        name: "Lash & Brow Accessories"
      },
      {
        url: "/accessories/cleanliness_assential",
        value: "category",
        id: "145",
        name: "Cleanliness Assential"
      },
      {
        url: "/accessories/nail_accessories",
        value: "category",
        id: "146",
        name: "Nail Accessories"
      },
      {
        url: "/accessories/bags_boxes",
        value: "category",
        id: "147",
        name: "Bags & Boxes"
      },
      {
        url: "/accessories/beauty_accessories",
        value: "category",
        id: "148",
        name: "Beauty Accessories"
      },
      {
        url: "/just_arrived",
        value: "category",
        id: "149",
        name: "Just arrived"
      },
      {
        url: "/best_sellers",
        value: "category",
        id: "150",
        name: "Best Sellers"
      },
      {
        url: "/fragarance/perfume_oil",
        value: "category",
        id: "151",
        name: "Perfume Oil"
      },
      {
        url: "/fragarance/eau_de_perfum",
        value: "category",
        id: "152",
        name: "Eau De Perfum"
      },
      {
        url: "/fragarance/eau_de_toilette",
        value: "category",
        id: "153",
        name: "Eau De Toilette"
      },
      {
        url: "/fragarance/body_mists",
        value: "category",
        id: "154",
        name: "Body Mists"
      },
      {
        url: "/makeup/lips/lipstick",
        value: "category",
        id: "169",
        name: "LIPSTICK"
      },
      {
        url: "/makeup/lips/lip_liner",
        value: "category",
        id: "170",
        name: "LIP LINER"
      },
      {
        url: "/makeup/nails/nail_enamel",
        value: "category",
        id: "171",
        name: "NAIL ENAMEL"
      },
      {
        url: "//makeup/eyes/eye_kits",
        value: "category",
        id: "172",
        name: "EYE KITS"
      },
      {
        url: "/makeup/lips/lip_kits",
        value: "category",
        id: "173",
        name: "LIP KITS"
      },
      { url: "/eyebrow", value: "category", id: "174", name: "EYEBROW" },
      { url: "/eyeliner", value: "category", id: "175", name: "EYELINER" },
      { url: "/eyeshadow", value: "category", id: "176", name: "EYESHADOW" },
      {
        url: "/contour_highlight",
        value: "category",
        id: "177",
        name: "CONTOUR & HIGHLIGHT"
      },
      {
        url: "/false_lashes",
        value: "category",
        id: "178",
        name: "FALSE LASHES"
      },
      { url: "/atomisers", value: "category", id: "179", name: "ATOMISERS" },
      {
        url: "/makeup_bags",
        value: "category",
        id: "180",
        name: "MAKEUP BAGS"
      },
      { url: "/sharpeners", value: "category", id: "181", name: "SHARPENERS" },
      {
        url: "/cleansing_essentials",
        value: "category",
        id: "182",
        name: "CLEANSING ESSENTIALS"
      },
      {
        url: "/makeup_removers",
        value: "category",
        id: "183",
        name: "MAKEUP REMOVERS"
      },
      {
        url: "/cleansing_essentials",
        value: "category",
        id: "184",
        name: "CLEANSING ESSENTIALS"
      },
      {
        url: "/manicure_sets",
        value: "category",
        id: "185",
        name: "MANICURE SETS"
      },
      {
        url: "/manicure_tools",
        value: "category",
        id: "186",
        name: "MANICURE TOOLS"
      },
      { url: "/wipes", value: "category", id: "187", name: "WIPES" },
      {
        url: "/nail_polish_removers",
        value: "category",
        id: "188",
        name: "NAIL POLISH REMOVERS"
      },
      { url: "/mascara", value: "category", id: "189", name: "MASCARA" },
      {
        url: "/make_up_accessories",
        value: "category",
        id: "190",
        name: "MAKE UP ACCESSORIES"
      },
      {
        url: "/makeup_sponges",
        value: "category",
        id: "191",
        name: "MAKEUP SPONGES"
      },
      { url: "/mirrors", value: "category", id: "192", name: "MIRRORS" },
      {
        url: "/lash_accessories",
        value: "category",
        id: "193",
        name: "LASH ACCESSORIES"
      },
      { url: "/eye_tools", value: "category", id: "194", name: "EYE TOOLS" },
      {
        url: "/brush_cleansers",
        value: "category",
        id: "195",
        name: "BRUSH CLEANSERS"
      },
      {
        url: "/eye_brushes",
        value: "category",
        id: "196",
        name: "EYE BRUSHES"
      },
      {
        url: "/brow_accessories",
        value: "category",
        id: "197",
        name: "BROW ACCESSORIES"
      },
      {
        url: "/makeup_brush_sets",
        value: "category",
        id: "198",
        name: "MAKEUP BRUSH SETS"
      },
      {
        url: "/travel_cases",
        value: "category",
        id: "199",
        name: "TRAVEL CASES"
      },
      {
        url: "/lip_brushes",
        value: "category",
        id: "200",
        name: "LIP BRUSHES"
      },
      { url: "/nail_kit", value: "category", id: "201", name: "NAIL KIT" },
      {
        url: "/cotton_pads",
        value: "category",
        id: "202",
        name: "COTTON PADS"
      },
      {
        url: "/makeup/lips/lip_kits/tool_kit",
        value: "product",
        id: "2856",
        name: "Tool Kit"
      },
      {
        url: "/makeup/lips/lip_kits/black_i",
        value: "product",
        id: "2857",
        name: "Black I"
      },
      {
        url: "/makeup/lips/lip_kits/color_gloss",
        value: "product",
        id: "2858",
        name: "Color & Gloss"
      },
      {
        url: "/makeup/lips/lip_kits/color_gloss",
        value: "product",
        id: "2859",
        name: "Color & Gloss"
      },
      {
        url: "/makeup/lips/lip_kits/color_gloss",
        value: "product",
        id: "2860",
        name: "Color & Gloss"
      },
      {
        url: "/makeup/lips/lip_kits/color_gloss",
        value: "product",
        id: "2861",
        name: "Color & Gloss"
      },
      {
        url: "/makeup/lips/lip_kits/color_gloss",
        value: "product",
        id: "2862",
        name: "Color & Gloss"
      },
      {
        url: "/makeup/lips/lip_kits/color_gloss",
        value: "product",
        id: "2863",
        name: "Color & Gloss"
      },
      {
        url: "/makeup/lips/lip_kits/color_gloss",
        value: "product",
        id: "2864",
        name: "Color & Gloss"
      },
      {
        url: "/makeup/lips/lip_kits/ultra_matte_lipstick",
        value: "product",
        id: "2865",
        name: "Ultra Matte Lipstick"
      },
      {
        url: "/makeup/lips/lip_kits/ultra_matte_lipstick",
        value: "product",
        id: "2866",
        name: "Ultra Matte Lipstick"
      },
      {
        url: "/makeup/lips/lip_kits/ultra_matte_lipstick",
        value: "product",
        id: "2867",
        name: "Ultra Matte Lipstick"
      },
      {
        url: "/makeup/lips/lip_kits/ultra_matte_lipstick",
        value: "product",
        id: "2868",
        name: "Ultra Matte Lipstick"
      },
      {
        url: "/makeup/lips/lip_kits/ultra_matte_lipstick",
        value: "product",
        id: "2869",
        name: "Ultra Matte Lipstick"
      },
      {
        url: "/makeup/lips/lip_kits/ultra_matte_lipstick",
        value: "product",
        id: "2870",
        name: "Ultra Matte Lipstick"
      },
      {
        url: "/makeup/lips/lip_kits/ultra_matte_lipstick",
        value: "product",
        id: "2871",
        name: "Ultra Matte Lipstick"
      },
      {
        url: "/makeup/lips/lip_kits/ultra_matte_lipstick",
        value: "product",
        id: "2872",
        name: "Ultra Matte Lipstick"
      },
      {
        url: "/makeup/lips/lip_kits/ultra_matte_lipstick",
        value: "product",
        id: "2873",
        name: "Ultra Matte Lipstick"
      },
      {
        url: "/makeup/lips/lip_kits/ultra_matte_lipstick",
        value: "product",
        id: "2874",
        name: "Ultra Matte Lipstick"
      },
      {
        url: "/makeup/lips/lip_kits/ultra_matte_lipstick",
        value: "product",
        id: "2875",
        name: "Ultra Matte Lipstick"
      },
      {
        url: "/makeup/lips/lip_kits/ultra_matte_lipstick",
        value: "product",
        id: "2876",
        name: "Ultra Matte Lipstick"
      },
      {
        url: "/makeup/lips/lip_kits/ultra_matte_lipstick",
        value: "product",
        id: "2877",
        name: "Ultra Matte Lipstick"
      },
      {
        url: "/makeup/lips/lip_kits/ultra_matte_lipstick",
        value: "product",
        id: "2878",
        name: "Ultra Matte Lipstick"
      },
      {
        url: "/makeup/lips/lip_kits/ultra_matte_lipstick",
        value: "product",
        id: "2879",
        name: "Ultra Matte Lipstick"
      },
      {
        url: "/makeup/lips/lip_kits/ultra_matte_lipstick",
        value: "product",
        id: "2880",
        name: "Ultra Matte Lipstick"
      },
      {
        url: "/makeup/lips/lip_kits/ultra_matte_lipstick",
        value: "product",
        id: "2881",
        name: "Ultra Matte Lipstick"
      },
      {
        url: "/makeup/lips/lip_kits/ultra_matte_lipstick",
        value: "product",
        id: "2882",
        name: "Ultra Matte Lipstick"
      },
      {
        url: "/makeup/lips/lip_kits/ultra_matte_lipstick",
        value: "product",
        id: "2883",
        name: "Ultra Matte Lipstick"
      },
      {
        url: "/makeup/lips/lip_kits/ultra_matte_lipstick",
        value: "product",
        id: "2884",
        name: "Ultra Matte Lipstick"
      },
      {
        url: "/makeup/lips/lip_kits/velvet_lipstick",
        value: "product",
        id: "2885",
        name: "Velvet Lipstick"
      },
      {
        url: "/makeup/lips/lip_kits/velvet_lipstick",
        value: "product",
        id: "2886",
        name: "Velvet Lipstick"
      },
      {
        url: "/makeup/lips/lip_kits/velvet_lipstick",
        value: "product",
        id: "2887",
        name: "Velvet Lipstick"
      },
      {
        url: "/makeup/lips/lip_kits/velvet_lipstick",
        value: "product",
        id: "2888",
        name: "Velvet Lipstick"
      },
      {
        url: "/makeup/lips/lip_kits/line_color_lip_pencil",
        value: "product",
        id: "2889",
        name: "Line & Color Lip Pencil"
      },
      {
        url: "/makeup/lips/lip_kits/line_color_lip_pencil",
        value: "product",
        id: "2890",
        name: "Line & Color Lip Pencil"
      },
      {
        url: "/makeup/lips/lip_kits/line_color_lip_pencil",
        value: "product",
        id: "2891",
        name: "Line & Color Lip Pencil"
      },
      {
        url: "/makeup/lips/lip_kits/line_color_lip_pencil",
        value: "product",
        id: "2892",
        name: "Line & Color Lip Pencil"
      },
      {
        url: "/makeup/lips/lip_kits/line_color_lip_pencil",
        value: "product",
        id: "2893",
        name: "Line & Color Lip Pencil"
      },
      {
        url: "/makeup/lips/lip_kits/22k_powder_matte_lipstick",
        value: "product",
        id: "2894",
        name: "22K Powder Matte Lipstick"
      },
      {
        url: "/makeup/lips/lip_kits/22k_powder_matte_lipstick",
        value: "product",
        id: "2895",
        name: "22K Powder Matte Lipstick"
      },
      {
        url: "/makeup/lips/lip_kits/22k_powder_matte_lipstick",
        value: "product",
        id: "2896",
        name: "22K Powder Matte Lipstick"
      },
      {
        url: "/makeup/lips/lip_kits/22k_powder_matte_lipstick",
        value: "product",
        id: "2897",
        name: "22K Powder Matte Lipstick"
      },
      {
        url: "/makeup/lips/lip_kits/22k_powder_matte_lipstick",
        value: "product",
        id: "2898",
        name: "22K Powder Matte Lipstick"
      },
      {
        url: "/makeup/lips/lip_kits/22k_powder_matte_lipstick",
        value: "product",
        id: "2899",
        name: "22K Powder Matte Lipstick"
      },
      {
        url: "/makeup/lips/lip_kits/ultra_matte_lipstick",
        value: "product",
        id: "2900",
        name: "Ultra Matte Lipstick"
      },
      {
        url: "/makeup/lips/lip_kits/ultra_matte_lipstick",
        value: "product",
        id: "2901",
        name: "Ultra Matte Lipstick"
      },
      {
        url: "/makeup/lips/lip_kits/ultra_matte_lipstick",
        value: "product",
        id: "2902",
        name: "Ultra Matte Lipstick"
      },
      {
        url: "/makeup/lips/lip_kits/ultra_matte_lipstick",
        value: "product",
        id: "2903",
        name: "Ultra Matte Lipstick"
      },
      {
        url: "/makeup/lips/lip_kits/ultra_matte_lipstick",
        value: "product",
        id: "2904",
        name: "Ultra Matte Lipstick"
      },
      {
        url: "/makeup/lips/lip_kits/ultra_matte_lipstick",
        value: "product",
        id: "2905",
        name: "Ultra Matte Lipstick"
      },
      {
        url: "/makeup/lips/lip_kits/velvet_lipstick",
        value: "product",
        id: "2906",
        name: "Velvet Lipstick"
      },
      {
        url: "/makeup/lips/lip_kits/velvet_lipstick",
        value: "product",
        id: "2907",
        name: "Velvet Lipstick"
      },
      {
        url: "/makeup/lips/lip_kits/velvet_lipstick",
        value: "product",
        id: "2908",
        name: "Velvet Lipstick"
      },
      {
        url: "/makeup/lips/lip_kits/velvet_lipstick",
        value: "product",
        id: "2909",
        name: "Velvet Lipstick"
      },
      {
        url: "/makeup/lips/lip_kits/velvet_lipstick",
        value: "product",
        id: "2910",
        name: "Velvet Lipstick"
      },
      {
        url: "/makeup/lips/lip_kits/velvet_lipstick",
        value: "product",
        id: "2911",
        name: "Velvet Lipstick"
      },
      {
        url: "/makeup/lips/lip_kits/velvet_lipstick",
        value: "product",
        id: "2912",
        name: "Velvet Lipstick"
      },
      {
        url: "/makeup/lips/lip_kits/velvet_lipstick",
        value: "product",
        id: "2913",
        name: "Velvet Lipstick"
      },
      {
        url: "/makeup/lips/lip_kits/velvet_lipstick",
        value: "product",
        id: "2914",
        name: "Velvet Lipstick"
      },
      {
        url: "/makeup/lips/lip_kits/velvet_lipstick",
        value: "product",
        id: "2915",
        name: "Velvet Lipstick"
      },
      {
        url: "/makeup/lips/lip_kits/line_color_lip_pencil",
        value: "product",
        id: "2916",
        name: "Line & Color Lip Pencil"
      },
      {
        url: "/makeup/lips/lip_kits/line_color_lip_pencil",
        value: "product",
        id: "2917",
        name: "Line & Color Lip Pencil"
      },
      {
        url: "/makeup/lips/lip_kits/line_color_lip_pencil",
        value: "product",
        id: "2918",
        name: "Line & Color Lip Pencil"
      },
      {
        url: "/makeup/lips/lip_kits/juicy_lips",
        value: "product",
        id: "2919",
        name: "Juicy Lips"
      },
      {
        url: "/makeup/lips/lip_kits/hard_wear_strengthening_nail_enamel",
        value: "product",
        id: "2920",
        name: "Hard Wear Strengthening Nail Enamel"
      },
      {
        url: "/makeup/lips/lip_kits/hard_wear_strengthening_nail_enamel",
        value: "product",
        id: "2921",
        name: "Hard Wear Strengthening Nail Enamel"
      },
      {
        url: "/makeup/lips/lip_kits/hard_wear_strengthening_nail_enamel",
        value: "product",
        id: "2922",
        name: "Hard Wear Strengthening Nail Enamel"
      },
      {
        url: "/makeup/lips/lip_kits/hard_wear_strengthening_nail_enamel",
        value: "product",
        id: "2923",
        name: "Hard Wear Strengthening Nail Enamel"
      },
      {
        url: "/makeup/lips/lip_kits/hard_wear_strengthening_nail_enamel",
        value: "product",
        id: "2924",
        name: "Hard Wear Strengthening Nail Enamel"
      },
      {
        url: "/makeup/lips/lip_kits/hard_wear_strengthening_nail_enamel",
        value: "product",
        id: "2925",
        name: "Hard Wear Strengthening Nail Enamel"
      },
      {
        url: "/makeup/lips/lip_kits/hard_wear_strengthening_nail_enamel",
        value: "product",
        id: "2926",
        name: "Hard Wear Strengthening Nail Enamel"
      },
      {
        url: "/makeup/lips/lip_kits/hard_wear_strengthening_nail_enamel",
        value: "product",
        id: "2927",
        name: "Hard Wear Strengthening Nail Enamel"
      },
      {
        url: "/makeup/lips/lip_kits/hard_wear_strengthening_nail_enamel",
        value: "product",
        id: "2928",
        name: "Hard Wear Strengthening Nail Enamel"
      },
      {
        url: "/makeup/lips/lip_kits/hard_wear_strengthening_nail_enamel",
        value: "product",
        id: "2929",
        name: "Hard Wear Strengthening Nail Enamel"
      },
      {
        url: "/makeup/lips/lip_kits/hard_wear_strengthening_nail_enamel",
        value: "product",
        id: "2930",
        name: "Hard Wear Strengthening Nail Enamel"
      },
      {
        url: "/makeup/lips/lip_kits/hard_wear_strengthening_nail_enamel",
        value: "product",
        id: "2931",
        name: "Hard Wear Strengthening Nail Enamel"
      },
      {
        url: "/makeup/lips/lip_kits/hard_wear_strengthening_nail_enamel",
        value: "product",
        id: "2932",
        name: "Hard Wear Strengthening Nail Enamel"
      },
      {
        url: "/makeup/lips/lip_kits/black_i_waterproof",
        value: "product",
        id: "2933",
        name: "Black I Waterproof"
      },
      {
        url: "/makeup/lips/lip_kits/breathable_nail_enamel",
        value: "product",
        id: "2934",
        name: "Breathable Nail Enamel"
      },
      {
        url: "/makeup/lips/lip_kits/breathable_nail_enamel",
        value: "product",
        id: "2935",
        name: "Breathable Nail Enamel"
      },
      {
        url: "/makeup/lips/lip_kits/breathable_nail_enamel",
        value: "product",
        id: "2936",
        name: "Breathable Nail Enamel"
      },
      {
        url: "/makeup/lips/lip_kits/breathable_nail_enamel",
        value: "product",
        id: "2937",
        name: "Breathable Nail Enamel"
      },
      {
        url: "/makeup/lips/lip_kits/breathable_nail_enamel",
        value: "product",
        id: "2938",
        name: "Breathable Nail Enamel"
      },
      {
        url: "/makeup/lips/lip_kits/breathable_nail_enamel",
        value: "product",
        id: "2939",
        name: "Breathable Nail Enamel"
      },
      {
        url: "/makeup/lips/lip_kits/breathable_nail_enamel",
        value: "product",
        id: "2940",
        name: "Breathable Nail Enamel"
      },
      {
        url: "/makeup/lips/lip_kits/breathable_nail_enamel",
        value: "product",
        id: "2941",
        name: "Breathable Nail Enamel"
      },
      {
        url: "/makeup/lips/lip_kits/breathable_nail_enamel",
        value: "product",
        id: "2942",
        name: "Breathable Nail Enamel"
      },
      {
        url: "/makeup/lips/lip_kits/breathable_nail_enamel",
        value: "product",
        id: "2943",
        name: "Breathable Nail Enamel"
      },
      {
        url: "/makeup/lips/lip_kits/breathable_nail_enamel",
        value: "product",
        id: "2944",
        name: "Breathable Nail Enamel"
      },
      {
        url: "/makeup/lips/lip_kits/breathable_nail_enamel",
        value: "product",
        id: "2945",
        name: "Breathable Nail Enamel"
      },
      {
        url: "/makeup/lips/lip_kits/breathable_nail_enamel",
        value: "product",
        id: "2946",
        name: "Breathable Nail Enamel"
      },
      {
        url: "/makeup/lips/lip_kits/breathable_nail_enamel",
        value: "product",
        id: "2947",
        name: "Breathable Nail Enamel"
      },
      {
        url: "/makeup/lips/lip_kits/breathable_nail_enamel",
        value: "product",
        id: "2948",
        name: "Breathable Nail Enamel"
      },
      {
        url: "/makeup/lips/lip_kits/breathable_nail_enamel",
        value: "product",
        id: "2949",
        name: "Breathable Nail Enamel"
      },
      {
        url: "/makeup/lips/lip_kits/breathable_nail_enamel",
        value: "product",
        id: "2950",
        name: "Breathable Nail Enamel"
      },
      {
        url: "/makeup/lips/lip_kits/breathable_nail_enamel",
        value: "product",
        id: "2951",
        name: "Breathable Nail Enamel"
      },
      {
        url: "/makeup/lips/lip_kits/desert_queen",
        value: "product",
        id: "2952",
        name: "Desert Queen"
      },
      {
        url: "/makeup/lips/lip_kits/beauty_queen",
        value: "product",
        id: "2953",
        name: "Beauty Queen"
      },
      {
        url: "/makeup/lips/lip_kits/superstar",
        value: "product",
        id: "2954",
        name: "Superstar"
      },
      {
        url: "/makeup/lips/lip_kits/22k_matte_comfort_lipstick_18_moisturizing",
        value: "product",
        id: "2955",
        name: "22K Matte Comfort Lipstick + 18% Moisturizing"
      },
      {
        url: "/makeup/lips/lip_kits/22k_matte_comfort_lipstick_18_moisturizing",
        value: "product",
        id: "2956",
        name: "22K Matte Comfort Lipstick + 18% Moisturizing"
      },
      {
        url: "/makeup/lips/lip_kits/22k_matte_comfort_lipstick_18_moisturizing",
        value: "product",
        id: "2957",
        name: "22K Matte Comfort Lipstick + 18% Moisturizing"
      },
      {
        url: "/makeup/lips/lip_kits/22k_matte_comfort_lipstick_18_moisturizing",
        value: "product",
        id: "2958",
        name: "22K Matte Comfort Lipstick + 18% Moisturizing"
      },
      {
        url: "/makeup/lips/lip_kits/22k_matte_comfort_lipstick_18_moisturizing",
        value: "product",
        id: "2959",
        name: "22K Matte Comfort Lipstick + 18% Moisturizing"
      },
      {
        url: "/makeup/lips/lip_kits/22k_matte_comfort_lipstick_18_moisturizing",
        value: "product",
        id: "2960",
        name: "22K Matte Comfort Lipstick + 18% Moisturizing"
      },
      {
        url: "/makeup/lips/lip_kits/22k_matte_comfort_lipstick_18_moisturizing",
        value: "product",
        id: "2961",
        name: "22K Matte Comfort Lipstick + 18% Moisturizing"
      },
      {
        url: "/makeup/lips/lip_kits/22k_matte_comfort_lipstick_18_moisturizing",
        value: "product",
        id: "2962",
        name: "22K Matte Comfort Lipstick + 18% Moisturizing"
      },
      {
        url: "/makeup/lips/lip_kits/22k_matte_comfort_lipstick_18_moisturizing",
        value: "product",
        id: "2963",
        name: "22K Matte Comfort Lipstick + 18% Moisturizing"
      },
      {
        url: "/makeup/lips/lip_kits/22k_matte_comfort_lipstick_18_moisturizing",
        value: "product",
        id: "2964",
        name: "22K Matte Comfort Lipstick + 18% Moisturizing"
      },
      {
        url: "/makeup/lips/lip_kits/22k_matte_comfort_lipstick_18_moisturizing",
        value: "product",
        id: "2965",
        name: "22K Matte Comfort Lipstick + 18% Moisturizing"
      },
      {
        url: "/makeup/lips/lip_kits/22k_matte_comfort_lipstick_18_moisturizing",
        value: "product",
        id: "2966",
        name: "22K Matte Comfort Lipstick + 18% Moisturizing"
      },
      {
        url: "/makeup/lips/lip_kits/22k_matte_comfort_lipstick_18_moisturizing",
        value: "product",
        id: "2967",
        name: "22K Matte Comfort Lipstick + 18% Moisturizing"
      },
      {
        url: "/makeup/lips/lip_kits/22k_matte_comfort_lipstick_18_moisturizing",
        value: "product",
        id: "2968",
        name: "22K Matte Comfort Lipstick + 18% Moisturizing"
      },
      {
        url: "/makeup/lips/lip_kits/22k_matte_comfort_lipstick_18_moisturizing",
        value: "product",
        id: "2969",
        name: "22K Matte Comfort Lipstick + 18% Moisturizing"
      },
      {
        url: "/makeup/lips/lip_kits/22k_matte_comfort_lipstick_18_moisturizing",
        value: "product",
        id: "2970",
        name: "22K Matte Comfort Lipstick + 18% Moisturizing"
      },
      {
        url: "/makeup/lips/lip_kits/22k_matte_comfort_lipstick_18_moisturizing",
        value: "product",
        id: "2971",
        name: "22K Matte Comfort Lipstick + 18% Moisturizing"
      },
      {
        url: "/makeup/lips/lip_kits/22k_matte_comfort_lipstick_18_moisturizing",
        value: "product",
        id: "2972",
        name: "22K Matte Comfort Lipstick + 18% Moisturizing"
      },
      {
        url: "/makeup/lips/lip_kits/22k_matte_comfort_lipstick_18_moisturizing",
        value: "product",
        id: "2973",
        name: "22K Matte Comfort Lipstick + 18% Moisturizing"
      },
      {
        url: "/makeup/lips/lip_kits/22k_matte_comfort_lipstick_18_moisturizing",
        value: "product",
        id: "2974",
        name: "22K Matte Comfort Lipstick + 18% Moisturizing"
      },
      {
        url: "/makeup/lips/lip_kits/22k_matte_comfort_lipstick_18_moisturizing",
        value: "product",
        id: "2975",
        name: "22K Matte Comfort Lipstick + 18% Moisturizing"
      },
      {
        url: "/makeup/lips/lip_kits/22k_matte_comfort_lipstick_18_moisturizing",
        value: "product",
        id: "2976",
        name: "22K Matte Comfort Lipstick + 18% Moisturizing"
      },
      {
        url: "/makeup/lips/lip_kits/22k_matte_comfort_lipstick_18_moisturizing",
        value: "product",
        id: "2977",
        name: "22K Matte Comfort Lipstick + 18% Moisturizing"
      },
      {
        url: "/makeup/lips/lip_kits/22k_matte_comfort_lipstick_18_moisturizing",
        value: "product",
        id: "2978",
        name: "22K Matte Comfort Lipstick + 18% Moisturizing"
      },
      {
        url: "/makeup/lips/lip_kits/22k_matte_comfort_lipstick_18_moisturizing",
        value: "product",
        id: "2979",
        name: "22K Matte Comfort Lipstick + 18% Moisturizing"
      },
      {
        url: "/makeup/lips/lip_kits/22k_matte_comfort_lipstick_18_moisturizing",
        value: "product",
        id: "2980",
        name: "22K Matte Comfort Lipstick + 18% Moisturizing"
      },
      {
        url: "/makeup/lips/lip_kits/22k_matte_comfort_lipstick_18_moisturizing",
        value: "product",
        id: "2981",
        name: "22K Matte Comfort Lipstick + 18% Moisturizing"
      },
      {
        url: "/makeup/lips/lip_kits/22k_matte_comfort_lipstick_18_moisturizing",
        value: "product",
        id: "2982",
        name: "22K Matte Comfort Lipstick + 18% Moisturizing"
      },
      {
        url: "/makeup/lips/lip_kits/22k_matte_comfort_lipstick_18_moisturizing",
        value: "product",
        id: "2983",
        name: "22K Matte Comfort Lipstick + 18% Moisturizing"
      },
      {
        url: "/makeup/lips/lip_kits/22k_matte_comfort_lipstick_18_moisturizing",
        value: "product",
        id: "2984",
        name: "22K Matte Comfort Lipstick + 18% Moisturizing"
      },
      {
        url: "/makeup/lips/lip_kits/velvet_lipstick",
        value: "product",
        id: "2985",
        name: "Velvet Lipstick"
      },
      {
        url: "/makeup/lips/lip_kits/velvet_lipstick",
        value: "product",
        id: "2986",
        name: "Velvet Lipstick"
      },
      {
        url: "/makeup/lips/lip_kits/velvet_lipstick",
        value: "product",
        id: "2987",
        name: "Velvet Lipstick"
      },
      {
        url: "/makeup/lips/lip_kits/velvet_lipstick",
        value: "product",
        id: "2988",
        name: "Velvet Lipstick"
      },
      {
        url: "/makeup/lips/lip_kits/velvet_lipstick",
        value: "product",
        id: "2989",
        name: "Velvet Lipstick"
      },
      {
        url: "/makeup/lips/lip_kits/velvet_lipstick",
        value: "product",
        id: "2990",
        name: "Velvet Lipstick"
      },
      {
        url: "/makeup/lips/lip_kits/velvet_lipstick",
        value: "product",
        id: "2991",
        name: "Velvet Lipstick"
      },
      {
        url: "/makeup/lips/lip_kits/velvet_lipstick",
        value: "product",
        id: "2992",
        name: "Velvet Lipstick"
      },
      {
        url: "/makeup/lips/lip_kits/velvet_lipstick",
        value: "product",
        id: "2993",
        name: "Velvet Lipstick"
      },
      {
        url: "/makeup/lips/lip_kits/silver_star",
        value: "product",
        id: "2994",
        name: "Silver Star"
      },
      {
        url: "/makeup/lips/lip_kits/purple_rain",
        value: "product",
        id: "2995",
        name: "Purple Rain"
      },
      {
        url: "/makeup/lips/lip_kits/in_vogue",
        value: "product",
        id: "2996",
        name: "In Vogue"
      },
      {
        url: "/makeup/lips/lip_kits/fashionista",
        value: "product",
        id: "2997",
        name: "Fashionista"
      },
      {
        url: "/makeup/lips/lip_kits/glam_girl_runway_eyes",
        value: "product",
        id: "2998",
        name: "Glam Girl Runway Eyes"
      },
      {
        url: "/makeup/lips/lip_kits/perfect_purples",
        value: "product",
        id: "2999",
        name: "Perfect Purples"
      },
      {
        url: "/makeup/lips/lip_kits/bold_browns",
        value: "product",
        id: "3000",
        name: "Bold Browns"
      },
      {
        url: "/makeup/lips/lip_kits/22k_longwear_matte_liquid_lipstick",
        value: "product",
        id: "3001",
        name: "22K LongWear Matte Liquid Lipstick"
      },
      {
        url: "/makeup/lips/lip_kits/22k_longwear_matte_liquid_lipstick",
        value: "product",
        id: "3002",
        name: "22K LongWear Matte Liquid Lipstick"
      },
      {
        url: "/makeup/lips/lip_kits/22k_longwear_matte_liquid_lipstick",
        value: "product",
        id: "3003",
        name: "22K LongWear Matte Liquid Lipstick"
      },
      {
        url: "/makeup/lips/lip_kits/22k_longwear_matte_liquid_lipstick",
        value: "product",
        id: "3004",
        name: "22K LongWear Matte Liquid Lipstick"
      },
      {
        url: "/makeup/lips/lip_kits/22k_longwear_matte_liquid_lipstick",
        value: "product",
        id: "3005",
        name: "22K LongWear Matte Liquid Lipstick"
      },
      {
        url: "/makeup/lips/lip_kits/22k_longwear_matte_liquid_lipstick",
        value: "product",
        id: "3006",
        name: "22K LongWear Matte Liquid Lipstick"
      },
      {
        url: "/makeup/lips/lip_kits/22k_longwear_matte_liquid_lipstick",
        value: "product",
        id: "3007",
        name: "22K LongWear Matte Liquid Lipstick"
      },
      {
        url: "/makeup/lips/lip_kits/22k_longwear_matte_liquid_lipstick",
        value: "product",
        id: "3008",
        name: "22K LongWear Matte Liquid Lipstick"
      },
      {
        url: "/makeup/lips/lip_kits/22k_longwear_matte_liquid_lipstick",
        value: "product",
        id: "3009",
        name: "22K LongWear Matte Liquid Lipstick"
      },
      {
        url: "/makeup/lips/lip_kits/22k_longwear_no_transfer_lipstick",
        value: "product",
        id: "3010",
        name: "22K LongWear No Transfer Lipstick"
      },
      {
        url: "/makeup/lips/lip_kits/22k_longwear_no_transfer_lipstick",
        value: "product",
        id: "3011",
        name: "22K LongWear No Transfer Lipstick"
      },
      {
        url: "/makeup/lips/lip_kits/22k_longwear_no_transfer_lipstick",
        value: "product",
        id: "3012",
        name: "22K LongWear No Transfer Lipstick"
      },
      {
        url: "/makeup/lips/lip_kits/22k_longwear_no_transfer_lipstick",
        value: "product",
        id: "3013",
        name: "22K LongWear No Transfer Lipstick"
      },
      {
        url: "/makeup/lips/lip_kits/22k_longwear_no_transfer_lipstick",
        value: "product",
        id: "3014",
        name: "22K LongWear No Transfer Lipstick"
      },
      {
        url: "/makeup/lips/lip_kits/22k_longwear_no_transfer_lipstick",
        value: "product",
        id: "3015",
        name: "22K LongWear No Transfer Lipstick"
      },
      {
        url: "/makeup/lips/lip_kits/22k_longwear_no_transfer_lipstick",
        value: "product",
        id: "3016",
        name: "22K LongWear No Transfer Lipstick"
      },
      {
        url: "/makeup/lips/lip_kits/22k_longwear_no_transfer_lipstick",
        value: "product",
        id: "3017",
        name: "22K LongWear No Transfer Lipstick"
      },
      {
        url: "/makeup/lips/lip_kits/22k_longwear_no_transfer_lipstick",
        value: "product",
        id: "3018",
        name: "22K LongWear No Transfer Lipstick"
      },
      {
        url: "/makeup/lips/lip_kits/22k_longwear_no_transfer_lipstick",
        value: "product",
        id: "3019",
        name: "22K LongWear No Transfer Lipstick"
      },
      {
        url: "/makeup/lips/lip_kits/22k_longwear_no_transfer_lipstick",
        value: "product",
        id: "3020",
        name: "22K LongWear No Transfer Lipstick"
      },
      {
        url: "/makeup/lips/lip_kits/22k_longwear_no_transfer_lipstick",
        value: "product",
        id: "3021",
        name: "22K LongWear No Transfer Lipstick"
      },
      {
        url: "/makeup/lips/lip_kits/22k_longwear_no_transfer_lipstick",
        value: "product",
        id: "3022",
        name: "22K LongWear No Transfer Lipstick"
      },
      {
        url: "/makeup/lips/lip_kits/22k_longwear_no_transfer_lipstick",
        value: "product",
        id: "3023",
        name: "22K LongWear No Transfer Lipstick"
      },
      {
        url: "/makeup/lips/lip_kits/22k_longwear_no_transfer_lipstick",
        value: "product",
        id: "3024",
        name: "22K LongWear No Transfer Lipstick"
      },
      {
        url: "/makeup/lips/lip_kits/22k_longwear_no_transfer_lipstick",
        value: "product",
        id: "3025",
        name: "22K LongWear No Transfer Lipstick"
      },
      {
        url: "/makeup/lips/lip_kits/22k_longwear_no_transfer_lipstick",
        value: "product",
        id: "3026",
        name: "22K LongWear No Transfer Lipstick"
      },
      {
        url: "/makeup/lips/lip_kits/22k_longwear_no_transfer_lipstick",
        value: "product",
        id: "3027",
        name: "22K LongWear No Transfer Lipstick"
      },
      {
        url: "/makeup/lips/lip_kits/22k_longwear_waterproof_lipliner",
        value: "product",
        id: "3028",
        name: "22K LongWear Waterproof Lipliner"
      },
      {
        url: "/makeup/lips/lip_kits/22k_longwear_waterproof_lipliner",
        value: "product",
        id: "3029",
        name: "22K LongWear Waterproof Lipliner"
      },
      {
        url: "/makeup/lips/lip_kits/22k_longwear_waterproof_lipliner",
        value: "product",
        id: "3030",
        name: "22K LongWear Waterproof Lipliner"
      },
      {
        url: "/makeup/lips/lip_kits/22k_longwear_waterproof_lipliner",
        value: "product",
        id: "3031",
        name: "22K LongWear Waterproof Lipliner"
      },
      {
        url: "/makeup/lips/lip_kits/22k_longwear_waterproof_lipliner",
        value: "product",
        id: "3032",
        name: "22K LongWear Waterproof Lipliner"
      },
      {
        url: "/makeup/lips/lip_kits/22k_longwear_waterproof_lipliner",
        value: "product",
        id: "3033",
        name: "22K LongWear Waterproof Lipliner"
      },
      {
        url: "/makeup/lips/lip_kits/22k_longwear_waterproof_lipliner",
        value: "product",
        id: "3034",
        name: "22K LongWear Waterproof Lipliner"
      },
      {
        url: "/makeup/lips/lip_kits/22k_longwear_waterproof_lipliner",
        value: "product",
        id: "3035",
        name: "22K LongWear Waterproof Lipliner"
      },
      {
        url: "/makeup/lips/lip_kits/22k_longwear_waterproof_lipliner",
        value: "product",
        id: "3036",
        name: "22K LongWear Waterproof Lipliner"
      },
      {
        url: "/makeup/lips/lip_kits/22k_longwear_waterproof_lipliner",
        value: "product",
        id: "3037",
        name: "22K LongWear Waterproof Lipliner"
      },
      {
        url: "/makeup/lips/lip_kits/22k_longwear_waterproof_lipliner",
        value: "product",
        id: "3038",
        name: "22K LongWear Waterproof Lipliner"
      },
      {
        url: "/makeup/lips/lip_kits/22k_longwear_waterproof_lipliner",
        value: "product",
        id: "3039",
        name: "22K LongWear Waterproof Lipliner"
      },
      {
        url: "/makeup/lips/lip_kits/22k_longwear_waterproof_lipliner",
        value: "product",
        id: "3040",
        name: "22K LongWear Waterproof Lipliner"
      },
      {
        url: "/makeup/lips/lip_kits/22k_longwear_waterproof_lipliner",
        value: "product",
        id: "3041",
        name: "22K LongWear Waterproof Lipliner"
      },
      {
        url: "/makeup/lips/lip_kits/22k_longwear_waterproof_lipliner",
        value: "product",
        id: "3042",
        name: "22K LongWear Waterproof Lipliner"
      },
      {
        url: "/makeup/lips/lip_kits/22k_longwear_waterproof_lipliner",
        value: "product",
        id: "3043",
        name: "22K LongWear Waterproof Lipliner"
      },
      {
        url: "/makeup/lips/lip_kits/22k_longwear_waterproof_lipliner",
        value: "product",
        id: "3044",
        name: "22K LongWear Waterproof Lipliner"
      },
      {
        url: "/makeup/lips/lip_kits/22k_longwear_waterproof_lipliner",
        value: "product",
        id: "3045",
        name: "22K LongWear Waterproof Lipliner"
      },
      {
        url: "/makeup/lips/lip_kits/ultra_matte_nail_enamel",
        value: "product",
        id: "3046",
        name: "Ultra Matte Nail Enamel"
      },
      {
        url: "/makeup/lips/lip_kits/ultra_matte_nail_enamel",
        value: "product",
        id: "3047",
        name: "Ultra Matte Nail Enamel"
      },
      {
        url: "/makeup/lips/lip_kits/ultra_matte_nail_enamel",
        value: "product",
        id: "3048",
        name: "Ultra Matte Nail Enamel"
      },
      {
        url: "/makeup/lips/lip_kits/ultra_matte_nail_enamel",
        value: "product",
        id: "3049",
        name: "Ultra Matte Nail Enamel"
      },
      {
        url: "/makeup/lips/lip_kits/ultra_matte_nail_enamel",
        value: "product",
        id: "3050",
        name: "Ultra Matte Nail Enamel"
      },
      {
        url: "/makeup/lips/lip_kits/ultra_matte_nail_enamel",
        value: "product",
        id: "3051",
        name: "Ultra Matte Nail Enamel"
      },
      {
        url: "/makeup/lips/lip_kits/ultra_matte_nail_enamel",
        value: "product",
        id: "3052",
        name: "Ultra Matte Nail Enamel"
      },
      {
        url: "/makeup/lips/lip_kits/ultra_matte_nail_enamel",
        value: "product",
        id: "3053",
        name: "Ultra Matte Nail Enamel"
      },
      {
        url: "/makeup/lips/lip_kits/ultra_matte_nail_enamel",
        value: "product",
        id: "3054",
        name: "Ultra Matte Nail Enamel"
      },
      {
        url: "/makeup/lips/lip_kits/ultra_matte_nail_enamel",
        value: "product",
        id: "3055",
        name: "Ultra Matte Nail Enamel"
      },
      {
        url: "/makeup/lips/lip_kits/ultra_matte_nail_enamel",
        value: "product",
        id: "3056",
        name: "Ultra Matte Nail Enamel"
      },
      {
        url: "/makeup/lips/lip_kits/ultra_matte_nail_enamel",
        value: "product",
        id: "3057",
        name: "Ultra Matte Nail Enamel"
      },
      {
        url: "/makeup/lips/lip_kits/amira",
        value: "product",
        id: "3058",
        name: "Amira"
      },
      {
        url: "/makeup/lips/lip_kits/moda",
        value: "product",
        id: "3059",
        name: "Moda"
      },
      {
        url: "/makeup/lips/lip_kits/glam_to_go",
        value: "product",
        id: "3060",
        name: "Glam To Go"
      },
      {
        url: "/makeup/lips/lip_kits/glam_girl_enchanting_eyes",
        value: "product",
        id: "3061",
        name: "Glam Girl Enchanting Eyes"
      },
      {
        url: "/makeup/lips/lip_kits/_wowbrows",
        value: "product",
        id: "3062",
        name: "#WowBrows"
      },
      {
        url: "/makeup/lips/lip_kits/selfie_kit",
        value: "product",
        id: "3063",
        name: "Selfie Kit"
      },
      {
        url: "/makeup/lips/lip_kits/ultra_matte_lipstick",
        value: "product",
        id: "3064",
        name: "Ultra Matte Lipstick"
      },
      {
        url: "/makeup/lips/lip_kits/ultra_matte_lipstick",
        value: "product",
        id: "3065",
        name: "Ultra Matte Lipstick"
      },
      {
        url: "/makeup/lips/lip_kits/ultra_matte_lipstick",
        value: "product",
        id: "3066",
        name: "Ultra Matte Lipstick"
      },
      {
        url: "/makeup/lips/lip_kits/ultra_matte_lipstick",
        value: "product",
        id: "3067",
        name: "Ultra Matte Lipstick"
      },
      {
        url: "/makeup/lips/lip_kits/ultra_matte_lipstick",
        value: "product",
        id: "3068",
        name: "Ultra Matte Lipstick"
      },
      {
        url: "/makeup/lips/lip_kits/ultra_matte_lipstick",
        value: "product",
        id: "3069",
        name: "Ultra Matte Lipstick"
      },
      {
        url: "/makeup/lips/lip_kits/lipstix",
        value: "product",
        id: "3070",
        name: "Lipstix"
      },
      {
        url: "/makeup/lips/lip_kits/pink_chic",
        value: "product",
        id: "3071",
        name: "Pink Chic"
      },
      {
        url: "/makeup/lips/lip_kits/velvet_lipstick",
        value: "product",
        id: "3072",
        name: "Velvet Lipstick"
      },
      {
        url: "/makeup/lips/lip_kits/velvet_lipstick",
        value: "product",
        id: "3073",
        name: "Velvet Lipstick"
      },
      {
        url: "/makeup/lips/lip_kits/velvet_lipstick",
        value: "product",
        id: "3074",
        name: "Velvet Lipstick"
      },
      {
        url: "/makeup/lips/lip_kits/velvet_lipstick",
        value: "product",
        id: "3075",
        name: "Velvet Lipstick"
      },
      {
        url: "/makeup/lips/lip_kits/hard_wear_strengthening_nail_enamel",
        value: "product",
        id: "3076",
        name: "Hard Wear Strengthening Nail Enamel"
      },
      {
        url: "/makeup/lips/lip_kits/hard_wear_strengthening_nail_enamel",
        value: "product",
        id: "3077",
        name: "Hard Wear Strengthening Nail Enamel"
      },
      {
        url: "/makeup/lips/lip_kits/hard_wear_strengthening_nail_enamel",
        value: "product",
        id: "3078",
        name: "Hard Wear Strengthening Nail Enamel"
      },
      {
        url: "/makeup/lips/lip_kits/hard_wear_strengthening_nail_enamel",
        value: "product",
        id: "3079",
        name: "Hard Wear Strengthening Nail Enamel"
      },
      {
        url: "/makeup/lips/lip_kits/hard_wear_strengthening_nail_enamel",
        value: "product",
        id: "3080",
        name: "Hard Wear Strengthening Nail Enamel"
      },
      {
        url: "/makeup/lips/lip_kits/breathable_nail_enamel",
        value: "product",
        id: "3081",
        name: "Breathable Nail Enamel"
      },
      {
        url: "/makeup/lips/lip_kits/breathable_nail_enamel",
        value: "product",
        id: "3082",
        name: "Breathable Nail Enamel"
      },
      {
        url: "/makeup/lips/lip_kits/breathable_nail_enamel",
        value: "product",
        id: "3083",
        name: "Breathable Nail Enamel"
      },
      {
        url: "/makeup/lips/lip_kits/breathable_nail_enamel",
        value: "product",
        id: "3084",
        name: "Breathable Nail Enamel"
      },
      {
        url: "/makeup/lips/lip_kits/breathable_nail_enamel",
        value: "product",
        id: "3085",
        name: "Breathable Nail Enamel"
      },
      {
        url: "/makeup/lips/lip_kits/breathable_nail_enamel",
        value: "product",
        id: "3086",
        name: "Breathable Nail Enamel"
      },
      {
        url: "/makeup/lips/lip_kits/breathable_nail_enamel",
        value: "product",
        id: "3087",
        name: "Breathable Nail Enamel"
      },
      {
        url: "/makeup/lips/lip_kits/breathable_nail_enamel",
        value: "product",
        id: "3088",
        name: "Breathable Nail Enamel"
      },
      {
        url: "/makeup/lips/lip_kits/breathable_nail_enamel",
        value: "product",
        id: "3089",
        name: "Breathable Nail Enamel"
      },
      {
        url: "/makeup/lips/lip_kits/breathable_nail_enamel",
        value: "product",
        id: "3090",
        name: "Breathable Nail Enamel"
      },
      {
        url: "/makeup/lips/lip_kits/breathable_nail_enamel",
        value: "product",
        id: "3091",
        name: "Breathable Nail Enamel"
      },
      {
        url: "/makeup/lips/lip_kits/breathable_nail_enamel",
        value: "product",
        id: "3092",
        name: "Breathable Nail Enamel"
      },
      {
        url: "/makeup/lips/lip_kits/glam_girl_oh_my_glow",
        value: "product",
        id: "3093",
        name: "Glam Girl Oh My Glow"
      },
      {
        url: "/makeup/lips/lip_kits/glam_girl_chic_eyes",
        value: "product",
        id: "3094",
        name: "Glam Girl Chic Eyes"
      },
      {
        url: "/makeup/lips/lip_kits/lips_out_loud",
        value: "product",
        id: "3095",
        name: "Lips Out Loud"
      },
      {
        url: "/makeup/lips/lip_kits/color_gloss",
        value: "product",
        id: "3096",
        name: "Color & Gloss"
      },
      {
        url: "/makeup/lips/lip_kits/color_gloss",
        value: "product",
        id: "3097",
        name: "Color & Gloss"
      },
      {
        url: "/makeup/lips/lip_kits/color_gloss",
        value: "product",
        id: "3098",
        name: "Color & Gloss"
      },
      {
        url: "/makeup/lips/lip_kits/color_gloss",
        value: "product",
        id: "3099",
        name: "Color & Gloss"
      },
      {
        url: "/makeup/lips/lip_kits/color_gloss",
        value: "product",
        id: "3100",
        name: "Color & Gloss"
      },
      {
        url: "/makeup/lips/lip_kits/delicate_diva",
        value: "product",
        id: "3101",
        name: "Delicate Diva"
      },
      {
        url: "/makeup/lips/lip_kits/spellbound",
        value: "product",
        id: "3102",
        name: "Spellbound"
      },
      {
        url: "/makeup/lips/lip_kits/magical_treats",
        value: "product",
        id: "3103",
        name: "Magical Treats"
      },
      {
        url: "/makeup/lips/lip_kits/smoky_rose",
        value: "product",
        id: "3104",
        name: "Smoky Rose"
      },
      {
        url: "/makeup/lips/lip_kits/mauve_romance",
        value: "product",
        id: "3105",
        name: "Mauve Romance"
      },
      {
        url: "/makeup/lips/lip_kits/glam_girl_beyond_bronze",
        value: "product",
        id: "3106",
        name: "Glam Girl Beyond Bronze"
      },
      {
        url: "/makeup/lips/lip_kits/glam_girl_pink_rebel",
        value: "product",
        id: "3107",
        name: "Glam Girl Pink Rebel"
      },
      {
        url: "/makeup/lips/lip_kits/showstopper",
        value: "product",
        id: "3108",
        name: "Showstopper"
      },
      {
        url: "/makeup/lips/lip_kits/glam_girl_megamatte_eyes",
        value: "product",
        id: "3109",
        name: "Glam Girl Megamatte Eyes"
      },
      {
        url: "/makeup/lips/lip_kits/22k_flat_matte_2_in_1_lip_color",
        value: "product",
        id: "3110",
        name: "22K Flat Matte 2 in 1 Lip Color"
      },
      {
        url: "/makeup/lips/lip_kits/22k_flat_matte_2_in_1_lip_color",
        value: "product",
        id: "3111",
        name: "22K Flat Matte 2 in 1 Lip Color"
      },
      {
        url: "/makeup/lips/lip_kits/22k_flat_matte_2_in_1_lip_color",
        value: "product",
        id: "3112",
        name: "22K Flat Matte 2 in 1 Lip Color"
      },
      {
        url: "/makeup/lips/lip_kits/22k_flat_matte_2_in_1_lip_color",
        value: "product",
        id: "3113",
        name: "22K Flat Matte 2 in 1 Lip Color"
      },
      {
        url: "/makeup/lips/lip_kits/22k_flat_matte_2_in_1_lip_color",
        value: "product",
        id: "3114",
        name: "22K Flat Matte 2 in 1 Lip Color"
      },
      {
        url: "/makeup/lips/lip_kits/22k_flat_matte_2_in_1_lip_color",
        value: "product",
        id: "3115",
        name: "22K Flat Matte 2 in 1 Lip Color"
      },
      {
        url: "/makeup/lips/lip_kits/22k_flat_matte_2_in_1_lip_color",
        value: "product",
        id: "3116",
        name: "22K Flat Matte 2 in 1 Lip Color"
      },
      {
        url: "/makeup/lips/lip_kits/22k_flat_matte_2_in_1_lip_color",
        value: "product",
        id: "3117",
        name: "22K Flat Matte 2 in 1 Lip Color"
      },
      {
        url: "/makeup/lips/lip_kits/22k_flat_matte_2_in_1_lip_color",
        value: "product",
        id: "3118",
        name: "22K Flat Matte 2 in 1 Lip Color"
      },
      {
        url: "/makeup/lips/lip_kits/style_icon",
        value: "product",
        id: "3119",
        name: "Style Icon"
      },
      {
        url: "/makeup/lips/lip_kits/magic_stix",
        value: "product",
        id: "3120",
        name: "Magic Stix"
      },
      {
        url: "/makeup/lips/lip_kits/mini_mattes",
        value: "product",
        id: "3121",
        name: "Mini Mattes"
      },
      {
        url: "/makeup/lips/lip_kits/glam_girl_catwalk_eyes",
        value: "product",
        id: "3122",
        name: "Glam Girl Catwalk Eyes"
      },
      {
        url: "/makeup/lips/lip_kits/22k_matte_comfort_lipstick_18_moisturizing",
        value: "product",
        id: "3123",
        name: "22K Matte Comfort Lipstick + 18% Moisturizing"
      },
      {
        url: "/makeup/lips/lip_kits/22k_matte_comfort_lipstick_18_moisturizing",
        value: "product",
        id: "3124",
        name: "22K Matte Comfort Lipstick + 18% Moisturizing"
      },
      {
        url: "/makeup/lips/lip_kits/22k_matte_comfort_lipstick_18_moisturizing",
        value: "product",
        id: "3125",
        name: "22K Matte Comfort Lipstick + 18% Moisturizing"
      },
      {
        url: "/makeup/lips/lip_kits/22k_matte_comfort_lipstick_18_moisturizing",
        value: "product",
        id: "3126",
        name: "22K Matte Comfort Lipstick + 18% Moisturizing"
      },
      {
        url: "/makeup/lips/lip_kits/22k_matte_comfort_lipstick_18_moisturizing",
        value: "product",
        id: "3127",
        name: "22K Matte Comfort Lipstick + 18% Moisturizing"
      },
      {
        url: "/makeup/lips/lip_kits/22k_matte_comfort_lipstick_18_moisturizing",
        value: "product",
        id: "3128",
        name: "22K Matte Comfort Lipstick + 18% Moisturizing"
      },
      {
        url: "/makeup/lips/lip_kits/22k_matte_comfort_lipstick_18_moisturizing",
        value: "product",
        id: "3129",
        name: "22K Matte Comfort Lipstick + 18% Moisturizing"
      },
      {
        url: "/makeup/lips/lip_kits/super_10_uv_1_step_nail_enamel",
        value: "product",
        id: "3130",
        name: "Super 10 UV 1 Step Nail Enamel"
      },
      {
        url: "/makeup/lips/lip_kits/super_10_uv_1_step_nail_enamel",
        value: "product",
        id: "3131",
        name: "Super 10 UV 1 Step Nail Enamel"
      },
      {
        url: "/makeup/lips/lip_kits/super_10_uv_1_step_nail_enamel",
        value: "product",
        id: "3132",
        name: "Super 10 UV 1 Step Nail Enamel"
      },
      {
        url: "/makeup/lips/lip_kits/super_10_uv_1_step_nail_enamel",
        value: "product",
        id: "3133",
        name: "Super 10 UV 1 Step Nail Enamel"
      },
      {
        url: "/makeup/lips/lip_kits/super_10_uv_1_step_nail_enamel",
        value: "product",
        id: "3134",
        name: "Super 10 UV 1 Step Nail Enamel"
      },
      {
        url: "/makeup/lips/lip_kits/super_10_uv_1_step_nail_enamel",
        value: "product",
        id: "3135",
        name: "Super 10 UV 1 Step Nail Enamel"
      },
      {
        url: "/makeup/lips/lip_kits/super_10_uv_1_step_nail_enamel",
        value: "product",
        id: "3136",
        name: "Super 10 UV 1 Step Nail Enamel"
      },
      {
        url: "/makeup/lips/lip_kits/super_10_uv_1_step_nail_enamel",
        value: "product",
        id: "3137",
        name: "Super 10 UV 1 Step Nail Enamel"
      },
      {
        url: "/makeup/lips/lip_kits/super_10_uv_1_step_nail_enamel",
        value: "product",
        id: "3138",
        name: "Super 10 UV 1 Step Nail Enamel"
      },
      {
        url: "/makeup/lips/lip_kits/super_10_uv_1_step_nail_enamel",
        value: "product",
        id: "3139",
        name: "Super 10 UV 1 Step Nail Enamel"
      },
      {
        url: "/makeup/lips/lip_kits/super_10_uv_1_step_nail_enamel",
        value: "product",
        id: "3140",
        name: "Super 10 UV 1 Step Nail Enamel"
      },
      {
        url: "/makeup/lips/lip_kits/super_10_uv_1_step_nail_enamel",
        value: "product",
        id: "3141",
        name: "Super 10 UV 1 Step Nail Enamel"
      },
      {
        url: "/makeup/lips/lip_kits/glam_girl_instafab",
        value: "product",
        id: "3142",
        name: "Glam Girl Instafab"
      },
      {
        url: "/makeup/lips/lip_kits/line_color_lip_pencil",
        value: "product",
        id: "3143",
        name: "Line & Color Lip Pencil"
      },
      {
        url: "/makeup/lips/lip_kits/line_color_lip_pencil",
        value: "product",
        id: "3144",
        name: "Line & Color Lip Pencil"
      },
      {
        url: "/makeup/lips/lip_kits/line_color_lip_pencil",
        value: "product",
        id: "3145",
        name: "Line & Color Lip Pencil"
      },
      {
        url: "/makeup/lips/lip_kits/line_color_lip_pencil",
        value: "product",
        id: "3146",
        name: "Line & Color Lip Pencil"
      },
      {
        url: "/makeup/lips/lip_kits/line_color_lip_pencil",
        value: "product",
        id: "3147",
        name: "Line & Color Lip Pencil"
      },
      {
        url: "/makeup/lips/lip_kits/line_color_lip_pencil",
        value: "product",
        id: "3148",
        name: "Line & Color Lip Pencil"
      },
      {
        url: "/makeup/lips/lip_kits/line_color_lip_pencil",
        value: "product",
        id: "3149",
        name: "Line & Color Lip Pencil"
      },
      {
        url: "/makeup/lips/lip_kits/line_color_lip_pencil",
        value: "product",
        id: "3150",
        name: "Line & Color Lip Pencil"
      },
      {
        url: "/makeup/lips/lip_kits/color_gloss",
        value: "product",
        id: "3151",
        name: "Color & Gloss"
      },
      {
        url: "/makeup/lips/lip_kits/color_gloss",
        value: "product",
        id: "3152",
        name: "Color & Gloss"
      },
      {
        url: "/makeup/lips/lip_kits/color_gloss",
        value: "product",
        id: "3153",
        name: "Color & Gloss"
      },
      {
        url: "/makeup/lips/lip_kits/color_gloss",
        value: "product",
        id: "3154",
        name: "Color & Gloss"
      },
      {
        url: "/makeup/lips/lip_kits/22k_longwear_matte_liquid_lipstick",
        value: "product",
        id: "3155",
        name: "22K LongWear Matte Liquid Lipstick"
      },
      {
        url: "/makeup/lips/lip_kits/22k_longwear_matte_liquid_lipstick",
        value: "product",
        id: "3156",
        name: "22K LongWear Matte Liquid Lipstick"
      },
      {
        url: "/makeup/lips/lip_kits/22k_longwear_matte_liquid_lipstick",
        value: "product",
        id: "3157",
        name: "22K LongWear Matte Liquid Lipstick"
      },
      {
        url: "/makeup/lips/lip_kits/22k_longwear_matte_liquid_lipstick",
        value: "product",
        id: "3158",
        name: "22K LongWear Matte Liquid Lipstick"
      },
      {
        url: "/makeup/lips/lip_kits/22k_longwear_matte_liquid_lipstick",
        value: "product",
        id: "3159",
        name: "22K LongWear Matte Liquid Lipstick"
      },
      {
        url: "/makeup/lips/lip_kits/22k_longwear_matte_liquid_lipstick",
        value: "product",
        id: "3160",
        name: "22K LongWear Matte Liquid Lipstick"
      },
      {
        url: "/makeup/lips/lip_kits/22k_longwear_matte_liquid_lipstick",
        value: "product",
        id: "3161",
        name: "22K LongWear Matte Liquid Lipstick"
      },
      {
        url: "/makeup/lips/lip_kits/22k_longwear_matte_liquid_lipstick",
        value: "product",
        id: "3162",
        name: "22K LongWear Matte Liquid Lipstick"
      },
      {
        url: "/makeup/lips/lip_kits/22k_longwear_matte_liquid_lipstick",
        value: "product",
        id: "3163",
        name: "22K LongWear Matte Liquid Lipstick"
      },
      {
        url: "/makeup/lips/lip_kits/22k_longwear_matte_liquid_lipstick",
        value: "product",
        id: "3164",
        name: "22K LongWear Matte Liquid Lipstick"
      },
      {
        url: "/makeup/lips/lip_kits/my_is_test_black",
        value: "product",
        id: "4089",
        name: "My IS test-Black"
      },
      {
        url: "/makeup/lips/lip_kits/my_is_test_blue",
        value: "product",
        id: "4090",
        name: "My IS test-Blue"
      },
      {
        url: "/makeup/lips/lip_kits/my_is_test_brown",
        value: "product",
        id: "4091",
        name: "My IS test-Brown"
      },
      {
        url: "/makeup/lips/lip_kits/my_is_test_green",
        value: "product",
        id: "4092",
        name: "My IS test-Green"
      },
      {
        url: "/makeup/lips/lip_kits/my_is_test",
        value: "product",
        id: "4093",
        name: "My IS test"
      },
      {
        url: "/makeup/lips/lip_kits/velvet_lipstick",
        value: "product",
        id: "4094",
        name: "Velvet Lipstick"
      }
    ];
  }

  getDefaultRoutes() {
    return Promise.resolve({
      status: "SUCCESS",
      message: ["SUCCESS"],
      data: this.defaultRoutes
    });
  }

  getRoutesFromApi() {
    return Promise.resolve({
      status: "SUCCESS",
      message: ["SUCCESS"],
      data: this.productRoutes
    });
  }
}
