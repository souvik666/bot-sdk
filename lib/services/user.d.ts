import IUserService from "../interfaces/user";
import { IUserDetailsPayload } from "../types";

declare class UserService implements IUserService {
  /**
   * Function to update user values
   * @param payload Contains two required strings `userName` and `userEmail`,
   * values of the user to be updated
   */
  updateUserInfo(payload: IUserDetailsPayload): void;
}

export default UserService;