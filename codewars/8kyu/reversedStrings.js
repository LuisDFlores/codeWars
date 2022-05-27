// Complete the solution so that it reverses the string passed into it.

// 'world'  => 'dlrow'
// 'word'   => 'drow'

function solution(str) {

    //str.reverse()???
    let rStr = ''

    for (let i = str.length - 1; i >= 0; i--) {
        rStr += (str[i])
    }
    console.log(rStr)
    return rStr
}