function handleLogin(e) {
  e.preventDefault();
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
