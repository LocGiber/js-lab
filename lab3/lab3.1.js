"use strict";

const random = (min, max) => {
    if (max == undefined) {
        max = min;
        min = 0;
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(random(1, 15));
console.log(random(50));


const characters = 'abcdefghijklmnopqrstuvwxyz0123456789'
const generateKey = (length, characters) => {
   let key = '';
    for (let i = 0; i < length; i++) {
      key += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return key;
  }
const key = generateKey(16, characters);

console.log(key);
