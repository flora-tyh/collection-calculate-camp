'use strict';

function choose_no_repeat_number(collection) {
  var result = [];
  var no_repeat_obj = {};
  for (var i = 0, len = collection.length; i < len; i++) {
    if (!no_repeat_obj[collection[i]]) {
      result.push(collection[i]);
      no_repeat_obj[collection[i]] = 1;
    }
  }
  return result;
}

module.exports = choose_no_repeat_number;
