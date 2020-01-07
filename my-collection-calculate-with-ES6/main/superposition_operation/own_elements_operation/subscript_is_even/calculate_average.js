'use strict';
var calculate_average = function(collection){
  let collection_index_even = collection.filter((element, index) => {
    if (index % 2) {
      return element;
    }
  });
  return collection_index_even.reduce((num1, num2) => num1 + num2) / collection_index_even.length;
};
module.exports = calculate_average;
