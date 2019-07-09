let confirmation=confirm('Do you want to play a game?');
if (confirmation===false) {
alert('You did not become a billionaire, but can.')
} else {
let nMax = 8; 
let prize = 0;
let totalPrize = 0;
let gameIteration = 1;
const a=1;
const b=1;
while (a===b) {
let n = parseInt( Math.random()*(nMax+1));
const iteration1=1;
const iteration2=2;
const iteration3=3;
const iteration4=4;
const prizeFirstIteration=100;
const prizeSecondIteration=50;
const prizeThirdIteration=25;
const gameIterationRange=2;
const maxRange=4;
const nMaxRange=8;
for (let i=iteration1; i<=iteration3; i++) {
if (i===iteration1) {
prize = prizeFirstIteration * gameIteration;
}
if (i===iteration2) {
prize = prizeSecondIteration * gameIteration; 
}
if (i===iteration3) {
prize = prizeThirdIteration * gameIteration;
}
let nUser=prompt('Choose a roulette pocket number from 0 to ' + nMax + '\n' +
'Attempts left: ' + (iteration4-i) + '\n' + 
'TotalPrize: ' + totalPrize + '$' + '\n' +
'Possible prize on current attempt: ' + prize + '$');
if (+nUser===n) {
totalPrize = totalPrize + prize;
break;
}
if (i===iteration3) {
totalPrize = 0; 
}
}
nMax = nMax + maxRange;
gameIteration = gameIteration * gameIterationRange;
if (totalPrize === 0) {
alert('Thank you for your participation. Your prize is: ' + totalPrize + '$');
let lost = confirm('Do you want to play again?');
if (lost === false){
break;
} else {
nMax = nMaxRange;
gameIteration = 1;
continue;
}
}
let proceed = confirm('Congratulation, you won! Your prize is: ' + totalPrize + '$. Do you want to continue?');
if (proceed === false) {
alert('Thank you for your participation. Your prize is: ' + totalPrize + '$');
let again = confirm('Do you want to play again?');
if (again === false){
break;
} else {
nMax = nMaxRange;
gameIteration = 1;
totalPrize = 0;
}
}
}
}