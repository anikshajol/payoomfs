document
  .getElementById("login-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    console.log("login btn cliked");
    const phoneNumber = document.getElementById("phone-number").value;
    console.log(phoneNumber);
    // get pin

    const getPin = document.getElementById("pin").value;
    console.log(getPin);

    // this is temporary, not for all time;

    if (phoneNumber === "5" && getPin === "1234") {
      window.location.href = "./home.html";
    } else {
      alert("Username or password error");
    }
  });

// logout btn ->
