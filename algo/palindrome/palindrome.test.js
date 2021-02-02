const isPalindrome = require('./palindrome');

test('returns true for "racear"', () => {
    expect(isPalindrome("racecar")).toBeTruthy();
})

test('returns true for "madam"', () => {
    expect(isPalindrome("madam")).toBeTruthy();
})

test('returns false for "baby"', () => {
    expect(isPalindrome("baby")).toBeFalsy();
})

