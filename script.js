// Lógica do formulário de login
function handleLogin(e) {
  e.preventDefault();

  // https://stackoverflow.com/questions/588263/how-can-i-get-all-a-forms-values-that-would-be-submitted-without-submitting
  const formData = new FormData(e.target);
  const email = formData.get("email");
  const password = formData.get("password");

  if (email !== "tryber@teste.com" || password !== "123456") {
    return alert("Email ou senha inválidos.");
  }

  return alert("Olá, Tryber!");
}

const loginForm = document.getElementById("trybewarts-login");
loginForm.addEventListener("submit", handleLogin);

// Lógica de habilitar e desabilitar botão de envio de formulário
function handleSubmitButton() {
  const agreementCheckbox = document.getElementById("agreement");
  const submitButton = document.getElementById("submit-btn");

  if (agreementCheckbox.checked) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}

const agreementCheckbox = document.getElementById("agreement");
agreementCheckbox.addEventListener("change", handleSubmitButton);
