'use strict';

function double_to_one(collection) {
  var result = [];
  for (var i = 0, len = collection.length; i < len; i++) {
    if (typeof(collection[i]) === 'number') {
      result.push(collection[i])
    }
    else {
      result = result.concat(collection[i])
    }
  }
  var result_no_repest = [];
  var no_repeat_obj = {};
  for (var i = 0, len = collection.length; i < len; i++) {
    if (!no_repeat_obj[collection[i]]) {
      result_no_repest.push(collection[i]);
      no_repeat_obj[collection[i]] = 1;
    }
  }
  return result_no_repest;
}

module.exports = double_to_one;
