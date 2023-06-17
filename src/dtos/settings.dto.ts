import { ISettings, ISocialMediaMap } from "../interfaces";
import { BaseDTO } from "./base.dto";

export class SettingsDTO extends BaseDTO implements Partial<ISettings> {
  public emailsEnabled!: boolean;

  public maintenanceModeEnabled!: boolean;

  public maintenanceModeMessage!: string;

  public maintenanceModeURL!: string;

  public allowUserRegistration!: boolean;

  public socialMediaLinksData!: ISocialMediaMap;

  constructor(data?: any) {
    super(data);

    if (data) {
      this.emailsEnabled = data.emailsEnabled;
      this.maintenanceModeEnabled = data.maintenanceModeEnabled;
      this.maintenanceModeMessage = data.maintenanceModeMessage;
      this.maintenanceModeURL = data.maintenanceModeURL;
      this.allowUserRegistration = data.allowUserRegistration;
      this.socialMediaLinksData = data?.socialMediaLinks
        ? JSON.parse(data.socialMediaLinks)
        : null;
    }
  }
}
