'use strict';
var compute_median = require('../../../main/reduce/compute_median.js');
var number_map_to_word_over_26 = require('../../../main/map/number_map_to_word_over_26.js');

function median_to_letter(collection) {
  return number_map_to_word_over_26(Array.of(Math.ceil(compute_median(collection))))[0];
}  

module.exports = median_to_letter;
