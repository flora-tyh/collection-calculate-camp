'use strict';

function collect_min_number(collection) {
  var min_index = 0;
  for (var i = 1, len = collection.length; i < len; i++) {
    if (collection[i] < collection[min_index]) {
      min_index = i;
    }
  }
  return collection[min_index];
}

module.exports = collect_min_number;

