'use strict';

function spilt_to_zero(number, interval) {
  //在这里写入代码
  var result=[];
  for(var i=0;i<1000;i++){
    result.push(number);
    if(number <= 0){
      break;
    }
    number = Number((number-interval).toFixed(1))
  }
  return result;
}

module.exports = spilt_to_zero;
