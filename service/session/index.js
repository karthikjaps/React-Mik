import SessionService from "./service";

export default class Service {
  constructor() {
    this.service = new SessionService();
  }

  async post(data) {
    try {
      return this.service.setSession(data);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
