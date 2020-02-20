import { STATUS_SUCCESS, STATUS_FAIL } from "../constants";

export const toQuickLinksRequest = ({ storeId }) => ({
  store_id: storeId
});

export const toQuickLinkPage = data => {
  if (data) {
    if (data.status === STATUS_SUCCESS) {
      return toQuickLinks(data.data);
    }
    if (data.status === STATUS_FAIL) {
      throw Error(data.message);
    }
  }
  return [];
};

export const toQuickLinks = data => {
  if (data) {
    return {
      footerBlocks: toQuickLinkItemArray(data.footer_blocks),
      footerTrustIcons: toFooterTrustIconArray(data.footer_trust_icons)
    };
  }
};

export const toQuickLinkItemArray = data => {
  if (data && data.length) {
    return data.map(n => toQuickLinkItem(n));
  }
  return [];
};

export const toQuickLinkItem = data => {
  if (data) {
    return {
      id: data.id,
      title: data.title,
      links: toBlockLinkArray(data.links)
    };
  }
};

export const toBlockLinkArray = data => {
  if (data && data.length) {
    return data.map(n => toBlockLink(n));
  }
  return [];
};

export const toBlockLink = data => {
  if (data) {
    return {
      isInternal: data.isInternal,
      isNewWindow: data.isNewWindow,
      title: data.title,
      url: data.url
    };
  }
};

export const toFooterTrustIconArray = data => {
  if (data && data.length) {
    return data.map(n => toFooterTrustIcon(n));
  }
  return [];
};

export const toFooterTrustIcon = data => {
  if (data) {
    return {
      imageUrl: data.image,
      text: data.text
    };
  }
};
