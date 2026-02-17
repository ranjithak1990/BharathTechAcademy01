function LoanApproval(credit:number,income:number,employed:boolean=false,dtiRatio:number):void{
if(credit>=750)
{
console.log("Load Approved")
}else if(credit<750 && credit>=650 )
{
  console.log("Additional checks required")   
  if( income>50000) {
    if(employed){
       if(dtiRatio<40){
        console.log("DTI ratio <40 %. So Loan Approved")
       }else (console.log("DTI ratio <40 %. So Loan rejected"))
    }else {
        console.log("not employed. Loan Denied")
    }
  }
}else
{
  console.log("Credit score<650. So Loan denied")  
}

}

LoanApproval(650,50001,true,45)

LoanApproval(650,50001,false,45)
 