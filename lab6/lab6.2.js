"use strict";

const compose = (...fns) => {
  for (const fn of fns) {
    if (typeof fn !== "function") {
      throw new TypeError("compose: all arguments must be functions");
    }
  }

  const handlers = [];

  const composed = (x) => {
    try {
      return fns.reduceRight((acc, fn) => fn(acc), x);
    } catch (error) {
      for (const handler of handlers) handler(error);
      return undefined;
    }
  };

  composed.on = (event, handler) => {
    if (event === "error") handlers.push(handler);
    return composed;
  };

  return composed;
};

const inc = (x) => ++x;
const twice = (x) => x * 2;
const cube = (x) => x ** 3;

const f = compose(inc, twice, cube);
console.log(f(5));

const broken = (x) => {
  throw new Error("Something went wrong");
};

const h = compose(inc, broken, twice);
h.on("error", (e) => console.log("Caught:", e.message));
console.log(h(5));
