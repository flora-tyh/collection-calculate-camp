'use strict';
var rank_desc = require('../../main/map/rank_desc.js');
function compute_median(collection) {
  var collection_decs = rank_desc(collection);
  var len = collection_decs.length;
  if (len % 2) {
    return (collection_decs[Math.floor(len / 2)]);
  }
  else {
    return (collection_decs[len / 2 - 1] + collection_decs[len / 2]) / 2;
  }
}

module.exports = compute_median;


