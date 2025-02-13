const map = {
	"{": "}",
  "[": "]",
  "(": ")"
};

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(str) {
    let res = false;
    for (let i = 0; i < str.length; i += 2) {
    	const curr = str[i];
      const next = str[i+1];
      const match = map[curr];
      if (next == match) {
      	res = true;
        continue;
      }
    }
    return res;
};


const i1 = "{}"; // true
const i2 = "()[]{}"; // true
const i3 = "(]"; // false
const i4 = "([])"; // false

console.clear();
const res = isValid(i3);
console.log(`Result: ${res}`);
