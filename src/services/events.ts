import IEventService from "../interfaces/events";
import { UserDetailsPayload } from "../types/eventTypes";

class EventService implements IEventService {

  sendUserInfo(payload: UserDetailsPayload): void {
    const { userName, userEmail, ...additionalProps } = payload;
    const message = {
      userName: userName,
      userEmail: userEmail,
      ...additionalProps,
    };
    window.postMessage(message, "*");
  }
}

export default EventService;
