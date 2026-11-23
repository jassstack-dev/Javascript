const cart = [
  { id: 1, name: "Laptop", price: 50000, quantity: 2 },
  { id: 2, name: "Mouse", price: 500, quantity: 3 },
  { id: 3, name: "Keyboard", price: 1500, quantity: 1 }
];


// Total cart value calculate karo.

const total = cart.reduce((acc, item)=>{
    return acc + (item.price * item.quantity)
},0)

console.log(total)


// Agar total amount ₹50,000 se zyada hai toh 10% discount.

const totalDiscount = cart.reduce((acc, item)=>{
    return sum = acc + (item.price * item.quantity)
    

  
   
},0)


const discount = (totalDiscount * 10)/100
    const totalamountbydiscount = totalDiscount - (totalDiscount*10)/100

    console.log({
        totalDiscount,
        discount,
        totalamountbydiscount
    })
   

// Final payable amount return karo
