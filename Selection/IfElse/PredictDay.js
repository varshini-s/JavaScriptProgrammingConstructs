
const startdate = new Date("2021-03-20");
const enddate = new Date("2021-06-20");
const givenDate = new Date("2021-06-18");


if (givenDate > startdate && givenDate < enddate) 
{
    console.log(true);
}
else
{
    console.log(false);

}