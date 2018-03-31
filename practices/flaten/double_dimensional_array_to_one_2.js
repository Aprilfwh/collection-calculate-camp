'use strict';

function double_to_one(collection) {

  //在这里写入代码
  var result=[];
  var json={};
  for(var i=0;i<collection.length;i++){
    if(typeof collection[i]==='object'){
      for(var j=0;j<collection[i].length;j++){
        if(!json[collection[i][j]]){
          result.push(collection[i][j]);
          json[collection[i][j]]=1;
        }

      }
    }
    else {
      if(!json[collection[i]]){
        result.push(collection[i]);
        json[collection[i]]=1;
      }

    }
  }
  return result;
}

module.exports = double_to_one;
