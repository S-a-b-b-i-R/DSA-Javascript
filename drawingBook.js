// A teacher asks the class to open their books to a page number. A student can either start turning pages from the front of the book or from the back of the book.
// They always turn pages one at a time. When they open the book, page  is always on the right side:
// When they flip page , they see pages  and . Each page except the last page will always be printed on both sides.
// The last page may only be printed on the front, given the length of the book. If the book is n pages long, and a student wants to turn to page p,
// what is the minimum number of pages to turn? They can start at the beginning or the end of the book.

// Given n and p, find and print the minimum number of pages that must be turned in order to arrive at page p.
// Function Description
// Complete the pageCount function in the editor below.
// pageCount has the following parameter(s):
// int n: the number of pages in the book
// int p: the page number to turn to

// Returns
// int: the minimum number of pages to turn

// Input Format
// The first line contains an integer n, the number of pages in the book.
// The second line contains an integer, p, the page to turn to.

// Constraints
// 1 <= n <= 10^5
// 1 <= p <= n

function pageCount(n, p) {
    var count = 0;
    var page = 1;
    while (page < p) {
        count++;
        page += 2;
    }
    if (n % 2 !== 0) {
        page = n - 1;
    } else {
        page = n;
    }
    var countTwo = 0;
    while (page > p) {
        countTwo++;
        page -= 2;
    }
    if (count < countTwo) {
        return count;
    } else {
        return countTwo;
    }
}

console.log(pageCount(5, 4));
