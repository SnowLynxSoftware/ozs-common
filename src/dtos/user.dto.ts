import { BaseDTO } from "./base.dto";
import { IRole } from "../interfaces";

export class UserDTO extends BaseDTO {
  email: string;
  displayName: string;
  verified: boolean;
  lastLogin: Date;
  banDate: Date;
  banReason: string;
  isBanned: boolean;
  role: IRole;

  constructor(data?: any) {
    super(data);
    this.email = data?.email;
    this.displayName = data?.displayName;
    this.verified = data?.verified;
    this.lastLogin = data?.lastLogin;
    this.banDate = data?.banDate;
    this.banReason = data?.banReason;
    this.isBanned = data?.isBanned;
    this.role = data && data?.roleData ? JSON.parse(data?.roleData) : null;
  }
}
