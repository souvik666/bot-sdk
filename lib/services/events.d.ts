import IEventService from "../interfaces/events";
import { UserDetailsPayload } from "../types";

declare class EventService implements IEventService {
  sendUserInfo(payload: UserDetailsPayload): void;
}

export default EventService;