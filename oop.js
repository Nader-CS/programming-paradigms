class Validator {
  static REQUIRED = "REQUIRED";
  static MIN_LENGTH = "MIN_LENGTH";
  static validate(value, flag, validatorValue) {
    if (flag === this.REQUIRED) {
      return value.trim().length >= 0;
    }
    if (flag === this.MIN_LENGTH) {
      return value.trim().length > validatorValue;
    }
  }
}

class User {
  constructor(uName, uPassword) {
    this.userName = uName;
    this.password = uPassword;
  }
}

class Dom {
  static appendToBody(containerTagName, elementTagName, elementStyle, uName) {
    let body = document.body;
    let elementContainer = document.createElement(containerTagName);
    elementContainer.setAttribute("style", elementStyle);
    let createdElement = document.createElement(elementTagName);
    let elementInfo = document.createTextNode(
      `Hi ${uName} ${String.fromCodePoint(0x1f600)}`
    );
    createdElement.appendChild(elementInfo);
    elementContainer.appendChild(createdElement);
    body.appendChild(elementContainer);
  }
}

class UserInputForm {
  constructor() {
    this.form = document.getElementById("user-input");
    this.userNameInput = document.getElementById("username");
    this.passwordInput = document.getElementById("password");
    this.form.addEventListener("submit", this.signupHandler.bind(this));
  }
  signupHandler(event) {
    event.preventDefault();
    const enteredName = this.userNameInput.value;
    const enteredPassword = this.passwordInput.value;

    if (
      !Validator.validate(enteredName, Validator.REQUIRED) ||
      !Validator.validate(enteredPassword, Validator.MIN_LENGTH, 5)
    ) {
      alert("Invalid inputs- username or password is wrong");
      return;
    }
    const newUser = new User(enteredName, enteredPassword);
    Dom.appendToBody(
      "div",
      "h1",
      "width: 50%; margin: 0 auto; border: 1px solid #ccc;text-align: center;margin-bottom:1rem;",
      newUser.userName
    );
  }
}

new UserInputForm();
