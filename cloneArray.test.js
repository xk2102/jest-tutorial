const { TestScheduler } = require('jest');
const cloneArray = require('./cloneArray');

test('properly clones an array', () => {
    const array = [1, 2, 3];
    expect(cloneArray(array)).toStrictEqual(array);
    expect(cloneArray(array)).not.toBe(array);
});