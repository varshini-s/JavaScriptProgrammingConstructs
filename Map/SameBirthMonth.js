let birthMonthMap,birthYear;
let birthYearMap = new Map();

birthYearMap.set(1992,new Map())
birthYearMap.set(1993,new Map())
 
for (let index = 1; index <= 50; index++) 
{
    let getYear = Math.floor(Math.random() * 10) % 2;

    if(getYear==0)
    {
        birthYear=1992;
    }
    else if(getYear==1)
    {
        birthYear=1993;  
    }

    birthMonthMap=birthYearMap.get(birthYear)
    let person = index;
    let birthMonth = (Math.floor(Math.random() * 100) % 12) + 1;
    if (birthMonthMap.has(birthMonth)) 
    {
        let peopleWithSameBirthMonthArray = birthMonthMap.get(birthMonth);
        peopleWithSameBirthMonthArray.push(person);
        birthMonthMap.set(birthMonth, peopleWithSameBirthMonthArray);
    }
    else 
    {
        let peopleWithSameBirthMonthArray = new Array();
        peopleWithSameBirthMonthArray.push(person);
        birthMonthMap.set(birthMonth, peopleWithSameBirthMonthArray);
    }
    birthYearMap.set(birthYear, birthMonthMap)
}
console.log("People with same birth month ")
console.log(birthYearMap)