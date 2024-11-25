const sumOfNaturalNumber = (num) => {
    if (num <= 1) return num;
    return sumOfNaturalNumber(num - 1) + num;
};

console.log(sumOfNaturalNumber(10));
