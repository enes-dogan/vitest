import { describe, test, expect } from 'vitest';
import { max, fizzBuzz, calcuateAverage } from '../src/intro';

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
});
