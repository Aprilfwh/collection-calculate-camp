'use strict';

function compute_average(collection) {
  //在这里写入代码
  var sum=0;
  function getSum (item, index, array) {
    sum += item;
  }
  collection.forEach(getSum);
  return sum/collection.length;

}

module.exports = compute_average;

