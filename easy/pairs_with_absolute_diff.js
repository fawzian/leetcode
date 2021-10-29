// Given an integer array nums and an integer k, return the number of pairs (i, j) where i < j such that |nums[i] - nums[j]| == k.

// The value of |x| is defined as:

// x if x >= 0.
// -x if x < 0.

var countKDifference = function(nums, k) {
    
    /*
    understand:
    array and number number of pairs in the array that when subtracted equal number
        
    map:
    create counter
    loop through nums
        create var num
        create array not including num and everything before
        loop through remaining array
            if num - remaining[i] === k
                counter++
    return counter
 
    */
    
    let counter = 0;
    
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        let remaining = nums.slice(i + 1);
        for (let i = 0; i < remaining.length; i++) {
            if (num - remaining[i] === k) {
                counter++;
            } else if (remaining[i] - num === k) {
                counter++
            }
        }
    }
    
    return counter
};
