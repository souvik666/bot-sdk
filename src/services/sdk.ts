import EventService from "./events";

export class BotSdk {
  event: EventService;

  constructor() {
    this.event = new EventService();
  }
}