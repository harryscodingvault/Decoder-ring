const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution tests", () => {
  describe("error handling", () => {
    let message = "message";
    let alphabet = "short";

    it("should return false if the substitution alphabet is missing", () => {
      const actual = substitution(message);
      expect(actual).to.be.false;
    });

    it("should return false if the substitution alphabet is not exactly 26 characters", () => {
      const actual = substitution(message, alphabet);
      expect(actual).to.be.false;
    });

    it("should return false if the substitution alphabet does not contain unique characters", () => {
      alphabet = "abcabcabcabcabcabcabcabcab";
      const actual = substitution(message, alphabet);
      expect(actual).to.be.false;
    });
  });

  describe("encode message", () => {
    let message = "message";
    let alphabet = "short";
    let expected = "ykrrpik";

    it("should encode a message by using the given substitution alphabet", () => {
      alphabet = "plmoknijbuhvygctfxrdzeswaq";
      const actual = substitution(message, alphabet);

      expect(actual).to.equal(expected);
    });

    it("should work with any kind of key with unique characters", () => {
      alphabet = ".waeszrdxtfcygvuhbijnokmpl";
      const actual = substitution(message, alphabet);
      expected = "ysii.rs";

      expect(actual).to.equal(expected);
    });

    it("should preserve spaces", () => {
      message = "my message";
      alphabet = ".waeszrdxtfcygvuhbijnokmpl";
      const actual = substitution(message, alphabet);
      expected = "yp ysii.rs";

      expect(actual).to.equal(expected);
    });
  });

  describe("decode message", () => {
    let message = "ykrrpik";
    let alphabet = "plmoknijbuhvygctfxrdzeswaq";
    let expected = "message";
    it("should decode a message by using the given substitution alphabet", () => {
      const actual = substitution(message, alphabet, false);

      expect(actual).to.equal(expected);
    });

    it("should work with any kind of key with unique characters", () => {
      message = "ysii.rs";
      alphabet = ".waeszrdxtfcygvuhbijnokmpl";
      const actual = substitution(message, alphabet, false);
      expected = "message";

      expect(actual).to.equal(expected);
    });

    it("should preserve spaces", () => {
      message = "yp ysii.rs";
      alphabet = ".waeszrdxtfcygvuhbijnokmpl";
      const actual = substitution(message, alphabet, false);
      expected = "my message";

      expect(actual).to.equal(expected);
    });
  });
});
