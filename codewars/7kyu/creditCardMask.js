// return masked string
function maskify(cc) {

    let str = ''
    let maskedarray = ''

    if (cc.length <= 4) {
        return cc
    }

    str = cc.substr(cc.length - 4, cc.length)

    for (let i = 0; i < cc.length - 4; i++) {
        maskedarray += '#'
    }

    return (maskedarray + str)

    return (str + '####')

}