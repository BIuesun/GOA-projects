function Bank(owner, amount) {
    this.owner = owner; 
    this.amount = amount; 

    // შეტანა
    this.deposit = function (depositAmount) {
      if (depositAmount > 0) {
        this.amount += depositAmount;
        console.log(`${depositAmount} deposited. Current balance: ${this.amount}`);
      } else {
        console.log("Please enter a positive amount.");
      }
    };
  
    // გამოტანა
    this.withdraw = function (withdrawAmount) {
      if (withdrawAmount > 0 && withdrawAmount <= this.amount) {
        this.amount -= withdrawAmount;
        console.log(`${withdrawAmount} withdrawn. Current balance: ${this.amount}`);
      } else if (withdrawAmount > this.amount) {
        console.log("Insufficient balance.");
      } else {
        console.log("Please enter a positive amount.");
      }
    };
  
    // ბალანსი
    this.showBalance = function () {
      console.log(`${this.owner}: ${this.amount}`);
    };
  }
  

  let account1 = new Bank("Luka", 1000);
  let account2 = new Bank("Nika", 500);
  

  account1.deposit(200);    
  account1.withdraw(300);   
  account1.showBalance();  
  
  account2.deposit(100);    
  account2.withdraw(700);   
  account2.showBalance(); 
  