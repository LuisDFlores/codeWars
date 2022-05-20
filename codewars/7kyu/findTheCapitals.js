var capitals = function (word) {
    let list = []
    for (let i = 0; i < word.length; i++) {
        if (word[i].toUpperCase() === word[i]) {
            list.push(i);
        }
        else {
            continue
        }
    }
    return list
};