// Kids drink toddy.
// Teens drink coke.
// Young adults drink beer.
// Adults drink whisky.
// Make a function that receive age, and return what they drink.

//     Rules:

// Children under 14 old.
// Teens under 18 old.
// Young under 21 old.
// Adults have 21 or more.
//     Examples: (Input-- > Output)

// 13 -- > "drink toddy"
// 17 -- > "drink coke"
// 18 -- > "drink beer"
// 20 -- > "drink beer"
// 30 -- > "drink whisky"


function peopleWithAgeDrink(old) {
    if (old <= 13) {
        console.log(old)
        return "drink toddy"
    }
    if (old > 13 && old < 18) {
        console.log(old)
        return "drink coke"
    }
    if (old < 21 && old > 17) {
        console.log(old)
        return "drink beer"
    }
    if (old >= 21) {
        console.log(old)
        return "drink whisky"
    }
};