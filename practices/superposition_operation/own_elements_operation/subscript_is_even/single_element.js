'use strict';
var single_element = function(collection){
  var result=[];
  var even={};
  var temp=[];
  for(var i=0;i<collection.length;i++){
    if(i%2!==0){
      if(!even[collection[i]]){
        temp.push(collection[i]);
        even[collection[i]] =1;
      }
      else {
        even[collection[i]] += 1;
      }
    }
  }
 for(var j=0;j<temp.length;j++){
    if(even[temp[j]]===1){
      result.push(temp[j]);
    }
 }
return result;
};
module.exports = single_element;
