'use strict';

function average_uneven(collection) {

  //在这里写入代码
  var sum = 0;
  var num =0;
  collection.forEach(function (value) {
    if(value%2!==0){
      sum += value;
      num += 1;
    }
  });
  return sum/num;
}

module.exports = average_uneven;
