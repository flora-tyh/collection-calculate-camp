'use strict';
var number_map_to_word_over_26 = require('../../../main/map/number_map_to_word_over_26.js');
var compute_average = require('../../../main/reduce/compute_average.js');

function average_to_letter(collection) {
  return number_map_to_word_over_26(Array.of(Math.ceil(compute_average(collection))))[0]; 
}

module.exports = average_to_letter;

