import { UserType } from "../enums";

export interface IUser {
  userName: string;
  password: string;
  userType: UserType;
  id?: string;
  // 余额
  balance?: number;
}
