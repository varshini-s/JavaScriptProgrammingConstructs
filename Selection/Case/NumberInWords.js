const prompt = require("prompt-sync")({ sigint: true });
let number=parseInt(prompt("enter number "))
var numberInWords;

switch (number) 
{
    case 1:
        numberInWords="one";
        break;
    case 2:
        numberInWords="two";
        break;
    case 3:
        numberInWords="three";
        break;
    case 4:
        numberInWords="four";
        break;
    case 5:
        numberInWords="five";
        break;
    case 6:
        numberInWords="six";
        break;
    case 7:
        numberInWords="seven";
        break;
    case 8:
        numberInWords="eight";
        break;
    case 9:
        numberInWords="nine";    

}

console.log(numberInWords);