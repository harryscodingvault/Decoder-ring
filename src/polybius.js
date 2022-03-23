// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // Dictionaries with decoding and encoding alphabet

  const encodeDic = {
    a: "11",
    b: "21",
    c: "31",
    d: "41",
    e: "51",
    f: "12",
    g: "22",
    h: "32",
    i: "42",
    j: "42",
    k: "52",
    l: "13",
    m: "23",
    n: "33",
    o: "43",
    p: "53",
    q: "14",
    r: "24",
    s: "34",
    t: "44",
    u: "54",
    v: "15",
    w: "25",
    x: "35",
    y: "45",
    z: "55",
  };
  const decodeDic = {
    11: "a",
    21: "b",
    31: "c",
    41: "d",
    51: "e",
    12: "f",
    22: "g",
    32: "h",
    42: "i/j",
    52: "k",
    13: "l",
    23: "m",
    33: "n",
    43: "o",
    53: "p",
    14: "q",
    24: "r",
    34: "s",
    44: "t",
    54: "u",
    15: "v",
    25: "w",
    35: "x",
    45: "y",
    55: "z",
  };

  function polybius(input, encode = true) {
    const stringToLowerCase = input.toLowerCase();

    // Decode
    const encodeMessage = (message) => {
      let result = "";
      for (let i = 0; i < message.length; i++) {
        const key = message[i];
        if (!(key in encodeDic)) {
          result += key;
          continue;
        }

        result += encodeDic[key];
      }
      return result;
    };

    // Decode
    const decodeMessage = (message) => {
      const numbers = message.replace(/[^0-9]/g, "");
      if (numbers.length % 2 !== 0) return false;
      let result = "";
      for (let i = 0; i < numbers.length; i += 2) {
        const key = parseInt(numbers[i] + numbers[i + 1]);
        result += decodeDic[key];
      }
      for (let i = 0; i < message.length; i += 1) {
        if (message[i] === " ") {
          result =
            result.substring(0, i - 2) +
            " " +
            result.substring(i - 2, result.length);
        }
      }
      return result;
    };

    return encode
      ? encodeMessage(stringToLowerCase)
      : decodeMessage(stringToLowerCase);
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
