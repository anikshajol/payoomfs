document.getElementById("fund-btn").addEventListener("click", function (event) {
  event.preventDefault();

  // getamount value

  const amountInput = document.getElementById("amount").value;
  // getPinValue
  const amountInputValue = Number(amountInput);
  const pinInput = document.getElementById("pin").value;
  const pinInputValue = Number(pinInput);

  //   get main balance

  const mainBalance = document.getElementById("main-balance").innerText;

  const mainBalanceToNumber = Number(mainBalance);

  const newBalance = amountInputValue + mainBalanceToNumber;

  if (pinInputValue === 1234) {
    document.getElementById("main-balance").innerText = newBalance;
  } else {
    alert("wrong password");
  }

  //   console.log(amountInput);
  //   console.log(pinValue);
});

// cash out

document.getElementById("cash-out").addEventListener("click", function (event) {
  event.preventDefault();

  let amountInput = document.getElementById("amount");

  let pinInput = document.getElementById("pin");

  const amountInputValue = parseFloat(amountInput.value);
  const pinInputValue = parseFloat(pinInput.value);

  const mainBalance = document.getElementById("main-balance");

  const mainBalanceToNumber = parseFloat(mainBalance.innerText);
  const newBalance = mainBalanceToNumber - amountInputValue;

  if (pinInputValue === 1234) {
    document.getElementById("main-balance").innerText = newBalance;
    amountInput.value = "";
  } else {
    alert("Your pin number is incorrect");
  }
});

// logout btn

document.getElementById("logout-btn").addEventListener("click", function () {
  window.location.href = "./index.html";
});

// add money toggle btn
document
  .getElementById("toggle-add-fund")
  .addEventListener("click", function () {
    const moneyAddField = document.getElementById("money-add-input");
    const cashOutInput = document.getElementById("cash-out-input");

    cashOutInput.classList.add("hidden");
    moneyAddField.classList.remove("hidden");
    const addMoneyBtn = document.getElementById("toggle-add-fund");
    addMoneyBtn.classList.add("btn-primary");
    const cashOut = document.getElementById("cash-ou");
    cashOut.classList.remove("btn-primary");
  });

// cashout toggle btn\

document.getElementById("cash-ou").addEventListener("click", function () {
  const cashOutInput = document.getElementById("cash-out-input");

  const moneyAddField = document.getElementById("money-add-input");

  moneyAddField.classList.add("hidden");

  cashOutInput.classList.remove("hidden");

  const cashOut = document.getElementById("cash-ou");
  const addMoneyBtn = document.getElementById("toggle-add-fund");
  addMoneyBtn.classList.remove("btn-primary");

  cashOut.classList.add("btn-primary");
});
