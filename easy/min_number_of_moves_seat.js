// There are n seats and n students in a room. You are given an array seats of length n, where seats[i] is the position of the ith seat. You are also given the array students of length n, where students[j] is the position of the jth student.

// You may perform the following move any number of times:

// Increase or decrease the position of the ith student by 1 (i.e., moving the ith student from position x to x + 1 or x - 1)
// Return the minimum number of moves required to move each student to a seat such that no two students are in the same seat.

// Note that there may be multiple seats or students in the same position at the beginning.

var minMovesToSeat = function(seats, students) {
    
    /*
    understand:
    students should equal seats array --- add to counter regardless of add/subtract
    
    map:
    sort each array from smallest to largest
    
    loop through seats
    subtract seat[i] and stu[i]
    if (+ num) {
    add to counter
    } if neg
    make positive and add to counter
    
    return counter
    */
    
    let seat = seats.sort((a, b) => a - b);
    let stu = students.sort((a, b) => a - b);
    let counter = 0;
    
    // console.log(seat, stu)

        for (let i = 0; i < seat.length; i++) {
        let result = seat[i] - stu[i]
        // console.log(seat[i], stu[i], result)
        // console.log(Math.abs(result))
        counter += Math.abs(result)
        }

    return counter
    
};