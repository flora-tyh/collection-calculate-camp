'use strict';
var collect_all_even = require('../../../main/collectionOperator/collect_all_even.js');
var number_map_to_word_over_26 = require('../../../main/map/number_map_to_word_over_26.js');

function even_to_letter(collection) {
  return number_map_to_word_over_26(collect_all_even(collection))
}

module.exports = even_to_letter;
