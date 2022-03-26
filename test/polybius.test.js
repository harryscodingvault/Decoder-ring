const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius tests", () => {
  describe("encode message", () => {
    let message = "message";
    let expected = "23513434112251";

    it("should encode a message by translating each letter to number pairs", () => {
      const actual = polybius(message);
      expect(actual).to.equal(expected);
    });

    it("should translate both 'i' and 'j' to 42", () => {
      message = "jiggle";
      const actual = polybius(message);
      expected = "424222221351";

      expect(actual).to.equal(expected);
    });

    it("should leave spaces as is", () => {
      message = "my message";
      const actual = polybius(message);
      expected = "2345 23513434112251";

      expect(actual).to.equal(expected);
    });
  });

  describe("decode message", () => {
    let message = "23513434112251";
    let expected = "message";

    it("should decode a message by translating each pair of numbers into a letter", () => {
      const actual = polybius(message, false);

      expect(actual).to.equal(expected);
    });

    it("should translate 42 to both 'i' and 'j'", () => {
      message = "424222221351";
      const actual = polybius(message, false);

      expect(actual).to.include("i");
      expect(actual).to.include("j");
    });

    it("should leave spaces as is", () => {
      message = "2345 23513434112251";
      const actual = polybius(message, false);
      expected = "my message";

      expect(actual).to.equal(expected);
    });

    it("should return false if the length of all numbers is odd", () => {
      message = "2345 235134341122514";
      const actual = polybius(message, false);

      expect(actual).to.be.false;
    });
  });
});
