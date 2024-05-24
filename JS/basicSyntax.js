// variables
// let - mutable or changeable
let myName = "John";
console.log(myName);

myName = "Jane";
console.log(myName);

// const - constant or unchangeable
const year = 2000;
console.log(year);

// error due to trying to change value of a const variable
// year = 2001
// console.log(year);

// var - changeable but older way of declaring
var myHobby = "sleeping";
console.log(myHobby);

myHobby = "coding";
console.log(myHobby);

// Case Sensitivity
// camelCasingMethod

// Data Types - Primitive Types
// numbers
let number = 13;
number = 13.5;
number = -14;
console.log("Number: ", number);

// string - text single ' ' or double " "
let greeting = "Let's go!";
console.log("String: ", greeting);

// Boolean - true or false (logical values)
let status = false;
status = true;
console.log(status);

// undefined
let nothing;
console.log(nothing);

// null - intentional absence of an object
let nullVar = null;
console.log(nullVar);

// Reference Types
// Object - key-value pairs enclosed in curly {}
let personObject = {age: 20, name: "Julia", location: "NYC"};
console.log("Object: ", personObject);
console.log("Value of name in the object: ", personObject.name);

// array - ordered list of values enclosed []
// creating an array
let fruits = ["apple", "banana", "watermelon", "grapes"];
console.log(fruits);

// accessing array elements
// index
console.log("First fruit:", fruits[0]);
console.log("Third fruit:", fruits[2]);
console.log("Last fruit:", fruits[fruits.length - 1]);

// modifying array elements
fruits[0] = "strawberry";
console.log(fruits);

// .push() - add an element at the end
fruits.push("mango");
console.log(fruits);

// .pop() - remove the last element
fruits.pop();
console.log(fruits);

//Dynamic Typing
let things = ["item", 25, true];
console.log(things);

// Function
function sayHello(name){
    console.log("Hello", name);
}

sayHello("Kim");

// Date - represent a specific moment in time
let date = new Date("2022-04-23");
console.log(date);
