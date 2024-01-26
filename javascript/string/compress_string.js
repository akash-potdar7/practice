/**
 * ip: aabbbbcccccaaafff
 * op: 2a4b5c3a3f
 */

 const compressStr = str => {
    console.log('input:', str, str.length);
    let compressed = '';
    let count = 1;
    for (let i=0; i<str.length; i++) {
      let curr = str[i];
      let next = str[i+1]
      if (curr == next) {
         count++;
      } else {
         compressed += ((count > 1) ? count : '') + curr;
         count = 1;
      }
    }
    return compressed;
 }

 let res = compressStr('aabbbbcccccaaadeefff');
 console.log('Compressed string:', res);