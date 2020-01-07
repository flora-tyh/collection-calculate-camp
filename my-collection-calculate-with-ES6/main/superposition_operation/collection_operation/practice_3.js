'use strict';

function hybrid_operation_to_uneven(collection) {
  return collection.filter(element => element % 2).map(element => element * 3 + 5).reduce((num1, num2) => num1 + num2);
}

module.exports = hybrid_operation_to_uneven;

