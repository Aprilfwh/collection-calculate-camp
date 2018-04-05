'use strict';

function average_to_letter(collection) {

  //在这里写入代码
  var average;
  var sum =0;
  collection.forEach(function (value) {
    sum += value;
  });
  average = Math.ceil(sum/collection.length);
  var index = (average-1) %26;
  return String.fromCharCode((97+index));

}

module.exports = average_to_letter;

