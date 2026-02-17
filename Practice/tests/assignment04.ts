let amount: number[] = [50000, -2000, 3000, -15000,-20000, -200, -300, 4000, -3000]
let pCount = 0
let nCount = 0
let pAmount = 0
let nAmount = 0
for (let amo of amount) {


    if (amo > 0) {
        if(amo>10000)
        {console.log("Suspicious Transaction with debit of: "+ amo)}
        pCount += 1
        pAmount+=amo

    } else {
         if(amo<-10000)
        {console.log("Suspicious Transaction with credi of: "+ amo)}
        nCount += 1
        nAmount+=amo
    }

}
console.log("Debit Count : " + pCount + "\n" + "Credit Count : " + nCount)
console.log("Debit Amount : " + pAmount + "\n" + "Credit Amount : " + nAmount)
console.log("Remaining Amount in the bank: " + (pAmount+nAmount))