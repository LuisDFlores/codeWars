// Write a function which calculates the average of the numbers in a given list.

//     Note: Empty arrays should return 0.

function find_average(array) {
    if (array.length === 0) {
        return 0;
    }
    let average = 0;
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i]
    }
    average = sum / array.length
    return average;
}

