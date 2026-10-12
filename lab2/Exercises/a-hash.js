'use strict';

const phonebook = {
  'Marcus Aurelius': '+380445554433',
  'Lucius Verus': '+380501112233',
  'Antoninus Pius': '+380679998877',
};

const findPhoneByName = (name) => phonebook[name];

module.exports = { phonebook, findPhoneByName };
