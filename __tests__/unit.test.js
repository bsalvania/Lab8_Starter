// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

// Tests for isPhoneNumber: first 2 positives then 2 negatives
test('123-456-7890 is a valid phone number', () => {
    expect(functions.isPhoneNumber("123-456-7890")).toBe(true);
});

test('(123)456-7890 is a valid phone number', () => {
    expect(functions.isPhoneNumber("(123)456-7890")).toBe(true);
});

test('0987-654-321 is a valid phone number', () => {
    expect(functions.isPhoneNumber("0987-654-321")).toBe(false);
});

test('666 is not a valid phone number', () => {
    expect(functions.isPhoneNumber("666")).toBe(false);
});

// Tests for isEmail: first 2 positives then 2 negatives
test('bsalvania@ucsd.edu is a valid email', () => {
    expect(functions.isEmail("bsalvania@ucsd.edu")).toBe(true);
});

test('coolBeans@gmail.com is a valid email', () => {
    expect(functions.isEmail("coolBeans@gmail.com")).toBe(true);
});

test('coolBeans@@gmail.com is not a valid email', () => {
    expect(functions.isEmail("coolBeans@@gmail.com")).toBe(false);
});

test('coolBeans@gmailcom is not a valid email', () => {
    expect(functions.isEmail("coolBeans@gmailcom")).toBe(false);
});

// Tests for isStrongPassword: first 2 positives then 2 negatives
test('a123 is a strong password', () => {
    expect(functions.isStrongPassword("a123")).toBe(true);
});

test('pLrc94BE5rb is a strong password', () => {
    expect(functions.isStrongPassword("pLrc94BE5rb")).toBe(true);
});

test('123 is not a strong password', () => {
    expect(functions.isStrongPassword("123")).toBe(false);
});

test('superDuperLongPassword is not a strong password', () => {
    expect(functions.isStrongPassword("superDuperLongPassword")).toBe(false);
});

// Tests for isDate: first 2 positives then 2 negatives
test('05/26/2023 is a valid date', () => {
    expect(functions.isDate("05/26/2023")).toBe(true);
});

test('5/9/2023 is a valid date', () => {
    expect(functions.isDate("5/9/2023")).toBe(true);
});

test('05/26/23 is not a valid date', () => {
    expect(functions.isDate("05/26/23")).toBe(false);
});

test('5/9/23 is not a valid date', () => {
    expect(functions.isDate("5/9/23")).toBe(false);
});

// Tests for isHexColor: first 2 positives then 2 negatives
test('00FF00 is a valid hex color', () => {
    expect(functions.isHexColor("00FF00")).toBe(true);
});

test('#800080 is a valid hex color', () => {
    expect(functions.isHexColor("#800080")).toBe(true);
});

test('#green is not a valid hex color', () => {
    expect(functions.isHexColor("#green")).toBe(false);
});

test('80008 is not a valid hex color', () => {
    expect(functions.isHexColor("80008")).toBe(false);
});