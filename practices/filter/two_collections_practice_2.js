'use strict';

function choose_no_common_elements(collection_a, collection_b) {

  //在这里写入代码
  var result=[];
  var json={};
  for(var i=0;i<collection_b.length;i++){
    json[collection_b[i]]=1
  }
  for(var j=0;j<collection_a.length;j++){
    if(!json[collection_a[j]]){
      result.push(collection_a[j]);
    }
  }
  return result;
}

module.exports = choose_no_common_elements;
