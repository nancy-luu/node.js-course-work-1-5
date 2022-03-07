// Object property shorthand

const name = 'Nancy'
const age = 29
const location = process.argv[2]

const user = {
    name,
    age,
    location: location
}
console.log(user)

// Destructuring Objects 

const product = {
    label: 'Red notebook',
    price: 3, 
    stock: 201,
    salePrice: undefined,
    // rating: 4.2
}

// const label = product.label
// const stock = product.stock
// const {label, stock, rating } = product 

// const {label: productLabel, stock, rating = 5 } = product 
// console.log(productLabel)
// console.log(stock)
// console.log(rating)

// can destructure a standard object in line of the argument
const transaction = ( type, { label, stock } ) => {
    console.log(type, label, stock)
}

transaction('Order', product)