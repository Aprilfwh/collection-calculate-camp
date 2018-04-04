function count_same_elements(collection) {
  //在这里写入代码
  var result=[];
  var temp={};
  for(var i=0;i<collection.length;i++){
    var c_spit = collection[i].split('-');
    if(c_spit.length>1){
      if(!temp[c_spit[0]]){
        temp[c_spit[0]] = Number(c_spit[1])
      }
      else{
        temp[c_spit[0]] += Number(c_spit[1])
      }
    }
    else{
      if(!temp[collection[i]]){
        temp[collection[i]]=1;
      }
      else{
        temp[collection[i]] += 1;
      }
    }
    }

  for(var obj in temp){
    result.push({key:obj, count:temp[obj]})
  }
  return result;
}

module.exports = count_same_elements;
