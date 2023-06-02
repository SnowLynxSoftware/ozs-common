import { Privileges } from "../enums";
import { IRole } from "../interfaces";

export class PrivilegesUtil {
  /**
   * Given an array of all roles, will return a flat array of all privileges contained within those roles.
   * @param roles The roles we want to get privileges for.
   */
  public static getAllPrivilegesFromRoles(roles: IRole[]): Privileges[] {
    let privileges: Privileges[] = [];
    roles.forEach((role) =>
      privileges.push(...(role.privileges as Privileges[]))
    );
    return privileges;
  }
}
