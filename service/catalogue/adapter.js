import { STATUS_SUCCESS, STATUS_FAIL } from "../constants";
import { toPriceString, toPagination } from "../adapter";
import {
  NON_FILTERS,
  FILTERS_PRICE,
  DEFAULT_PAGE_SIZE,
  DEFAULT_CATEGORY_ID
} from "./constants";

export const toCatalogue = data => {
  if (data) {
    if (data.status === STATUS_SUCCESS) {
      const { data: responseData } = data;

      return {
        title: responseData.category_title,
        items: toCatalogueItemArray(responseData.products),
        pagination: toPagination(responseData)
      };
    }
    if (data.status === STATUS_FAIL) {
      throw Error(data.message);
    }
  }
  return null;
};

export const toCatalogueItemArray = data => {
  if (data && data.length) {
    return data.map(n => toCatalogueItem(n));
  }
  return [];
};

export const toCatalogueItemPage = data => {
  if (data) {
    if (data.status === STATUS_SUCCESS) {
      const { data: responseData } = data;
      return {
        item: toCatalogueItem(responseData[0])
      };
    }
    if (data.status === STATUS_FAIL) {
      throw Error(data.message);
    }
  }
  return null;
};

export const toCatalogueItem = data => {
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
      isSelectedWishItem: false
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

export const toOffsetLimit = ({ page, pageSize }) => {
  page = parseInt(page);
  pageSize = parseInt(pageSize);

  const offset = (page - 1) * pageSize;
  return {
    offset: offset || 0,
    limit: parseInt(pageSize) || DEFAULT_PAGE_SIZE
  };
};

export const toGetProductsRequest = ({
  categoryId,
  filter,
  page,
  pageSize,
  sortingOrder,
  storeId,
  keyWord
}) =>
  keyWord
    ? {
        store_id: storeId,
        filter: toGetProductsFilterRequest(filter),
        sort_option: sortingOrder,
        key_word: keyWord,
        ...toOffsetLimit({ page, pageSize })
      }
    : {
        store_id: storeId,
        category_id: categoryId || DEFAULT_CATEGORY_ID,
        filter: toGetProductsFilterRequest(filter),
        sort_option: sortingOrder,
        ...toOffsetLimit({ page, pageSize })
      };

export const toGetProductsFilterRequest = data => {
  let filterData = [];
  for (const n in data) {
    if (data.hasOwnProperty(n) && !NON_FILTERS.includes(n)) {
      let value = [];
      if (n === FILTERS_PRICE) {
        for (const m in data[n]) {
          value.push(data[n][m]);
        }
        if (value.length) {
          filterData.push({ key: n, value: value.join("-") });
        }
      } else {
        for (const m in data[n]) {
          if (data[n].hasOwnProperty(m) && data[n][m]) {
            value.push(m);
          }
        }
        if (value.length) {
          filterData.push({ key: n, value });
        }
      }
    }
  }
  return filterData;
};

export const toGetProductRequest = ({ productId, storeId }) => ({
  product_id: productId,
  store_id: storeId
});

export const toGetCategoryFiltersRequest = ({ categoryId, storeId }) => ({
  category_id: categoryId || DEFAULT_CATEGORY_ID,
  store_id: storeId
});

export const toCatalogueFilters = data => {
  if (data) {
    if (data.status === STATUS_SUCCESS) {
      const { data: responseData } = data;

      return {
        items: toCatalogueFilterItemArray(responseData.filter)
      };
    }
    if (data.status === STATUS_FAIL) {
      throw Error(data.message);
    }
  }
  return null;
};

export const toCatalogueFilterItem = data => {
  if (data) {
    if (data.code === FILTERS_PRICE) {
      return {
        title: data.title,
        type: data.type,
        name: data.code,
        isMultiselect: data.is_multiselect,
        values: toCatalogueFilterPriceValueArray(data.value)
      };
    } else {
      return {
        title: data.title,
        type: data.type,
        name: data.code,
        isMultiselect: data.is_multiselect,
        values: toCatalogueFilterValueArray(data.value)
      };
    }
  }
  return null;
};

export const toCatalogueFilterItemArray = data => {
  if (data && data.length) {
    return data.map(n => toCatalogueFilterItem(n));
  }
  return [];
};

export const toCatalogueFilterValue = data => {
  if (data) {
    return {
      id: data.id,
      title: data.label
    };
  }
  return null;
};

export const toCatalogueFilterPriceValue = data => {
  if (data) {
    return {
      min: data.min,
      max: data.max
    };
  }
  return null;
};

export const toCatalogueFilterValueArray = data => {
  if (data && data.length) {
    return data.map(n => toCatalogueFilterValue(n));
  }
  return [];
};

export const toCatalogueFilterPriceValueArray = data => {
  if (data && data.length) {
    return data.map(n => toCatalogueFilterPriceValue(n));
  }
  return [];
};
