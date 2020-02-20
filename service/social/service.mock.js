import AuthenticatedApiService from "../authenticatedApiService";

export default class SocialMockService extends AuthenticatedApiService {
  get({ id, url, data }) {
    return Promise.resolve({
      status: "SUCCESS",
      message: ["SUCCESS"],
      data: [
        {
          id: 10101,
          title: "Facebook",
          url: "https://www.fb.com/",
          platform: "Facebook"
        },
        {
          id: 10102,
          title: "Instagram",
          url: "https://www.instagram.com/",
          platform: "Instagram"
        },
        {
          id: 10103,
          title: "Twitter",
          url: "https://www.twitter.com/",
          platform: "Twitter"
        },
        {
          id: 10104,
          title: "Youtube",
          url: "https://www.youtube.com/",
          platform: "Youtube"
        }
      ]
    });
  }
}
