var myArgs = process.argv.slice(2);
let number=parseInt(myArgs[0])
for(let index=0;index<=number;index++)
{
    console.log(Math.pow(2, index))
}