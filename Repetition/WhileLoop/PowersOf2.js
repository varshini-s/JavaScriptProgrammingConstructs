var myArgs = process.argv.slice(2);
let number=parseInt(myArgs[0])
let index=0;
while(index<=number )
{
    console.log(Math.pow(2, index))
    index++;
}