// Given a string of text, return true or false indicating whether or not the text is a palindrome.

const isPalindrome = word => word === word.split("").reverse().join("") ? true : false;

module.exports = isPalindrome;