// For loop with array

const fibo = (n) => {
    const fiboArray = []
    if (n === 1) {
        fiboArray.push(0, 1)
        return fiboArray
    } if (n === 0) {
        fiboArray.push(n)
        return fiboArray
    }
    else {
        fiboArray.push(0, 1)
        for (i = 2; i < n; i++) {
            fiboArray.push(fiboArray[i - 1] + fiboArray[i - 2])
        }
        return fiboArray
    }
}

// console.log(fibo(10))

// For loop

const fibo2 = n => {
    a = 0
    b = 1
    c = n
    if (n === 0) {
        return a
    }
    if (n === 1) {
        return b
    } else {
        for (let i = 2; i <= n; i++) {
            c = a + b
            a = b
            b = c
        }
    }
    return c
}

// console.log(fibo2(20))

// Recursive

const fibo3 = n => {
    if (n < 2) {
        return n
    } else {
        return fibo3(n - 1) + fibo3(n - 2);
    }
}

// console.log(fibo3(20))