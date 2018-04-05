'use strict';
var calculate_median = function(collection){
  var temp =[];
  for(var i=0;i<collection.length;i++){
    if(i%2!==0){
      temp.push(collection[i]);
    }
  }
  var col = temp.sort(function (a,b) {
    return a-b;
  });
  if(col.length%2!==0){
    return col[(col.length-1)/2];
  }
  else {
    return (col[col.length/2]+col[col.length/2-1])/2;
  }

};
module.exports = calculate_median;
