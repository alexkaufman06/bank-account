describe('BankAccount', function() {
  describe('deposit', function() {
    it("adds deposited money to the balance", function() {
      var testAccount = Object.create(BankAccount);
      testAccount.deposit(15);
      expect(testAccount.balance).to.equal(15);
    });
  });

  describe("withdraw", function() {
    it("subtracts the amount from the balance", function() {
      var testAccount = Object.create(BankAccount);
      testAccount.withdraw(15);
      expect(testAccount.balance).to.equal(-15);
    });
  });
});
