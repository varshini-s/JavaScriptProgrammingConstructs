let diceRollResultMap  = new Map();
let maximumRolledNumber=Number.MIN_VALUE;
let miniminRolledNumber=Number.MAX_VALUE;
let miniminRolledNumberCount=Number.MAX_VALUE;
let maximumRolledNumberCount=Number.MIN_VALUE;

while(!(Array.from(diceRollResultMap.values()).includes(10)))
{
    let diceNumber=(Math.floor(Math.random()*10)%6)+1
    if(diceRollResultMap.has(diceNumber))
    {
        diceRollResultMap.set(diceNumber,diceRollResultMap.get(diceNumber)+1)
    }
    else
    {
        diceRollResultMap.set(diceNumber,1)
    }

}
console.log("Dice rolled values and number if times the value was rolled: ")
console.log(diceRollResultMap)

for (const [key, value] of diceRollResultMap.entries()) 
{
    if(value>maximumRolledNumberCount)
    {
        maximumRolledNumberCount=value;
        maximumRolledNumber=key;
    }
    else if(value<miniminRolledNumberCount)
    {
        miniminRolledNumberCount=value;
        miniminRolledNumber=key;
    }   
}

console.log("Most rolled number is: "+maximumRolledNumber+" with count "+maximumRolledNumberCount+" times")
console.log("Less rolled number is: "+miniminRolledNumber+" with count "+miniminRolledNumberCount+" times")