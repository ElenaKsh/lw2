var authUserData = null;
var userDatabase = [];
function register(email, password) {
  let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(email) == false) {
    return "Данный email невалиден";
  }
  let digits = "0123456789";
  let is_digit = false;
  for (let i = 0; i < password.length; i++) {
    if (digits.indexOf(password[i]) != -1) {
      is_digit = true;
    }
  }

  if (password.length >= 6 && is_digit && (password.charAt(0).toUpperCase() == password.charAt(0))) {
    userData = [email, password];
    userDatabase.push(userData);
    return "Пользователь успешно добавлен";
  } else {
    return "Данный пароль не валиден";
  }
}

function signIn(email, password) {
  // ваш код
  // проверка на валидность email, пароля (6 символов, начинается с большой буквы)
  // проверка наличия пользователя в userDatabase
  // заполнение authUserData
}

function signOut() {
  // ваш код
}

function resetPassword(email, oldPassword, newPassword) {
  // функция восстановления пароля
  // должна изменять пароль пользователя если старый пароль введен верно и новый пароль соответствует правилам формата пароля
}

function isAuth() {
  // функция возвращает true если пользователь авторизован, false если нет
}

//console.log(validator("25"));

console.log(register('smyshlyaev12@list.ru','Password123'));
console.log(userDatabase);