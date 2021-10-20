// There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has, and an integer extraCandies, denoting the number of extra candies that you have.

// Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, they will have the greatest number of candies among all the kids, or false otherwise.

// Note that multiple kids can have the greatest number of candies.

var kidsWithCandies = function(candies, extraCandies) {
    
    /*
    understand: return an array of booleans that is true if the orginal amount of candies plus extra candies is greater than all the other numbers in the array
    
    map: if candies[i] + extra candies is > Math.max(candies) return true
    
    */
  
    
    let result = [];
    
    for (let i = 0; i < candies.length; i++) {
        if (candies[i] + extraCandies >= Math.max(...candies)) {
            result.push(true)
        } else {
            result.push(false)
        }
    }
    
    return result
};