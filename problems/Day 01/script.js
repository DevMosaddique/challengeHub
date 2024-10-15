/* 
 Problem: Sum of Digits
   -> Write a JavaScript function that takes a non-negative integer as input and returns the sum of its digits.
*/

function sumDigits(num) {
    let numString = num.toString(); // Convert number to string
    let sum = 0; // Initialize sum

    for (let i = 0; i < numString.length; i++) {
        sum += parseInt(numString[i]);
        // Add digit to sum[string is converted back to number by parseInt]
    }
    
    return sum; // Return total sum
}

console.log(sumDigits(1535)); // Output: 14



