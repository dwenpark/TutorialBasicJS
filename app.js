const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("#login-form input");
const loginButton = loginForm.querySelector("#login-form button");

function onLoginButtonClick() {
	console.log(loginInput.value)
}
loginButton.addEventListener("click", onLoginButtonClick)