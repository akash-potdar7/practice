/**
 * https://leetcode.com/problems/find-numbers-with-even-number-of-digits/description/
 * 
 * Given an array nums of integers, return how many of them contain an even number of digits.
 * 
 * input: nums = [12, 345, 2, 6, 7896]
 * output: 2
 * 
 * 12 contains 2 digits -> even,
 * 7896 contains 4 digits -> even,
 * rest other numbers contain odd digits.
 * Hence answer is 2.
 * 
 * Algo:
 * - Use linear search
 * - For each, find number of digits, if even increment count
 * - Bonus: Find digits in number is something one doesn't know how to programatically get.
 */

const { getDigits } = require('../../Utility/utility');

const findEvenDigitNumbers = arr => {
    if (!arr) return -1;
    if (arr.length == 0) return -1;

    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        const curr = arr[i];
        const digits = getDigits(curr);
        if (digits % 2 == 0) count++;
    }

    return count;
}

const nums = [12, 345, 2, 6, 7896, -34]
const res = findEvenDigitNumbers(nums);
console.log('Output:', res);