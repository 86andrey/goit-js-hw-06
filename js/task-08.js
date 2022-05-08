const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const { elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Все поля должны быть заполнены!");
  } else { const formObject = {
        [email.name]: email.value,
        [password.name]: password.value,
    };
    console.log(formObject);
  }
  event.currentTarget.reset();
}