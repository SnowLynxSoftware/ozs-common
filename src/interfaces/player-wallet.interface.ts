import { IBaseEntity } from "./base-entity.interface";
import { IUser } from "./user.interface";

export interface IPlayerWallet extends IBaseEntity {
  user: IUser;
  gold: number;
  soulShards: number;
}
