function fizzBuzz(number) {
    if (number % 3 === 0 && number % 5 === 0)
        console.log('FizzBuzz', number);
    else if (number % 5 === 0)
        console.log('Buzz', number);
    else if (number % 3 === 0)
        console.log('Fizz', number);
}


for (let i = 0; i < 100; i++) {
    fizzBuzz(i);
}