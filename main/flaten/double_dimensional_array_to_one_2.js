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
}

module.exports = double_to_one;
