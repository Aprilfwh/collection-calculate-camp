'use strict';

function compute_median(collection) {
  //在这里写入代码
  var col = collection.sort(function (a,b) {
    return a-b;
  });
  if(col.length%2!==0){
    return col[(col.length-1)/2];
  }
  else {
    return (col[col.length/2]+col[col.length/2-1])/2;
  }
}

module.exports = compute_median;


