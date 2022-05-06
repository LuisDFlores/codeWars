function sumTwoSmallestNumbers(numbers) {
    numbers.sort(function (a, b) {
        return a - b;
    });
    let sum = numbers[0] + numbers[1]
    return sum
}