function squareDigits(num) {
    let temp
    let stringNum = num.toString()
    let newnum = ''
    console.stringNum

    for (let i = 0; i < stringNum.length; i++) {
        temp = parseInt(stringNum[i])
        newnum += (temp * temp)
    }
    return parseInt(newnum)
}