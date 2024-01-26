/**
 * ip: thisIsACamelCasedString
 * op: this Is A Camel Cased String
 */

const { isUpperCase } = require('../Utility/utility');

const breakCamelCase = str => {
    let res = '';
    for (let i=0; i<str.length; i++) {
        let curr = str[i];
        if (i > 0 && isUpperCase(curr)) {
            res += ` ${curr}`;
        } else {
            res += curr;
        }
    }
    return res;
}
const str = 'thisIsACamelCasedString';
const b = str.split('').reduce((res, curr, i) => i > 0 && isUpperCase(curr) ? res + ` ${curr}` : res + curr, '');
console.log('Output using Array.reduce fn', b);

const res = breakCamelCase('thisIsACamelCasedString');
console.log('Output:', res);