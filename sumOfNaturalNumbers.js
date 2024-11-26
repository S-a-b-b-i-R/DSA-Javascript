const sumOfNaturalNumber = (num) => {
    if (num <= 1) return num;
    return sumOfNaturalNumber(num - 1) + num;
};

//console.log(sumOfNaturalNumber(10));

const reverseStringRecursively = (str) => {
    if (str == "") {
        return "";
    }
    return reverseStringRecursively(str.substring(1)) + str.charAt(0);
};

console.log(reverseStringRecursively("Sabbir"));
