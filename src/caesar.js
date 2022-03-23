// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift = 0, encode = true) {
    const inputToLowerCase = input.toLowerCase();
    if (shift === 0 || shift > 25 || shift < -25) return false;

    // Alphabet
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let shiftedAlphabet = "";

    // Shift alphabet
    const shiftAlphabet = (n) => {
      const shiftToRight = () => {
        for (let i = 0; i < alphabet.length; i++) {
          let offset = (i + n) % alphabet.length;
          shiftedAlphabet += alphabet[offset];
        }
      };
      const shiftToLeft = () => {
        for (let i = 0; i < alphabet.length; i++) {
          let offset = (n + i + alphabet.length) % alphabet.length;
          shiftedAlphabet += alphabet[offset];
        }
      };
      return n > 0 ? shiftToRight() : shiftToLeft();
    };

    shiftAlphabet(shift);
    console.log(shiftedAlphabet);

    // Encode String
    const encodeString = (message) => {
      let result = "";
      for (let i = 0; i < message.length; i++) {
        if (!alphabet.includes(message[i])) {
          result += message[i];
          continue;
        }
        let index = alphabet.indexOf(message[i]);
        result += shiftedAlphabet[index];
      }
      return result;
    };

    // Decode String
    const decodeString = (message) => {
      let result = "";
      for (let i = 0; i < message.length; i++) {
        if (!alphabet.includes(message[i])) {
          result += message[i];
          continue;
        }
        let index = shiftedAlphabet.indexOf(message[i]);
        result += alphabet[index];
      }
      return result;
    };

    return encode
      ? encodeString(inputToLowerCase)
      : decodeString(inputToLowerCase);
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
