import { NAVIGATION_TYPE, MULTITIER_MENU_TYPE } from "./constants";
import { STATUS_SUCCESS, STATUS_FAIL } from "../constants";

export const toNavigationRequest = ({ storeId }) => ({
  store_id: storeId
});

export const toNavigation = data => {
  if (data) {
    if (data.status === STATUS_SUCCESS) {
      const { data: responseData } = data;

      return {
        ...toNavigationContent(responseData)
      };
    }
    if (data.status === STATUS_FAIL) {
      throw Error(data.message);
    }
  }
  return null;
};

export const toNavigationContent = data => {
  let response = {
    nav: []
  };

  data
    .filter(n => n)
    .forEach(n => {
      switch (n.type) {
        case NAVIGATION_TYPE:
          response = Object.assign(response, toNavigationMenu(n.data));
          break;
        default:
          break;
      }
    });

  return response;
};

const toNavigationMenu = data => {
  switch (data.type) {
    case MULTITIER_MENU_TYPE:
      return { nav: toNavigationMenuItemArray(data.items) };
    default:
      break;
  }
};

const toNavigationMenuItem = data => {
  if (data) {
    return {
      title: data.category_name,
      id: data.category_id,
      new: data.is_new,
      url: `/shop${data.category_url}`,
      children: toNavigationMenuItemArray(data.children),
      images: toNavigationMenuImageArray(data.images),
      isActive: false
    };
  }
  return null;
};

const toNavigationMenuImage = data => {
  if (data) {
    return {
      imageUrl: data.image_url,
      url: data.redirection_url,
      title: data.product_name
    };
  }
  return null;
};

const toNavigationMenuItemArray = data => {
  if (data && data.length) {
    return data.map(n => toNavigationMenuItem(n));
  }
  return [];
};

const toNavigationMenuImageArray = data => {
  if (data && data.length) {
    return data.map(n => toNavigationMenuImage(n));
  }
  return [];
};
