/**
 * Contains utility functions for working with dates.
 */
export class DateUtil {
  /**
   * Returns the current timestamp in milliseconds.
   */
  public static getCurrentTimestampInMS(): number {
    return Date.now();
  }

  /**
   * Returns the current timestamp in seconds.
   */
  public static getCurrentTimestampInSeconds(): number {
    return Math.floor(DateUtil.getCurrentTimestampInMS() / 1000);
  }

  /**
   * Returns the current date. (In UTC.)
   */
  public static getCurrentDate(): Date {
    return new Date(DateUtil.getCurrentTimestampInMS());
  }

  /**
   * Returns the current date in a formatted string. (In UTC.)
   */
  public static getCurrentDateFormatted(): string {
    return DateUtil.getCurrentDate().toISOString().split("T")[0];
  }

  /**
   * Given a date, will return a formatted string.
   * @param date The date we want to format.
   */
  public static parseDateAsFormattedString(date: Date): string {
    return date.toISOString().split("T")[0];
  }

  /**
   * Given a timestamp, will return a formatted string.
   * @param timestamp The timestamp we want to format.
   */
  public static parseTimestampAsFormattedString(timestamp: number): string {
    return DateUtil.parseDateAsFormattedString(new Date(timestamp));
  }
}
