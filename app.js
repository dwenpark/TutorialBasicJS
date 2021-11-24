const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("#login-form input");

function onLoginButtonClick(event) {
	event.preventDefault();
	const username = loginInput.value;
	console.log(username)
}

loginForm.addEventListener("submit", onLoginButtonClick);