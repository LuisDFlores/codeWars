function repeatStr(n, s) {
    let rString = s
    for (let i = 0; i < n - 1; i++) {
        rString += s
    }
    return rString;
}