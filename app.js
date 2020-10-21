var authUserData = null;
var userDatabase = [];
function register(email, password) {
  let regularExpressionForCheckingMail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (regularExpressionForCheckingMail.test(email) === false) {
    return "Данный email невалиден";
  }
  let digits = "0123456789";
  let isDigit = false;
  for (let i = 0; i < password.length; i++) {
    if (digits.indexOf(password[i]) != -1) {
      isDigit = true;
    }
  }

  if (
    password.length >= 6 &&
    isDigit &&
    password.charAt(0).toUpperCase() === password.charAt(0)
  ) {
    userData = [email, password];
    userDatabase.push(userData);
    return "Пользователь успешно добавлен";
  } else {
    return "Данный пароль не валиден";
  }
}

function signIn(email, password) {
  let regularExpressionForCheckingMail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (regularExpressionForCheckingMail.test(email) === false) {
    return "Данный email невалиден";
  }
  let digits = "0123456789";
  let isDigit = false;
  for (let i = 0; i < password.length; i++) {
    if (digits.indexOf(password[i]) != -1) {
      isDigit = true;
    }
  }

  if (
    password.length >= 6 &&
    isDigit &&
    password.charAt(0).toUpperCase() === password.charAt(0)
  ) {
    for (let i = 0; i < userDatabase.length; i++) {
      if (userDatabase[i][0] === email && userDatabase[i][1] === password) {
        authUserData = true;
        return "Вход выполнен";
      }
    }
  } else {
    return "Данный пароль не валиден";
  }
}

function signOut() {
  authUserData = null;
  return "Выход выполнен";
}

function resetPassword(email, oldPassword, newPassword) {
  let regularExpressionForCheckingMail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (regularExpressionForCheckingMail.test(email) === false) {
    return "Данный email невалиден";
  }
  let digits = "0123456789";
  let isDigitForOldPassword = false;
  for (let i = 0; i < oldPassword.length; i++) {
    if (digits.indexOf(oldPassword[i]) != -1) {
      isDigitForOldPassword = true;
    }
  }

  if (
    oldPassword.length < 6 ||
    !isDigitForOldPassword ||
    oldPassword.charAt(0).toUpperCase() !== oldPassword.charAt(0)
  ) {
    return "Данный пароль не валиден";
  }

  let isDigitForNewPassword = false;
  for (let i = 0; i < newPassword.length; i++) {
    if (digits.indexOf(newPassword[i]) != -1) {
      isDigitForNewPassword = true;
    }
  }

  if (
    newPassword.length < 6 ||
    !isDigitForNewPassword ||
    newPassword.charAt(0).toUpperCase() !== newPassword.charAt(0)
  ) {
    return "Данный пароль не валиден";
  }

  for (let i = 0; i < userDatabase.length; i++) {
    if (userDatabase[i][0] === email && userDatabase[i][1] === oldPassword) {
      userDatabase[i][1] = newPassword;
      return "Парорль изменён";
    }
  }
}

function isAuth() {
  return authUserData;
}

//console.log(validator("25"));

console.log(register("olimpiada100@list.ru", "Password123"));
console.log(signIn("olimpiada100@list.ru", "Password123"));
console.log(
  resetPassword("olimpiada100@list.ru", "Password123", "Password1478524758")
);
console.log(signOut());
console.log(userDatabase);
console.log(authUserData);
