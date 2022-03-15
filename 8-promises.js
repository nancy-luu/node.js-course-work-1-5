// const doWorkPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve([1, 2, 3])
//         reject('Things went wrong!')
//     }, 2000)
// })

// doWorkPromise.then((result) => { 
//     console.log('Success!', result)
// }).catch((error) => {
//     console.log('Error!', error)
// })

const add = (a, b) => {
    return new Promise((resolve, reject) => {
        console.log('Your result is calculating...')
        setTimeout(() => {
            resolve(a + b)
        }, 2000)
    })
}

// add(1, 2).then((sum) => {
//     console.log(sum)

//     add(sum, 5).then((sum2) => {
//         console.log(sum2)
//     }).catch((e) => {
//         console.log(e)
//     })

// }).catch((e) => {
//     console.log(e)
// })

// promise chaining 
// return a promise so that you can chain another then
// first promise
add(1, 2).then((sum) => {
    console.log(sum)
    return add(sum , 4)

    // second promise
}).then((sum2) => {
    console.log(sum2)
}).catch((e) => {
    console.log(e)
})