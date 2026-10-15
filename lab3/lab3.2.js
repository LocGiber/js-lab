"use strict";

const ipInt = (ip = '127.0.0.1') => {
  return ip
    .split('.')
    .map(Number)
    .reduce((acc, byte) => (acc << 8) | byte, 0);
}
console.log(ipInt());



const iface = {
  m1: (x) => [x],
  m2: function (x, y) {
    return [x, y];
  },
  m3(x, y, z) {
    return [x, y, z];
  },
};

const inspect = (iface) => {
  const result = [];
  for (const key in iface) {
    const value = iface[key];
    if (typeof value === 'function') {
      result.push([key, value.length]);
    }
  }
  return result;
};
console.log(JSON.stringify(inspect(iface)));