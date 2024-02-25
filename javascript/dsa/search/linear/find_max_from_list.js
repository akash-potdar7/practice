/**
 * Use linear search to max element from the given list.
 */

const findMax = (arr) => {
    if (!arr) return -1;
    if (arr.length == 0) return -1;

    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        const curr = arr[i];
        if (curr > max) {
            max = curr;
        }
    }
    return max;
}

 const res = findMax([3, 4, 5, 18, 12, 7, 9]);
 console.log('Output', res);