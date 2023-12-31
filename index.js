// Factorial
let n = 4;
let result = 1;
for (let i = 1; i <= n; i++) {
  result *= i;
}
console.log(result);
// way #02
const fuct = (x) => {
  if (x === 0) {
    return 1;
  } else {
    return x * fuct(x - 1);
  }
};
console.log(fuct(5));

// Sum of Numbers
let x = 10;
let finalSum = 0;
for (let b = 0; b <= x; b++) {
  finalSum += b;
}
console.log(finalSum);
// way #02
const termSum = (start, end) => {
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  return sum;
};

console.log(termSum(1, 10));



// Multiplication Table
let m = 8;
let finalMult = 1;
let muniss = m + 1;
console.log(`Multiplication Table of ${m}`);
for (let o = 0; o <= m; o++) {
  muniss -= 1;
  finalMult = muniss * m;
  console.log(`${muniss} * ${m} = ${finalMult}`);
}

// Fibonacci
let fibArray = [0, 1];
let sum;
for (let l = 1; l <= 15; l++) {
  sum = fibArray[l] + fibArray[l - 1];
  fibArray[l + 1] = sum;
}
console.log(fibArray);

// Even numbers
for (let r = 0; r <= 10; r++) {
  if (r % 2 == 0) {
    console.log(r);
  }
}

// Odd numbers
for (let r = 0; r <= 10; r++) {
  if (r % 2 !== 0) {
    console.log(r);
  }
}

// Power of 2

for (let r = 1; r <= 10; r++) {
  console.log(`2 power ${r} = ${2 ** r}`);
}
