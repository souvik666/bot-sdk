import IEventService from "../interfaces/user";
import { IUserDetailsPayload } from "../types/userTypes";

class EventService implements IEventService {

  updateUserInfo(payload: IUserDetailsPayload): void {
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
