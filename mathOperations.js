// 8. Create a module named mathOperations.js with functions for basic math
// operations(add, subtract, multiply, and divide).Import these functions
// into a new file app.js, and use them to perform calculations.Log each result.


export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

export function multiply(a, b) {
    return a * b;
}

export function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero.");
    }
    return a / b;
}

