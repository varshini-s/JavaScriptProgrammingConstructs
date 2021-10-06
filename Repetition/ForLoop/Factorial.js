const prompt = require("prompt-sync")({ sigint: true });

let factorial = 1;
let number=parseInt(prompt("enter number "))
if (number == 0 || number == 1)
{
    factorial = 1;
} 
else 
{
    for (var index = number; index >= 1; index--) 
    {
        factorial = factorial * index;
    }

}
console.log("The factorial of " + number + " is " + factorial);