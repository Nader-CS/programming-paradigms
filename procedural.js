//Procedural paradigm
const form = document.getElementById("user-input");
const body = document.body;

const signupHandler = (event) => {
  event.preventDefault();

  const userNameInput = document.getElementById("username");
  const enteredName = userNameInput.value;

  const passwordInput = document.getElementById("password");
  const enteredPassword = passwordInput.value;

  if (enteredName.trim().length === 0) {
    alert("Inavalid input - username must not empty");
    return;
  }
  if (enteredPassword.trim().length <= 5) {
    alert("Inavalid input - password must be greater than 5");
    return;
  }

  const user = {
    userName: enteredName,
    password: enteredPassword,
  };

  let userElementContainer = document.createElement("div");
  userElementContainer.setAttribute(
    "style",
    "width: 50%; margin: 0 auto; border: 1px solid #ccc;text-align: center;margin-bottom:1rem;"
  );
  let userElement = document.createElement("h1");
  let userInfo = document.createTextNode(
    `Hi ${user.userName} ${String.fromCodePoint(0x1f600)}`
  );
  userElement.appendChild(userInfo);
  userElementContainer.appendChild(userElement);
  body.appendChild(userElementContainer);

  userNameInput.value = "";
  passwordInput.value = "";
};

form.addEventListener("submit", signupHandler);
