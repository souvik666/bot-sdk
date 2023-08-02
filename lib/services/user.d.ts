import IUserService from "../interfaces/user";
import { IUserDetailsPayload } from "../types";

declare class UserService implements IUserService {
  updateUserInfo(payload: IUserDetailsPayload): void;
}

export default UserService;