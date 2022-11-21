function firstNumber(a) {
  return function (b) {
    console.log(a + b);
  };
}

const sum = firstNumber(2);
sum(5);
