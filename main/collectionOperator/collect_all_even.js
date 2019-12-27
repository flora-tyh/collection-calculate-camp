'use strict';

function collect_all_even(collection) {
  var collect_even = [];
  for (var i = 0,len = collection.length; i < len; i++) {
    if (!(collection[i] % 2)) {
      collect_even.push(collection[i])
    }
  }
  return collect_even;
}

module.exports = collect_all_even;
