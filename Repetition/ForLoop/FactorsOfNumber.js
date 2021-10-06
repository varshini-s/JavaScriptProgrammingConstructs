const prompt = require("prompt-sync")({ sigint: true });
let number=parseInt(prompt("enter number "))
var tempNumber=number;
console.log('The  prime factors of ${number} is:');

for(let i = 2; i*i <= number; i++) 
{
    while (tempNumber%i == 0)
    {
        console.log(i);
        tempNumber /= i;
    }
}
if(tempNumber!=1)
{
   console.log(tempNumber)
}