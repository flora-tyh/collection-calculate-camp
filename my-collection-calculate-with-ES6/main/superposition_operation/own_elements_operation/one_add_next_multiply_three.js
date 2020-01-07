'use strict';
function one_add_next_multiply_three(collection){
  let collection_1 = collection.slice(0, collection.length - 1);
  collection.shift();
  let result = [];
  collection_1.forEach((element, index) => {
    result.push((element + collection[index]) * 3);
  });
  return result;
}
module.exports = one_add_next_multiply_three;
