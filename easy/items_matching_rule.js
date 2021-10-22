// You are given an array items, where each items[i] = [typei, colori, namei] describes the type, color, and name of the ith item. You are also given a rule represented by two strings, ruleKey and ruleValue.

// The ith item is said to match the rule if one of the following is true:

// ruleKey == "type" and ruleValue == typei.
// ruleKey == "color" and ruleValue == colori.
// ruleKey == "name" and ruleValue == namei.


var countMatches = function(items, ruleKey, ruleValue) {
    
    /*
    understand: loop through the array and see see if either rule key if one of the values is true - return number of tems that match the rule
    
    map:
 create counter
    if rule key is correct
        loop through each and see if it matches 

    */

    let counter = 0;
    
    if (ruleKey === "type") {
        for (let i = 0; i < items.length; i++) {
            if (items[i][0] === ruleValue) {
                counter++
            }
        }
    } else if (ruleKey === "color") {
        for (let i = 0; i < items.length; i++) {
            if (items[i][1] === ruleValue) {
                counter++
            }
        }   
    } else if (ruleKey === "name") {
            for (let i = 0; i < items.length; i++) {
            if (items[i][2] === ruleValue) {
                counter++
            }
        }   
    }

    return counter
    
};