import IEventService from "../interfaces/user";
import { IUserDetailsPayload } from "../types";

declare class UserService implements IEventService {
  updateUserInfo(payload: IUserDetailsPayload): void;
}

export default UserService;