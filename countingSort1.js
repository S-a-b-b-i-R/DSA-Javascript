// Another sorting method, the counting sort, does not require comparison. Instead, you create an integer array whose index range covers the entire range of values in your array to sort. Each time a value occurs in the original array, you increment the counter at that index. At the end, run through your counting array, printing the value of each non-zero valued index that number of times.

// For example, consider an array arr = [1, 1, 3, 2, 1]. All of the values are in the range [0...3], so create an array of zeroes, result = [0, 0, 0, 0]. The results of each iteration follow:

// i	arr[i]	result
// 0	1	[0, 1, 0, 0]
// 1	1	[0, 2, 0, 0]
// 2	3	[0, 2, 0, 1]
// 3	2	[0, 2, 1, 1]
// 4	1	[0, 3, 1, 1]

// Now we can print the sorted array: sorted = [1, 1, 1, 2, 3].

// Note
// For this exercise, always return a frequency array with 100 elements. The example above shows only the first 4 elements, the remainder being zeros.

// Challenge
// Given a list of integers, count and return the number of times each value appears as an array of integers.

// Function Description
// Complete the countingSort function in the editor below.

// countingSort has the following parameter(s):

// arr[n]: an array of integers

// Returns

// int[100]: a frequency array

// Input Format
// The first line contains an integer n, the number of items in arr.
// Each of the next n lines contains an integer arr[i] where 0 <= i < n.

// Constraints
// 100 <= n <= 10^6
// 0 <= arr[i] < 100

function countingSort(arr) {
    let result = [];
    for (let i = 0; i < 100; i++) {
        result.push(0);
    }
    for (let i = 0; i < arr.length; i++) {
        result[arr[i]]++;
    }
    return result;
}
