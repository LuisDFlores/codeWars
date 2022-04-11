function descendingOrder(n) {
    //...

    let array = n.toString().split("")
    array.sort(function (a, b) { return b - a });
    array = array.join('')
    array = parseInt(array)
    return array
}