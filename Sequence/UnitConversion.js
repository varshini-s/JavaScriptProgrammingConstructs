var convert = require('convert-units')

{
    let inch = 42;
    let convertedValue = convert(inch).from('in').to('ft');
    console.log("inches: " + inch + " in feet is " + convertedValue)
}

