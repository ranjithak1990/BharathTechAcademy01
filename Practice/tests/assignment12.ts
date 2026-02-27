function power(num: number, power: number) {

    let a: number[] = [];
    let result: number = 1;
    if (power > 0) {
        for (let i = 0; i < power; i++) {
            a.push(num)
        }
        console.log(a)        
        for (let j = 0; j < a.length; j++) {
            result *= a[j]
        }
    } else {
         power=(-1*power)
        for (let i = 0; i < power; i++) {
            a.push(1 / num)
        }
        console.log(a)       
        for (let j = 0; j < a.length; j++) {
            result *= a[j]
        }
    }
    console.log(result)
}

power(2, -3)