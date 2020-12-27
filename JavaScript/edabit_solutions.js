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

// Write a function that takes an integer minutes and converts it to seconds.

function convert(minutes) {
    return minutes * 60;
}

console.log(convert(6), 360)
console.log(convert(4), 240)
console.log(convert(8), 480)
console.log(convert(60), 3600)

// Create a function that takes length and width and finds the perimeter of a rectangle.

function findPerimeter(length, width) {
    return (length * 2) + (width * 2);
}

console.log(findPerimeter(6, 7), 26)
console.log(findPerimeter(20, 10), 60)
console.log(findPerimeter(2, 9), 22)

// Write a function that takes the base and height of a triangle and return its area.

function triArea(base, height) {
    return (base * height) / 2;
}

console.log(triArea(3, 2), 3)
console.log(triArea(5, 4), 10)
console.log(triArea(10, 10), 50)
console.log(triArea(0, 60), 0)
console.log(triArea(12, 11), 66)

// You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value.

function points(twoPointers, threePointers) {
    return (twoPointers * 2) + (threePointers * 3);
}

console.log(points(1, 1), 5)
console.log(points(1, 2), 8)
console.log(points(2, 1), 7)
console.log(points(2, 2), 10)
console.log(points(69, 420), 1398)

// Create a function that returns true when num1 is equal to num2; otherwise return false.


function isSameNum(num1, num2) {
    return num1 === num2;
}

console.log(isSameNum(4, 8), false)
console.log(isSameNum(2, 2), true)
console.log(isSameNum(0, 6), false)
console.log(isSameNum(2, "2"), false)

// Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.

function squared(b) {
    return (b * b);
}

console.log(squared(10), 100, "Expected 100")
console.log(squared(69), 4761, "Expected 4761")
console.log(squared(666), 443556, "Expected 443556")
console.log(squared(-21), 441, "Expected 441")
console.log(squared(21), 441, "Expected 441")

// Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.

function lessThanOrEqualToZero(num) {
    return num <= 0;
}

console.log(lessThanOrEqualToZero(5), false)
console.log(lessThanOrEqualToZero(0), true)
console.log(lessThanOrEqualToZero(-5), true)



