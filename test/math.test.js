const MathOperations = require('../src/math');

describe('Math Operations', () => {
    describe('Sum operations', () => {
        test('sum of two positive numbers', () => {
            expect(MathOperations.sum(5, 3)).toBe(8);
        });

        test('sum of positive and negative numbers', () => {
            expect(MathOperations.sum(-1, 1)).toBe(0);
            expect(MathOperations.sum(5, -3)).toBe(2);
        });

        test('sum with zero', () => {
            expect(MathOperations.sum(0, 5)).toBe(5);
            expect(MathOperations.sum(5, 0)).toBe(5);
        });

        test('sum with non-numbers throws error', () => {
            expect(() => MathOperations.sum('5', 3)).toThrow('Both parameters must be numbers');
            expect(() => MathOperations.sum(5, '3')).toThrow('Both parameters must be numbers');
            expect(() => MathOperations.sum(null, 3)).toThrow('Both parameters must be numbers');
        });
    });

    describe('Subtract operations', () => {
        test('subtract two numbers', () => {
            expect(MathOperations.subtract(10, 4)).toBe(6);
            expect(MathOperations.subtract(5, 5)).toBe(0);
        });

        test('subtract with negative result', () => {
            expect(MathOperations.subtract(3, 10)).toBe(-7);
        });

        test('subtract with non-numbers throws error', () => {
            expect(() => MathOperations.subtract('10', 4)).toThrow('Both parameters must be numbers');
        });
    });

    describe('Multiply operations', () => {
        test('multiply two positive numbers', () => {
            expect(MathOperations.multiply(3, 4)).toBe(12);
        });

        test('multiply by zero', () => {
            expect(MathOperations.multiply(0, 5)).toBe(0);
            expect(MathOperations.multiply(5, 0)).toBe(0);
        });

        test('multiply negative numbers', () => {
            expect(MathOperations.multiply(-3, 4)).toBe(-12);
            expect(MathOperations.multiply(-3, -4)).toBe(12);
        });

        test('multiply with non-numbers throws error', () => {
            expect(() => MathOperations.multiply('3', 4)).toThrow('Both parameters must be numbers');
        });
    });

    describe('Divide operations', () => {
        test('divide two numbers', () => {
            expect(MathOperations.divide(10, 2)).toBe(5);
            expect(MathOperations.divide(7, 2)).toBe(3.5);
        });

        test('division by zero throws error', () => {
            expect(() => MathOperations.divide(10, 0)).toThrow('Division by zero is not allowed');
        });

        test('divide with non-numbers throws error', () => {
            expect(() => MathOperations.divide('10', 2)).toThrow('Both parameters must be numbers');
        });
    });

    describe('Even number check', () => {
        test('check if number is even', () => {
            expect(MathOperations.isEven(4)).toBe(true);
            expect(MathOperations.isEven(7)).toBe(false);
            expect(MathOperations.isEven(0)).toBe(true);
        });

        test('even check with non-number throws error', () => {
            expect(() => MathOperations.isEven('4')).toThrow('Parameter must be a number');
        });
    });

    describe('Factorial operations', () => {
        test('factorial of positive numbers', () => {
            expect(MathOperations.factorial(0)).toBe(1);
            expect(MathOperations.factorial(1)).toBe(1);
            expect(MathOperations.factorial(5)).toBe(120);
        });

        test('factorial of negative number throws error', () => {
            expect(() => MathOperations.factorial(-5)).toThrow('Factorial is not defined for negative numbers');
        });

        test('factorial with non-number throws error', () => {
            expect(() => MathOperations.factorial('5')).toThrow('Parameter must be a number');
        });
    });
});