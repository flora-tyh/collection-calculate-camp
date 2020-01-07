'use strict';
var single_element = function(collection){
  let collection_index_odd = collection.filter((element, index) => index % 2);
  return collection_index_odd.filter(element => 
    collection_index_odd.indexOf(element) === collection_index_odd.lastIndexOf(element))
};
module.exports = single_element;
