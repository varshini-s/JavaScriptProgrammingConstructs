var convert = require('convert-units')

const prompt = require("prompt-sync")({ sigint: true });
let conversion=parseInt(prompt("enter choice "))
var convertedValue;
let number=parseInt(prompt("enter value to convert "))

switch (conversion) 
{
    case 1:
        convertedValue = convert(number).from('ft').to('in')
        break;
    case 2:
        convertedValue = convert(number).from('in').to('ft')
        break;
    case 3:
        convertedValue = convert(number).from('ft').to('m')
        break;
    case 4:
        convertedValue = convert(number).from('m').to('ft')
        

}
console.log(convertedValue);