const add = (a, b) => {
    return new Promise((resolve, reject) => {
        console.log('Your result is calculating...')
        setTimeout(() => {
            if (a < 0 || b < 0) {
                return reject('Numbers must be non-negative!')
            }

            resolve(a + b)
        }, 2000)
    })
}

// async functions always return a promise
// that promise is fulfilled with the value you choose to return from the function
// const doWork = async () => {
//     throw new Error('Something went wrong!')
//     return 'Nancy'
// }

// simpler to read with async than chaining multiple promises
// gives access to inidivual results 
const doWork = async () => {
    const sum = await add(1, 99)
    const sum2 = await add(sum, 50)
    const sum3 = await add(sum2, 3)
    return sum3
}

doWork().then((result) => {
    console.log('result:', result)
}).catch((e) => {
    console.log('error:', e)
}) 