// Part 1 — Create BankAccount Class
// Ek BankAccount class create kar.

// Constructor mein ye 5 parameters hone chahiye:
// 1. accountHolder
// 2. accountNumber
// 3. bankName
// 4. balance
// 5. accountType
// Saari properties ko this ki help se initialize karna hai.
// Part 2 — Create Methods
// Class ke andar ye methods create kar:
// Method	Responsibility
// deposit(amount)	Account mein money add kare
// withdraw(amount)	Account se money withdraw kare
// checkBalance()	Current balance return kare
// getAccountDetails()	Complete account details return kare
// transferMoney(amount, receiver)	Ek account se doosre mein money transfer kare

// Part 3 — Conditions (Important)
// Deposit
// - Amount 0 se greater hona chahiye.
// - Invalid amount par error message print karna hai.
// Withdraw
// - Amount balance se zyada nahi hona chahiye.
// - Negative ya zero amount allowed nahi hai.
// Transfer
// - Sender ke paas sufficient balance hona chahiye.
// - Receiver ke account mein amount add hona chahiye.
// - Invalid transfer par dono accounts ka balance unchanged rehna chahiye.
// Part 4 — Objects Create Kar
// Kam se kam 3 bank accounts create kar:
// - Vimal — Canara Bank
// - Rahul — Kotak Bank
// - Krishna — SBI
// Har account ki apni details aur initial balance honi chahiye.
// Part 5 — Perform Operations
// Apne objects par ye operations perform kar:
// 1. Vimal ke account mein ₹5,000 deposit kar.
// 2. Rahul ke account se ₹2,000 withdraw kar.
// 3. Vimal se Krishna ko ₹1,500 transfer kar.
// 4. Rahul se Vimal ko ₹10,000 transfer karne ki koshish kar (insufficient balance case test kar).
// 5. Teeno accounts ki final details print kar.
// Part 6 — Bonus Challenge
// Agar ye bhi kar paya toh next level ke liye ready hai:
// - Har successful transaction ka record maintain karna.
// - Ek getTransactionHistory() method banana.
// - Har deposit, withdrawal aur transfer ka record store karna.

// Rules for today's challenge
// 1. Arrow functions use nahi karne, class methods use karne hain.
// 2. this ka proper use karna hai.
// 3. Kisi doosre account ko directly modify karne ke bajaye methods ke through operations karna.
// 4. Code ko clean aur readable rakhna.
// 5. Copy-paste solution nahi chahiye. Khud likhna hai.
// Tera learning checklist
// Progress tracker
// 0/9 completed

// [ ] Class aur constructor
// [ ] 5 properties using this
// [ ] Deposit method
// [ ] Withdraw method with conditions
// [ ] Balance return karna
// [ ] Account details return karna
// [ ] Transfer between objects
// [ ] Insufficient balance handle karna
// [ ] Transaction history (bonus)

// Bhai ek baat: Agar beech mein error aaye toh tension nahi. Error solve karna bhi programming ka part hai.

// Tu apna complete code bhejna. Main code reviewer ki tarah check karunga, mistakes explain karunga aur bataunga ki tera OOP concept kitna clear hua hai.

// Aaj ka target: Khud se ek working Banking System banana.

// Chal coder sahab, ab laptop khol! 😂❤️

// part1

class BankAccount {
  constructor(accountHolder, accountNumber, accountType, bankName, balance) {
    this.accountHolder = accountHolder;
    this.accountNumber = accountNumber;
    this.accountType = accountType;
    this.bankName = bankName;
    this.balance = balance;

    // Har account ki apni transaction history
    this.transactions = [];
  }

  // Transaction record store karne ka method
  addTransaction(type, amount) {
    this.transactions.push({
      type: type,
      amount: amount,
      balance: this.balance,
      date: new Date()
    });
  }

  // Deposit
  deposit(amount) {
    if (amount <= 0) {
      return "Amount should be greater than 0";
    }

    this.balance += amount;

    this.addTransaction("DEPOSIT", amount);

    return `${this.accountHolder}, ₹${amount} deposited. Current balance: ₹${this.balance}`;
  }

  // Withdraw
  withdraw(amount) {
    if (amount <= 0) {
      return "Amount should be greater than 0";
    }

    if (this.balance < amount) {
      return "Insufficient balance";
    }

    this.balance -= amount;

    this.addTransaction("WITHDRAW", amount);

    return `${this.accountHolder}, ₹${amount} withdrawn. Current balance: ₹${this.balance}`;
  }

  // Check balance
  checkBalance() {
    return `Current balance of ${this.accountHolder}: ₹${this.balance}`;
  }

  // Account details
  getAccountDetails() {
    return {
      accountHolder: this.accountHolder,
      accountNumber: this.accountNumber,
      accountType: this.accountType,
      bankName: this.bankName,
      balance: this.balance
    };
  }

  // Transfer money
  transferMoney(amount, receiver) {
    if (amount <= 0) {
      return "Invalid transfer amount";
    }

    if (!(receiver instanceof BankAccount)) {
      return "Invalid receiver account";
    }

    if (this.balance < amount) {
      return "Insufficient balance";
    }

    // Sender se money withdraw
    this.balance -= amount;

    // Receiver ke account mein money deposit
    receiver.balance += amount;

    // Dono accounts mein transaction record
    this.addTransaction("TRANSFER_SENT", amount);
    receiver.addTransaction("TRANSFER_RECEIVED", amount);

    return `₹${amount} successfully transferred from ${this.accountHolder} to ${receiver.accountHolder}`;
  }

  // Transaction history
  getTransactionHistory() {
    return this.transactions;
  }
}


// Create accounts

const bank1 = new BankAccount(
  "Vimal Kumar",
  90909090,
  "Saving Account",
  "Canara Bank",
  0
);

const bank2 = new BankAccount(
  "Krishna",
  90909091,
  "Saving Account",
  "SBI",
  0
);

const bank3 = new BankAccount(
  "Rahul",
  90909092,
  "Saving Account",
  "Kotak Bank",
  4000
);


// Perform operations

// 1. Vimal deposits ₹5000
console.log(bank1.deposit(5000));

// 2. Rahul withdraws ₹2000
console.log(bank3.withdraw(2000));

// 3. Vimal transfers ₹1500 to Krishna
console.log(bank1.transferMoney(1500, bank2));

// 4. Rahul tries to transfer ₹10000 to Vimal
console.log(bank3.transferMoney(10000, bank1));


// Final account details
console.log("FINAL ACCOUNT DETAILS");

console.log(bank1.getAccountDetails());
console.log(bank2.getAccountDetails());
console.log(bank3.getAccountDetails());


// Transaction histories
console.log("VIMAL HISTORY");
console.log(bank1.getTransactionHistory());

console.log("KRISHNA HISTORY");
console.log(bank2.getTransactionHistory());

console.log("RAHUL HISTORY");
console.log(bank3.getTransactionHistory());
