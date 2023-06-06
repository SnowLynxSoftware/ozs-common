import { RandomUtil } from "../src";

describe("Random Functionality", () => {
  test("should be able to generate a random token of specified length", () => {
    const length = 16;
    expect(RandomUtil.generateRandomString(length)).toHaveLength(length);
  });
  test("multiple generated tokens should be unique", () => {
    const size = 16;
    const token1 = RandomUtil.generateRandomString(size);
    const token2 = RandomUtil.generateRandomString(size);
    expect(token1).not.toBe(token2);
  });
  test("too short of a string size should throw an error", () => {
    const size = 7;
    try {
      RandomUtil.generateRandomString(size);
    } catch (error: any) {
      expect(error).not.toBeNull();
    }
  });
  test("specified random length should be honored", () => {
    const size = 12;
    const token = RandomUtil.generateRandomString(size);
    expect(token).toHaveLength(size);
  });
  test("should be able to generate random UrlSafe tokens", () => {
    const size = 16;
    const token1 = RandomUtil.generateRandomString(size, true);
    const token2 = RandomUtil.generateRandomString(size, true);
    expect(token1).not.toBe(token2);
  });
});
