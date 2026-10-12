'use strict';

const ipToInt = (ip = '127.0.0.1') =>
  ip
    .split('.')
    .map(Number)
    .reduce((res, byte) => (res << 8) + byte, 0);

module.exports = { ipToInt };
