// 지역 변수의 값을 변경할 때
function printOwing(invoice, console, Clock) {
  const outstanding = calculateOutstanding(invoice);

  // record due date
  const today = Clock.today;
  recordDueDate(invoice, today);

  printDetails(invoice, outstanding, console);
}

function calculateOutstanding(invoice) {
  let result = 0;
  for (const o of invoice.orders) {
    result += o.amount;
  }
  return result;
}

function recordDueDate(invoice, today) {
  invoice.dueDate = new Date(today.getFullYear(), today.getMonth(),
      today.getDate() + 30);
}

function printDetails(invoice, outstanding, console) {
  console.log("***********************");
  console.log("**** Customer Owes ****");
  console.log("***********************");
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
  console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
}

module.exports = { printOwing };
