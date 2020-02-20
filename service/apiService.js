import axios from "axios";

import { API_URL } from "./constants";

export default class ApiService {
  constructor() {
    this.instance = axios.create({ withCredentials: true });
  }

  async get({ id, url, data }) {
    const serviceUrl = this.getEndpointUrl({ id, url });

    try {
      const response = await this.instance({
        method: "get",
        url: serviceUrl,
        params: data
      });
      return response.data;
    } catch (error) {
      console.error(`Url: ${serviceUrl}, Method: "GET", Error: ${error}`);
      throw error;
    }
  }

  async post({ id, url, data }) {
    const serviceUrl = this.getEndpointUrl({ id, url });

    try {
      const response = await this.instance({
        method: "post",
        url: serviceUrl,
        data
      });
      return response.data;
    } catch (error) {
      console.error(`Url: ${serviceUrl}, Error: ${error}`);
      throw error;
    }
  }

  async put({ id, url, data }) {
    const serviceUrl = this.getEndpointUrl({ id, url });

    try {
      const response = await this.instance({
        method: "put",
        url: serviceUrl,
        data
      });
      return response.data;
    } catch (error) {
      console.error(`Url: ${serviceUrl}, Error: ${error}`);
      throw error;
    }
  }

  async delete({ id, url, data }) {
    const serviceUrl = this.getEndpointUrl({ id, url });

    try {
      const response = await this.instance({
        method: "delete",
        url: serviceUrl,
        data
      });
      return response.data;
    } catch (error) {
      console.error(`Url: ${serviceUrl}, Error: ${error}`);
      throw error;
    }
  }

  getServiceUrl() {
    return API_URL;
  }

  getEndpointUrl({ id, url }) {
    let serviceUrl = url || this.getServiceUrl();

    if (id) {
      serviceUrl = `${serviceUrl}/${id}`;
    }

    return serviceUrl;
  }
}
