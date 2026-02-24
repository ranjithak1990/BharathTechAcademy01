function stocks(num: number[], Buyday: number, sellDay: number):void {
    let price1 = 0, price2 = 0, profit = 0;
    for (let i = 0; i < num.length; i++) {
        if (i == Buyday - 1) {
            price1 = num[i]
        }
    }
    for (let i = 0; i < num.length; i++) {
        if (i == sellDay - 1) {
            price2 = num[i]
        }
    }
    if (Buyday<sellDay ){
    if (price1 < price2) {
        profit = price2 - price1
        console.log("Profit amount: "+profit)
    }else  {
        console.log("Loss amount: 0 ")
    }}else{ console.log("sellday is incorrect")}
    
}

stocks([7, 1, 5, 3, 6, 4], 6, 5)