function count_same_elements(collection) {
  //在这里写入代码
  var count_obj = {};
  collection.forEach(element => {
    if (element.length === 1 && count_obj[element]) {
      count_obj[element]++;
    } else if (element.length !== 1 && count_obj[element.charAt(0)]) {
      count_obj[element.charAt(0)] += parseInt(element.match(/\d+/g));
    } else if (element.length === 1 && !count_obj[element]) {
      count_obj[element] = 1;
    } else {
      count_obj[element.charAt(0)] = parseInt(element.match(/\d+/g));
    } 
  })  
  var result = [];
  for (var i in count_obj) {
    var collection_count = {};
    collection_count.name = i;
    collection_count.summary = count_obj[i];
    result.push(collection_count)
  }
  return result;
}

module.exports = count_same_elements;
