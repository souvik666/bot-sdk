import IUserService from "../interfaces/user";
import { IUserDetailsPayload } from "../types/userTypes";

class UserService implements IUserService {

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
