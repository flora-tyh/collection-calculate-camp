'use strict';

function collect_last_element(collection) {
  var len = collection.length;
  var last_element = collection[len -1];
  return last_element;
}

module.exports = collect_last_element;
