function pigIt(str) {
    
    let newStr = str.split(" ")
    let strAdd = "ay"
    let check = ['!', '?', '.']
    for (let i = 0; i < newStr.length; i++) {
        if (newStr[i].includes('!') || newStr[i].includes('?')) {
            continue
        }
        else {
            let temp = newStr[i].substring(0, 1)
            newStr[i] = newStr[i].substring(1) + temp + strAdd
        }
    }
    
    newStr = newStr.join(" ")
    return newStr
}