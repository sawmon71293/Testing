const Calculator = require('./Calculator');
describe('Calculator', () => {
    describe('add', () => {
        test('should add two positive numbers', () => {
            const calculator = new Calculator();
            expect(calculator.add(2, 3)).toBe(5);
        });

        test('should add a positive and a negative number', () => {
            const calculator = new Calculator();
            expect(calculator.add(-2, 3)).toBe(1);
        });

        test('should add two negative numbers', () => {
            const calculator = new Calculator();
            expect(calculator.add(-2, -3)).toBe(-5);
        });
    });

    describe('subtract', () => {
        test('should subtract two positive numbers', () => {
            const calculator = new Calculator();
            expect(calculator.subtract(5, 3)).toBe(2);
        });

        test('should subtract a positive and a negative number', () => {
            const calculator = new Calculator();
            expect(calculator.subtract(5, -3)).toBe(8);
        });

        test('should subtract two negative numbers', () => {
            const calculator = new Calculator();
            expect(calculator.subtract(-5, -3)).toBe(-2);
        });
    });

    describe('divide', () => {
        test('should divide two numbers', () => {
            const calculator = new Calculator();
            expect(calculator.divide(10, 2)).toBe(5);
        });

        test('should throw an error when dividing by zero', () => {
            const calculator = new Calculator();
            expect(() => calculator.divide(10, 0)).toThrow('Cannot divide by zero');
        });

        test('should divide a positive and a negative number', () => {
            const calculator = new Calculator();
            expect(calculator.divide(-10, 2)).toBe(-5);
        });
    });

    describe('multiply', () => {
        test('should multiply two positive numbers', () => {
            const calculator = new Calculator();
            expect(calculator.multiply(2, 3)).toBe(6);
        });

        test('should multiply a positive and a negative number', () => {
            const calculator = new Calculator();
            expect(calculator.multiply(-2, 3)).toBe(-6);
        });

        test('should multiply two negative numbers', () => {
            const calculator = new Calculator();
            expect(calculator.multiply(-2, -3)).toBe(6);
        });
    });
});
