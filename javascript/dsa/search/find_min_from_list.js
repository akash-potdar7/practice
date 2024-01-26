/**
 * Use linear search to find min element from the given list.
 */

const findMin = (arr) => {
    if (!arr) return -1;
    if (arr.length == 0) return -1;

    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        const curr = arr[i];
        if (curr < min) {
            min = curr;
        }
    }
    return min;
}

 const res = findMin([3, 4, 5, 18, 12, 7, 9]);
 console.log('Output', res);