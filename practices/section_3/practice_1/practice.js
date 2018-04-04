function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var obj_b = object_b.value;
  for(var i=0;i<obj_b.length;i++){
    for(var j=0; j<collection_a.length;j++){
      if(collection_a[j].key === obj_b[i]){
        collection_a[j].count -= 1
      }
    }
  }
  return collection_a;
}

module.exports = create_updated_collection;
