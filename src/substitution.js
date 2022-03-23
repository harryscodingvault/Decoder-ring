// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // Alphabet
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  function substitution(input, cipherAlphabet, encode = true) {
    const inputToLowerCase = input.toLowerCase();

    // Check given alphabet
    const is_unique = (myStr) => {
      let myArr = {};
      for (let i = 0; i < myStr.length; ++i) {
        const thisChar = myStr[i];
        if (myArr[thisChar]) return false;
        myArr[thisChar] = true;
      }
      return true;
    };

    if (
      cipherAlphabet === undefined ||
      cipherAlphabet.length !== 26 ||
      !is_unique(cipherAlphabet)
    ) {
      return false;
    }

    // Encode
    const encodeStr = (message) => {
      let result = "";
      for (let i = 0; i < message.length; i++) {
        if (!alphabet.includes(message[i])) {
          result += message[i];
          continue;
        }
        let index = alphabet.indexOf(message[i]);
        result += cipherAlphabet[index];
      }
      return result;
    };

    // Decode
    const decodeStr = (message) => {
      let result = "";
      for (let i = 0; i < message.length; i++) {
        if (message[i] === " ") {
          result += message[i];
          continue;
        }
        let index = cipherAlphabet.indexOf(message[i]);
        result += alphabet[index];
      }
      return result;
    };

    return encode ? encodeStr(inputToLowerCase) : decodeStr(inputToLowerCase);
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
