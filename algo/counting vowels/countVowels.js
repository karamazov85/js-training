// count how many vowels there are in a string

// the clunky way
const countVowels = string => {
    const vowels = ['a', 'e', 'i', 'o', 'u']; 
    let vowelsCount = 0; 

    string.split("").forEach(char => {
        if(vowels.includes(char)) {
            vowelsCount++
        }
    })

    return vowelsCount
}

module.exports = countVowels

// the elegant way
const countVowelsB = string => {
    if(string.match(/[aeiou]/gi)) {
        return string.match(/[aeiou]/gi).length
    }
    return 0
}

module.exports = countVowelsB

// by the same token, you can count the consonants 
// const countConsonants = string => {
//     if(string.match(/[^aeiou\s]/gi)) {
//         return string.match(/[^aeiou\s]/gi).length
//     }
//     return 0
// }

// module.exports = countConsonants