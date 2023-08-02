import IUserService from "../interfaces/user";
import { IUserDetailsPayload } from "../types/userTypes";

class UserService implements IUserService {

  /**
   * Function to update user values
   * @param payload Contains two required strings `userName` and `userEmail`,
   * values of the user to be updated
   */
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

export default UserService;
