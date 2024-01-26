/**
 * Number of substrings of one string present in other.
 * ip: s1=aab, s2=aaaab
 * op: 6
 * 
 * substrings -> a aa aab a ab b
 */

 const countSubstrings = (subs, str) => {
    let count = 0;
    for (let i=0; i<subs.length; i++) {
        for (let j=i+1; j<=subs.length; j++) {
            const substring = subs.slice(i, j);
            str.indexOf(substring) != -1 && count++;
        }
    }
    return count;
 };

 const s1 = 'aab';
 const s2 = 'aaaab';
 const res = countSubstrings(s1, s2);
 console.log(`Output: ${res}`);