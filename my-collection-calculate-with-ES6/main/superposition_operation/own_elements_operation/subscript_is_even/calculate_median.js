'use strict';
var compute_median = require('../../../../main/reduce/compute_median.js');

var calculate_median = function(collection){
  let collection_index_even = collection.filter((element, index) => index % 2);
  return compute_median(collection_index_even);
};
module.exports = calculate_median;
