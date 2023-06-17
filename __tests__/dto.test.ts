import { SettingsDTO, UserDTO, UserLoginDTO, UserRegisterDTO } from "../src";

describe("DTOs Functionality", () => {
  test("should be able to create new user DTOs", () => {
    const userParams = {
      email: "myemail@example.com",
      displayName: "My Name",
      verified: true,
      lastLogin: new Date(),
      banDate: new Date(),
      banReason: "Because I said so",
      isBanned: true,
      allowCommunityNewsletter: true,
    };
    const userDTO = new UserDTO(userParams);
    expect(userDTO).not.toBeNull();
    expect(userDTO.verified).toBeTruthy();

    const loginDTOParams = {
      email: "myemail@example.com",
      password: "password",
    };
    const userLoginDTO = new UserLoginDTO({
      email: loginDTOParams.email,
      password: loginDTOParams.password,
    });
    expect(userLoginDTO).not.toBeNull();
    expect(userLoginDTO.email).toBe(loginDTOParams.email);
    expect(userLoginDTO.password).toBe(loginDTOParams.password);

    const registerDTOParams = {
      email: "myemail@example.com",
      password: "password",
      displayName: "My Name",
    };
    const userRegisterDTO = new UserRegisterDTO({
      email: registerDTOParams.email,
      password: registerDTOParams.password,
      displayName: registerDTOParams.displayName,
    });
    expect(userRegisterDTO).not.toBeNull();
    expect(userRegisterDTO.email).toBe(registerDTOParams.email);
    expect(userRegisterDTO.password).toBe(registerDTOParams.password);
    expect(userRegisterDTO.displayName).toBe(registerDTOParams.displayName);
  });

  test("should be able to create settings DTOs", () => {
    const github = "https://www.github.com/SnowLynxSoftware";

    const settingsData = {
      allowCommunityNewsletter: true,
      maintenanceModeEnabled: false,
      allowUserRegistration: true,
      emailsEnabled: true,
      socialMediaLinks: JSON.stringify({
        github,
      }),
    };
    const settingsDTO = new SettingsDTO(settingsData);
    expect(settingsDTO).not.toBeNull();
    expect(settingsDTO.emailsEnabled).toBeTruthy();
    expect(settingsDTO.socialMediaLinksData.github).toBe(github);
  });
});
