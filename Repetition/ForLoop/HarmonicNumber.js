let harmonic = 1.00;
var myArgs = process.argv.slice(2);
let N=parseFloat(myArgs[0])

for (let index = 2; index <= N; index++)
{
    harmonic += 1 / index;
}

console.log(harmonic);