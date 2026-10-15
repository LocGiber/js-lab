'use strict';

const phoneBook = [
  { name: 'Marcus Aurelius', phone: '+380445553333' },
  { name: 'Julius Caesar', phone: '+380441112222' },
  { name: 'Cleopatra', phone: '+380113332211' },
];

function PhoneByName(name) {
  for (let i = 0; i < phoneBook.length; i++) {
    if (phoneBook[i].name === name) {
      return phoneBook[i].phone;
    }
  }
  return undefined;
}

const hash = {
  'Marcus Aurelius': '+380445554433',
  'Julius Caesar': '+380441112233',
  Seneca: '+380443332211',
};

function PhoneHash(name) {
  return hash[name];
}

console.log(PhoneByName('Julius Caesar'));
console.log(PhoneByName('Noname'));

console.log(PhoneHash('Marcus Aurelius'));
console.log(PhoneHash('Noname'));
