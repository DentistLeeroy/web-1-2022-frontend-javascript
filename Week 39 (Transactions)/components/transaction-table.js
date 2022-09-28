function transactionTable(transactions) {
  const table = document.createElement("table");
  const tr = document.createElement("tr");
  const thName = document.createElement("th");
  const thPrice = document.createElement("th");
  const thDate = document.createElement("button");
  thDate.setAttribute("id", "style-none");

  thName.textContent = "Name";
  thPrice.textContent = "Price";
  thDate.textContent = "Transaction date";

  table.appendChild(tr);
  tr.appendChild(thName);
  tr.appendChild(thPrice);
  tr.appendChild(thDate);

  function transactionRow(transaction) {
    const trData = document.createElement("tr");
    const tdName = document.createElement("td");
    const tdPrice = document.createElement("td");
    const tdDate = document.createElement("td");

    tdName.textContent = transaction.name;
    tdPrice.textContent = transaction.price;
    tdDate.textContent = transaction.transaction_date;

    table.appendChild(trData);
    trData.appendChild(tdName);
    trData.appendChild(tdPrice);
    trData.appendChild(tdDate);
  }

  transactions.map((transaction) => {
    const row = transactionRow(transaction);
  });

  document.querySelector(".transactions").append(table);
}
