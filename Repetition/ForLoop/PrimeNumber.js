
const lowerNumber =1;
const higherNumber = 20;

console.log(`The prime numbers between ${lowerNumber} and ${higherNumber} are:`);

for (let index = lowerNumber; index <= higherNumber; index++)
{
    let flag = 0;

    for (let index2 = 2; index2 < index; index2++)
     {
        if (index % index2 == 0)
         {
            flag = 1;
            break;
        }
    }

    if (index > 1 && flag == 0) {
        console.log(index);
    }
}