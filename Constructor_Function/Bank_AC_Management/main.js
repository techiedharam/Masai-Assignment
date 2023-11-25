// Instructions
// Task: Implement a bank account management system using JavaScript objects and functions.
// Instructions:
// Create a constructor function called BankAccount that takes accountNumber, name, type, and balance as arguments.
// Inside the constructor, initialize the properties of the bank account object.
// Add the following methods to the BankAccount prototype:
// deposit(amount) - Deposits the specified amount into the account.
// withdraw(amount) - Withdraws the specified amount from the account if the balance is sufficient.
// checkBalance() - Prints the account's balance.
// isActive() - Checks and returns whether the account is active.
// Create multiple BankAccount objects representing different accounts.

// Perform a series of deposit, withdrawal, and balance check operations on these accounts.

// Test the isActive method to check if the accounts are active.

// Implement a function getTotalBalance that calculates and returns the total balance of all active accounts.

// Test the getTotalBalance function to display the total balance of all active accounts.

function BankAccount(accoutNumber, name, type,balance ,status) {
    this.accoutNumber = accoutNumber;
    this.name = name;
    this.type = type
    this.balance = balance;
    this.status = status;
}
function deposit(amount) {
    this.balance += amount;
    console.log(this.balance);
    // console.log('Hello')
}
function withdraw(amount) {
    this.balance -= amount;
}
function checkBalance() {
    console.log(this.balance)
}
function isActive() {
    console.log(this.status)
}


let customer1 = new BankAccount(339926176 , "Dharam" , "Cuurent", 5300000 , "Active");
let customer2 = new BankAccount(339926177 , "Param" , "Saving", 300000 , "Active");
let customer3 = new BankAccount(339926178 , "Karam" , "Current", 505000 , "Deactive");
let customer4 = new BankAccount(339926179 , "Dinesh" , "Saving", 560000 , "Active");
let customer5 = new BankAccount(339926180 , "Ramesh" , "Current", 5308000, "Deactive");

deposit.call(customer1 , 12500);
withdraw.call(customer1 , 1000000);
checkBalance.call(customer1 , 12500);
isActive.call(customer1 );

// console.log(customer1); 
// console.log(customer2); 
// console.log(customer3); 
// console.log(customer4); 
// console.log(customer5);  