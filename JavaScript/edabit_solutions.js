// Create a function that takes two numbers as arguments and return their sum.

function addition(a, b) {
    return a + b;
}

console.log(addition(2, 3), 5);
console.log(addition(-3, -6), -9);
console.log(addition(7, 3), 10);
console.log(addition(88, 2), 90);

// Create a function that takes voltage and current and returns the calculated power.

function circuitPower(voltage, current) {
    return voltage * current;
}

console.log(circuitPower(110, 3), 330)
console.log(circuitPower(230, 10), 2300)
console.log(circuitPower(480, 20), 9600)

// Create a function that finds the maximum range of a triangle's third edge, where the side lengths are all integers.

function nextEdge(side1, side2) {
    return (side1 + side2) -1;
}

console.log(nextEdge(5, 4), 8)
console.log(nextEdge(8, 3), 10)
console.log(nextEdge(7, 9), 15)
console.log(nextEdge(10, 4), 13)
console.log(nextEdge(7, 2), 8)

// Create a function that takes a number as an argument, increments the number by +1 and returns the result.

function addition(num) {
    return num + 1;
}

console.log(addition(2), 3, "2 plus 1 equals 3.")
console.log(addition(-9), -8, "-8 plus 1 equals -9.")
console.log(addition(0), 1, "0 plus 1 equals 1.")
console.log(addition(999), 1000, "999 plus 1 equals 1000.")
console.log(addition(73), 74, "73 plus 1 equals 74.")