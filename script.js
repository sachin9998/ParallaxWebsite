// // JavaScript Continouation

// // Object Create

// const obj1 = {
//   key1: "Value 1",
//   key2: "Value 2",
// };

// const obj2 = Object.create(obj1); // {}
// // there is one more way to create empty object

// obj2.key3 = "Value 3";

// console.log(obj2.key1); // Value 1
// console.log(obj2); // { key3: 'Value 3' }
// console.log(obj2.__proto__); // { key1: 'Value 1', key2: 'Value 2' }

// Prototype and NEW Keyword

// function hello() {
//   console.log("Hello Space");
// }

// console.log(hello.prototype); // {}

// hello.prototype.abc = "abc";
// hello.prototype.xyz = "xyz";

// console.log(hello.prototype);

// NEW Keyword

// function createUser(firstName, age) {
//   this.firstName = firstName;
//   this.age = age;
// }

// createUser.prototype.about = function () {
//   console.log(this.firstName, this.age)
// }

// const user1 = new createUser("Harshit", 6);

// user1.about(); // Harshit 6

// // Classes in JavaScript

// class CreateUser {
//   constructor(firstName, lastName, email, age, address) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.email = email;
//     this.age = age;
//     this.address = address;
//   }

//   about() {
//     return `${this.firstName} is ${this.age} years old`;
//   }

//   is18() {
//     return this.age >= 18;
//   }

//   sing() {
//     return "La la lallaa alalla";
//   }
// }

// const user1 = new CreateUser(
//   "Sachin",
//   "Alam",
//   "sachinalam@icloud.com",
//   25,
//   "Mumbai, Maharashtra"
// );

// // Super keyword

// class Animal {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   eat() {
//     return `${this.name} is eating`;
//   }

//   isSuperCute() {
//     return this.age <= 1;
//   }

//   isCute() {
//     return true;
//   }
// }

// // Object = Instance

// class Dog extends Animal {
//   constructor(name, age, speed) {
//     super(name, age);
//     this.speed = speed;
//   }

//   runningSpeed() {
//     return `${this.name} speed is ${this.speed}`;
//   }
// }

// const tommy = new Dog("Tommy Shephar", 1, 40);

// // Calling runningSpeed method
// console.log(tommy.runningSpeed()); // 40

// // Getters and Setters in JavaScript

// class Player {
//   constructor(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//   }

//   get fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }

//   set fullName(fullName) {
//     const [firstName, lastName] = fullName.split(" ");
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }

// }

// // Creating Object or Class or Instance
// const captain = new Player("Rohit", "Sharma", 32);
// console.log(captain.fullName); // Rohit Sharma

// captain.fullName = "Virat Kohli"
// console.log(captain.fullName); // Virat Kohli

// Static methods and Properties

// class Player {

//   constructor(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//   }

//   get fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }

//   set fullName(fullName) {
//     const [firstName, lastName] = fullName.split(" ");
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }

// }

// Lets setup the new environment

// Current track - 1 Minute

// How javascript works

// Compilation
// Code execution

// why compilation

// ==> What is global exection context

// console.log(this);
// // console.log(window);
// console.log(firstName);
// var firstName = "sachin";
// console.log(firstName);

// => Global execution context

// console.log( );

// +> Scope Chain in JavaScript

// const lastName = "Alam";

// const printName = function () {
//   const firstName = "Jat";
//   console.log(firstName);
//   console.log(lastName);
// }

// printName();

// Closures in JavaScript - IMP

// Closure - 30-40%
// Analyse - 70-80%
// Real example - 100%

// Function can return functions

// function myFunc(power) {
//   return function (number) {
//     return number ** power
//   }
// }

// const square = myFunc(2);
// const ans = square(3);

// console.log(ans);

// Closure example 4

// function funky() {
//   let counter = 0;

//   return function () {
//     if (counter < 1) {
//       console.log("Hi, You called me");
//       console.log(counter);
//       counter++;
//       console.log(counter);
//     } else {
//       console.log("You have called me already");
//       counter++;
//       console.log(counter);
//     }
//   }
// }

// const funcky2 = funky();
// funcky2();
// funcky2();
// funcky2();

// Correct way of linking JavaScript file to HTML file.

// async -> parsing and loading at the same time.


// The correct way is => => => => => => =>
// defer defer defer defer deferdefer defer defer defer defer defer defer dfer dfer defer

// <script src="./102" defer></script>

// What is => DOM Manipulation

// Document Object Model - DOM

// Document Object Model :: sachinalam@icloud.com

/*
Head & Body
title meta
header section nav logo
Object
*/


// <><> => Document Object Model <><>

// Change the style of elements

// var i = 10;
// do {
//   console.log("hii");
// } while (i < 5);

// var i = 0;
// while (i < 5); {
//   console.log("hii");
//   i++;
// }

// for (i = 0, j = 10; i < 5; ++i) {
//   if (i < 5)
//     break
// }

// = = = = = = = = = = = = = = = = = = = = > Inner HTML

// Add HTML Element using JavaScript

// Clone Nodes

// Date - 31 July, 2022

// => querySelectorAll will provide us static list.
// => getElementsBySomething will provide us live list.

// Intro to Events

// Events means kam hona
// to Perform some action
// button press is another example of event
// mouse hover kiya is an event also
//

// => Event Object

// => sachinalam@icloud.com | Even behind the scenes

// 1 - What is responsive design?
// 2 - 