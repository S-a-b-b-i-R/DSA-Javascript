const howSum = (target, arr) => {
    if (target == 0) return [];
    if (target < 0) return null;

    for (let num of arr) {
        const remainder = target - num;
        const remainderResult = howSum(remainder, arr);
        if (remainderResult != null) {
            return [...remainderResult, num];
        }
    }
    return null;
};

const howSumMemoized = (target, arr, memo = {}) => {
    if (target in memo) return memo[target];
    if (target == 0) return [];
    if (target < 0) return null;

    for (let num of arr) {
        const remainder = target - num;
        const remainderResult = howSumMemoized(remainder, arr, memo);
        if (remainderResult != null) {
            memo[target] = [...remainderResult, num];
            return memo[target];
        }
    }
    memo[target] = null;
    return null;
};

console.log(howSumMemoized(300, [7, 14]));
