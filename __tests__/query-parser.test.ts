import { QueryParserUtil } from "../src";

describe("Query Parser Functionality - Parse String", () => {
  test("should return number as a string", () => {
    expect(QueryParserUtil.parseString(2)).toBe("2");
  });
  test("should return null as an empty string string", () => {
    expect(QueryParserUtil.parseString(null)).toBe("");
  });
  test("should return undefined as an empty string string", () => {
    expect(QueryParserUtil.parseString(undefined)).toBe("");
  });
  test("should return a string as a string", () => {
    expect(QueryParserUtil.parseString("soul")).toBe("soul");
  });
});

describe("Query Parser Functionality - Parse Boolean", () => {
  test("should return string TRUE as true boolean", () => {
    expect(QueryParserUtil.parseBoolean("trUE")).toBeTruthy();
  });
  test("should return string FALSE as false boolean", () => {
    expect(QueryParserUtil.parseBoolean("fAlSe")).toBeFalsy();
  });
  test("should return number 1 as true boolean", () => {
    expect(QueryParserUtil.parseBoolean(1)).toBeTruthy();
  });
  test("should return number 0 as false boolean", () => {
    expect(QueryParserUtil.parseBoolean(0)).toBeFalsy();
  });
  test("should return random string as false boolean", () => {
    expect(QueryParserUtil.parseBoolean("soul")).toBeFalsy();
  });
  test("should return false as false boolean", () => {
    expect(QueryParserUtil.parseBoolean(false)).toBeFalsy();
  });
  test("should return false as when given undefined or null", () => {
    expect(QueryParserUtil.parseBoolean(undefined)).toBeFalsy();
  });
});

describe("Query Parser Functionality - Parse Number", () => {
  test("should return string 25 as number 25", () => {
    expect(QueryParserUtil.parseNumber("25")).toBe(25);
  });
  test("should return string '2r' as number 0", () => {
    expect(QueryParserUtil.parseNumber("2r")).toBe(0);
  });
  test("should return string '25.998' as float number 25.998", () => {
    expect(QueryParserUtil.parseNumber("25.998")).toBe(25.998);
  });
  test("should return string '-5' as number -5", () => {
    expect(QueryParserUtil.parseNumber("-5")).toBe(-5);
  });
  test("should return 0 when passing an invalid number", () => {
    expect(QueryParserUtil.parseNumber("0.abc")).toBe(0);
  });
  test("should return 0 when passing an undefined value", () => {
    expect(QueryParserUtil.parseNumber(undefined)).toBe(0);
  });
});
