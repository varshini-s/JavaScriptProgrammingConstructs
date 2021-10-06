let randomNumberArray = new Array();
var minimumValue=Number.MAX_VALUE;
var maximumvalue=Number.MIN_VALUE;
var secondMinimumValue=Number.MAX_VALUE;
var secondMaximumvalue=Number.MIN_VALUE; 

for(let index=0;index<10;index++)
{
    let number=Math.floor(Math.random()*(900)+100);
    randomNumberArray.push(number);

    if(number<minimumValue)
    {
        minimumValue=number;
    }
    else if(number>maximumvalue)
    {
        maximumvalue=number;
    }

}
console.log(randomNumberArray)

for(let index=0;index<10;index++)
{
    let number=randomNumberArray.pop();
    if(number>minimumValue && number<secondMinimumValue)
    {
        secondMinimumValue=number;
    }
    else if(number<maximumvalue && number>secondMaximumvalue)
    {
        secondMaximumvalue=number;
    }

}

console.log("second minimum number is: "+secondMinimumValue)
console.log("second maximum number is: "+secondMaximumvalue)