const capitalize = require('./Capitalize');
test('capitalize should capitalize the first character of a string', () => {
    expect(capitalize('hello')).toBe('Hello');
});