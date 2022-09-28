window.addEventListener("load", async () => {
  const dataProxy = new TransactionProxy();
  const transations = await dataProxy.getTransactions();
  console.log(transations);
  transactionTable(transations);
});

const button = document.querySelector("#apply");

button.addEventListener("click", () => {
  const selectedOption = document.querySelector(
    'input[name="card_type"]:checked'
  ).value;
  console.log(selectedOption);
});
