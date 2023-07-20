const REQUIRED = "REQUIRED";
const MIN_LENGTH = "MIN_LENGTH";

function validate(value, flag, validatorValue) {
  if (flag === REQUIRED) {
    return value.trim().length >= 0;
  }
  if (flag === MIN_LENGTH) {
    return value.trim().length > validatorValue;
  }
}

function createElement(TagName) {
  return document.createElement(TagName);
}

function unicodeToString(unicode) {
  return String.fromCodePoint(unicode);
}

function appendToBody(containerTagName, elementTagName, elementStyle, uName) {
  let body = document.body;
  let elementContainer = createElement(containerTagName);
  elementContainer.setAttribute("style", elementStyle);
  let createdElement = createElement(elementTagName);
  let elementInfo = document.createTextNode(
    `Hi ${uName} ${unicodeToString(0x1f600)}`
  );
  createdElement.appendChild(elementInfo);
  elementContainer.appendChild(createdElement);
  body.appendChild(elementContainer);
}

function getUserInputValue(inputElementid) {
  return document.getElementById(inputElementid).value;
}
function emptyInput(inputId) {
  const element = document.getElementById(inputId);
  element.value = "";
}

function createUser(userName, userPassword) {
  if (!validate(userName, REQUIRED) || !validate(userPassword, MIN_LENGTH, 5)) {
    throw new Error("Invalid inputs- username or password is wrong");
  }
  return {
    userName,
    userPassword,
  };
}

function showAlert(message) {
  alert(message);
}

function signupHandler(event) {
  event.preventDefault();

  const enteredName = getUserInputValue("username");
  const enteredPassword = getUserInputValue("password");

  try {
    const newUser = createUser(enteredName, enteredPassword);
    appendToBody(
      "div",
      "h1",
      "width: 50%; margin: 0 auto; border: 1px solid #ccc;text-align: center;margin-bottom:1rem;",
      enteredName
    );
    emptyInput("username");
    emptyInput("password");
  } catch (error) {
    showAlert(error.message);
  }
}

function connectForm(formId, formSubmitHandler) {
  const form = document.getElementById("user-input");
  form.addEventListener("submit", formSubmitHandler);
}

connectForm("user-input", signupHandler);
