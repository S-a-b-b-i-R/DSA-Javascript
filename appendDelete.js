// You have two strings of lowercase English letters. You can perform two types of operations on the first string:
// 1. Append a lowercase English letter to the end of the string.
// 2. Delete the last character of the string. Performing this operation on an empty string results in an empty string.
// Given an integer, k, and two strings, s and t, determine whether or not you can convert s to t by performing exactly k of the above operations on s. If it's possible, print Yes. Otherwise, print No.

// Example
// s = [a, b, c]
// t = [d, e, f]
// k = 6
// To convert s to t, we first delete all of the characters in 3 moves. Next we add each of the characters of t in order. On the 6th move, you will have the matching string. Return Yes.
// If there were more moves available, they could have been eliminated by performing multiple deletions on an empty string. If there were fewer than 6 moves, we would not have succeeded in creating the new string.

// Function Description
// Complete the appendAndDelete function in the editor below. It should return a string, either Yes or No.
// appendAndDelete has the following parameter(s):
// s: the initial string
// t: the desired string
// k: an integer that represents the number of operations

// Returns
// string: either Yes or No

// Input Format
// The first line contains a string s, the initial string.
// The second line contains a string t, the desired final string.
// The third line contains an integer k, the number of operations.

// Constraints
// 1 <= |s| <= 100
// 1 <= |t| <= 100
// 1 <= k <= 100
// s and t consist of lowercase English alphabetic letters, ascii[a-z].

// Sample Input 0
// hackerhappy
// hackerrank
// 9

// Sample Output 0
// Yes

// Explanation 0
// We perform 5 delete operations to reduce string s to hacker. Next, we perform 4 append operations (i.e., r, a, n, and k), to get hackerrank. Because we were able to convert s to t by performing exactly k = 9 operations, we return Yes.

function appendAndDelete(s, t, k) {
    if (s === t) {
        return "Yes";
    }

    let count = 0;
    let i = 0;
    let j = 0;
    while (s[i] === t[j]) {
        i++;
        j++;
    }
    count = s.length - i + t.length - j;
    if (count <= k && (count - k) % 2 === 0) {
        return "Yes";
    } else if (s.length + t.length < k) {
        return "Yes";
    } else {
        return "No";
    }
}

console.log(appendAndDelete("aba", "aba", 7));
