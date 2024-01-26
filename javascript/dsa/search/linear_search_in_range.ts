/**
 * Q: Given an array, find an element.
 * 
 * Algo:
 *  > if array len is 0, return -1
 *  > iterate from given range.
 *  > return the index if element found.
 *  > return MAX if not found.
 * 
 * Time complexity:
 *  Best case : O(1)
 *  Worst case: O(n)
 *  Time Complexity == array len
 *  
 */

const linearSearchInRange = (arr, start, end, n) => {
    if (!arr || !n) return -2;
    if (arr.length == 0) return -3;
    if (end > arr.length) return -4;

    for (let i = start; i <= end; i++) {
        let curr = arr[i];
        if (curr == n) {
            return i;
        }
    }
    return -9;
}

const arr1 = [4, 5, 9, 6, 657, 234, 768, 2, 453, 1, 3 , 5, 8, 3, 8, 3];
const result = linearSearchInRange(arr1, 1, 8, 1);
console.log('Output:', result);