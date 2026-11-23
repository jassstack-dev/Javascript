// Interviewer: You are developing an e-commerce inventory management system. When a customer places an order, your application must verify whether sufficient stock is available.

const inventory = [
    { id: 1, name: "Laptop", stock: 10 },
    { id: 2, name: "Mouse", stock: 5 },
    { id: 3, name: "Keyboard", stock: 0 }
];

const order = [
    { id: 1, quantity: 3 },
    { id: 2, quantity: 7 },
    { id: 3, quantity: 1 }
];

// Your requirements:
// 1. Check stock availability for every ordered product.
// 2. If stock is sufficient, allow the order.
// 3. If even one product has insufficient stock, reject the entire order.
// 4. If the order is rejected, no inventory stock should be updated.
// 5. If successful, update the stock accordingly.

// output
// {
//     success: false,
//     message: "Insufficient stock for Mouse"
// }


function placeOrder(inventory, order){
    const availableStock = inventory.filter((val)=>{
        return val.stock > 0
    })

    return {
        availableStock
    }
}
placeOrder(inventory)