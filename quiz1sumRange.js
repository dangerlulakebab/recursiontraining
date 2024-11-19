// Question 1: Sum all numbers
// Write a function called sumRange. It will take a number and return the sum of all numbers from 1 up to the number passed in.

// Sample: sumRange(3) returns 6, since 1 + 2 + 3 = 6.

function sumRange(n, total = 0) {
    if (n <= 0) {
        return total
    }
  return sumRange(n - 1, total + n);
}


// Question 2: Power function
// Write a function called power which takes in a base and an exponent. If the exponent is 0, return 1.

// Sample:

// console.log(power(2, 4)); // 16
// console.log(power(2, 3)); // 8
// console.log(power(2, 2)); // 4 
// console.log(power(2, 1)); // 2
// console.log(power(2, 0)); //

function power(x, n) {
    if(n == 0)  return 1;
    return x * power(x, n - 1)
}


// Question 3: Calculate factorial
// Write a function that returns the factorial of a number. As a quick refresher, a factorial of a number is the result of that number multiplied by the number before it, and the number before that number, and so on, until you reach 1. The factorial of 1 is just 1.

// Sample:

// factorial(5); // 5 * 4 * 3 * 2 * 1 === 120


function factorial(x) {
    if(x == 1) return 1;
    return x * factorial(x - 1)
}




// Question 4: Check all values in an array
// Write a function called all which accepts an array and a callback and returns true if every value in the array returns true when passed as parameter to the callback function

// Sample:

// var allAreLessThanSeven = all([1,2,9], function(num){
// 	return num < 7;
// });

// console.log(allAreLessThanSeven); // false




function all(array, callback) {
    let copy = array.slice();

    if(copy.length === 0) return true;

    if(callback(copy[0])){
        copy.shift();
        return all(copy, callback)
    }else {
        return false
    }
}





// Question 5: Product of an array
// Write a function called productOfArray which takes in an array of numbers and returns the product of them all

// Sample:

// var six = productOfArray([1,2,3]) // 6
// var sixty = productOfArray([1,2,3,10]) // 60



function productOfArray(array) {
    if(array.length === 0) return 1;

    return array.shift() * productOfArray(array);
}




// Question 6: Search JS object
// Write a function called contains that searches for a value in a nested object. It returns true if the object contains that value.

// Sample:

var nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44,
                        something: 'foo2'
                    }
                }
            }
        }
    }
}

// let hasIt = contains(nestedObject, 44); // true
// let doesntHaveIt = contains(nestedObject, "foo"); // false


function contains(object, searchValue){
    if (typeof object !== 'object' || object === null) {
        return object === searchValue
    }

    for (const value of Object.values(object)) {
        if (contains(value, searchValue)) {
            return true
        }
    }
    return false
}










// 🟢 Level 1: Basic Recursion 
// Count Up Numbers
// Write a function that counts up from 1 to n.
// Example:


// countUp(5); 
// // Output: 1, 2, 3, 4,  5

function countUp(n) {
    if(n === 1) return [1];

    let array = countUp(n - 1)
    array.push(n)
    return array
}


// quiz 2 Power of a Number
// Write a recursive function to compute the power of a number:

// power(base, exponent)
// Example:

// power(2, 3); 
// // Output: 8 (because 2^3 = 2 * 2 * 2)


function powerTwo(x, n) {
    if (n === 0) return 1;

    return x * powerTwo(x, n - 1);
}

// quiz 3 Product of Numbers
// Write a recursive function that calculates the product of numbers in an array.
// Example:


// product([2, 3, 4]); 
// // Output: 24 (because 2 * 3 * 4 = 24)


function product(array) {
    if(array.length === 0) return 1;

    return array.shift() * product(array);
}




// 🟡 Level 2: Arrays and Strings
// Find the Length of an Array
// Write a recursive function to find the length of an array (without using .length).
// Example:


// length([1, 2, 3, 4]); 
// // Output: 4

function length(array) {
    if (array.length === 0) return 1;

    array.shift();
    return 1 + length(array)
}


// Write a recursive function called sumArray that takes an array of numbers and returns the sum of its elements.

// Sample Input:


// sumArray([1, 2, 3, 4]); // 10
// sumArray([10, 20, 30]); // 60
// Tip: Use array.shift() to process one element at a time.

function sumArray(array) {
    if(array.length === 0) return 1;

    
    return array.shift() + sumArray(array)
}



// Question 6 (🟠 Medium)
// Write a recursive function called reverseArray that takes an array and returns a new array with its elements in reverse order. Do not use reverse().

// Sample Input:

// reverseArray([1, 2, 3, 4]); // [4, 3, 2, 1]
// reverseArray(['a', 'b', 'c']); // ['c', 'b', 'a']
// Tip: Use array slicing (slice) and concatenate results recursively.


function reverseArray(array){
    if(array.length <= 1) return array

    const lastElement = array.pop();
    return [lastElement].concat(reverseArray(array));
}