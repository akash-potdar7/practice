/**
 *  Use linear search to find x from given matrix 2x2.
 */

 const findMax = (arr) => {
    if (!arr) return -1;
    if (arr.length == 0) return -1;

    // Bonus point: initialise dynamic initial max value.
    // The thing is arr[0] can be undefined. Check input array.
    // OR
    // Simply assign Integer.Min or Number.min
    let max = Number.MIN_VALUE;

    for (let i = 0; i < arr.length; i++) {
        const curr_arr = arr[i];
        if (!curr_arr) continue;
        if (curr_arr.length == 0) continue;

        for (let k = 0; k < curr_arr.length; k++) {
            const inner_curr = curr_arr[k];
            if (inner_curr > max) {
                max = inner_curr;
            }
        }
    }

    return max;
 }

 const arr = [[7, 89, 39, -98], [34, 4, 5, 23, 96]]; 
 // const arr = [undefined, [34, 4, 5, 23, 96]]; 
 const res = findMax(arr);
 console.log('Output:', res);