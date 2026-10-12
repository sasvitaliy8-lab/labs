'use strict';

const inc = (n) => n + 1;

const a = 5;
const b = inc(a);
console.dir({ a, b });

const incNum = (num) => {
  num.n++;
};

const obj = { n: 5 };
incNum(obj);
console.dir(obj);
