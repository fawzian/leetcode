// Given two arrays of integers nums and index. Your task is to create target array under the following rules:

// Initially target array is empty.
// From left to right read nums[i] and index[i], insert at index index[i] the value nums[i] in target array.
// Repeat the previous step until there are no elements to read in nums and index.
// Return the target array.

var createTargetArray = function(nums, index) {
    
    /*
    understand:
    two arrays return new target arr
    insert at the INDEX of index[i] the VALUE of nums[i]

    map: 
    create empty arr = target
    loop through index arr
        let ind = index[i]
        target.push[nums[i] @ place of ind]
        
    return target

    */

    let target = [];
    // console.log(nums)
    for (let i = 0; i < index.length; i++) {
        let ind = index[i];
        let number = nums[i];
        target.splice(ind, 0, number)
    }

    return target
    
};