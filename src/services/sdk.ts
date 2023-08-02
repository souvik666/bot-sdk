import UserService from "./user";

export class BotSdk {
  user: UserService;

  constructor() {
    this.user = new UserService();
  }
}