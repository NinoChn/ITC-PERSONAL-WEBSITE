// Assignment #3: Looping Operations (ES6+ Modern Syntax)
const loopNInput = document.getElementById('loopN');
const computeLoopsBtn = document.getElementById('computeLoopsBtn');
const loopResult = document.getElementById('loopResult');
const loopError = document.getElementById('loopError');

// 1. Nth Factorial using a WHILE loop
const calculateFactorialWhile = (n) => {
  let result = 1;
  let i = 1;
  while (i <= n) {
    result *= i;
    i++;
  }
  return result;
};

// 2. Sum of first N natural numbers using a DO-WHILE loop
const calculateSumDoWhile = (n) => {
  let sum = 0;
  let i = 1;
  do {
    sum += i;
    i++;
  } while (i <= n);
  return sum;
};

// 3. Average of first N natural numbers using a FOR loop
const calculateAverageFor = (n) => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum / n;
};

computeLoopsBtn.addEventListener('click', () => {
  const raw = loopNInput.value.trim();
  const n = Number(raw);

  if (raw === '' || !Number.isInteger(n) || n < 1) {
    loopError.style.display = 'block';
    return;
  }

  loopError.style.display = 'none';
  const factorial = calculateFactorialWhile(n);
  const sum = calculateSumDoWhile(n);
  const average = calculateAverageFor(n);

  loopResult.innerHTML = `
    <p><strong>1. ${n}! (Factorial via While Loop):</strong> ${factorial.toLocaleString()}</p>
    <p><strong>2. Sum of first ${n} numbers (Do-While Loop):</strong> ${sum.toLocaleString()}</p>
    <p><strong>3. Average of first ${n} numbers (For Loop):</strong> ${average.toFixed(2)}</p>
  `;
});
