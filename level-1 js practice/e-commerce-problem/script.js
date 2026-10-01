const products = [
  {
    id: 1,
    name: "iPhone 15",
    category: "electronics",
    price: 79999,
    stock: 12,
    sold: 45,
    rating: 4.6,
    discount: 10,
    isActive: true,
    brand: "Apple"
  },
  {
    id: 2,
    name: "Samsung Galaxy S24",
    category: "electronics",
    price: 74999,
    stock: 8,
    sold: 38,
    rating: 4.4,
    discount: 15,
    isActive: true,
    brand: "Samsung"
  },
  {
    id: 3,
    name: "Nike Air Max",
    category: "footwear",
    price: 12999,
    stock: 25,
    sold: 67,
    rating: 4.7,
    discount: 20,
    isActive: true,
    brand: "Nike"
  },
  {
    id: 4,
    name: "Adidas Ultraboost",
    category: "footwear",
    price: 14999,
    stock: 5,
    sold: 52,
    rating: 4.5,
    discount: 10,
    isActive: true,
    brand: "Adidas"
  },
  {
    id: 5,
    name: "Levi's Jeans",
    category: "clothing",
    price: 3999,
    stock: 30,
    sold: 89,
    rating: 4.3,
    discount: 25,
    isActive: true,
    brand: "Levi's"
  },
  {
    id: 6,
    name: "Puma T-Shirt",
    category: "clothing",
    price: 1999,
    stock: 0,
    sold: 41,
    rating: 4.1,
    discount: 30,
    isActive: false,
    brand: "Puma"
  },
  {
    id: 7,
    name: "Sony Headphones",
    category: "electronics",
    price: 8999,
    stock: 15,
    sold: 73,
    rating: 4.8,
    discount: 12,
    isActive: true,
    brand: "Sony"
  },
  {
    id: 8,
    name: "Ray-Ban Sunglasses",
    category: "accessories",
    price: 9999,
    stock: 7,
    sold: 34,
    rating: 4.6,
    discount: 18,
    isActive: true,
    brand: "Ray-Ban"
  },
  {
    id: 9,
    name: "Fossil Watch",
    category: "accessories",
    price: 11999,
    stock: 3,
    sold: 29,
    rating: 4.2,
    discount: 15,
    isActive: true,
    brand: "Fossil"
  },
  {
    id: 10,
    name: "MacBook Air M3",
    category: "electronics",
    price: 114999,
    stock: 4,
    sold: 21,
    rating: 4.9,
    discount: 8,
    isActive: true,
    brand: "Apple"
  }
];

// Store mein currently jo products active hain unka new array banao.

let activeProducts = products.filter((val)=>{
    return val.isActive === true;
}) 

// console.log(activeProducts)

// Aise products nikalo jinka: --> stock <= 5
// Output mein sirf product name aur stock hona chahiye.



let stockCount = products.filter((val)=>{
    return val.stock <=5
}).map((val)=>{
    return {
        product : val.name,
        stock : val.stock
    }
})

// console.log(stockCount)

// Har product ka actual selling price calculate karo after discount.

// sellingPrice = price - (price * discount / 100)

let discountedPrice =  products.map((val)=>{
    let sellingPrice = val.price - (val.price * 10 / 100)

    return{
        name: val.name,
        price : val.price,
        discount : 10,
        sellingPrice : sellingPrice

    }
    
})
// console.log(discountedPrice)


// Q4 — Total Inventory Value
// Company ke paas jitna stock pada hai uski total value nikalo.




let totalValue  = products.reduce((acc,val)=>{
    return acc + val.price*val.stock
},0)


// console.log("total values--->",totalValue)

// practice 

let totolStockBYcategory = products.map((val)=>{
    return {
        name: val.name,
        price: val.price,
        stock: val.stock,
        category : val.category
    }
}).reduce((acc,val)=>{
    if(!acc[val.category]){
        acc[val.category] = 0
    }
    
    acc[val.category] += val.price * val.stock

    return acc
},{})


