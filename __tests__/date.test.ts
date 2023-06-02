import { DateUtil } from "../src";

describe("Date Util Functionality", () => {
  test("should be able to get current timestamp as a number in MS", () => {
    const nowInMS = DateUtil.getCurrentTimestampInMS();
    expect(nowInMS).not.toBeNull();
  });
  test("should be able to get current timestamp as a number in SECs", () => {
    const nowInSecs = DateUtil.getCurrentTimestampInSeconds();
    expect(nowInSecs).not.toBeNull();
  });
  test("should be able to get current date in UTC", () => {
    const now = DateUtil.getCurrentDate();
    expect(now).not.toBeNull();
  });
  test("should be able to get current date in UTC and formatted as a string", () => {
    const now = DateUtil.getCurrentDateFormatted();
    expect(now).not.toBeNull();
  });
  test("should be able to parse a date as a formatted string", () => {
    const now = DateUtil.getCurrentDate();
    const nowFormatted = DateUtil.parseDateAsFormattedString(now);
    expect(nowFormatted).not.toBeNull();
  });
  test("should be able to parse a timestamp as a formatted string", () => {
    const now = DateUtil.getCurrentTimestampInMS();
    const nowFormatted = DateUtil.parseTimestampAsFormattedString(now);
    expect(nowFormatted).not.toBeNull();
  });
});
