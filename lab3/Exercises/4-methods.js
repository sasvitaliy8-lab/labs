'use strict';

const methods = (iface) => {
  const result = [];
  for (const [name, value] of Object.entries(iface)) {
    if (typeof value === 'function') {
      result.push([name, value.length]);
    }
  }
  return result;
};

module.exports = { methods };
