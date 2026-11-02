class BankAccount {
    constructor(holderName, balance) {
        this.holderName = holderName;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount){
        
        if(amount <= 0){
            console.log('amount should be greater than 0')
            return
        }

        if(this.balance >= amount){
            this.balance -= amount
            console.log('amount withdraw ', amount)
        }else{
            console.log('insufficient balance')
            return
        }
        
    }

    getBalance() {
        return this.balance;
    }
}

const account1 = new BankAccount("Vimal", 5000);
// deposit amount
account1.deposit(2000);

//check balance
console.log(account1.getBalance());
// withdraw balance 
account1.withdraw(1000)
// check validation
account1.withdraw(-100)
