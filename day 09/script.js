let age = 20;
let hasID= true;
 if(age >= 18 && hasID) {
    console.log("Entry Allowed");
} else {
    console.log("Entry Denied");
}

let isWeekend = false;
let isHoliday = true;

if (isWeekend || isHoliday) {
    console.log("You can relax!");
}

let isLoggedIn = false;

if (!isLoggedIn) {
    console.log("Please login");
}

let marks = 82;

if (marks >= 35) {
    if (marks >= 75) {
        console.log("Distinction");
    } else {
        console.log("Pass");
    }
} else {
    console.log("Fail");
}

let day = 2;

switch(day){
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    default:
        console.log("Invalid Day");
}

let studentMarks = Number(prompt("Enter your marks"));
if (marks < 0 || marks > 100 ) 
    {
    console.log("Invalid Marks");
}

else if (marks >= 90) {
    console.log("Grade A");
}

else if (marks >=75){
    console.log("Grade B");
}

else if (marks >=50){
    console.log("Grade C");
}

else {
console.log("Fail");
}

let num1 = 10;
let num2 = 5;
let operator = "+";

switch(operator){
    case"+":
    console.log(num1 + num2);
    break;

    case"-":
    console.log(num1 - num2);
    break;

    case"*":
    console.log(num1 * num2);
    break;

    case"/":
    console.log(num1 / num2);
    break;

    case"%":
    console.log(num1 % num2);
    break;

    default:
        console.log("Invalid Operator");
}
