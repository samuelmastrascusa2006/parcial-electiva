/**
 *
 */
class MathOperations {
    /**
     * S
     * @param {number} a -
     * @param {number} b - 
     * @returns {number} 
     */
    static sum(a, b) {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error('Both parameters must be numbers');
        }
        return a + b;
    }

    /**
     * Resta dos números
     * @param {number} a
     * @param {number} b 
     * @returns {number} 
     */
    static subtract(a, b) {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error('Both parameters must be numbers');
        }
        return a - b;
    }

    /**
     * 
     * @param {number} a 
     * @param {number} b 
     * @returns {number} 
     */
    static multiply(a, b) {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error('Both parameters must be numbers');
        }
        return a * b;
    }

    /**
     * 
     * @param {number} a 
     * @param {number} b 
     * @returns {number} 
     */
    static divide(a, b) {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error('Both parameters must be numbers');
        }
        if (b === 0) {
            throw new Error('Division by zero is not allowed');
        }
        return a / b;
    }

    /**
     * 
     * @param {number} number 
     * @returns {boolean} 
     */
    static isEven(number) {
        if (typeof number !== 'number') {
            throw new Error('Parameter must be a number');
        }
        return number % 2 === 0;
    }

    /**
     
     * @param {number} n
     * @returns {number}
     */
    static factorial(n) {
        if (typeof n !== 'number') {
            throw new Error('Parameter must be a number');
        }
        if (n < 0) {
            throw new Error('Factorial is not defined for negative numbers');
        }
        if (n === 0 || n === 1) {
            return 1;
        }
        return n * this.factorial(n - 1);
    }
}

module.exports = MathOperations;