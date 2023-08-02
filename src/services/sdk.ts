import UserService from "./user";

export class BotSdk {
  event: UserService;

  constructor() {
    this.event = new UserService();
  }
}