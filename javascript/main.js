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
  const continueBtn = document.getElementById("continue-btn");
  const cardNum = document.getElementById("card-numbers");
  const cardName = document.getElementById("card-name");
  const cardMonth = document.getElementById("card-month");
  const cardYear = document.getElementById("card-year");

  const originalCardNum = cardNum.innerText;
  const originalCardName = cardName.innerText;
  const originalMonth = cardMonth.innerText;
  const originalYear = cardYear.innerText;

  if (cardHolder === "") {
    valid = false;
    showError("cardholder");
  } else {
    cardName.innerText = cardHolder.toUpperCase();
    hideError("cardholder");
  }

  if (cardNumber === "" || !/^\d+$/.test(cardNumber)) {
    valid = false;
    showError("card-number");
  } else {
    cardNum.innerText = cardNumber;
    hideError("card-number");
  }

  if (month === "" || month > 12 || year === "" || year <= 24) {
    valid = false;
    showError("date");
  } else {
    cardMonth.innerText = month;
    cardYear.innerText = year;
    hideError("date");
  }

  if (cvc === "" || !/^\d{3,4}$/.test(cvc)) {
    valid = false;
    showError("cvc");
  } else {
    hideError("cvc");
  }

  if (valid) {
    msg.classList.remove("active");
    form.classList.add("active");
  }

  continueBtn.addEventListener("click", () => {
    msg.classList.add("active");
    form.classList.remove("active");
    form.reset();
    cardNum.innerText = originalCardNum;
    cardName.innerText = originalCardName;
    cardMonth.innerText = originalMonth;
    cardYear.innerText = originalYear;
  });
});

month.addEventListener("input", function () {
  if (month.value.length > 2) {
    month.value = month.value.slice(0, 2);
  }
});

year.addEventListener("input", function () {
  if (year.value.length > 2) {
    year.value = year.value.slice(0, 2);
  }
});

cvc.addEventListener("input", function () {
  if (this.value.length > 3) {
    this.value = year.value.slice(0, 3);
  }
});

function showError(elementId) {
  document.getElementById(elementId).nextElementSibling.style.display = "block";
}

function hideError(elementId) {
  document.getElementById(elementId).nextElementSibling.style.display = "none";
}
