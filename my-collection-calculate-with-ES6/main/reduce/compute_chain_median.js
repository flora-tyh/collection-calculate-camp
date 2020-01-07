'use strict';
var rank_desc = require('../../main/map/rank_desc.js');
function compute_chain_median(collection) {
  var arr = collection.split("->");
  arr = rank_desc(arr);
  var len = arr.length;
  if (len % 2) {
    return (arr[Math.ceil(len / 2)]);
  }
  else {
    return (arr[len / 2 - 1] + arr[len / 2]) / 2;
  }
}

module.exports = compute_chain_median;
