import { fizzBuzz } from './fizzbuzz.js';
import test from 'node:test';
import * as assert from 'node:assert';

test('fizzbuzz 1', () => {
    assert.strictEqual(fizzBuzz(1), "1");
});

test('fizzbuzz 3', () => {
    assert.strictEqual(fizzBuzz(3), "Fizz");
});

test('fizzbuzz 5', () => {
    assert.strictEqual(fizzBuzz(5), "Buzz");
});

test('fizzbuzz 15', () => {
    assert.strictEqual(fizzBuzz(15), "FizzBuzz");
});
