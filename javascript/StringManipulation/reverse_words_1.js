/**
 * Reverse only words in a sentence.
 * ip: This is my world.
 * op: world my is This.
 */

const reverseWords = sentence => {
    if (!sentence || !(sentence.length > 0)) {
        throw new Error('Invalid input: sentence is either null or blank');
    }
    const splits = sentence.split(' ');    
    let res = splits[splits.length-1];
    for (let i=splits.length-1; i >= 0; i--) {
        res += ' ' + splits[i]; 
    }
    return res;
}

const res = reverseWords('This is my world');
console.log('Output:', res);