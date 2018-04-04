function count_same_elements(collection) {
  //
  var result=[];
  var temp={};
  for(var i=0;i<collection.length;i++){
    if(!temp[collection[i]]){
      temp[collection[i]]=1;
    }
    else{
      temp[collection[i]] += 1;
    }
  }
  for(var obj in temp){
    result.push({key:obj, count:temp[obj]})
  }
  return result;
}

module.exports = count_same_elements;
