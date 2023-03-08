const StringLength = require('./StringLength');

test('should return the length of the string', () => {
    expect(StringLength('str')).toBe(3);
    expect(StringLength('123456789')).toBe(9);
});

test('should throw an error if the string is too short', () => {
    expect(() => StringLength('')).toThrow('String must be between 1 and 10 characters long');
});

test('should throw an error if the string is too long', () => {
    expect(() => StringLength('this string is too long')).toThrow('String must be between 1 and 10 characters long');
});