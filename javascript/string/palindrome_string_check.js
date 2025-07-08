// String: Palindrone check

const str = 'abba';
const str1 = 'abcdcba';
const str2 = 'malayalam';
const str3 = "aakash"

// Approaches
// https://www.geeksforgeeks.org/dsa/palindrome-string/

// 1. Two pointers - one at the start and second at the end of the string.
// 2. Reverse the string and perform equals check on input and reversed strings
// 3. Two pointers but recursion
// 4. Iterate half string but check s[i] and s[length - i - 1]

// Two pointers method
const isPalindrome = s => {
  console.log("Input string:", s);
  if (!s || s.length < 2) {
    return false;
  }

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    
    if (s[left] !== s[right]) {
        return false;
    }
    
    left++;
    right--;

  }

  return true;
};

const res = isPalindrome(str3);
console.log(`${str3} is a ${res ? 'Palindrome' : 'NOT a Palindrome'}`);
