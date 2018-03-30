'use strict';

function collect_all_even(collection) {
  //在这里写入代码
  var col = [];
  for(var i=0; i<collection.length;i++){
    if (collection[i] % 2 === 0){
      col.push(collection[i])
    }
  }
  return col
}

module.exports = collect_all_even;
