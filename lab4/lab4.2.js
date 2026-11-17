"use strict";

const sum = (...args) => {
  let total = 0;
  for (const value of args) {
    total += value;
  }
  return total;
};

const a = sum(1, 2, 3);
const b = sum(0);
const c = sum();
const d = sum(1, -1, 1);
const e = sum(10, -1, -1, -1);

console.log(a === 6, b === 0, c === 0, d === 1, e === 7);
