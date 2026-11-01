// Level 1 — Student Management
// Tujhe ek Student class banani hai.

// Requirements:
// 1. Student naam ki class banao.
// 2. Constructor mein 3 parameters hone chahiye:
//    - name
//    - age
//    - course
// 3. this ki help se teeno properties object mein store karo.
// 4. Do students ke objects create karo.

class Student{
    constructor(name, age, course){
        this.name = name;
        this.age = age;
        this.course = course

      
    }
}

const student1 = new Student('vimal', 23, 'javascript')
const student2 = new Student('jassu bhai', 21, 'system design')

// console.log(student1)
// console.log(student2)


// Practice 3 — Bank Account System
// Coding challenge
//  Beginner → Intermediate


// Ek BankAccount class create kar.

// Requirements:
// 1. BankAccount naam ki class banao.
// 2. Constructor mein 4 parameters hone chahiye:
//    - accountHolder
//    - accountNumber
//    - balance
//    - bankName
// 3. this ka use karke saari properties object mein store karo.
// 4. Teen different bank accounts ke objects create karo.
// 5. Teeno objects ko console mein print karo.
// Bonus challenge:

// Ek account ki balance value update karo, bina doosre accounts ko affect kiye.

// class BankAccount{
//     constructor(accountHolder, accountNumber, balance , bankName){
//         this.accountHolder = accountHolder
//         this.accountNumber = accountNumber
//         this.balance = balance
//         this.bankName = bankName
//     }
// }

// const bank1 = new BankAccount('vimal', 90848392, 1500, 'canera bank')
// const bank2 = new BankAccount('shyam', 93248392, 2100, 'kotak mahindtra')
// const bank3 = new BankAccount('tarun', 90848392, 1500, 'SBI')
// const bank4 = new BankAccount('krishna', 90848392, 1500, 'ICICI')
// console.log(bank1)
// console.log(bank2)
// console.log(bank3)
// console.log(bank4)

// bank1.balance = 0
// console.log('updated bank balance for bank1 ', bank1)



// Next Challenge — Level 3
// Ab hum constructor ke saath ek naya concept add karenge: Methods.

// Ek BankAccount class bana jisme:
// 1. Constructor mein accountHolder, balance aur bankName ho.
// 2. deposit(amount) method banao jo balance increase kare.
// 3. withdraw(amount) method banao jo balance decrease kare.
// 4. checkBalance() method banao jo current balance return kare.
// 5. Ek object create karke deposit aur withdrawal perform karo.
// Condition: Agar withdrawal amount balance se zyada ho toh withdrawal nahi hona chahiye.




class BankAccount{
    constructor(accountHolder, balance , bankName){
        this.accountHolder = accountHolder
        this.balance = balance
        this.bankName = bankName
    }

    deposit(amount) {
        this.balance += amount
        console.log(bank1)
        
    }

    withdraw(amount) {
        this.balance -= amount
        console.log(bank1)
    }

    checkBalance() {
       console.log(bank1)
    }

    
}

const bank1 = new BankAccount('vimal', 1500, 'canera bank')

bank1.deposit(5090)
bank1.withdraw(6590)
bank1.checkBalance()
