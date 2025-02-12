/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = (nums) => {
	if (!nums || nums.length <= 0) return;
	let distinctMap = {};

	for (let i = 0; i < nums.length; i++) {
  	const curr = nums[i];
    if (!distinctMap[curr]) {
    	distinctMap[curr] = curr;
    }
  }

	return !(nums.length == Object.keys(distinctMap).length); 
};

/**
inputs: 
[1,2,3,1]
[1,1,1,3,3,4,3,2,4,2]
[1,2,3,4]
**/


const res = containsDuplicate([9,0 , 0,4,2]);
console.log(`Result:`, res);
