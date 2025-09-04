function calculateLoan() {
  const amount = parseFloat(document.getElementById('amount').value);
  const rate = parseFloat(document.getElementById('rate').value) / 100 / 12;
  const years = parseFloat(document.getElementById('years').value);
  const payments = years * 12;

  if (isNaN(amount) || isNaN(rate) || isNaN(years)) {
    document.getElementById('result').innerText = "Please enter valid numbers.";
    return;
  }

  const monthly = (amount * rate) / (1 - Math.pow(1 + rate, -payments));
  document.getElementById('result').innerText = `Monthly Payment: AED ${monthly.toFixed(2)}`;
}
