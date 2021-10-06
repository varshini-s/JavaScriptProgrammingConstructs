let birthMonthMap = new Map();
for(let index=1;index<=50;index++)
{
    let person=index;
    let birthMonth=(Math.floor(Math.random()*100)%12)+1;
    if(birthMonthMap.has(birthMonth))
    {
        let peopleWithSameBirthMonthArray=birthMonthMap.get(birthMonth);
        peopleWithSameBirthMonthArray.push(person);
         birthMonthMap.set(birthMonth,peopleWithSameBirthMonthArray);
    }
    else
    {
        let peopleWithSameBirthMonthArray=new Array();
        peopleWithSameBirthMonthArray.push(person);
        birthMonthMap.set(birthMonth,peopleWithSameBirthMonthArray);
    }
}
console.log("People with same birth month ")
console.log(birthMonthMap)