export function max(a, b) {
  return a > b ? a : b;
}

export function fizzBuzz(n) {
  if (n % 3 === 0 && n % 5 === 0) return 'FizzBuzz';
  if (n % 3 === 0) return 'Fizz';
  if (n % 5 === 0) return 'Buzz';
  return n.toString();
}

export function calcuateAverage(numbers) {
  if (numbers.length === 0) return NaN;

  const sum = numbers.reduce((acc, number) => acc + number, 0);
  return sum / numbers.length;
}

export function factorial(number) {
  let result = 1;

  if (number < 0) return undefined;
  if (number <= 1) return result;

  for (let i = number; i > 1; i--) {
    result *= i;
  }

  return result;
}
