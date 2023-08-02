import { IUserDetailsPayload } from "../types/userTypes";

interface IUserService {
  updateUserInfo(payload: IUserDetailsPayload): void;
}

export default IUserService;