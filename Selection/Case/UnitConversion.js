var convert = require('convert-units')

var myArgs = process.argv.slice(2);
let conversion=parseInt(myArgs[0]);
var convertedValue;
let number=20;

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