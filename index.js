var recipes = {};


function updateObjectWithKeyAndValue(obj, key, value) {
 
  return Object.assign({}, obj, { [key]: value })
}


function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
  
  return Object.assign(obj, {[key] : value})
}


function deleteFromObjectByKey(obj, key){
  
  newobj = delete obj.key;
  return newobj;
}


function destructivelyDeleteFromObjectByKey(object, key){
  
  object = delete object.key;
  return object
}



  
  
