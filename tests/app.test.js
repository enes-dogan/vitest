import { describe, test, expect } from 'vitest';
import { max, fizzBuzz, calcuateAverage, factorial } from '../src/app';

describe('max', () => {
  test('should return the first argument if it is greater', () => {
    expect(max(2, 1)).toBe(2);
  });

  test('should return the second argument if it is greater', () => {
    expect(max(2, 3)).toBe(3);
  });

  test('should return the first argument if arguments are equal', () => {
    expect(max(1, 1)).toBe(1);
  });
});

describe('fizzBuzz', () => {
  test('should return "FizzBuzz" if argument divisible by 3 and 5', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
  });

  test('should return "Fizz" if argument only divisible by 3', () => {
    expect(fizzBuzz(3)).toBe('Fizz');
  });

  test('should return "Buzz" if argument only divisible by 5', () => {
    expect(fizzBuzz(5)).toBe('Buzz');
  });

  test('should return argument as string if argument is not divisible by 3 and 5', () => {
    expect(fizzBuzz(2)).toBe('2');
  });
});

describe('calculateAverage', () => {
  test('should return NaN if given empty array', () => {
    expect(calcuateAverage([])).toBe(NaN);
  });

  test('should calculate the average of an array with single element', () => {
    expect(calcuateAverage([1])).toBe(1);
  });

  test('should calculate the average of an array with two element', () => {
    expect(calcuateAverage([1, 2])).toBe(1.5);
  });

  test('should calculate the average of an array with three element', () => {
    expect(calcuateAverage([1, 2, 3])).toBe(2);
  });
});

describe('factorial', () => {
  test('should return 1 if given 0', () => {
    expect(factorial(0)).toBe(1);
  });

  test('should return 1 if given 1', () => {
    expect(factorial(1)).toBe(1);
  });

  test('should return 2 if given 2', () => {
    expect(factorial(2)).toBe(2);
  });

  test('should return 6 if given 3', () => {
    expect(factorial(3)).toBe(6);
  });

  test('should return 24 if given 4', () => {
    expect(factorial(4)).toBe(24);
  });

  test('should return undefined if given a negative number', () => {
    expect(factorial(-1)).toBe(undefined);
  });
});
