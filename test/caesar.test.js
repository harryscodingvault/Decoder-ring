// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("error handling", () => {
  it("should return false if the shift amount is 0", () => {
    const message = "zebra magazine";
    const shift = 0;
    const actual = caesar(message, shift);

    expect(actual).to.be.false;
  });
  it("should allow for a negative shift that will shift to the left", () => {
    const message = "wbyox jxdxwfkb";
    const shift = -3;
    const actual = caesar(message, shift, false);
    const expected = "zebra magazine";

    expect(actual).to.equal(expected);
  });
});
