'use strict';

function hybrid_operation(collection) {
  return collection.map(element => element * 3 + 2).reduce((num1, num2) => num1 + num2)
}

module.exports = hybrid_operation;

