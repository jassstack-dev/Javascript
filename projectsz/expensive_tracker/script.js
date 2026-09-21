const expenseform = document.querySelector('#expenseForm')
const incomeForm = document.querySelector('#incomeForm')
const expenseBtn = document.querySelector('#expense')
const incomeBtn = document.querySelector('#income')
const transactionList = document.querySelector('.transaction-list')
const totolIncome = document.querySelector('#totolIncome')
const totalExpense = document.querySelector('#totalExpense')
const remainingBalance = document.querySelector('.balance-amount')
const progressBar = document.querySelector('#progress-bar')
const progressBarLine = document.querySelector('.progress-bar')




function addExpenseIncome(){
    expenseBtn.addEventListener('click', function(){
    expenseform.style.display = "flex"
    incomeForm.style.display = "none"
})
incomeBtn.addEventListener('click', function(){
    expenseform.style.display = "none"
    incomeForm.style.display = "flex"
})

}

addExpenseIncome()
let expense = JSON.parse(localStorage.getItem("expense")) || [];




function transactionUi(){
    transactionList.innerHTML = ""
    expense.forEach(function(elem){
       if(elem.type === 'income'){
        transactionList.innerHTML += `<div class="transaction-item income-item">
            <div class="trans-info">
                <span class="trans-title">${elem.category}</span>
                <span class="trans-date">${elem.date}</span>
            </div>
            <span class="trans-amount income">+ ${elem.amount}</span>
        </div>`
       }else{
        transactionList.innerHTML += `<div class="transaction-item expense-item">
            <div class="trans-info">
                <span class="trans-title">${elem.category}</span>
                <span class="trans-date">${elem.date}</span>
            </div>
            <span class="trans-amount expense">- ${elem.amount}</span>
        </div>`
       }
    })
}
  transactionUi()



expenseform.addEventListener('submit', (e)=>{
e.preventDefault()
 let amount = Number(e.target[0].value)
 let date = e.target[1].value
 let  category= e.target[2].value
 let note = e.target[3].value

 if(amount === '' || date  === '' || category === '' || note === ''){
    alert('all field are required')
    return
 }

 let obj = {
    amount, date, category,note,type:"expense"
 }
  expense.push(obj)
    transactionUi()
    dashboard()
  localStorage.setItem('expense', JSON.stringify(expense))


//   console.log(expense)
})

incomeForm.addEventListener('submit', (e)=>{
e.preventDefault()
 let amount = Number(e.target[0].value)
 let date = e.target[1].value
 let  category= e.target[2].value
 let note = e.target[3].value

 if(amount === '' || date  === '' || category === '' || note === ''){
    alert('all field are required')
    return
 }


 let obj = {
    amount, date, category,note,type:"income"
 }
 
 

  expense.push(obj)
    transactionUi()
    dashboard()
  localStorage.setItem('expense', JSON.stringify(expense))
  
  
 

 
})

// dashboard



function dashboard(){

    
let totalIncomeAmount = 0;
let totalExpenseAmount = 0;


    expense.forEach((e)=>{
    if(e.type === "income"){
        
        totalIncomeAmount += e.amount
        
    }

    if(e.type === 'expense'){
        totalExpenseAmount += e.amount
    }
    
    
})

totolIncome.textContent = `+${totalIncomeAmount}`
totalExpense.textContent = `-${totalExpenseAmount}`

let totalRemainingAmount = totalIncomeAmount - totalExpenseAmount


remainingBalance.textContent = totalRemainingAmount

let percentage = (totalRemainingAmount/totalIncomeAmount)* 100

progressBar.textContent = `${percentage.toFixed(2)}%`

progressBarLine.style.width = `${percentage}%`





}


// dashboard()











