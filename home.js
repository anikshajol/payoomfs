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
    pinInput.value = "";
  } else {
    alert("Your pin number is incorrect");
    amountInput.value = "";
    pinInput.value = "";
  }
});

// logout btn

document.getElementById("logout-btn").addEventListener("click", function () {
  window.location.href = "./index.html";
});
