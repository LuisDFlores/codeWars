function solution(nums) {
    let empty = []
    if (nums == undefined) {
        return empty
    }
    else {
        nums = nums.sort(function (a, b) {
            return a - b;
        });
    }
    return nums
}