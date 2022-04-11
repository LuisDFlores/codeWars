function findOdd(A) {
    //happy coding!
    let cnt = []
    let count = 0
    let temp = 0


    for (let i = 0; i < A.length; i++) {
        temp = A[i]
        count = 0
        for (let j = 0; j < A.length; j++) {
            if (temp == A[j]) {
                count++
            }

        }
        if (count % 2 != 0) {
            return A[i]
        }
    }

}