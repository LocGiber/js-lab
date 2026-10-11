'use strict';

const inc = (n) => n + 1;
const a = 5;
const b = inc(a);
console.log({ a, b });



const inc2 = (num) => {
  if (num && typeof num === 'object') {
    num.n++;
  }
};
const obj = { n: 5 };
inc2(obj); 
console.log(obj);



const arr = [
    true,
    "hello",
    5,
    12,
    -200,
    false,
    "world",
    3.14,
    "TypeScript",
    100,
    true,
    null
];

const types = {};

for (const element of arr) {
    const type = typeof element;

    if (!(type in types)) {
        types[type] = 0;
    }

    types[type]++;
}

console.log(types);