(function () {
  'use strict';

  /*const account1 = {
    balance: 1000
  };

  const account2 = {
    balance: 2000
  };*/

  function createAccount(openingBalance) {
    return {
      balance: openingBalance,
      /*performTransaction: function (amount) {
        this.balance += amount;
      }*/
    };
  }

  function performTransaction(amount, memo) {
    console.log(memo);
    this.balance += amount;
  }

  const account1 = createAccount(1000);
  const account2 = createAccount(2000);

  //account1.performTransaction(100);
  //account1.performTransaction(-50);

  //performTransaction(100);
  //performTransaction(-50);
  performTransaction.call(account1, 100, 'gift');
  performTransaction.call(account1, -50, 'pizza');
  performTransaction.call(account2, -50, 'ice cream');

  performTransaction.apply(account1, [100, 'gift']);
  performTransaction.apply(account1, [-50, 'pizza']);
  performTransaction.apply(account2, [-50, 'ice cream']);

  const depositIntoAccount1 = performTransaction.bind(account1);
  depositIntoAccount1(150, 'bound to account 1');

  const withdraw25FromAccount2 = performTransaction.bind(account2, 25);

  console.log(account1, account2);

  withdraw25FromAccount2('1');
  withdraw25FromAccount2('2');

  console.log(account1, account2);
}());
