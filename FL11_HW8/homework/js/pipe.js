function pipe () {
  let result;
 for (let i = 1; i <= (arguments.length-1); i++) {
    if (i===1) {
 result=addOne(arguments[0]); 
} else {
 result=addOne(result); 
}
  }
return result;
}
function addOne(x) {
  return x + 1;
}

console.log(pipe(1, addOne, addOne));
