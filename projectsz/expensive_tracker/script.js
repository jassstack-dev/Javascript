const form = document.querySelector('form')
const input = form.querySelectorAll("input, select,  textarea")


console.log("js chala")


let expense = []



form.addEventListener('submit', (e)=>{
e.preventDefault()
 let amount = Number(e.target[0].value)
 let date = e.target[1].value
 let  category= e.target[2].value
 let note = e.target[3].value



 let obj = {
    amount, date, category,note,type:"expense"
 }
 
 

  expense.push(obj)
  console.log(expense)
 

 
})