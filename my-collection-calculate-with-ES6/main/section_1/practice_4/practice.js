var get_intersection = require('../../../main/collectionOperator/get_intersection.js');

function collect_same_elements(collection_a, object_b) {
  let a = [];
  collection_a.forEach(element => a.push(element.key));
  return get_intersection(object_b.value, a);
}

module.exports = collect_same_elements;
