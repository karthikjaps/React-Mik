import { STATUS_SUCCESS, STATUS_FAIL } from "../constants";
import {
  MAIN_BANNER,
  SECONDARY_BANNER,
  SUBHEADER_BANNER,
  MAIN_BANNER_MOBILE
} from "./constants";
import { toPriceString } from "../adapter";

export const toGetPromotionRequest = ({ productId, storeId }) => ({
  product_id: productId,
  store_id: storeId
});

export const toPromotionPage = data => {
  if (data) {
    if (data.status === STATUS_SUCCESS) {
      const { data: responseData } = data;
      return {
        item: toPromotionItem(responseData[0])
      };
    }
    if (data.status === STATUS_FAIL) {
      throw Error(data.message);
    }
  }
  return null;
};

export const toPromotionItem = data => {
  if (data) {
    return {
      url: `/shop${data.product_url || ""}`,
      id: data.product_id,
      sku: data.product_sku,
      title: data.product_name,
      type: data.type,
      rrp: data.markdown_price ? toPriceString(data.product_price, true) : "",
      price: data.markdown_price
        ? toPriceString(data.markdown_price, true)
        : toPriceString(data.product_price, true),
      discount: data.discount_percentage,
      tag: data.product_tag
        ? { icon: data.product_tag.icon, text: data.product_tag.text }
        : undefined,
      description: data.product_description,
      shortDescription: data.product_short_description,
      ingredients:
        data.product_attributes &&
        (data.product_attributes.find(n => n.title === "Product Ingredients") &&
          data.product_attributes.find(n => n.title === "Product Ingredients")
            .value),
      swatchOptions:
        data.options &&
        data.options.find(n => n.id === "Swatch Id") &&
        toSwatchOptionArray(
          data.options.find(n => n.id === "Swatch Id").options
        ),
      swatchCode:
        data.product_attributes &&
        (data.product_attributes.find(n => n.title === "swatch code") &&
          data.product_attributes.find(n => n.title === "swatch code").value),
      relatedProducts: toProductArray(data.related_products),
      upsellProducts: toProductArray(data.upsell_products),
      productMediaGallery: toProductGalleryArray(data.product_media_gallery),
      productVideos: toProductVideoArray(data.product_videos),
      tips: data.product_description,
      isAvailable: data.stock_status,
      maxQuantity: data.max_qty,
      availableQuantity: data.available_quantity,
      image: data.product_image,
      images: data.product_images,
      brand: data.brand,
      pdpOffer: data.pdp_offer,
      isSelectedWishItem: false,
      banners: toBanners(data.banners)
    };
  }
  return null;
};

export const toSwatchOptionArray = data => {
  if (data && data.length) {
    return data.map(n => toSwatchOption(n));
  }
  return [];
};

export const toSwatchOption = data => {
  if (data) {
    return {
      id: parseInt(data.option_id),
      value: data.option_value,
      rrp: data.markdown_price ? toPriceString(data.option_price, true) : "",
      price: data.markdown_price
        ? toPriceString(data.markdown_price, true)
        : toPriceString(data.option_price, true),
      title: data.option_title,
      position: data.position,
      typeId: data.option_type_id,
      type: data.option_type,
      isRequired: data.is_required,
      dependenceOptionIds: data.dependence_option_ids,
      dependenceOptions: data.dependence_options,
      maxQuantity: data.max_qty,
      thumbnail: data.swatch_image,
      swatchCode: data.swatch_code,
      image: data.swatch_product_main_image,
      isAvailable: data.stock_status
    };
  }
  return null;
};

export const toProductArray = data => {
  if (data && data.length) {
    return data.map(n => toProduct(n));
  }
  return [];
};

export const toProduct = data => {
  if (data) {
    return {
      id: data.product_id,
      url: `/shop${data.product_url || ""}`,
      title: data.product_name,
      rrp: data.markdown_price ? toPriceString(data.product_price, true) : "",
      price: data.markdown_price
        ? toPriceString(data.markdown_price, true)
        : toPriceString(data.product_price, true),
      regularPrice: data.product_regular_price
        ? toPriceString(data.product_regular_price, true)
        : "",
      discount: data.discount_percentage,
      brand: data.brand,
      isAvailable: data.stock_status,
      tag: data.product_tag
        ? { icon: data.product_tag.icon, text: data.product_tag.text }
        : undefined,
      image: data.product_image,
      multibuyText: data.multibuy_text
    };
  }
};

export const toProductGalleryArray = data => {
  if (data && data.length) {
    return data.map(n => toProductGallery(n));
  }
  return [];
};

export const toProductGallery = data => {
  if (data) {
    return {
      type: data.type,
      url: data.url,
      thumbnailImage: data.thumbnail_image
    };
  }
};

export const toProductVideoArray = data => {
  if (data && data.length) {
    return data.map(n => toProductVideo(n));
  }
  return [];
};

export const toProductVideo = data => {
  if (data) {
    return {
      videoUrl: data.video_url,
      imageUrl: data.image_url
    };
  }
};

const toBanners = data => {
  let response = {
    mainBanners: [],
    mainBannersMobile: [],
    secondaryBanners: [],
    subheaderBanners: []
  };
  data
    .filter(n => n)
    .forEach(n => {
      response = Object.assign(response, toPromotionBanner(n.data));
    });
  return response;
};

const toPromotionBanner = data => {
  switch (data.type) {
    case MAIN_BANNER:
      return {
        mainBanners: toBannerArray(data.items)
      };
    case MAIN_BANNER_MOBILE:
      return {
        mainBannersMobile: toBannerArray(data.items)
      };
    case SECONDARY_BANNER:
      return {
        secondaryBanners: toBannerArray(data.items)
      };
    case SUBHEADER_BANNER:
      return {
        subheaderBanners: toBannerArray(data.items)
      };
    default:
      break;
  }
};

const toBannerArray = data => data.map(n => toBanner(n));

const toBanner = data => {
  if (data) {
    if (data.title === "Video") {
      return {
        src: data.video_url,
        linkText: data.CTA_label,
        title: data.title
      };
    } else {
      return {
        src: data.image_url,
        link: data.redirection_url,
        linkText: data.CTA_label,
        title: data.title,
        summary: data.summary,
        isExternal: /^http(s)?:\/\//.test(data.redirection_url)
      };
    }
  }
  return null;
};
