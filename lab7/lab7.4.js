"use strict";

const difference = (array1, array2) =>
  array1.filter((item) => !array2.includes(item));

const array1 = [7, -2, 10, 5, 0];
const array2 = [0, 10];
console.log(difference(array1, array2));

const cities1 = ["Beijing", "Kiev"];
const cities2 = ["Kiev", "London", "Baghdad"];
console.log(difference(cities1, cities2));