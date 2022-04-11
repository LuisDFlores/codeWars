function createPhoneNumber(numbers) {
    let phonestr = ''
    phonestr += '('


    for (let i = 0; i < numbers.length; i++) {

        if (i == 0) {
            phonestr += numbers[i]
        }
        else if (i > 0 && i < 3) {
            phonestr += numbers[i]

        }
        else if (i == 3) {
            phonestr += ')'
            phonestr = phonestr + ' '
            phonestr += numbers[i]


        }
        else if (i > 3 && i < 6) {
            phonestr += numbers[i]
        }
        else if (i === 6) {
            phonestr += '-'
            phonestr += numbers[i]
        }
        else if (i > 6) {
            phonestr += numbers[i]
        }
        else {

        }
    }

    return phonestr
}