const bestSum = (targetSum, numbers) => {
    if (targetSum == 0) return [];
    if (targetSum < 0) return null;
    let shosrtestCombination = null;
    for (let num of numbers) {
        const remainder = targetSum - num;
        const remainderCombination = bestSum(remainder, numbers);
        if (remainderCombination != null) {
            const combination = [...remainderCombination, num];
            if (
                shosrtestCombination == null ||
                combination.length < shosrtestCombination.length
            ) {
                shosrtestCombination = combination;
            }
        }
    }
    return shosrtestCombination;
};

const bestSumMemoized = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum == 0) return [];
    if (targetSum < 0) return null;
    let shosrtestCombination = null;
    for (let num of numbers) {
        const remainder = targetSum - num;
        const remainderCombination = bestSumMemoized(remainder, numbers, memo);
        if (remainderCombination != null) {
            const combination = [...remainderCombination, num];
            if (
                shosrtestCombination == null ||
                combination.length < shosrtestCombination.length
            ) {
                shosrtestCombination = combination;
            }
        }
    }
    memo[targetSum] = shosrtestCombination;
    return shosrtestCombination;
};

console.log(bestSumMemoized(7, [5, 3, 4, 7])); //[7]
console.log(bestSumMemoized(8, [2, 3, 5])); //[3, 5]
console.log(bestSumMemoized(8, [1, 4, 5])); //[4, 4]
console.log(bestSumMemoized(100, [1, 2, 5, 25])); //[25, 25, 25, 25]
