'use strict';

function even_to_letter(collection) {

  //在这里写入代码
  var result=[];
  var letter=[String.fromCharCode((97+25))];
  for (var i=0; i<25;i++){
    letter.push(String.fromCharCode((97+i)))
  }
  for(var j=0;j<collection.length;j++){
    if(collection[j]%2===0){
      result.push(letter[collection[j]%26])
    }
  }
  return result;
}

module.exports = even_to_letter;
