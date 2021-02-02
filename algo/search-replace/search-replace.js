// Receiving a sentence, a word in the sentence and a replacement for that word as arguments, perform a search and replace on the sentence using the arguments provided and return the new sentence.

const searchReplace = (sentence, word, replacement) => { 

    if (word[0] === word[0].toUpperCase()) {
        replacement = replacement[0].toUpperCase() + replacement.slice(1)
    }

    return sentence.replace(word, replacement);
}

module.exports = searchReplace;

// with regex 

const searchReplaceB = (sentence, word, replacement) => {
    if (/[A-Z]/.test(word[0])){
        replacement = replacement[0].toUpperCase() + replacement.slice(1)
    }
    const regex = new RegExp(word, "gi")
    return sentence.replace(regex, replacement)
}

module.exports = searchReplaceB