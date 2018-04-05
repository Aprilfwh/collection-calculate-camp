'use strict';
var even_group_calculate_average = function(collection){
  var temp=[];
  var result=[];
  for(var i=0;i<collection.length;i++){
    if(i%2!==0 && collection[i]%2===0){
      temp.push(collection[i]);
    }
  }
  if(temp.length===0){
    return [0];
  }
  else{
    var num1 = [];
    var num2 =[];
    var num3 =[];
    for(var j=0;j<temp.length;j++){
      var len = temp[j].toString().length;
      if(len===1){
        num1.push(temp[j]);
      }
      else if(len===2){
        num2.push(Number(temp[j]));
      }
      else if(len===3){
        num3.push(Number(temp[j]));
      }
    }
    if(num1.length!==0){
      var sum1=0;
      num1.forEach(function (value1) {
        sum1+=value1;
      });
      result.push(sum1/num1.length)
    }
    if(num2.length!==0){
      var sum2=0;
      num2.forEach(function (value2) {
        sum2+=value2;
      });
      result.push(sum2/num2.length)
    }
    if(num3.length!==0){
      var sum3=0;
      num3.forEach(function (value3) {
        sum3+=value3;
      });
      result.push(sum3/num3.length);
    }
    return result;
  }


};
module.exports = even_group_calculate_average;
