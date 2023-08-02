import { IUserDetailsPayload } from "../types/userTypes";

interface IEventService {
  updateUserInfo(payload: IUserDetailsPayload): void;
}

export default IEventService;