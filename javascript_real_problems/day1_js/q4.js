// Expense Tracker System

const expenses = [
    { id: 1, title: "Food", amount: 500, category: "personal" },
    { id: 2, title: "Rent", amount: 10000, category: "home" },
    { id: 3, title: "Travel", amount: 1500, category: "personal" },
    { id: 4, title: "Electricity", amount: 2000, category: "home" },
    { id: 5, title: "Shopping", amount: 3000, category: "personal" },
    { id: 6, title: "Internet", amount: 1000, category: "office" }
];

const total = expenses.reduce ((acc, mut)=>{
    return acc + mut.amount
},0)

// console.log(total)

// categpry by expences

function cateExpenses(){
   

    // category by expenses
   const result = expenses.reduce((acc,item)=>{
    if(acc[item.category]){
        acc[item.category] += item.amount
    }else{
        acc[item.category] = item.amount
    }

    return acc
   }, {})

   return result



}
// console.log(cateExpenses()) 


// highest expenses
const highestExpenses = expenses.sort((a,b)=>{
    return b.amount - a.amount
})[0]

// console.log(highestExpenses)

// Sirf ₹1,000 se zyada amount wale expenses return karo.


const filterbyAmount = expenses.filter((val)=>{
    return val.amount > 1000
})
console.log(filterbyAmount)