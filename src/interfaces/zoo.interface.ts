import { IBaseEntity } from "./base-entity.interface";
import { IUser } from "./user.interface";

export interface IZoo extends IBaseEntity {
  name: string;
  user: IUser;
}
