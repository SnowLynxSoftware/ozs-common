export class RandomUtil {
  /**
   * Given a size, return a random string with the specified length. The size must be greater than or equal to 8.
   * @param size The size/length of the random string.
   * @param urlSafe Whether or not the string should be url safe. Defaults to false.
   */
  public static generateRandomString(size: number, urlSafe = false): string {
    if (size < 8) throw new Error("Size must be greater than or equal to 8.");

    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = lowercase.toUpperCase();
    const numbers = "0123456789";
    const symbols = "!$_?.-";
    const dictionary = lowercase + uppercase + numbers + symbols;
    let token = "";

    if (urlSafe) {
      for (let i = 0; i < size; i++) {
        // For URL Safe values we will stick to UPPERCASE and numbers only.
        if (i % 2 === 0)
          token += uppercase[Math.floor(Math.random() * uppercase.length)];
        else {
          token += numbers[Math.floor(Math.random() * numbers.length)];
        }
      }
    } else {
      for (let i = 0; i < size; i++) {
        // Ensure at least one of each character type is included.
        if (i === 0)
          token += lowercase[Math.floor(Math.random() * lowercase.length)];
        else if (i === 1)
          token += uppercase[Math.floor(Math.random() * uppercase.length)];
        else if (i === 2)
          token += numbers[Math.floor(Math.random() * numbers.length)];
        else if (i === 3)
          token += symbols[Math.floor(Math.random() * symbols.length)];
        else token += dictionary[Math.floor(Math.random() * dictionary.length)];
      }
    }

    // Lastly just shuffle the string, so it's not predictable.
    token = token
      .split("")
      .sort(() => Math.random() - 0.5)
      .join("");

    return token;
  }
}
