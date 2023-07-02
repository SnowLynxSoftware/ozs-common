import { IBaseEntity } from "./base-entity.interface";

export interface IAnimalCategoryType extends IBaseEntity {
  name: string;
  description: string;
}
