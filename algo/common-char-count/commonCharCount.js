// Given two strings, find the number of common characters between them.

// Example
// For s1 = "aabcc" and s2 = "adcaa", the output should be
// commonCharacterCount(s1, s2) = 3.
// Strings have 3 common characters - 2 "a"s and 1 "c".


function commonCharacterCount(s1, s2) {

    let obj1 = {}
    let obj2 = {}

    for(let char of s1){
        if(!obj1[char]) {
            obj1[char] = 1
        } else
            obj1[char]++
    }

    for(let char of s2){
        if(!obj2[char]) {
            obj2[char] = 1
        } else
            obj2[char]++
    }

    let count = 0

    for(let key in obj1 ){
        if(obj2[key])
            count += Math.min(obj1[key],obj2[key])
    }
    return count
}
