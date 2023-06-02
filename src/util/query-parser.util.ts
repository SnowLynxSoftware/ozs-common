export class QueryParserUtil {
  /**
   * Given any value, will attempt to return the value as a string.
   * @param value The value we want to cast.
   */
  public static parseString(value: any): string {
    try {
      if (!value) {
        return "";
      } else if (typeof value === "string") {
        return value as string;
      } else {
        return value.toString();
      }
    } catch (_error) {
      return "";
    }
  }

  /**
   * Given any value, will attempt to return the value as a number.
   * If the value isn't a valid number, then we always return 0.
   * @param value The value we want to cast.
   */
  public static parseNumber(value: any): number {
    if (!value) {
      return 0;
    } else if (!isNaN(value)) {
      if (value.toString().indexOf(".") > -1) {
        return parseFloat(value.toString());
      } else {
        return parseInt(value.toString());
      }
    } else {
      return 0;
    }
  }

  /**
   * Given any value, will attempt to convert to a boolean;
   * @param value The value we want to cast.
   */
  public static parseBoolean(value: any): boolean {
    if (value === null || value === undefined) {
      return false;
    } else if (typeof value === "boolean") {
      return value as boolean;
    } else if (value.toString()?.toLowerCase() === "true") {
      return true;
    } else return value.toString() === "1";
  }
}
