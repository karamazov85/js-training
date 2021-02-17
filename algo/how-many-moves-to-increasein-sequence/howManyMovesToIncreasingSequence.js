// You are given an array of integers. On each move you are allowed to increase exactly one of its element by one. Find the minimal number of moves required to obtain a strictly increasing sequence from the input.

// Example
// For inputArray = [1, 1, 1], the output should be
// arrayChange(inputArray) = 3.

function arrayChange(inputArray) {
    
    let moves = 0

    for(i=1; i<inputArray.length; i++) {
        if(inputArray[i] <= inputArray[i-1]) {
            let diff = inputArray[i-1] - inputArray[i] + 1 
            inputArray[i] += diff // we can mutate the array in mid-loop and the next iteration will diff the updated i with i+1!
            moves += diff
        }
            
    }
    return moves
}