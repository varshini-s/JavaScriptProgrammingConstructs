var myArgs = process.argv.slice(2);
let number=parseInt(myArgs[0])
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