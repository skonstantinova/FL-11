function reverseNumber(num) {
  let result=0;
  let invert = false;
  if (num < 0) {
 invert = true; num = num * -1; 
}
  if (num>0) {
 while(num) {
  result=result*10 + num%10;
  num=Math.floor(num / 10);
  } 
} 
  if (invert === true) {
 result = result * -1 
}
  return result
}
console.log (reverseNumber(-1436547456));
