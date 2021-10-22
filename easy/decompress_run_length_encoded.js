// We are given a list nums of integers representing a list compressed with run-length encoding.

// Consider each adjacent pair of elements [freq, val] = [nums[2*i], nums[2*i+1]] (with i >= 0).  For each such pair, there are freq elements with value val concatenated in a sublist. Concatenate all the sublists from left to right to generate the decompressed list.

// Return the decompressed list.

var decompressRLElist = function(nums) {
    
    /*
    understand:
    recieve array of 4 
    frequency of value
    [f,v,f,v]
    return array that is not decompressed
    
    map:
    loop through - i+2 
    current value and next value 
        push to new array next value into results arr -  current value times 
    return new array
    
    */
    
    let result = [];
    
    for (let i = 0; i < nums.length; i += 2) {
        let freq = nums[i];
        let val = nums[i+1];
        
        console.log(freq, val)
        for (let i = 0; i < freq; i++) {
            result.push(val)
        }
    }

    return result
};