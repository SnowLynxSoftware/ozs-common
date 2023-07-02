import { IBaseEntity } from "./base-entity.interface";

export interface IAnimal extends IBaseEntity {
  name: string;
  description: string;
}
