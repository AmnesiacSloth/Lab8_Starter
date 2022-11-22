// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('isPhoneNumber (323)112-9843 to be true ', () => {
    expect(functions.isPhoneNumber('(323)112-9843')).toBe(true);
})

test('isPhoneNumber 111-111-1111 to be true', () => {
    expect(functions.isPhoneNumber('111-111-1111')).toBe(true);
})

test('isPhoneNumber notaphone to be false ', () => {
    expect(functions.isPhoneNumber('notaphone')).toBe(false);
})

test('isPhoneNumber 123456789 to be false ', () => {
    expect(functions.isPhoneNumber('123456789')).toBe(false);
})

// isEMAIL

test('isEmail email@website.com to be true ', () => {
    expect(functions.isEmail('email@website.com')).toBe(true);
})

test('isEmail mailwork123s@mailcom.com to be true', () => {
    expect(functions.isEmail('mailwork123s@mailcom.com')).toBe(true);
})

test('isEmail @abs..com to be false ', () => {
    expect(functions.isEmail('@abs..com')).toBe(false);
})

test('isEmail gmail@@mailroom.com to be false ', () => {
    expect(functions.isEmail('gmail@@mailroom.com')).toBe(false);
})

// isStrongPassword

test('isStrongPassword abc_A123 to be true ', () => {
    expect(functions.isStrongPassword('abc_A123')).toBe(true);
})

test('isStrongPassword passworrD_984 to be true', () => {
    expect(functions.isStrongPassword('passworrD_984')).toBe(true);
})

test('isStrongPassword pwd to be false ', () => {
    expect(functions.isStrongPassword('pwd')).toBe(false);
})

test('isStrongPassword 1234567891234567 to be false ', () => {
    expect(functions.isStrongPassword('1234567891234567')).toBe(false);
})


// isDate

test('isDate 1/2/1999 to be true ', () => {
    expect(functions.isDate('1/2/1999')).toBe(true);
})

test('isDate 15/40/4000 to be true', () => {
    expect(functions.isDate('15/19/4000')).toBe(true);
})

test('isDate 123/123/1 to be false ', () => {
    expect(functions.isDate('123/123/1')).toBe(false);
})

test('isDate 1/1/1 to be false ', () => {
    expect(functions.isDate('1/1/1')).toBe(false);
})


// isHexColor

test('isHexColor 123456 to be true ', () => {
    expect(functions.isHexColor('123456')).toBe(true);
})

test('isHexColor abb to be true', () => {
    expect(functions.isHexColor('abb')).toBe(true);
})

test('isHexColor thisisnothex to be false ', () => {
    expect(functions.isHexColor('thisisnothex')).toBe(false);
})

test('isHexColor bruhmooment to be false ', () => {
    expect(functions.isHexColor('bruhmooment')).toBe(false);
})