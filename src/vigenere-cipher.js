const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(bool) {
    if (bool === false) {
      this.func = a => a.split('').reverse().join('').toUpperCase();
    } else {
      this.func = a => a.toString().toUpperCase();
    }
  }
  func

  encrypt(message, key) {
    let count = 0;
    let result = '';
    key = key.toUpperCase();
    message = this.func(message);
    for (let i = 0; i < message.length; i++) {
      if (message.charAt(i).match(/[A-Z]/g)) {
        let char = (message.charCodeAt(i) + key.charCodeAt(count < key.length ? count : count -= key.length) - 65);
        result += String.fromCharCode(char > 90 ? char - 26 : char);
        count++;
      } else {
        result += message.charAt(i);
      }
    }
    return result;
  }
  decrypt(message, key) {
    let count = 0;
    let result = '';
    key = key.toUpperCase();
    message = this.func(message);
    for (let i = 0; i < message.length; i++) {
      if (message.charAt(i).match(/[A-Z]/g)) {
        let char = (message.charCodeAt(i) - key.charCodeAt(count < key.length ? count : count -= key.length) + 65);
        result += String.fromCharCode(char < 65 ? char + 26 : char);
        count++;
      } else {
        result += message.charAt(i);
      }
    }
    return result;
  }
}

module.exports = VigenereCipheringMachine;
