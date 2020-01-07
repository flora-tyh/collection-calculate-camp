'use strict';
var is_exist_element = function(collection,element){
  if (collection.filter((element, index) => !(index % 2)).indexOf(element) + 1) {
    return true;
  } else {
    return false;
  }
};
module.exports = is_exist_element;
