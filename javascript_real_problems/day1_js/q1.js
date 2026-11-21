const cart = [
  { id: 1, name: "Laptop", price: 50000, quantity: 1 },
  { id: 2, name: "Mouse", price: 500, quantity: 2 },
  { id: 3, name: "Keyboard", price: 1500, quantity: 1 },
  { id: 4, name: "Keyboard", price: 1500, quantity: 0 }
];


// Total cart value calculate karo.
const total = cart.reduce((acc, qnt)=>{
    return acc + (qnt.price * qnt.quantity)
},0)

console.log(total)

// Total items count nikalo.

const totalCount = cart.reduce((acc, t)=>{
    return acc + t.quantity
},0)

console.log(totalCount)

//Sabse expensive product find karo.
const expenseProduct = cart.sort((a,b)=>{
    return (b.price - a.price)
})[0]

console.log(expenseProduct)

// Quantity 0 wale products remove karo.


const availableProducts = cart.filter((product) => {
    return product.quantity !== 0;
});

console.log(availableProducts);

const percentage = cart.reduce((acc, s)=>{
    return acc + ((s.price * 10)/100 * s.quantity)
},0)

console.log(percentage)