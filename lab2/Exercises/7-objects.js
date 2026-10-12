'use strict';

const fn = () => {
  const obj1 = { name: 'Marcus' };
  let obj2 = { name: 'Lucius' };
  obj1.name = 'Antoninus';
  obj2.name = 'Hadrian';
  obj2 = { name: 'Trajan' };
  return { obj1, obj2 };
};

module.exports = { fn };
