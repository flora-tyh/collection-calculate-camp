'use strict';
  var even_group_calculate_average = function(collection){
    function get_average(arr) {
      return arr.reduce((num1, num2) => num1 + num2) / arr.length;
    }
    let collection_index_even = collection.filter((element, index) => index % 2);
    let collection_even = collection_index_even.filter(element => !(element % 2));
    if (!collection_even.length) {return [0]};

    let collection_digit = [];
    collection_even.forEach (element => {
      var num_digit = element.toString().length;
      if (!collection_digit[num_digit - 1]) {
        collection_digit[num_digit - 1] = [];
      }
      collection_digit[num_digit - 1].push(element) 
    })
    return collection_digit.filter(Boolean).map(element => get_average(element));
  }
module.exports = even_group_calculate_average;
