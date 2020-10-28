var authUserData = false;
var userDatabase = [];

function checkValidEmail(email) {
  let regularExpressionForCheckingMail = /^(([^<>()[\]\\.,;:\s@\']+(\.[^<>()[\]\\.,;:\s@\']+)*)|(\'.+\'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regularExpressionForCheckingMail.test(email);
}

function checkValidPassword(password) {
  return (
    password.length >= 6 &&
    password.search(/\d/) !== -1 &&
    password.charAt(0).toUpperCase() === password.charAt(0)
  );
}

function register(email, password) {
  if (!checkValidEmail(email)) {
    return "Данный email невалиден";
  }

  if (checkValidPassword(password)) {
    for (let i = 0; i < userDatabase.length; i++) {
      if (userDatabase[i].email === email) {
        return "Пользователь уже существует";
      }
    }
    userDatabase.push({ email: email, password: password });
    return "Пользователь успешно добавлен";
  } else {
    return "Данный пароль не валиден";
  }
}

function signIn(email, password) {
  if (!checkValidEmail(email)) {
    return "Данный email невалиден";
  }

  if (checkValidPassword(password)) {
    for (let i = 0; i < userDatabase.length; i++) {
      if (
        userDatabase[i].email === email &&
        userDatabase[i].password === password
      ) {
        authUserData = true;
        return "Вход выполнен";
      } else {
        return "Данного пользователя не существует";
      }
    }
  } else {
    return "Данный пароль не валиден";
  }
}

function signOut() {
  authUserData = false;
  return "Выход выполнен";
}

function resetPassword(email, oldPassword, newPassword) {
  if (!checkValidEmail(email)) {
    return "Данный email невалиден";
  }

  if (!checkValidPassword(oldPassword)) {
    return "Данный пароль не валиден";
  }

  if (!checkValidPassword(newPassword)) {
    return "Данный пароль не валиден";
  }

  for (let i = 0; i < userDatabase.length; i++) {
    if (
      userDatabase[i].email === email &&
      userDatabase[i].password === oldPassword
    ) {
      userDatabase[i][1] = newPassword;
      return "Пароль изменён";
    } else {
      return "Данного пользователя не существует";
    }
  }
}

function isAuth() {
  return authUserData;
}

console.log(register("olimpiada100@list.ru", "Password123"));
console.log(register("olimpiada100@list.ru", "Password125153"));
console.log(signIn("olimpiada100@list.ru", "Password123"));
console.log(
  resetPassword("olimpiada100@list.ru", "Password123", "Password1478524758")
);
console.log(signOut());
console.log(userDatabase);
console.log(authUserData);
