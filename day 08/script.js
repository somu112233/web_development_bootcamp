let Fullname="soma sekhar";
const country="India";
let age=25;


console.log(Fullname);
console.log(country);
console.log(age);

document.getElementById("demo").innerHTML="Hello soma sekhar";


let num1=10;
let num2=20;

console.log("Addition=",num1+num2);
console.log("Subtraction=",num1-num2);
console.log("Multiplication=",num1*num2);
console.log("Division=",num1/num2);
console.log("Remainder=",num1%num2);

age=30;

if(age>=18) {
    console.log("You are eligible to vote");
}else {
    console.log("You are not eligible to vote");
}


age=15;

if(age>=18) {
    console.log("You are eligible to vote");
}else {
    console.log("You are not eligible to vote");
}

let x=10;
let y="10";

console.log(x == y);
console.log(x === y);
console.log(x != y);
console.log(x !== y);



let userName = prompt("Enter your name");
console.log("Welcome " + userName);
alert("Hello " + userName);