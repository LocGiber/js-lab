"use strict";

const seq = (...fns) => {
  const next = (arg) => {
    if (typeof arg === "function") {
      return seq(...fns, arg); // додаємо функцію в ланцюжок
    }
    return fns.reduceRight((acc, fn) => fn(acc), arg);
  };
  return next;
};

const r1 = seq((x) => x + 7)((x) => x * 2)(5);
console.log(r1); // 17

const r2 = seq((x) => x * 2)((x) => x + 7)(5);
console.log(r2); // 24

const r3 = seq((x) => x + 1)((x) => x * 2)((x) => x / 3)((x) => x - 4)(7);
console.log(r3); // 3
