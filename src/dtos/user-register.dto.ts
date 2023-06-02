import { UserLoginDTO } from "./user-login.dto";

export class UserRegisterDTO extends UserLoginDTO {
  public displayName: string;

  constructor(data: any) {
    super(data);
    this.displayName = data.displayName;
  }
}
