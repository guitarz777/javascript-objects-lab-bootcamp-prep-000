var recipes = {};


function updateObjectWithKeyAndValue(obj, key, value) {
 
  return Object.assign({}, obj, { [key]: value })
}


function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
  
  return Object.assign(obj, {[key] : value})
}


function deleteFromObjectByKey(obj, key){
  
  obj = delete obj.key;
  return obj;
}


function destructivelyDeleteFromObjectByKey(object, key){
  
  return delete object.key;
}



  
  
