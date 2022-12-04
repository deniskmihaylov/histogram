function histogram(input) {
  let numbersCount = Number(input[0]);
  let currentNum = 0;

  let p1 = 0;
  let p2 = 0;
  let p3 = 0;
  let p4 = 0;
  let p5 = 0;

  for (i = 1; i <= numbersCount; i++) {
    currentNum = input[i];

    if (currentNum < 200) {
      p1++;
    } else if (currentNum >= 200 && currentNum <= 399) {
      p2++;
    } else if (currentNum >= 400 && currentNum <= 599) {
      p3++;
    } else if (currentNum >= 600 && currentNum <= 799) {
      p4++;
    } else {
      p5++;
    }
  }

  let p1Percent = (p1 / numbersCount) * 100;
  let p2Percent = (p2 / numbersCount) * 100;
  let p3Percent = (p3 / numbersCount) * 100;
  let p4Percent = (p4 / numbersCount) * 100;
  let p5Percent = (p5 / numbersCount) * 100;

  console.log(`${p1Percent.toFixed(2)}%`)
  console.log(`${p2Percent.toFixed(2)}%`)
  console.log(`${p3Percent.toFixed(2)}%`)
  console.log(`${p4Percent.toFixed(2)}%`)
  console.log(`${p5Percent.toFixed(2)}%`)
}

histogram([9,
  367,
  99,
  200,
  799,
  999,
  333,
  555,
  111,
  9]);
