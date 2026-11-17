"use strict";

const array = () => {
  const items = [];

  const a = (index) => items[index];
  a.push = (value) => {
    items.push(value);
  };
  a.pop = () => items.pop();
  return a;
};

const arr = array();

arr.push("first");
arr.push("second");
arr.push("third");

console.log(arr(0)); // first
console.log(arr(1)); // second
console.log(arr(2)); // third

console.log(arr.pop()); // third
console.log(arr.pop()); // second
console.log(arr.pop()); // first

console.log(arr.pop());
