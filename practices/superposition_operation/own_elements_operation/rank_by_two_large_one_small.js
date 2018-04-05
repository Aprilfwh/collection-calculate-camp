'use strict';
function rank_by_two_large_one_small(collection){
  //这里写代码。。。
  var result=[];
  var arr = collection.sort(function (a, b) {
    return a-b;
  });
  var temp1 =[];
  var temp2 =[];
  for (var i=0; i<arr.length;i++){
    if (i%3===0 && temp1.length < Math.floor(arr.length/3)){
      temp1.push(arr[i]);
    }
    else{
      temp2.push(arr[i]);
    }
  }
  for(var j=0;j<temp2.length;j++){
    var len_result = result.length;
    if((len_result+1)%3===0){
      result.push(temp1[(len_result+1)/3-1]);
      result.push(temp2[j]);
    }
    else {
      result.push(temp2[j]);
    }
  }
  return result;
}
module.exports = rank_by_two_large_one_small;
