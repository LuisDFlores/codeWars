function likes(names) {


    if (names.length == 1) {
        return `${names[0]} likes this`
        console.log(`${names[1]} likes this`)
    }
    else if (names.length == 2) {
        return `${names[0]} and ${names[1]} like this`
        console.log(`${names[0]} ${names[1]} likes this`)
    }
    else if (names.length == 3) {
        return `${names[0]}, ${names[1]} and ${names[2]} like this`
        //  console.log(`${names[0} ${names[1]} ${names[2]} likes this`)
    }
    else if (names.length > 3) {
        return `${names[0]}, ${names[1]} and ${(names.length - 2)} others like this`
        // console.log(`${names[0]} and ${names[1]} and ${(names.length-2)} others like this`)
    }
    else {
        //console.log( 'no one likes this')
        return 'no one likes this'
    }

}