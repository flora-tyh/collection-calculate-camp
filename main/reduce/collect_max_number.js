'use strict';

function collect_max_number(collection) {
  var max_index = 0;
  for (var i = 1, len = collection.length; i < len; i++) {
    if (collection[i] > collection[max_index]) {
      max_index = i;
    }
  }
  return collection[max_index];
}

module.exports = collect_max_number;
