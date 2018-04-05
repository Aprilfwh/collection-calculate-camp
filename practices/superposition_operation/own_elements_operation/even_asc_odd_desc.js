'use strict';
var even_asc_odd_desc = function(collection){
  var result;
  var even =[];
  var uneven=[];
  for(var i=0;i<collection.length;i++){
    if(collection[i]%2===0){
      even.push(collection[i]);
    }
    else {
      uneven.push(collection[i]);
    }
  }
  function AscSort(a,b) {
    return a-b;
  }
  function DescSort(a,b) {
    return b-a;
  }
  even.sort(AscSort);
  uneven = uneven.sort(DescSort);
  result = even.concat(uneven);
  return result;
};
module.exports = even_asc_odd_desc;
