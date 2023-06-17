import { IBaseEntity } from "./base-entity.interface";

export interface ISocialMediaMap {
  github: string;
  reddit: string;
  discord: string;
  twitter: string;
  facebook: string;
  instagram: string;
  pbbg: string;
}

export interface ISettings extends IBaseEntity {
  emailsEnabled: boolean;
  maintenanceModeEnabled: boolean;
  maintenanceModeMessage: string;
  maintenanceModeURL: string;
  allowUserRegistration: boolean;
  socialMediaLinks: string;
}
