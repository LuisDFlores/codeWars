var isSquare = function (n) {

    let check = Math.sqrt(n)
    check = Math.floor(check)

    if (check * check == n) {
        return true
    }
    else
        return false
    // fix me
}