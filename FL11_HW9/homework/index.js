function getNumbers(string) {
  let strArray=string.split('');
  for(let i=0; i<strArray.length; i++){
    strArray[i] = +strArray[i]; 
  }
  let iter=strArray.length;
  while(iter--) {
	let a=strArray[iter];
	let b=strArray[iter];
    if (a!==b) {
      strArray.splice(iter,1)
    }
  }
  return strArray;
}
function findTypes() {
  let numberCount=0;
  let stringCount=0;
  let booleanCount=0;
  let objectCount=0;
  let undefinedCount=0;
  let o = new Object();
  for (let i=0; i<arguments.length; i++) {
    if (typeof arguments[i]==='number') {
numberCount++ 
}
  }
  if (numberCount>0) {
o[`number`] = numberCount;
}
  for (let i=0; i<arguments.length; i++) {
    if (typeof arguments[i]==='string') {
 stringCount++ 
}
  }
  if (stringCount>0) {
o[`string`] = stringCount;
}
  for (let i=0; i<arguments.length; i++) {
    if (typeof arguments[i]==='boolean') {
 booleanCount++ 
}
  }
  if (booleanCount>0) {
o[`boolean`] = booleanCount; 
}
  for (let i=0; i<arguments.length; i++) {
    if (typeof arguments[i]==='object') {
 objectCount++ 
}
  }
  if (objectCount>0) {
 o[`object`] = objectCount;
}
  for (let i=0; i<arguments.length; i++) {
    if (typeof arguments[i]==='undefined') {
undefinedCount++ 
}
  }
  if (undefinedCount>0) {
o[`undefined`] = undefinedCount;
}
   return o;
}
console.log(findTypes())
function executeforEach(array, func){
  for (let i = 0; i < array.length; i++){
  func(array[i]);
  }
}

function mapArray(array, func){
  let resultArray = [];
  for (let i = 0; i < array.length; i++){
  resultArray.push(func(array[i]));
  } return resultArray;
} 

function filterArray(array, func){
  let resultArray = [];
  for (let i = 0; i < array.length; i++){
  if (func(array[i])) {
  resultArray.push(array[i]);
  }
  } return resultArray;
} 

function showFormattedDate(date) {
let monthNames = [
    'Jan', 'Feb', 'Mar',
    'Apr', 'May', 'Jun', 'Jul',
    'Aug', 'Sep', 'Oct',
    'Nov', 'Dec'
  ];
alert( monthNames[date.getMonth()]+ ' ' + date.getDate() +' '+ date.getFullYear() ); 
}
function canConvertToDate(date) {
let parsRes = Date.parse(date); 
if (isNaN(parsRes)){
  return false;
} else {
  return true;
}
}
function daysBetween(date1, date2) {
let date1TS = Date.parse(date1);
let date2TS = Date.parse(date2);
const sec=86400000;
let diffDays = Math.round(Math.abs(date1TS - date2TS)/sec);
return diffDays;
}
function getAmountOfAdultPeople(array, func){
  let result = 0;
  for (let i = 0; i < array.length; i++){
	let days=6574.5;
  if (func(array[i].birthday) >= days) {
  result = result + 1 
}
  } return result;
} 

function keys(obj) {
  let keysArray = [];
  
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
 keysArray.push(key); 
}
}
    return keysArray;
}
function values(obj) {
   let res = [];
    for (let i in obj) {
        if (obj.hasOwnProperty(i)) {
            res.push(obj[i]);
        }
    }
    return res;
}

