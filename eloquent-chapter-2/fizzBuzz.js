function fizzBuzz(number) {
  if (number % 15 === 0) return "FizzBuzz";
  if (number % 3 === 0) return "Fizz";
  if (number % 5 === 0) return "Buzz";
  return String(number);
}

for (let i = 1; i <= 100; i++) {
  console.log(fizzBuzz(i));
}
