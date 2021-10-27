// Given an array of integers nums, return the number of good pairs.

// A pair (i, j) is called good if nums[i] == nums[j] and i < j.

var numIdenticalPairs = function(nums) {
    
    /*
    understand: if the nums[i] is equal to nums[j]
        what is nums[j] ? i + 1
        each number should loop through remaining numbers in the array

    map:
    define j
    loop through array
        create variable for the nums[i] or for the rest of the array
        nested loop
            compare var to the rest of the array
                        nums[i] === nums[j] && i < j
                        add to counter if   
each number should loop through remaining numbers in the array

    */

    let counter = 1;
    
    for (let i = 0; i < nums.length; i++) {
        let j = i + 1;
        let nArr = nums.slice(i);
        console.log(nArr, j)
        for (let index = 0; index < nArr.length; index++) {
            if (nArr[index] == j) {
            counter++
        }
        }

    }
        return counter

};