function checkPrimeNumber(number) {
  if (number > 1000 || number == 0 || number === 1) {
    console.log("Данные неверны!");
    return;
  }

  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      console.log("Число простое!");
      return;
    }
  }

  console.log("Число не простое!");
}

checkPrimeNumber(340183218);
