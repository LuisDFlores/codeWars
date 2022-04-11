function solution(number) {
    let sum = 0
    let i = 1
    for (i = 0; i < number; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            sum = sum + i
        }
    }

    if (sum > 0) {
        return sum
    }
    else {
        return 0
    }

}