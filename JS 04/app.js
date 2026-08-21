console.log("------Level 1--------");
function sayHello() {
    console.log("Hello World")
}
sayHello()

function showName(name) {
    console.log(name)
}
showName("Hussain")

function add(a, b) {
    console.log(a + b);
}
add(5, 2)

function subtract(a, b) {
    console.log(a - b);
}
subtract(5, 2)

function square(num) {
    var sq = num * num;
    console.log(sq);
}
square(5)

function cube(num) {
    var sq = num * num * num;
    console.log(sq);
}
square(2)

function getFullName(firstName, lastName) {
    console.log(`${firstName} ${lastName}`);
}
getFullName("Hussain", "Abbas")


console.log("------Level 2--------");
function isEven(num){
    if (num % 2 === 0) {
        console.log("true");
    } else {
        console.log("false");
    }
}
isEven(3)

function isPositive(num){
    if (num > 0) {
        console.log("Positive");
    } else if (num === 0) {
        console.log("Zero");
    } else {
        console.log("Negative");
    }
}
isPositive(0)

function findGreater(a, b){
    if (a > b) {
        console.log(`${a} is greater.`)
    } else if (a < b) {
        console.log(`${b} is greater.`)
    }
}
findGreater(15, 20)

function canVote(age){
    if (age >= 18) {
        console.log("Eligible");
    } else {
        console.log("Not Eligible");
    }
}
canVote(18)

function checkNumber(num){
    if (num % 2 === 0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }
}
checkNumber(3)

function getGrade(marks){
    if (marks >= 80) {
        console.log("A");
    } else if (marks >= 70) {
        console.log("B");
    } else if (marks >= 60) {
        console.log("C");
    } else if (marks >= 50) {
        console.log("D");
    } else if (marks < 50) {
        console.log("Fail");
    }
}
getGrade(50)

function isDivisibleBy5(num){
    if (num % 5 === 0) {
        console.log("True");
    } else {
        console.log("False");
    }
}
isDivisibleBy5(25)
