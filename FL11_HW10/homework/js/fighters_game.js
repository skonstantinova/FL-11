 function Fighter({name, damage, health, agility}){
  this.win=0;
  this.loss=0;
  this.name = name;
  this.damage = damage;
  this.health = health;
  this.agility = agility;
  this.getName = function() {
    return name;
  }
  this.getDamage = function() {
    return damage;
  };
  this.getHealth = function() {
    return health;
  };
  this.getAgility = function() {
    return agility;
  };
  this.addWin= function (){
     this.win++;
  }
  this.addLoss= function (){
     this.loss++;
  }
 }
const Fighter1 = new Fighter({name: 'John', damage: 20, health: 150, agility: 25}); 
const Fighter2 = new Fighter({name: 'Jim', damage: 10, health: 120, agility: 40}); 
function attack(attacking, defender){
  const a=100;
   if (Math.floor(Math.random()*a)<=attacking.agility) {
     
     dealDamage(attacking, defender);
     
     console.log(attacking.name + ' make ' + attacking.damage + ' to ' + defender.name);
    
   } else {
console.log(attacking.name + ' attack missed');
     }
 }

function dealDamage(attacking, defender) {
  defender.health=defender.health-attacking.damage;
  return defender.health;
}
function logCombatHistory(attacking){
  console.log('Name: ' + attacking.name + ' Wins: ' + attacking.win + ' Losses: ' + attacking.loss);
}

function battle(attacking, defender) {
  
 
  if (attacking.health===0) {
 console.log(attacking.name + ' is dead and can`t fight');
}
  if (defender.health===0) {
 console.log(defender.name + ' is dead and can`t fight');
}
  let i=0;
  while (attacking.health>0 && defender.health>0) {
    const b=2;
    if (i % b === 0) {
 attacking=Fighter2;
      defender=Fighter1;
  } else {
    attacking=Fighter1;
    defender=Fighter2;
  }
  attack(attacking, defender);
  if (defender.health <= 0) {
 attacking.addWin(); defender.addLoss(); 
}
  heal(attacking);
  i++
}

if (attacking.health===0) {
console.log(attacking.name + ' lost, ' + defender.name + ' win' ); 
} else {
 console.log(defender.name + ' lost, ' + attacking.name + ' win');
} 

}

battle(Fighter1, Fighter2);

logCombatHistory(Fighter1);
logCombatHistory(Fighter2);

console.log(Fighter1.getHealth());
console.log(Fighter2.getHealth());
function heal(attacking) {
  let b=2;
  let amountOfHeal=attacking.damage/b;
  if (amountOfHeal<attacking.health) {
  attacking.health=attacking.health + amountOfHeal;
    console.log(attacking.name + ' was healed by ' + amountOfHeal)
  } else {
    let maxHealth=attacking.health;
 attacking.health=maxHealth;
  console.log(attacking.name + ' was healed to max health ' + amountOfHeal); 
}
}









