import { IRole } from "../interfaces";
import { Privileges, RoleKey } from "../enums";

export class RolesConfig {
  public static getRoles(): IRole[] {
    const bannedRole: IRole = {
      key: RoleKey.BANNED,
      privileges: [],
    };

    const playerRole: IRole = {
      key: RoleKey.PLAYER,
      privileges: [],
    };

    const moderatorRole: IRole = {
      key: RoleKey.MODERATOR,
      privileges: [],
    };

    const adminRole: IRole = {
      key: RoleKey.ADMIN,
      privileges: [
        ...playerRole.privileges,
        ...moderatorRole.privileges,
        Privileges.CAN_VIEW_ADMIN_DASHBOARD,
        Privileges.CAN_BAN_USERS,
        Privileges.CAN_UNBAN_USERS,
        Privileges.CAN_EDIT_OTHER_USER_INFO,
      ],
    };

    return [bannedRole, playerRole, moderatorRole, adminRole];
  }
}
