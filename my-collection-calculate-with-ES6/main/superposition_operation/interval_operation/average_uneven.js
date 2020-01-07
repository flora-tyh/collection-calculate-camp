'use strict';

function average_uneven(collection) {
  let collection_even = collection.filter(element => element % 2);
  return collection_even.reduce((num1, num2) => num1 + num2) / collection_even.length;
}

module.exports = average_uneven;
