// VERY EASY: Create two variables and assign a number to each. Console log the difference between the numbers. Example output: “The difference between 6 and 2 is 4”

var num1 = 6;
var num2 = 2;
console.log(`The difference between ${num1} and ${num2} is ${num1 - num2}`);



// EASY: Create two variables and assign a person’s name to each. Console log a statement that says which name is shorter or longer, and by how many characters. Example output: “The name Thomas is longer than John by 2 characters”

var name1 = "Charlie";
var name2 = "Paul";
console.log(`The name ${name1} is longer than ${name2} by ${name1.length - name2.length} characters`)



// MEDIUM: Write a program to tell if someone is shouting (typing in all caps), whispering (typing in all lowercase), or neither. Use prompt to get user input, and then console log whether the user was shouting, whispering, or talking normally.

// var cap = prompt("Enter a phrase: ");  /** commented out so it stops asking for prompt everytime, uncomment all to test and comment out other prompts */

// if (cap == cap.toUpperCase()) {
//     console.log("Person is shouting (typing in all caps)");
// }

// else if (cap == cap.toLowerCase()) {
//     console.log("Person is whiserping (typing in all lowercase)");
// }

// else {
//     console.log("Person is talking normally");
// }



// HARD: Create 4 math functions, one called add() that adds 2 numbers, one called subtract() that subtracts 2 numbers, one called multiply() to multiply 2 numbers, and one called divide() to divide two numbers.

function add(){
    var add1 = parseInt(prompt("Enter number: "));
    var add2 = parseInt(prompt("Enter another number: "));
    sum = console.log(add1 + add2);
}
// add();  /** commented out to test the other functions, uncomment it to test */

function subtract(){
    var sub1 = parseInt(prompt("Enter number: "));
    var sub2 = parseInt(prompt("Enter another number: "));
    diff = console.log(sub1 - sub2);
}
// subtract();  /** commented out to test the other functions, uncomment it to test */

function multiply(){
    var mul1 = parseInt(prompt("Enter number: "));
    var mul2 = parseInt(prompt("Enter another number: "));
    prod = console.log(mul1 * mul2);
}
// multiply();  /** commented out to test the other functions, uncomment it to test */

function divide(){
    var div1 = parseInt(prompt("Enter number: "));
    var div2 = parseInt(prompt("Enter another number: "));
    quo = console.log(div1 / div2);
}
// divide();  /** commented out to test the other functions, uncomment it to test */



// VERY HARD: Create a simple calculator that prompts the user for a number, an operator (either +, -, * or /), and another number, and then uses the functions created in the hard challenge to output the value in sentence form. Example output: "3 + 4 = 7"

function calc() {
    var operator = prompt("Enter an operator (either +, -, *, /)");

    if (operator == "+") {
        var add1 = parseInt(prompt("Enter number: "));
        var add2 = parseInt(prompt("Enter another number: "));
        sum = add1 + add2;
        console.log(`${add1} + ${add2} = ${sum}`);
    }
    else if (operator == "-") {
        var sub1 = parseInt(prompt("Enter number: "));
        var sub2 = parseInt(prompt("Enter another number: "));
        diff = sub1 - sub2;
        console.log(`${sub1} - ${sub2} = ${diff}`);
    }
    else if (operator == "*") {
        var mul1 = parseInt(prompt("Enter number: "));
        var mul2 = parseInt(prompt("Enter another number: "));
        prod = mul1 * mul2;
        console.log(`${mul1} * ${mul2} = ${prod}`);
    }
    else if (operator == "/") {
        var div1 = parseInt(prompt("Enter number: "));
        var div2 = parseInt(prompt("Enter another number: "));
        quo = div1 / div2;
        console.log(`${div1} / ${div2} = ${quo}`);
    }
    else {
        console.log("Enter a valid operator.");
    }
}

calc();