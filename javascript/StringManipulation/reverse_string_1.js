/**
 * Reverse a string
 * ip: hello from the other side!
 * op: !edis rehto eht morf olleh
 */

const reverser_1 = str => {
    if (!str) {
        throw new Error('String is undefined')
    }
    let res = '';
    for (let i = str.length -1; i >= 0; i--) {
        res += str[i];
    }
    return res;
}

console.log('Reverse string:', reverser_1('hello from the other side!'));