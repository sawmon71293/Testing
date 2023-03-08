const reverseString = require('./Reverse')
describe('reverseString', () => {
    test('should reverse the string', () => {
        expect(reverseString('hello')).toBe('olleh');
    });
});