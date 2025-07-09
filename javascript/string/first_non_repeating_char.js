// First non repeating char in a string

const str = "aabbccdd";
const str1 = "racecar";

const nonRepeatingChar = s => {

    const charCount = {};
    
    // First loop to store count
    for (let c of s) {
        charCount[c] = (charCount[c] || 0) + 1;
    }
    
    // Check through s which is the char with count 1
    for (let c of s) {
        if (charCount[c] === 1) {
            return c;
        }
    }
    return '$';
};


const res = nonRepeatingChar(str);
console.log("Result: ", res);
