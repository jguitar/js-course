function FizzBuzz(n) {
  if (isFizz(n) && isBuzz(n)) return 'FizzBuzz';
  if (isFizz(n)) return 'Fizz';
  if (isBuzz(n)) return 'Buzz';
  return i + '';
};

function isFizz(n) {
  return n % 3 == 0
};

function isBuzz(n) {
  return n % 5 == 0
};

for(var i = 1; i <= 20; i++) {
  console.log(i + '', 'is', FizzBuzz(i));
}
