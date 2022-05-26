// Welcome.In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

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