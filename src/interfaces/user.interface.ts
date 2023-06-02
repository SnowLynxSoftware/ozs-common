import { IBaseEntity } from "./base-entity.interface";

export interface IUser extends IBaseEntity {
  email: string;
  displayName: string;
  verified: boolean;
  hash: string;
  lastLogin: Date;
  banDate: Date;
  banReason: string;
  isBanned: boolean;
  allowCommunityNewsletter: boolean;
}
