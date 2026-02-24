let sentence:string="Java programming is fun and challenging";
let newsen:string[]=sentence.split(' ');
console.log(`numbr of words ${newsen.length}`)
for(let i=newsen.length-1;i>=0;i--){
console.log(newsen[i])
}
let reversed=newsen.reverse().join(' ')
console.log(reversed)
let c:string="";
for(let m=0;m<reversed.length;m++){
   if(m===0){
    c= c+reversed[m].toUpperCase();  
   }else if( reversed[m]===' ')
   {
    c=c+' '+ reversed[m+1].toUpperCase();   
    m+=1;  
   }else{
   c=c+reversed[m];  
   }
}
console.log(c)

//easiest way
 let arr= reversed.split(' ')
 for(let i=0;i<arr.length;i++){
 let word=arr[i]
 let b=word.charAt(0).toUpperCase()+word.substring(1); 
}
