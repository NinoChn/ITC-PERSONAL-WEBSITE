// Assignment #2: Income Tax Calculator (ES6+ Modern Syntax)
const taxIncomeInput = document.getElementById('taxIncome');
const calcTaxBtn = document.getElementById('calcTaxBtn');
const taxResult = document.getElementById('taxResult');
const taxError = document.getElementById('taxError');

const formatPHP = (amount) =>
  amount.toLocaleString('en-PH', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

const computeIncomeTax = (income) => {
  if (income <= 250000) return 0;
  if (income <= 400000) return (income - 250000) * 0.20;
  if (income <= 800000) return 30000 + (income - 400000) * 0.25;
  if (income <= 2000000) return 130000 + (income - 800000) * 0.30;
  if (income <= 8000000) return 490000 + (income - 2000000) * 0.32;
  return 2410000 + (income - 8000000) * 0.35;
};

calcTaxBtn.addEventListener('click', () => {
  const raw = taxIncomeInput.value.trim();
  const income = parseFloat(raw);

  if (raw === '' || Number.isNaN(income) || income < 0) {
    taxError.style.display = 'block';
    return;
  }

  taxError.style.display = 'none';
  const tax = computeIncomeTax(income);
  taxResult.innerHTML = `
    Taxable Income: <strong>₱${formatPHP(income)}</strong><br />
    Computed Income Tax: <strong>₱${formatPHP(tax)}</strong>
  `;
});
