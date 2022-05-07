function dontGiveMeFive(start, end) {
    let count = 0
    let temp = ""

    for (let i = start; i <= end; i++) {
        let temp = i.toString()
        if (temp.includes(5)) {
            continue
        }
        else {
            count++
        }
    }
    return count;
}