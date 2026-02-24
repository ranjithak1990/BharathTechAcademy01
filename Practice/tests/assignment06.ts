function prime(num:number){
if(num===1)
{
    console.log("not a prime number")
}else{
for(let i=2;i<num;i++){
   if(num%i===0){
   return "given number is not prime"    
   }
}
return "given number is prime"
}
}
//console.log(prime(163))

function primeseries(num: number): void {
  if (num > 1) {
    for (let i = 2; i <= num; i++) {
      let isPrime = true;
      for (let j = 2; j < i; j++) {
        if (i % j === 0) {
          isPrime = false;
          break; 
        }
      }
      if (isPrime) {
        console.log(i);
      }
    }
  }
}

primeseries(163);