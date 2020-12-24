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

// Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.

function cubes(a, b) {
    return (a ** 3);
}

console.log(cubes(2), 8)
console.log(cubes(3), 27)
console.log(cubes(4), 64)
console.log(cubes(5), 125)
console.log(cubes(10), 1000)

// Write a function that converts hours into seconds.

function howManySeconds(hours) {
    return (hours * 60) * 60;
}

console.log(howManySeconds(2), 7200)
console.log(howManySeconds(10), 36000)
console.log(howManySeconds(24), 86400)
console.log(howManySeconds(36), 129600)

// Create a function that takes an array containing only numbers and return the first element.

function getFirstValue(arr) {
    return arr[0];
}

console.log(getFirstValue([1, 2, 3]), 1)
console.log(getFirstValue([80, 5, 100]), 80)
console.log(getFirstValue([-500, 0, 50]), -500)
console.log(getFirstValue([5, 2, 3]), 5)
console.log(getFirstValue([75675, 5, 100]), 75675)
console.log(getFirstValue([-52320, 0, 50]), -52320)

// This is an introduction to how challenges on Edabit work. In the Code tab above you'll see a starter function that looks like this:
//
// function hello() {
//
// }
// All you have to do is type return "hello edabit.com" between the curly braces { } and then click the Check button. If you did this correctly, the button will turn red and say SUBMIT FINAL. Click it and see what happens..

function hello() {
    return "hello" + " edabit.com"
}

console.log(hello(), "hello edabit.com", "Did you *return* the result?")
