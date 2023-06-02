import { IBaseEntity } from "./base-entity.interface";

export interface ISettings extends IBaseEntity {
  emailsEnabled: boolean;
  maintenanceModeEnabled: boolean;
  maintenanceModeMessage: string;
  maintenanceModeURL: string;
}
