import { UserDetailsPayload } from "../types/eventTypes";

interface IEventService {
  sendUserInfo(payload: UserDetailsPayload): void;
}

export default IEventService;