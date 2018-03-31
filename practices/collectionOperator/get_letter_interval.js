'use strict';

function get_letter_interval(number_a, number_b) {
  //在这里写入代码
  var letter=[];
  for (var i=0; i<26;i++){
    letter.push(String.fromCharCode((97+i)))
  }
  var result=[];
  if(number_a<number_b){
    result = letter.slice(number_a-1,number_b);
  }
  else if(number_a>number_b){
    result = letter.slice(number_b-1,number_a);
    result.reverse();
  }
  else if(number_a===number_b){
    result.push(letter[number_a-1])
  }
  return result;
}

module.exports = get_letter_interval;
