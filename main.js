const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let valid = true;

  const cardHolder = document.getElementById("cardholder").value.trim();
  const cardNumber = document.getElementById("card-number").value.trim();
  const month = document.getElementById("month").value.trim();
  const year = document.getElementById("year").value.trim();
  const cvc = document.getElementById("cvc").value.trim();
  const msg = document.getElementById("message");

  if (cardHolder === "") {
    valid = false;
    showError("cardholder");
  } else {
    hideError("cardholder");
  }

  if (cardNumber === "" || !/^\d+$/.test(cardNumber)) {
    valid = false;
    showError("card-number");
  } else {
    hideError("card-number");
  }

  if (month === "" || year === "") {
    valid = false;
    showError("date");
  } else {
    hideError("date");
  }

  if (cvc === "") {
    valid = false;
    showError("cvc");
  } else {
    hideError("cvc");
  }

  if (valid) {
    msg.classList.remove("active");
    setTimeout(() => {
      msg.classList.add("active");
      form.reset();
    }, 3000);
  }
});

function showError(elementId) {
  document.getElementById(elementId).nextElementSibling.style.display = "block";
}

function hideError(elementId) {
  document.getElementById(elementId).nextElementSibling.style.display = "none";
}
