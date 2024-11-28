const fib = (n, memo = {}) => {
    if (memo[n]) return memo[n];
    if (n <= 2) return 1;

    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
    return memo[n];

    // if (n <= 2) return 1;
    // return fib(n - 1) + fib(n - 2);
};

console.log(fib(50));
//console.log(fib(7));
//console.log(fib(50));
