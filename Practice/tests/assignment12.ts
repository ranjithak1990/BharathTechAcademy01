function power(num: number, power: number) {

    let a: number[] = [];

    for (let i = 0; i < power; i++) {
        a.push(num)
    }
    console.log(a)
    let result: number = 1;
    for (let j = 0; j < a.length; j++) {
        result *= a[j]
    }
    console.log(result)
}

power(2, 5)