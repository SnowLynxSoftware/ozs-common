import { StringUtil } from "../src";

describe("String Util Functionality", () => {
  test("should be able to decode the payload from a JWT", () => {
    const payload = {
      id: 1,
      name: "mr. test payload",
    };
    const fakeJWT = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.${Buffer.from(
      JSON.stringify(payload)
    ).toString("base64")}.a-fake-signature`;
    const decodedPayload = StringUtil.decodeJWT<{ id: number; name: string }>(
      fakeJWT
    );
    if (decodedPayload === null) {
      throw new Error("Payload should not be null");
    }
    expect(decodedPayload.name).toBe(payload.name);
  });

  test("should return null when attempting to decode an invalid token", () => {
    const decodedPayload = StringUtil.decodeJWT<{ id: number; name: string }>(
      "invalid-token"
    );
    expect(decodedPayload).toBeNull();
  });

  test("should be able to get credentials from basic auth header", () => {
    const credentials = {
      username: "myUsername",
      password: "myPassw0rd!",
    };
    const fakeAuthHeader = `Basic ${Buffer.from(
      `${credentials.username}:${credentials.password}`
    ).toString("base64")}`;
    const credentialsFromHeader =
      StringUtil.getCredentialsFromBasicAuthHeader(fakeAuthHeader);
    if (credentialsFromHeader === null) {
      throw new Error("credentialsFromHeader should not be null");
    }
    expect(credentialsFromHeader.username).toBe(credentials.username);
    expect(credentialsFromHeader.password).toBe(credentials.password);
  });

  test("should return null when attempting to get credentials from invalid basic auth header", () => {
    const fakeAuthHeader = "invalid-auth-header";
    const credentialsFromHeader =
      StringUtil.getCredentialsFromBasicAuthHeader(fakeAuthHeader);
    expect(credentialsFromHeader).toBeNull();
  });

  test("should be able to build basic auth header", () => {
    const credentials = {
      username: "myUsername",
      password: "myPassw0rd!",
    };

    const basicAuthHeader = StringUtil.buildBasicAuthHeader(
      credentials.username,
      credentials.password
    );

    expect(basicAuthHeader).toBe(
      `Basic ${Buffer.from(
        `${credentials.username}:${credentials.password}`
      ).toString("base64")}`
    );
  });

  test("should be able to trim whitespace from a string", () => {
    const stringWithWhitespace = "  this is a string with whitespace  ";

    const trimmedString = StringUtil.trimString(stringWithWhitespace);

    expect(trimmedString).toBe("this is a string with whitespace");
  });

  test("should be able to trim a string and replace all instances of a substring", () => {
    const stringWithWhitespace = "  this is a string with whitespace  ";

    const trimmedString = StringUtil.trimString(stringWithWhitespace, "with ");

    expect(trimmedString).toBe("this is a string whitespace");
  });
});