// console.log("total stock with values with actegory -->",totolStockBYcategory)

let total =Object.values(totolStockBYcategory).reduce((acc,val)=>{
    return acc+ val;
})



// console.log("total values ---> ",total)

// Q5 — Total Products Sold
// Saare products mila ke kitne units sell hue?

let units = products.reduce((acc,val)=>{
    return acc+ val.sold;
},0)


// console.log(units)

// 🔥 Level 2 — Actual E-commerce Logic

// Q6 — Category-wise Product Count

let category = products.reduce((acc,val)=>{
    if(!acc[val.category]){
        acc[val.category] = 0
    }

    acc[val.category]++;

    return acc


    
},{})

// console.log(category)

// Q7 — Category-wise Revenue
// Har category ne kitna revenue generate kiya?


let totalRevenue = products.reduce((acc,val)=>{
    if(!acc[val.category]){
        acc[val.category] = 0
    }

    acc[val.category] += val.price*val.stock
    return acc
},{})

// console.log(totalRevenue)


// Q8 — Best Selling Product
// Jis product ki sold quantity sabse zyada hai, uska complete object return karo.
// Jis product ki sold quantity sabse zyada hai, uska complete object return karo.






let bestProduct = [...products].sort((a,b)=>b.sold-a.sold)[0]
// console.log(bestProduct)

// console.log(products.reduce((acc,val)=>{
//     if(val.sold > acc.sold){
//         return val
//     }
//     return acc
// }))

// console.log(products)


// let arr2 = [10,20,30,48,2]
// let arr3 = [...arr2].sort()

// console.log(arr2)


// Q9 — Highest Rated Active Product
//isActive === true
// aur unmein highest rating wala product.

const ActiveProduct =  products.filter((val)=>{
    return val.isActive === true
})

let highestRatingProducts =  activeProducts.reduce((acc,val)=>{
    if(val.rating > acc.rating){
        return val;
    }

    return acc
})

// console.log(highestRatingProducts)



// Q10 — Apple Products Revenue
// Sirf Apple products ka total revenue:

let appleProduct = products.filter((val)=>{
    if(val.brand === "Apple") return val
})

let appleProductRevenue = appleProduct.reduce((acc,val)=>{
    return acc+ (val.price * val.sold)
},0)

// console.log(appleProductRevenue)

// Level 3 — Ab asli practice
// Q11 — Admin Dashboard Analytics
// Ek object return karo:

// {
//   totalProducts: ...,
//   activeProducts: ...,
//   inactiveProducts: ...,
//   totalStock: ...,
//   totalSold: ...,
//   totalInventoryValue: ...,
//   averageRating: ...
// }


let Dashboard = products.reduce((acc,val)=>{
    acc.totalProducts += 1
    acc.activeProducts += val.isActive
    acc.inactiveProducts += !val.isActive ? 0 : 1

    acc.totalStock += val.stock
    acc.totalSold += val.sold
    acc.inventoryValue += val.price * val.stock
    acc.averageRating += val.rating
    
    return acc
},{
     totalProducts: 0,
  activeProducts: 0,
  inactiveProducts: 0,
  inActiveProducts:0,
  totalStock: 0,
  totalSold: 0,
  totalInventoryValue: 0,
  averageRating:0
})

console.log(Dashboard)












// 1. sort() — order change karta hai
let nums = [50, 10, 30, 20, 40]

nums.sort()

// console.log(nums)  //increasing order mai de dia 

// console.log(nums.sort((a,b)=> b-a)) //descending order mai de dega 


let prducts = [
    { name: "Laptop", sold: 12 },
    { name: "Mouse", sold: 35 },
    { name: "Keyboard", sold: 20 }
]


let HigherToLower = prducts.sort((a,b)=> b.sold-a.sold)
// console.log(HigherToLower)

// console.log(HigherToLower.map((val)=>{
//     return val.sold
// })
// )

// slice 
// console.log(nums.slice(0,3))