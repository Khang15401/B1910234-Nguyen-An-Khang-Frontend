import createApiClient from "./api.service";
class ContactService {
  constructor(baseUrl = "/api/users") {
    this.api = createApiClient(baseUrl);
  }
  
  async login(data) {
    return (await this.api.post("/login/account", data)).data;
  }

  async register(data) {
    return (await this.api.post("/", data)).data;
  }
  
  
}
export default new ContactService();
