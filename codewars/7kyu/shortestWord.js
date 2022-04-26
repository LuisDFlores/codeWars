function findShort(s) {
    let words = s.split(" ")
    let shortest = words[0]

    for (let i = 0; i < words.length; i++) {
        if (words[i].length < shortest.length) {
            shortest = words[i]
        }
    }
    return shortest.length
}