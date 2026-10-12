'use strict';

const arr = [
  true, 'hello', 5, 12, -200, false, false, 'word',
  null, undefined, 3.14, {}, [], () => {}, 10n, Symbol('id'),
  'test', NaN, new Date(), 0,
];

const types = { number: 0, string: 0, boolean: 0 };
for (const item of arr) {
  const type = typeof item;
  if (types[type] !== undefined) types[type]++;
}
console.dir(types);

const counter = {};
for (const item of arr) {
  const type = typeof item;
  if (counter[type] === undefined) counter[type] = 0;
  counter[type]++;
}
console.dir(counter);
