// Given a string, find out if its characters can be rearranged to form a palindrome.
// Example
// For inputString = "aabb", the output should be
// palindromeRearranging(inputString) = true.
// We can rearrange "aabb" to make "abba", which is a palindrome.

function palindromeRearranging(inputString) {
  // count the ocurrences of each character in the string, map them in an object
  const charCount = [...inputString].reduce((count, char) => {
  count[char] = count[char] ? count[char] + 1 : 1;
  return count
  }, {})
  // a string can be a plaindrome if 1. ALL characters appear an even number of times OR 2. max. 1 character has an odd number of occurrence. So get only the odd counts and check if there are more than 1 of those
  return Object.values(charCount).filter(count => count % 2 != 0).length < 2 ? true : false
}