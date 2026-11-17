"use strict";

const isType = (value, type) =>
  value !== null && value !== undefined && Object(value) instanceof type;

const contract = (fn, ...types) => {
  const argTypes = types.slice(0, -1); // усі крім останнього
  const resultType = types[types.length - 1]; // останній це тип результату

  return (...args) => {
    if (args.length !== argTypes.length) {
      throw new TypeError(
        `Expected ${argTypes.length} arguments, got ${args.length}`
      );
    }
    args.forEach((arg, i) => {
      if (!isType(arg, argTypes[i])) {
        throw new TypeError(`Argument ${i + 1} must be ${argTypes[i].name}`);
      }
    });

    const result = fn(...args);

    if (!isType(result, resultType)) {
      throw new TypeError(`Result must be ${resultType.name}`);
    }
    return result;
  };
};

const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
const res1 = addNumbers(2, 3);
console.dir(res1); // 5

const concat = (s1, s2) => s1 + s2;
const concatStrings = contract(concat, String, String, String);
const res2 = concatStrings("Hello ", "world!");
console.dir(res2);

try {
  addNumbers(2, "3");
} catch (e) {
  console.log(e.name + ": " + e.message);
}
