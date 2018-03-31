'use strict';

function choose_no_repeat_number(collection) {

  //在这里写入代码
  var result=[];
  var temp={};
  for(var i=0;i<collection.length;i++){
    if(!temp[collection[i]]){
      result.push(collection[i]);
      temp[collection[i]]=1;
    }
  }
  return result;
}

module.exports = choose_no_repeat_number;
