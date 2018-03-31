'use strict';

function get_letter_interval_2(number_a, number_b) {
  //在这里写入代码
  var letter=[String.fromCharCode((97+25))];
  for (var i=0; i<25;i++){
    letter.push(String.fromCharCode((97+i)))
  }
  var result=[];
  if(number_a<number_b){
    for(var j=number_a;j<=number_b;j++){
      var consult1 = Math.floor(j/26);
      var mod1 = j%26;
      if(consult1===0 ){
        result.push(letter[mod1])
      }
      else if(consult1===1 && mod1===0){
        result.push(letter[mod1])
      }
      else if(consult1>1 && mod1===0){
        result.push(letter[consult1-1]+letter[mod1])
      }
      else{
        result.push(letter[consult1]+letter[mod1])
      }
    }
  }
  else if(number_a>number_b){
    for(var k=number_a;k>=number_b;k--){
      var consult = Math.floor(k/26);
      var mod = k%26;
      if(consult===0 ){
        result.push(letter[mod]);
      }
      else if(consult===1 && mod===0){
        result.push(letter[mod])
      }
      else if(consult>1 && mod===0){
        result.push(letter[consult-1]+letter[mod])
      }
      else{
        result.push(letter[consult]+letter[mod]);
      }
    }
  }
  else if (number_a===number_b){
    if (number_a<=26){
      result.push(letter[number_a%26]);
    }
    else{
      result.push(letter[Math.floor(number_a/26)] + letter[number_a%26]);
    }
  }
  return result;
}

module.exports = get_letter_interval_2;

