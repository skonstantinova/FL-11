function getNumbers(string) {
  let strArray=string.split("");
  for(var i=0; i<strArray.length; i++){
  { strArray[i] = +strArray[i];}
    
  }
  let iter=strArray.length;
  while(iter--) {
    if (strArray[iter]!==strArray[iter]) {
      strArray.splice(iter,1)
    }
  }
  
  return strArray;
}
console.log(getNumbers("n1um3ber95"));

function findTypes() {
  let numberCount=0;
  let stringCount=0;
  let booleanCount=0;
  let objectCount=0;
  let undefinedCount=0;
  let o = new Object();
  for (let i=0; i<arguments.length; i++) {
    if (typeof(arguments[i])=="number") numberCount++
  }
  if (numberCount>0) o[`number`] = numberCount;
  for (i=0; i<arguments.length; i++) {
    if (typeof(arguments[i])=="string") stringCount++
  }
  if (stringCount>0) o[`string`] = stringCount;
  for (i=0; i<arguments.length; i++) {
    if (typeof(arguments[i])=="boolean") booleanCount++
  }
  if (booleanCount>0) o[`boolean`] = booleanCount;
  for (i=0; i<arguments.length; i++) {
    if (typeof(arguments[i])=='object') objectCount++
  }
  if (objectCount>0) o[`object`] = objectCount;
  for (i=0; i<arguments.length; i++) {
    if (typeof(arguments[i])=="undefined") undefinedCount++
  }
  if (undefinedCount>0) o[`undefined`] = undefinedCount;
  
   return  o;
}
console.log(findTypes())

function executeforEach(array, func){
  for (i = 0; i < array.length; i++){
  func(array[i]);
  }
}

executeforEach([1,2,3], function(el) { console.log(el) })

function mapArray(array, func){
  for (i = 0; i < array.length; i++){
  func(array[i]);
  }
}

mapArray([1,2,3], function(el) { console.log(el+3) })

function mapArray(array, func){
  let resultArray = [];
  for (i = 0; i < array.length; i++){
  resultArray.push(func(array[i]));
  } return resultArray;
  
} 

console.log(mapArray([2,5,8], function(el) {return (el+3) }));

function filterArray(array, func){
  let resultArray = [];
  for (i = 0; i < array.length; i++){
  if (func(array[i])) {
  resultArray.push(array[i]);
  }
  } return resultArray;
} 

console.log(filterArray([1,1,1,20,30], function(el) {return (el>3) }));




function keys(obj) {
  var keysArray = [];
for (var key in obj) {
    keysArray.push(key);
}
    return keysArray;
 
}

console.log(keys({keyOne: 1, keyTwo: 2, keyThree: 3}))

function values(obj) {
   var res = [];
    for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
            res.push(obj[i]);
        }
    }
    return res;
}

console.log(values({keyOne: 1, keyTwo: 2, keyThree: 3})) 