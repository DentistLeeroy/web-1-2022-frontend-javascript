class TransactionProxy {
  constructor() {}

  async getTransactions() {
    const data = await getLocalTransactions();
    return data;
  }
}

// const transactionProxy = new TransactionProxy("Hi");
// const date = new Date("2077-01-01");
