// Translate the provided string to Pig Latin by following the rules below:
// For words that begin with consonant sounds, the consonant before the initial vowel should be moved to the end of the word sequence and "ay" affixed. E.g
// "pig" = "igpay"
// For words that begin with consonant clusters, the clusters should be moved to the end of the word sequence and "ay" affixed. E.g
// "glove" = "oveglay"
// For words that begin with vowel sounds, simply add "way" to the end of the word. E.g
// "explain" = "explainway”

const pigLatin = string => {
    const splitStr = string.toLowerCase().split(" ");

    const pigLatin = splitStr.map(word => {    
        // word starts with vowel...
        if(/[aeiou]/i.test(word[0])) {
            return word + "way"
        } // otherwise with a consonant... 
        return word.split("").slice(1).join("") + word[0] + "ay"
    })
    return pigLatin.join(" ")
}

module.exports = pigLatin;

// no regex 

const pigLatinB = string => {
    const startsWithVowel = str => {
        const vowels = ['a', 'e', 'i', 'o', 'u'];
        return vowels.includes(str[0].toLowerCase()) ? true : false;
    }

    const splitStr = string.toLowerCase().split(" ");

    const pigLatin = splitStr.map(word => {

        let withVowel = startsWithVowel(word);

        if (withVowel) {
            return word + "way"
        }
        return word.split("").slice(1).join("") + word[0] + "ay"
    })
    
    return pigLatin.join(" ");

}

module.exports = pigLatinB