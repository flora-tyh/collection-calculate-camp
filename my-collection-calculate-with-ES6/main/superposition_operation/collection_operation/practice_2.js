'use strict';

function hybrid_operation_to_uneven(collection) {
  return collection.filter(element => element % 2).map(element => element * 3 + 2);
}

module.exports = hybrid_operation_to_uneven;

