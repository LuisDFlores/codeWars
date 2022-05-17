function getSum(a, b) {
    let greater
    let lower
    if (a > b) {
        greater = a
        lower = b
    }
    else if (a < b) {
        greater = b
        lower = a
    }

    let sum = 0;
    if (a == b) {
        return a
    }
    else {
        for (let i = lower; i <= greater; i++) {
            sum += i
        }
    }
    return sum
}