/*Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

Return the answer in an array.*/

var smallerNumbersThanCurrent = function(nums) {
    
    /*
    understand:
    return array of how many numbers in the original array are smaller than nums[i]
    
    map: 
    loop through array
        compare each number to every other number in the array
        if it is greater than that number add it to a counter
        once looping through array for that number push counter to result arr
    return result array
    
    */
    let result = [];
    
    for (let i = 0; i < nums.length; i++) {
        let counter = 0;
        let number = nums[i]
        for (let i = 0; i < nums.length; i++) {
            if (number > nums[i]) {
                counter++
            }
        }
        // console.log(counter)
        result.push(counter)
    }

return result
};