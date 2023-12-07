// Given an array of integers, find the longest subarray where the absolute difference between any two elements is less than or equal to 1.

// Example
// a = [1, 1, 2, 2, 4, 4, 5, 5, 5]
//     There are two subarrays meeting the criterion: [1, 1, 2, 2] and [4, 4, 5, 5, 5]. The maximum length subarray
//     has 5 elements.

// Example 2
// a = [4, 6, 5, 3, 3, 1]
//     The longest continuous subarray is [4, 3, 3] with length 3.

function pickingNumbers(arr) {
    let max = 0;
    let count = 0;
    let prev = 0;
    let current = 0;
    let next = 0;
    for (let i = 0; i < arr.length; i++) {
        current = arr[i];
        prev = arr[i - 1];
        next = arr[i + 1];
        count = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] === current || arr[j] === current + 1) {
                count++;
            }
        }
        if (count > max) {
            max = count;
        }
    }
    return max;
}

console.log(pickingNumbers([4, 6, 5, 3, 3, 1]));
