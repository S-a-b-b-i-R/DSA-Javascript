// Given an array of stick lengths, use 3 of them to construct a non-degenerate triange with the maximum possible perimeter. Return an array of the lengths of its sides as 3 integers in non-decreasing order.
// If there are several valid triangles having the maximum perimeter:
// Choose the one with the longest maximum side.
// If more than one has that maximum, choose from them the one with the longest minimum side.
// If more than one has that maximum as well, print any one them.
// If no non-degenerate triangle exists, return [-1].

// Example
// sticks = [1, 2, 3, 4, 5, 10]
// The triplet (1, 2, 3) will not form a triangle. Neither will (4, 5, 10) or (2, 3, 5), so the problem is reduced to (2, 3, 4) and (3, 4, 5). The longer perimeter is 3 + 4 + 5 = 12.

// Function Description
// Complete the maximumPerimeterTriangle function in the editor below.
// maximumPerimeterTriangle has the following parameter(s):
// int sticks[n]: the lengths of sticks available

// Returns
// int[3] or int[1]: the side lengths of the chosen triangle in non-decreasing order or -1

// Input Format
// The first line contains single integer n, the size of array sticks.
// The second line contains n space-separated integers, each an stick[i], the lengths of sticks available.

// Constraints
// 3 <= n <= 50
// 1 <= sticks[i] <= 10^9

function maximumPerimeterTriangle(sticks) {
    sticks.sort((a, b) => a - b);
    let result = [-1];
    for (let i = 0; i < sticks.length - 2; i++) {
        if (sticks[i] + sticks[i + 1] > sticks[i + 2]) {
            result = [sticks[i], sticks[i + 1], sticks[i + 2]];
        }
    }
    return result;
}

console.log(maximumPerimeterTriangle([1, 2, 3, 4, 5, 10]));
