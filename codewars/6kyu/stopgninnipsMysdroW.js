function spinWords(string) {

    let str = string.split(' ')

    for (let i = 0; i < str.length; i++) {
        if (str[i].length > 4) {
            str[i] = str[i].split("").reverse().join("")
        }
    }


    str = str.join(" ")

    return str


}