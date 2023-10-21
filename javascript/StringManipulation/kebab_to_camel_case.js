/**
 * ip: this-is-an-example
 * op: thisIsAnExample
 */

 const kebabToCamel = str => {
    if (!str) throw new Error('Invalid input');

    const splits = str.split('-');
    for (let i=0; i<splits.length; i++) {
        let curr = splits[i];
        splits[i] = curr[0].toUpperCase() + curr.substring(1);
    }
    return splits.join('');
 }

 const res = kebabToCamel('this-is-an-example');
 console.log('Output:', res);