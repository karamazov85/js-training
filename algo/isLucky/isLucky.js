// Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.

// Given a ticket number n, determine if it's lucky or not.

//Example
// For n = 1230, the output should be
// isLucky(n) = true;
// For n = 239017, the output should be
// isLucky(n) = false.


function isLucky(n) {
    const numString = n.toString().split('')
    const numLength = numString.length
    const midpoint = numLength / 2
    
    const firstHalf = numString.slice(0, midpoint)
    const secondHalf = numString.slice(midpoint)
    
    let firstHalfSum = 0 
    
    for(let el of firstHalf) {
        firstHalfSum += Number(el)
    }
    
    let secondHalfSum = 0 
    
    for(let el of secondHalf) {
        secondHalfSum += Number(el)
    }
    
    return firstHalfSum == secondHalfSum ? true : false
}