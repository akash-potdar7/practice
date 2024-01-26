const isUpperCase = char => char && char.toLowerCase() !== char;

// leetcode 1295
const getDigits = (num = 0) => {
    num = Math.abs(num);
    return Math.floor(Math.log10(num)) + 1;
}

// leetcode 1295
const getDigitsV2 = (n = 0) => {
    let count = 0;
    while (n > 0) {
        n = n/10;
        count++;
    }
    return count;
}

module.exports = { isUpperCase, getDigits, getDigitsV2 };