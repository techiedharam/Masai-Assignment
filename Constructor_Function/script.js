// console.log("Hello India");


// let person1 = {
//     name:"Dharam" , 
//     age: 23 , 
//     print:function() {
//         console.log(`Name : ${this.name} Age: ${this.age}`);
//     }
// }
// let person2 = {
//     name:"Param" , 
//     age: 24 , 
//     print:function() {
//         console.log(`Name : ${this.name} Age: ${this.age}`);
//     }
// }

//     function print(Ramesh , Dinesh) {
//     console.log(`Name : ${this.name} Age: ${this.age}    , ${Ramesh} , ${Dinesh}`);
// }

// print.call(person1 , "Ramesh Kya Hall" , "Dinesh Kya Hall");
// print.apply(person2 , ["Hello" , "Bharat"]);
// let store = print.bind(person2 ,"Aur Kaise Ho" , "Mein thik hu tu apne bata")

// store();
// person1.print();
// person2.print();


// Construstor function 
// let BankAccount = {
//     name: "Dharam",  
//     age: 23 ,
//     acc_no: 339926175,
//     address: {
//         H_Nouse: 187, 
//         City : "Delhi", 
//         Pin: 110085
//     }
//     ,
//     print:function() {
//         console.log(`Customer Name: ${this.name} , Age:  ${this.age} , A/C: ${this.acc_no} , Address: ${this.address.H_Nouse} ${this.address.City} , ${this.address.Pin}`);
//     }
// }

// BankAccount.print();

// Create A Funtion and Pass Details Argument with this and create a object with this function 

// function BankAccountDetails(name , age, acc_no , address) {
//     let obj = {
//         name: name, 
//         age: age, 
//         acc_no: acc_no,
//         address: address
//     }
//     return obj;
// }

// let person1 = BankAccountDetails("Dharam" , 23 , 339926175 , "187 Naharpur Village Sector-7 Rohin Delhi-110085");
// let person2 = BankAccountDetails("Param" , 24 , 339926175 , "188 Naharpur Village Sector-7 Rohin Delhi-110085");


// console.log(person1);
// console.log(person2);

function BankAccountDetails(name , age, acc_no , address) {
  this.name = name;
  this.age = age;
  this.acc_no = acc_no;
  this.address = address;
}

let person1 = new BankAccountDetails("Dharam" , 23 , 339926175 , "187 Naharpur Village Sector-7 Rohin Delhi-110085");
let person2 = new BankAccountDetails("Param" , 24 , 339926175 , "188 Naharpur Village Sector-7 Rohin Delhi-110085");


// console.log(person1);
// console.log(person2);