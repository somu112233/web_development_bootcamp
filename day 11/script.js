function greet() {
    console.log("Hello,  Somu!");
}
greet("Somu");

function greet (name) {
    console.log("Hello " + name);
}
greet("Somu");
greet ("Buddy");

function add(a, b) {
  return a + b;
}

let result = add(10, 20);
console.log(result);

function checkEvenOdd(number) {
    if (number % 2 === 0) {

         console.log("Even");

    } else {
   
    console.log("Odd");
    }

}
checkEvenOdd(8);
checkEvenOdd(7);

function findLarger(a,b){
    if (a > b){
        console.log(a);
    } else if (a === b) {
        console.log("both numbers are equal");

    }
    else {
        console.log(b);
    }
}

findLarger(10, 20);
findLarger(50, 15);
findLarger(100, 100);



function square(number) {
    return number * number;
}
    console.log(square(5));
    console.log(square(10));
    console.log(square(7));