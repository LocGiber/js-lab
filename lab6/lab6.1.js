"use strict";

const pipe = (...fns) => {
  for (const fn of fns) {
    if (typeof fn !== "function") {
      throw new TypeError("pipe: all arguments must be functions");
    }
  }
  return (x) => fns.reduce((acc, fn) => fn(acc), x);
};

const inc = (x) => ++x;
const twice = (x) => x * 2;
const cube = (x) => x ** 3;

const f = pipe(inc, twice, cube);
console.log(f(5)); // 1728

const g = pipe(inc, inc);
console.log(g(7)); // 9

try {
  pipe(inc, 7, cube); // помилка одразу
} catch (e) {
  console.log(e.name + ": " + e.message);
}
