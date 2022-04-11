function disemvowel(str) {
    let newstr = ''

    newstr = str.replace(/[aeiouAEIOU]/g, '')

    return newstr;
}