const prompt = require("prompt-sync")({ sigint: true });

function getPalindrome(number) 
{
    var remainder, originalNumber, reversedNumber = 0;

    originalNumber = number;
    while (number > 0) 
    {
        remainder = number % 10;
        number = parseInt(number / 10);
        reversedNumber = reversedNumber * 10 + remainder;
    }
    
return reversedNumber
}

