import { IBaseEntity } from "./base-entity.interface";
import { IAnimalCategoryType } from "./animal-category-type.interface";
import { IAnimalRegion } from "./animal-region.interface";
import { IAnimalConservationStatus } from "./animal-conservation-status.interface";

export interface IAnimal extends IBaseEntity {
  name: string;
  description: string;
  categoryType: IAnimalCategoryType;
  region: IAnimalRegion;
  conservationStatus: IAnimalConservationStatus;
  image: string;
  baseHypeFactor: number;
  baseMarketCost: number;
}
