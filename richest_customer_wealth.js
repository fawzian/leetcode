// You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

// A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

/* 
understand:
add arrs together and return highest sum
*/   

var maximumWealth = function(accounts) {
    
    let answer = [];

    for(let i = 0; i < accounts.length; i++) {

        let sum = accounts[i].reduce((a,b) => a + b)
        answer.push(sum)
    }
    
    return Math.max(...answer)    
    
};