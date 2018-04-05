'use strict';
var calculate_average = function(collection){
  var sum = 0;
  var num =0;
  for(var i=0;i<collection.length;i++){
    if(i%2!==0){
      sum+=collection[i];
      num +=1;
    }
  }
  return sum/num;
};
module.exports = calculate_average;
