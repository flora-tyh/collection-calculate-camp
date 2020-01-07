function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  collection_a.forEach(element_a => {
    object_b.value.forEach(element_b => {
      if(element_a.key === element_b) {
        element_a.count -= Math.floor(element_a.count/3);
      }
    })
  })      
  return collection_a;
}

module.exports = create_updated_collection;
