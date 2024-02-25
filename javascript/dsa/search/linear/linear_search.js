/**
 * Q: Given an array, find an element.
 * 
 * Algo:
 *  > if array len is 0, return -1
 *  > return the index if element found.
 *  > return MAX if not found.
 * 
 * Time complexity:
 *  Best case : O(1)
 *  Worst case: O(n)
 *  Time Complexity == array len
 *  
 */

const linearSearch = (arr, n) => {
    if (!arr || !n) return -2;
    if (arr.length == 0) return -3;

    for (let i=0; i< arr.length; i++) {
        let curr = arr[i];
        if (curr == n) {
            return i;
        }
    }
    return Number.MAX_VALUE;
}

const arr = [4, 5, 2, 6, 657, 234, 768, 2, 453, 1, 3 , 5, 8, 3, 8, 3];
const res = linearSearch(arr, 8);
console.log('Output:', res);