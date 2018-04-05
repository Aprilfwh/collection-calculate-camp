'use strict';
var is_exist_element = function(collection,element){
  var temp=[];
  for(var i=0;i<collection.length;i++){
    if(i%2===0){
      temp.push(collection[i]);
    }
  }
  var num=0;
  for (var j=0;j<temp.length;j++){
    if(temp[j]===element){
      return true;
    }
    else {
      num+=1;
    }
  }
  if(num===temp.length){
    return false;
  }
};
module.exports = is_exist_element;
