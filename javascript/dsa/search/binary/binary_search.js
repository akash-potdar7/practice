/**
 * given a sorted(asc) array find x
 * 
 * Using binary search. 
 * Uses start, end and middle index.
 * 
 */

const getMid = (s, e) => {
    return Math.floor((s + e) / 2);
}

const binarySearch = (arr, x) => {
    if (!arr || !x) return -1;
    if (arr.length == 0) return -1;

    let start = 0, end = arr.length - 1;

    const isAscending = arr[start] < arr[end]; 

    while (start <= end) {
        const mid = getMid(start, end);
        console.log(`laka mid => index = ${mid}, val = ${arr[mid]}`);

        if (x == arr[mid]) {
            console.log('laka found | mid equals x');
            return mid;
        }
        if (x < arr[mid]) {
            console.log('laka continue search | mid is less than x, search in lower range');
            if (isAscending) {
                end = mid - 1;
            }
            else {
                start = mid + 1;
            }
        } else {
            console.log('laka continue search | mid is greater than x, search in higher range');
            if (isAscending) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }

    }

    return -1;
}

const arr = [2, 4, 7, 8, 11, 13, 14, 16, 19, 22];
const targetEl = 4;
const res = binarySearch(arr, targetEl);

if (res !== -1) {
    console.log(`Item: ${targetEl} found at index ${res}`);
} else {
    console.log(`Item: ${targetEl} not found`);
}
