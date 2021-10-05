var minimumValue=1000;
var maximumvalue=0;
for(let index=0;index<5;index++)
{

    let number=Math.floor(Math.random()*(900)+100);
    console.log(number);
    if(number<minimumValue)
    {
        minimumValue=number;
    }
    if(number>maximumvalue)
    {
        maximumvalue=number;
    }

}
console.log("minimum value is "+minimumValue);
console.log("maximum value is  "+maximumvalue);