function diamond(n:number):void{

  for (let i=1;i<=n;i++)
  {
    let space =" "
      for(let j=1;j<=(n-i);j++){
       space+=" "      
      }
      for(let k=1;k<=i;k++){       
       space+=String(k)+" "
      }
     console.log(space) 
  }

for(let x=1;x<=n;x++){

  let space=" "
    for(let y=1;y<=x;y++){
      space+=" ";
    }
    for(let z=1;z<=n-x;z++){
      space+=z+" ";
    } console.log(space) 
}


}
diamond(5)
     
// 1 2 3 4 5