// Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

// Return the array in the form [x1,y1,x2,y2,...,xn,yn].

var shuffle = function(nums, n) {
    
    /*understand: split the array by n and then combine the 2 arrays and keep indexes as close as possible
    map: 
    split into 2 arrays
    combine the two arrays
        create space between each character in array 1
        create loop and push arr2 characters into spaces
        
    */
    
    let arr1 = nums.slice(0, n);
    let arr2 = nums.slice(n);
    let nArr = [];
    
    
    for (let i = 0; i < arr1.length; i++) {
        nArr.push(arr1[i], arr2[i])
    }
    
    
    return nArr

};