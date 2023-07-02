import { IBaseEntity } from "./base-entity.interface";

export interface IAnimalConservationStatus extends IBaseEntity {
  name: string;
  description: string;
}
