'use strict';

function calculate_elements_sum(collection, element) {
  //在这里写入代码
  var index;
  for(var i=0; i<collection.length;i++){
    if(collection[i]===element){
      index=i;
    }
  }
  return index;
}

module.exports = calculate_elements_sum;
