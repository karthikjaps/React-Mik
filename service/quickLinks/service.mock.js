import AuthenticatedApiService from "../authenticatedApiService";

export default class QuickLinksMockService extends AuthenticatedApiService {
  get({ data }) {
    return Promise.resolve({
      status: "SUCCESS",
      message: ["SUCCESS"],
      data: [
        {
          id: 10060,
          title: "shop",
          links: [
            {
              title: "Makeup",
              url: "/shop",
              isNewWindow: true,
              isInternal: true
            },
            {
              title: "Accessories",
              url: "/shop",
              isNewWindow: true,
              isInternal: true
            },
            {
              title: "Just Arrived",
              url: "/shop",
              isNewWindow: true,
              isInternal: true
            },
            {
              title: "Items On Sale",
              url: "/shop",
              isNewWindow: true,
              isInternal: true
            }
          ]
        },
        {
          id: 10061,
          title: "About Us",
          links: [
            {
              title: "Our Story",
              url: "/shop",
              isNewWindow: false,
              isInternal: true
            },
            {
              title:
                "Address: Sultan Business Center, 301, 3rd Floor, Oud Metha, Dubai, UAE",
              url: "/shop",
              isNewWindow: false,
              isInternal: true
            }
          ]
        },
        {
          id: 10062,
          title: "Careers",
          links: [
            {
              title: "Join Mikyajy Now",
              url: "/shop",
              isNewWindow: false,
              isInternal: true
            }
          ]
        },
        {
          id: 10063,
          title: "Help & Information",
          links: [
            {
              title: "Contact Us",
              url: "/shop",
              isNewWindow: false,
              isInternal: true
            },
            {
              title: "Shipping Policy",
              url: "/shop",
              isNewWindow: false,
              isInternal: true
            },
            {
              title: "Returns and Refunds ",
              url: "/shop",
              isNewWindow: false,
              isInternal: true
            },
            {
              title: "Track Order",
              url: "/shop",
              isNewWindow: false,
              isInternal: true
            },
            {
              title: "Store locator",
              url: "/shop",
              isNewWindow: false,
              isInternal: true
            }
          ]
        }
      ]
    });
  }
}
