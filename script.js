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
function handleAgreementCheckbox() {
  const agreementCheckbox = document.getElementById("agreement");
  const submitButton = document.getElementById("submit-btn");

  if (agreementCheckbox.checked) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}

const agreementCheckbox = document.getElementById("agreement");
agreementCheckbox.addEventListener("change", handleAgreementCheckbox);

function updateNumber() {
  let valor;
  valor = textArea.value.length;
  console.log(valor);
  const counter = document.getElementById("counter");
  counter.innerHTML = 500 - valor;
}

const textArea = document.getElementById("textarea");
textArea.addEventListener("keyup", updateNumber);

const mainForm = document.getElementById("evaluation-form");

// Lógica de envio do formulário principal
function handleFormSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.target);

  // https://stackoverflow.com/questions/8563240/how-to-get-all-checked-checkboxes/31113246
  const selected = document.querySelectorAll(
    `input[name="want-to-learn"]:checked`
  );
  let subjectList = [];
  for (let i = 0; i < selected.length; i++) {
    subjectList.push(selected[i].value);
  }

  mainForm.innerHTML = `
    <p>Nome: ${formData.get("name")} ${formData.get("surname")}</p>
    <p>Email: ${formData.get("email")}</p>
    <p>Casa: ${formData.get("house")}</p>
    <p>Família: ${formData.get("family")}</p>
    <p>Matérias: ${subjectList.join(", ")}</p>
    <p>Avaliação: ${formData.get("rate")}</p>
    <p>Observações: ${formData.get("obs")}</p>
  `;
}

mainForm.addEventListener("submit", handleFormSubmit);
