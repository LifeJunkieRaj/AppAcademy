window.addEventListener("DOMContentLoaded", (event) => {
  const driverLicenseForm = document.getElementById("drivers-license-form");
  const cardFields = document.querySelectorAll(".license__info");
  const buttonSubmit = document.querySelector(".form__submit");
  const donorButton = document.getElementById("donor-status");
  const donorCard = document.getElementById("card-donor-status")

  // ** Phase 1B: Update license with event delegation and event.target **
  driverLicenseForm.addEventListener("input", (event) => {
    cardFields.forEach((field) => {
      if (field.id.includes(event.target.id)) {
        field.innerHTML = event.target.value;
      }
    })
  })

  // ** Phase 2: Add focus and blur events to form inputs **
  driverLicenseForm.addEventListener("focus", (event) => {
    event.target.style.backgroundColor = "green";
  }, true);

  driverLicenseForm.addEventListener("focus", (event) => {
    event.target.style.backgroundColor = "";
  }, true);

  // ** Phase 3: Check that license numbers match **
  driverLicenseForm.addEventListener("submit", (event) => {
    const licenseNum = document.getElementById("license-num").value;
    const confirmLicenseNum = document.getElementById("license-num-confirm").value;

    if (licenseNum !== confirmLicenseNum) {
      event.preventDefault();
      alert("Emergency!!! PWs DO NOT MATCH!");
    } else {
      alert("Your form was successfully submitted!");
      updateClickCount();
    }
  });

  donorButton.addEventListener("click", (event) => {
    if (donorButton.checked) {
      donorCard.innerHTML = "There Goes My Hero!!!"
    } else {
      donorCard.innerHTML =  "You Pansy!!!"
    }
  })

  // ** Phase 4: Update submit button click count **
  let clicks = 0;
  buttonSubmit.addEventListener("click", (event) => {
    event.preventDefault();
    clicks += 1;
    buttonSubmit.innerHTML = `I was clicked ${clicks} times today!!!`;
  });

})
