function printNumbers(a, b) {
  let current = a;

  let interval = setInterval(function () {
    if (current == b) {
      clearInterval(interval);
    }
    console.log(current);
    ++current;
  }, 1000);
}

printNumbers(5, 15);
