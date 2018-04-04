function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var result=[];
  var temp={};
  for(var i=0;i<collection_a.length;i++){
    if(!temp[collection_a[i]]){
      temp[collection_a[i]]=1;
    }
    else{
      temp[collection_a[i]] += 1;
    }
  }
  for(var obj in temp){
    result.push({key:obj, count:temp[obj]})
  }
  var obj_b = object_b.value;
  for(var k=0;k<obj_b.length;k++){
    for(var j=0; j<result.length;j++){
      if(result[j].key === obj_b[k]){
        result[j].count -= Math.floor(result[j].count/3)
      }
    }
  }
  return result;
}

module.exports = create_updated_collection;
