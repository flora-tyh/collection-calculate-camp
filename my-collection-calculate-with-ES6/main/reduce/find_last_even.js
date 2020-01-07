'use strict';

function find_last_even(collection) {
  return collection.reverse().filter(element => !(element % 2))[0];
}

module.exports = find_last_even;
