const prompt = require("prompt-sync")({ sigint: true });
let number=parseInt(prompt("enter number "))
var tempNumber=number;
var primeFactors= new Array();

for(let i = 2; i*i <= number; i++) 
{
    while (tempNumber%i == 0)
    {
        primeFactors.push(i);
        tempNumber /= i;
    }
}
if(tempNumber!=1)
{
    primeFactors.push(tempNumber)
}
console.log("prime factors of "+number+" are")
console.log(primeFactors)