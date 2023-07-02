import { IRole, PrivilegesUtil, RolesConfig } from "../src";

describe("Privileges Functionality", () => {
  test("should be able to get a flat array of privileges from an array of roles", () => {
    const roles = RolesConfig.getRoles();
    const privileges = PrivilegesUtil.getAllPrivilegesFromRoles(
      roles as IRole[]
    );
    expect(privileges).toHaveLength(7);
  });
});
