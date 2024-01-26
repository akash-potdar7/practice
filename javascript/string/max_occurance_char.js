const charOcc = str => {
    const mp = {};
    for (let i=0; i<str.length; i++) {
        const s = str[i];
        (!mp[s]) ? (mp[s] = 1) : (mp[s]++);
    }
    return mp;
}

const maxChar = charMap => {
    const keys = Object.keys(charMap);
    let max = charMap[keys[0]];
    let maxChar = '';
    for (let key of keys) {
        if (charMap[key] >= max) {
            max = charMap[key];
            maxChar = key;
        }
    }
    return { char: maxChar, occ: max };
}

let charMap = charOcc('99javascript99');
let res = maxChar(charMap);
console.log('Max char occ: ', res);