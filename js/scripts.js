var BankAccount = {
  balance: 0,
  withdraw: function(amount) {
    this.balance = this.balance - amount;
  },
  deposit: function(amount) {
    this.balance = this.balance + amount;
  }
};

$(document).ready(function() {
  $("form#new-name").submit(function(event) {
    event.preventDefault();

    var inputtedName = $("input#new-name").val();
    var initialDeposit = parseFloat($("input#initial-deposit").val());
    var newAccount = Object.create(BankAccount);
    newAccount.name = inputtedName;
    newAccount.deposit(initialDeposit);

    $("input#new-name").val("");
    $("input#initial-depsoit").val("");

    $("#box2").show();
    $("#account").show();
    $(".name").text(newAccount.name);
    $(".balance").text(newAccount.balance.toFixed(2));

    $("form#deposit-withdraw").submit(function(event) {
      event.preventDefault();

      var inputtedDeposit = $("input#deposit-amount").val().length ? parseFloat($("input#deposit-amount").val()) : 0;
      var inputtedWithdraw = $("input#withdraw-amount").val().length ? parseFloat($("input#withdraw-amount").val()) : 0;

      newAccount.deposit(inputtedDeposit);
      newAccount.withdraw(inputtedWithdraw);

      $("input#deposit-amount").val("");
      $("input#withdraw-amount").val("");

      $(".balance").text(newAccount.balance.toFixed(2));
    });
  });
});
