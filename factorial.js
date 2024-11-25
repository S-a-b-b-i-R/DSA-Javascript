function factorial(n) {
    if (n === 0) {
        return 1;
    } else if (n >= 1) {
        return n * factorial(n - 1);
    }
}
// console.time();
// console.log(dpMFib(4));
// console.timeEnd();
// console.log(dpFib(30));
// console.log(dpMFib(30));

function fibonnaci(n) {
    if (n <= 2) {
        return 1;
    } else {
        return fibonnaci(n - 1) + fibonnaci(n - 2);

    }
}

//dynamic programming using memoization
// starting from 0 index
function dpMFib(n, memo = {}) {
    if (n <= 2) {
        return 1;
    }
    if (memo[n]) {
        return memo[n];
    }
    memo[n] = dpMFib(n - 1, memo) + dpMFib(n - 2, memo);
    //   console.log(memo);
    return memo[n];
}

//dynamic programming function bottom up approach
function dpFib(n) {
    let bottomUp = [];
    bottomUp[1] = 1;
    bottomUp[2] = 1;
    for (let i = 3; i <= n; i++) {
        bottomUp[i] = bottomUp[i - 1] + bottomUp[i - 2];
    }
    return bottomUp[n];
}

//sum of natural numbers
function recursiveSum(num) {
    if (num <= 1) return num;
    return num + recursiveSum(num - 1);
}
console.time();
console.log(recursiveSum(100));
console.timeEnd();
