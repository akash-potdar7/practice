/**
 * https://leetcode.com/problems/richest-customer-wealth/description/
 * 
 * You are given an m x n integer grid accounts where accounts[i][j]
 * is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank.
 * Return the wealth that the richest customer has.
 * 
 * A customer's wealth is the amount of money they have in all their bank accounts.
 * The richest customer is the customer that has the maximum wealth.
 * 
 * Input: accounts = [[1,2,3],[3,2,1]]
 * Output: 6
 * 
 * Explanation:
 * ith -> customer
 * jth -> money for ith customer in bank
 * 
 * i = 0 customer has 3 bank accounts (1, 2, 3)
 * Total: 1+2+3 = 6
 * 
 * i = 1 customer has 3 bank accounts (3, 2, 1)
 * Total: 3+2+1 = 6
 */

const findMaxSumOfElements = accs => {
    if (!accs) return -1;
    if (accs.length == 0) return -1;

    let sum = 0;
    let maxSumCustomer = -1;
    for (let i = 0; i < accs.length; i++) {
        const acc = accs[i];

        let accSum = 0;
        for (let j = 0; j < acc.length; j++) {
            let accVal = acc[j];
            accSum += accVal;
        }
        if (accSum > sum) {
            sum = accSum;
            maxSumCustomer = i;
        }
    }
    return {maxSumCustomer, sum};
}

const accounts = [[2,8,7], [7,1,3], [1,9,5]];
const res = findMaxSumOfElements(accounts);
console.log('Output:', `Richest customer: ${res.maxSumCustomer} with Sum: ${res.sum}`);



 