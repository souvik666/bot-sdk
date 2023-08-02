import EventService from "./user";

export class BotSdk {
  event: EventService;

  constructor() {
    this.event = new EventService();
  }
}