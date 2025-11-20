const StringUtils = require('../src/string');

describe('String Utils', () => {
    describe('Capitalize function', () => {
        test('capitalize lowercase string', () => {
            expect(StringUtils.capitalize('hello')).toBe('Hello');
        });

        test('capitalize uppercase string', () => {
            expect(StringUtils.capitalize('HELLO')).toBe('Hello');
        });

        test('capitalize mixed case string', () => {
            expect(StringUtils.capitalize('hElLo')).toBe('Hello');
        });

        test('capitalize empty string', () => {
            expect(StringUtils.capitalize('')).toBe('');
        });

        test('capitalize single character', () => {
            expect(StringUtils.capitalize('a')).toBe('A');
            expect(StringUtils.capitalize('Z')).toBe('Z');
        });

        test('capitalize with non-string throws error', () => {
            expect(() => StringUtils.capitalize(123)).toThrow('Parameter must be a string');
            expect(() => StringUtils.capitalize(null)).toThrow('Parameter must be a string');
            expect(() => StringUtils.capitalize(undefined)).toThrow('Parameter must be a string');
        });
    });

    describe('Reverse function', () => {
        test('reverse normal string', () => {
            expect(StringUtils.reverse('hello')).toBe('olleh');
        });

        test('reverse palindrome string', () => {
            expect(StringUtils.reverse('racecar')).toBe('racecar');
        });

        test('reverse empty string', () => {
            expect(StringUtils.reverse('')).toBe('');
        });

        test('reverse string with spaces', () => {
            expect(StringUtils.reverse('hello world')).toBe('dlrow olleh');
        });

        test('reverse with non-string throws error', () => {
            expect(() => StringUtils.reverse(123)).toThrow('Parameter must be a string');
        });
    });

    describe('Palindrome check', () => {
        test('check palindrome strings', () => {
            expect(StringUtils.isPalindrome('racecar')).toBe(true);
            expect(StringUtils.isPalindrome('A man a plan a canal Panama')).toBe(true);
            expect(StringUtils.isPalindrome('madam')).toBe(true);
        });

        test('check non-palindrome strings', () => {
            expect(StringUtils.isPalindrome('hello')).toBe(false);
            expect(StringUtils.isPalindrome('world')).toBe(false);
        });

        test('check empty string palindrome', () => {
            expect(StringUtils.isPalindrome('')).toBe(true);
        });

        test('palindrome check with non-string throws error', () => {
            expect(() => StringUtils.isPalindrome(123)).toThrow('Parameter must be a string');
        });
    });

    describe('Word count', () => {
        test('count words in normal sentence', () => {
            expect(StringUtils.countWords('Hello world')).toBe(2);
            expect(StringUtils.countWords('This is a test sentence')).toBe(5);
        });

        test('count words with multiple spaces', () => {
            expect(StringUtils.countWords('  Multiple   spaces   here  ')).toBe(3);
        });

        test('count words in empty string', () => {
            expect(StringUtils.countWords('')).toBe(0);
            expect(StringUtils.countWords('   ')).toBe(0);
        });

        test('word count with non-string throws error', () => {
            expect(() => StringUtils.countWords(123)).toThrow('Parameter must be a string');
        });
    });

    describe('Alpha check', () => {
        test('check alpha strings', () => {
            expect(StringUtils.isAlpha('hello')).toBe(true);
            expect(StringUtils.isAlpha('HELLO')).toBe(true);
            expect(StringUtils.isAlpha('Hello')).toBe(true);
        });

        test('check non-alpha strings', () => {
            expect(StringUtils.isAlpha('hello123')).toBe(false);
            expect(StringUtils.isAlpha('hello world')).toBe(false);
            expect(StringUtils.isAlpha('123')).toBe(false);
        });

        test('check empty string', () => {
            expect(StringUtils.isAlpha('')).toBe(true);
        });

        test('alpha check with non-string throws error', () => {
            expect(() => StringUtils.isAlpha(123)).toThrow('Parameter must be a string');
        });
    });
});