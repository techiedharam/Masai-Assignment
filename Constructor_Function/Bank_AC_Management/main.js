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
    this.deposit = function(amount) {
        this.balance += amount;
        console.log("Successfully Deposited" , amount, "in Your Account");
    }
    this.withdraw = function(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
        }
        else {
            console.log("Insufficient balance in your account:" , this.balance)
        }
    }
    this.checkBalance = function () {
        console.log("Your Current Balanace:" , this.balance)
    }
    this.isActive = function() {
        console.log("Your Account is : " ,this.status)
    }
}
// function deposit(amount) {
//     this.balance += amount;
//     console.log(this.balance);
// }
// function withdraw(amount) {
//     this.balance -= amount;
// }
// function checkBalance() {
//     console.log(this.balance)
// }
// function isActive() {
//     console.log(this.status)
// }

let customer1 = new BankAccount(339926176 , "Dharam" , "Cuurent", 53000 , "Active");
let customer2 = new BankAccount(339926177 , "Param" , "Saving", 30000 , "Active");
let customer3 = new BankAccount(339926178 , "Karam" , "Current", 50000 , "Deactive");
let customer4 = new BankAccount(339926179 , "Dinesh" , "Saving", 56000 , "Active");
let customer5 = new BankAccount(339926180 , "Ramesh" , "Current", 55000, "Deactive");

customer1.deposit(12500);
customer1.withdraw(100000);
customer1.checkBalance();
customer1.isActive();


// deposit.call(customer1 , 12500);
// withdraw.call(customer1 , 1000000);
// checkBalance.call(customer1 , 12500);
// isActive.call(customer1 );

// console.log(customer1); 
// console.log(customer2); 
// console.log(customer3); 
// console.log(customer4); 
// console.log(customer5);  