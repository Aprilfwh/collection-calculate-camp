'use strict';

function get_union(collection_a, collection_b) {
  //在这里写入代码
  var result = collection_a;
  for(var i=0;i<collection_b.length;i++){
    var num = 0;
    for (var j=0;j<collection_a.length;j++){
      if(collection_b[i]!==collection_a[j]){
        num++;
      }
    }
    if(num===collection_a.length){
      result.push(collection_b[i]);
    }
  }
  return result;
}

module.exports = get_union;

