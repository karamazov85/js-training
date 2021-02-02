// Given a sentence containing two or more words, return the equivalent of the sentence when capitalized
const capitalize = string => {
    const words = string.split(" ");
    const capitalized = words.map(word => word[0].toUpperCase() + word.slice(1));
    return capitalized.join(" ");
}

module.exports = capitalize;

