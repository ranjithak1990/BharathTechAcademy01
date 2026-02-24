function stockMarket(num: number[]): number {

    let minPrice: number = Infinity;
    let maxprofit: number = 0;

    num.forEach(price => {
        if (price < minPrice) {
            minPrice = price; //5  8  min 4
        } else if (price - minPrice > maxprofit) {  //3
            maxprofit = price - minPrice;
        }
    })
    return maxprofit
}

console.log(stockMarket([7, 1, 5, 3, 6, 4]))
console.log(stockMarket([7, 5, 8, 6, 4]))
console.log(stockMarket([7, 6, 4, 3, 1]))