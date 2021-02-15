// given a string, find all possible arrangements of its letters.

function findPermutations(string) {
    if (string.length < 2 ){
        return string
    }

    let permutations = []

    for (let i = 0; i < string.length; i++) {
        let char = string[i] 
        let remainingChars = string.slice(0, i) + string.slice(i + 1, string.length); // rest of the characters in any given case

        if (string.indexOf(char) != i) // if the same character is passed in twice, all permutations will appear twice. We guard against that here
        continue
        
        for(let permutation of findPermutations(remainingChars)) { // recursively pass in remaning characters for each permutation
            permutations.push(char + permutation)} // push the character[i] + all permutations into the permutations array
    }
    return permutations;   
}

let result = findPermutations("aranka")
console.log(result)

// source: https://levelup.gitconnected.com/find-all-permutations-of-a-string-in-javascript-af41bfe072d2
