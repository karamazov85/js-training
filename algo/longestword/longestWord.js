// given a string, find and return the longest word of the string. 

const longestWord = (string) => {
    return string
    .split(" ")
    .reduce((longestWord, currentWord) => {
        return longestWord.length > currentWord.length ? longestWord : currentWord
    }, "")
}

module.exports = longestWord;

// implement this .reduce with a for loop 
const longestWordB = string => {
    const wordsArray = string.split(" ");
    let maxLength = 0;
    let longestWord = "";

    for(let i = 0; i < wordsArray.length; i++) {
        if(wordsArray[i].length > maxLength) {
            longestWord = wordsArray[i];
            maxLength = wordsArray[i].length;
        }
    }
    return longestWord
}

module.exports = longestWordB

// get the longest word by sorting the elements by length
const longestWordC = string => {
    const sortedByLength = string
            .split(" ")
            .sort((a, b) => b.length - a.length)
    
    return sortedByLength[0]   
}

module.exports = longestWordC
