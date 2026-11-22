// Assignment #1: Unit Conversion (ES6+ Modern Syntax)
const convInput = document.getElementById('convInput');
const convResult = document.getElementById('convResult');
const convError = document.getElementById('convError');
const convButtons = document.querySelectorAll('.btn-tile[data-type]');

const converters = {
  cToF: (val) => `${val} °C = <strong>${((val * 9) / 5 + 32).toFixed(2)} °F</strong>`,
  fToC: (val) => `${val} °F = <strong>${(((val - 32) * 5) / 9).toFixed(2)} °C</strong>`,
  mToFt: (val) => `${val} m = <strong>${(val * 3.28084).toFixed(2)} ft</strong>`,
  ftToM: (val) => `${val} ft = <strong>${(val / 3.28084).toFixed(2)} m</strong>`
};

const handleConversion = (type) => {
  const raw = convInput.value.trim();
  const num = parseFloat(raw);

  if (raw === '' || Number.isNaN(num)) {
    convError.style.display = 'block';
    return;
  }

  convError.style.display = 'none';
  convResult.innerHTML = converters[type](num);
};

convButtons.forEach((btn) => {
  btn.addEventListener('click', () => handleConversion(btn.dataset.type));
});
