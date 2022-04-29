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