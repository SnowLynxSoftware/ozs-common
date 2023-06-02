/**
 * Contains various string helper and utility functions that we can reuse.
 */
export class StringUtil {
  /**
   * Given a JWT--will attempt to decode the JWT and return the payload.
   * Note that this simply provides a utility function for decoding a JWT and does not validate the JWT.
   * @param token The JWT Token we want to decode.
   */
  public static decodeJWT<T>(token: string): T | null {
    try {
      return JSON.parse(Buffer.from(token.split(".")[1], "base64").toString());
    } catch (_error) {
      return null;
    }
  }

  /**
   * Given a basic auth header, will attempt to return the username and password.
   * @param basicAuth The basic auth header we want to parse.
   */
  public static getCredentialsFromBasicAuthHeader(basicAuth: string): {
    username: string;
    password: string;
  } | null {
    try {
      const [username, password] = Buffer.from(
        basicAuth.split(" ")[1],
        "base64"
      )
        .toString()
        .split(":");
      return { username, password };
    } catch (_error) {
      return null;
    }
  }

  /**
   * Given a username and password, will attempt to build a basic auth header string.
   * @param username The username we want to use.
   * @param password The password we want to use.
   */
  public static buildBasicAuthHeader(
    username: string,
    password: string
  ): string {
    return `Basic ${Buffer.from(`${username}:${password}`).toString("base64")}`;
  }

  /**
   * Given a string value, will attempt to trim the string and optionally remove a substring.
   * @param value
   * @param substring
   */
  public static trimString(value: string, substring: string = ""): string {
    if (!value) {
      return "";
    } else if (!substring) {
      return value.trim();
    } else {
      return value.replaceAll(substring, "").trim();
    }
  }
}
