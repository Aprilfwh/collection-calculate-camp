'use strict';

function median_to_letter(collection) {

  //在这里写入代码
  var median;
  var col = collection.sort(function (a,b) {
    return a-b;
  });
  if(col.length%2!==0){
    median=col[(col.length-1)/2];
  }
  else {
    median=Math.ceil((col[col.length/2]+col[col.length/2-1])/2);
  }
  var letter=[String.fromCharCode((97+25))];
  for (var i=0; i<25;i++){
    letter.push(String.fromCharCode((97+i)))
  }
  var consult1 = Math.floor(median/26);
  var mod1 = median%26;
  if(consult1===0 ){
    return letter[mod1];
  }
  else if(consult1===1 && mod1===0){
    return letter[mod1];
  }
  else if(consult1>1 && mod1===0){
    return letter[consult1-1]+letter[mod1];
  }
  else{
    return letter[consult1]+letter[mod1];
  }
}

module.exports = median_to_letter;
