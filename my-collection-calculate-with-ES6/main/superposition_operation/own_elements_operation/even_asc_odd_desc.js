'use strict';
var rank_asc = require('../../../main/map/rank_asc.js');
var rank_desc = require('../../../main/map/rank_desc.js');


var even_asc_odd_desc = function(collection){
  let collection_odd = collection.filter(element => element % 2);
  let collection_even = collection.filter(element => !(element % 2));
  return rank_desc(collection_even).concat(rank_asc(collection_odd));
};
module.exports = even_asc_odd_desc;
