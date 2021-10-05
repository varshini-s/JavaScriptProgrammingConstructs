var myArgs = process.argv.slice(2);
let a=myArgs[0]
let b=myArgs[1]
let c=myArgs[2]

let operation1=a+b*c;
let operation2=a%b+c;
let operation3=c+a/b;
let operation4=a*b+c;

var minValue;
var maxValue;
if(operation1>operation2 && operation1>operation3 && operation1>operation4)
{
    maxValue=operation1;
}
else if(operation2>operation1 && operation2>operation3 && operation2>operation4)
{
    maxValue=operation2;
}
else if(operation3>operation2 && operation3>operation4 && operation3>operation1)
{
    maxValue=operation3;
}
else
{
    maxValue=operation4;

}

if(operation1<operation2 && operation1<operation3 && operation1<operation4)
{
    minValue=operation1;
}
else if(operation2<operation1 && operation2<operation3 && operation2<operation4)
{
    minValue=operation2;
}
else if(operation3<operation2 && operation3<operation4 && operation3<operation1)
{
    minValue=operation3;
}
else
{
    minValue=operation4;
}
console.log("maximum value: "+maxValue);
console.log("minimum value: "+minValue)