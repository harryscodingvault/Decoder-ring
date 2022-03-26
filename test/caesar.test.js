const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar cipher tests", () => {
  describe("error handling", () => {
    let message = "This Blue Car";
    let shift = 0;
    const actual = caesar(message, shift);

    it("should return false if the shift amount is 0", () => {
      expect(actual).to.be.false;
    });

    it("should return false if the shift amount is above 25", () => {
      shift = 26;
      expect(actual).to.be.false;
    });

    it("should return false if the shift amount is less than -25", () => {
      shift = -26;
      expect(actual).to.be.false;
    });
  });

  describe("encode message", () => {
    let message = "message";
    let shift = 3;
    let expected = "phvvdjh";

    it("should encode a message by shifting the letters", () => {
      const actual = caesar(message, shift);
      expect(actual).to.equal(expected);
    });

    it("should leaves spaces and other symbols as is", () => {
      message = "a message.";
      const actual = caesar(message, shift);
      expected = "d phvvdjh.";

      expect(actual).to.equal(expected);
    });

    it("should ignore capital letters", () => {
      message = "A Message";
      const actual = caesar(message, shift);
      expected = "d phvvdjh";

      expect(actual).to.equal(expected);
    });

    it("should appropriately handle letters at the end of the alphabet", () => {
      message = "zebra magazine";
      const actual = caesar(message, shift);
      expected = "cheud pdjdclqh";

      expect(actual).to.equal(expected);
    });

    it("should allow for a negative shift that will shift to the left", () => {
      message = "zebra magazine";
      shift = -3;
      const actual = caesar(message, shift);
      expected = "wbyox jxdxwfkb";

      expect(actual).to.equal(expected);
    });
  });

  describe("decode message", () => {
    let message = "phvvdjh";
    let shift = 3;
    const actual = caesar(message, shift, false);
    let expected = "message";
    it("should decode a message by shifting the letters in the opposite direction", () => {
      const actual = caesar(message, shift, false);

      expect(actual).to.equal(expected);
    });

    it("should leaves spaces and other symbols as is", () => {
      message = "d phvvdjh.";

      const actual = caesar(message, shift, false);
      expected = "a message.";

      expect(actual).to.equal(expected);
    });

    it("should ignore capital letters", () => {
      message = "D pHvvdjh";

      const actual = caesar(message, shift, false);
      expected = "a message";

      expect(actual).to.equal(expected);
    });

    it("should appropriately handle letters at the end of the alphabet", () => {
      message = "cheud pdjdclqh";

      const actual = caesar(message, shift, false);
      expected = "zebra magazine";

      expect(actual).to.equal(expected);
    });

    it("should allow for a negative shift that will shift to the left", () => {
      message = "wbyox jxdxwfkb";
      shift = -3;
      const actual = caesar(message, shift, false);
      expected = "zebra magazine";

      expect(actual).to.equal(expected);
    });
  });
});
