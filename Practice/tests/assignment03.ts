let stuName:string[]=["Suresh","Mahesh","Naresh"]
let stuMarks:number[]=[75, 80, 82]
let newMarks:number[]=[]
for(let mar of stuMarks)
{
   newMarks.push(mar+10)
  
}

for(let i=0;i<newMarks.length;i++){
  console.log(stuName[i] +" : "+ newMarks[i])
}
let sum:number=0;;
for(let mark of newMarks)
{
  sum+=mark;
}
console.log((sum/newMarks.length).toFixed(1))
