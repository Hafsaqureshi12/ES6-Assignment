// 8. Create a module named mathOperations.js with functions for basic math
// operations(add, subtract, multiply, and divide).Import these functions
// into a new file app.js, and use them to perform calculations.Log each result.


import { add, subtract, multiply, divide } from './mathOperations.js';

console.log(`5 + 3 = ${add(5, 3)}`);
console.log(`10 - 4 = ${subtract(10, 4)}`);
console.log(`6 * 7 = ${multiply(6, 7)}`);

try {
    console.log(`20 / 4 = ${divide(20, 4)}`);
    console.log(`20 / 0 = ${divide(20, 0)}`); 
} catch (error) {
    console.log(error.message); 
}



