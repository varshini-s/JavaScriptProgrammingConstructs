const prompt = require("prompt-sync")({ sigint: true });
let number=parseInt(prompt("enter number "))
var numberValue;
switch (number) 
{
    case 1:
        numberValue = "unit";
        break;
    case 10:
        numberValue = "ten";
        break;
    case 100:
        numberValue = "hundred";
        break;
    case 1000:
        numberValue = "thousand";
        

}
console.log(numberValue)