'use strict';

function choose_no_common_elements(collection_a, collection_b) {
  for (var i = 0, len = collection_a.length; i < len; i++) {
    for (var j = 0, length = collection_b.length; j < length; j++) {
      if (collection_a[i] === collection_b[j]) {
        collection_a.splice(i, 1);
        collection_b.splice(j, 1);
      }
    }
  }
  return collection_a.concat(collection_b);
}

module.exports = choose_no_common_elements;
