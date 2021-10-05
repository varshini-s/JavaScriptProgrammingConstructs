
var number = 12;
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