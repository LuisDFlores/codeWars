// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1 ^ 2 + 2 ^ 2 + 2 ^ 2 = 9.

function squareSum(numbers) {
    let sum = 0

    if (numbers.length > 0) {
        numbers = numbers.toString().split(",")
        for (let i = 0; i < numbers.length; i++) {
            numbers[i] = parseInt(numbers[i])
            numbers[i] = numbers[i] * numbers[i]
            sum += numbers[i]
        }
    }
    return sum
}