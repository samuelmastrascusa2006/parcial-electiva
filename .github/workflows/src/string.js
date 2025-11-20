/**
 * 
 */
class StringUtils {
    /**
     * 
     * @param {string} str 
     * @returns {string} 
     */
    static capitalize(str) {
        if (typeof str !== 'string') {
            throw new Error('Parameter must be a string');
        }
        if (str.length === 0) return str;
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }

    /**
     * 
     * @param {string} str
     * @returns {string} 
     */
    static reverse(str) {
        if (typeof str !== 'string') {
            throw new Error('Parameter must be a string');
        }
        return str.split('').reverse().join('');
    }

    /**
     * 
     * @param {string} str - 
     * @returns {boolean}
     */
    static isPalindrome(str) {
        if (typeof str !== 'string') {
            throw new Error('Parameter must be a string');
        }
        const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
        return cleanStr === this.reverse(cleanStr);
    }

    /**
     * 
     * @param {string} sentence 
     * @returns {number}
     */
    static countWords(sentence) {
        if (typeof sentence !== 'string') {
            throw new Error('Parameter must be a string');
        }
        if (sentence.trim() === '') return 0;
        return sentence.trim().split(/\s+/).length;
    }

    /**
     * 
     * @param {string} str 
     * @returns {boolean} 
     */
    static isAlpha(str) {
        if (typeof str !== 'string') {
            throw new Error('Parameter must be a string');
        }
        return /^[A-Za-z]+$/.test(str);
    }
}

module.exports = StringUtils;