function FizzBuzz(n) {
  if ((n % 3 == 0) && (n % 5 == 0)) {
    return 'FizzBuzz'
  } else if (n % 3 == 0) {
    return 'Fizz';
  } else if (n % 5 == 0) {
    return 'Buzz';
  } else {
    return i + '';
  }
};

for(var i = 1; i <= 20; i++) {
  console.log(i + '', 'is', FizzBuzz(i));
}
