// Assignment #4: Simple Payroll System (ES6+ Modern Syntax)
const empNameInput = document.getElementById('empName');
const daysWorkedInput = document.getElementById('daysWorked');
const dailyRateInput = document.getElementById('dailyRate');
const deductionInput = document.getElementById('deduction');
const deleteLineNoInput = document.getElementById('deleteLineNo');

const addEmpBtn = document.getElementById('addEmpBtn');
const deleteEmpBtn = document.getElementById('deleteEmpBtn');
const payrollBody = document.getElementById('payrollBody');
const payrollError = document.getElementById('payrollError');

let payrollList = [];

const formatMoney = (val) =>
  `₱${val.toLocaleString('en-PH', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

const showError = (msg) => {
  payrollError.textContent = msg;
  payrollError.style.display = 'block';
};

const clearError = () => {
  payrollError.style.display = 'none';
};

const renderPayrollTable = () => {
  if (payrollList.length === 0) {
    payrollBody.innerHTML = `
      <tr>
        <td colspan="7" style="text-align: center; color: #64748b;">No employees added yet.</td>
      </tr>
    `;
    return;
  }

  payrollBody.innerHTML = payrollList
    .map((emp, index) => {
      const grossPay = emp.daysWorked * emp.dailyRate;
      const netPay = grossPay - emp.deduction;
      return `
        <tr>
          <td><strong>${index + 1}</strong></td>
          <td>${emp.name}</td>
          <td>${emp.daysWorked}</td>
          <td>${formatMoney(emp.dailyRate)}</td>
          <td>${formatMoney(grossPay)}</td>
          <td>${formatMoney(emp.deduction)}</td>
          <td><strong>${formatMoney(netPay)}</strong></td>
        </tr>
      `;
    })
    .join('');
};

addEmpBtn.addEventListener('click', () => {
  const name = empNameInput.value.trim();
  const daysWorked = parseFloat(daysWorkedInput.value);
  const dailyRate = parseFloat(dailyRateInput.value);
  const deduction = parseFloat(deductionInput.value);

  if (!name || Number.isNaN(daysWorked) || Number.isNaN(dailyRate) || Number.isNaN(deduction) || daysWorked < 0 || dailyRate < 0 || deduction < 0) {
    showError('Please fill in all employee fields with valid non-negative values.');
    return;
  }

  clearError();
  payrollList.push({ name, daysWorked, dailyRate, deduction });

  empNameInput.value = '';
  daysWorkedInput.value = '';
  dailyRateInput.value = '';
  deductionInput.value = '';

  renderPayrollTable();
});

deleteEmpBtn.addEventListener('click', () => {
  const lineNo = Number(deleteLineNoInput.value);

  if (!Number.isInteger(lineNo) || lineNo < 1 || lineNo > payrollList.length) {
    showError(`Invalid Line Number. Enter a number between 1 and ${payrollList.length}.`);
    return;
  }

  clearError();
  payrollList.splice(lineNo - 1, 1);
  deleteLineNoInput.value = '';
  renderPayrollTable();
});
