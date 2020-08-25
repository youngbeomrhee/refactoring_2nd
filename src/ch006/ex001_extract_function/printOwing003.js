// 지역 변수를 사용할 때
function printOwing(invoice, console, Clock) {
  let outstanding = 0;

  // calculate outstanding
  for (const o of invoice.orders) {
    outstanding += o.amount;
  }

  // record due date
  const today = Clock.today;
  invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);

  printDetails(invoice, outstanding, console);
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
