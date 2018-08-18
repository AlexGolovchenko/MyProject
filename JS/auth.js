//check input's data

function valid(form) {
  var fail = false;
  email = form.email.value;
  email_pattern = /[0-9a-zа-я-_.]+@[0-9a-zа-я.]+\.[a-zа-я]{2,6}/i;
  password = form.password.value;
  password_pattern = /[0-9a-zа-я]{2,15}/i;
  check = document.getElementById("checkbox").checked;

  if (email == "")
    fail = "Введите свой e-mail.";
  else if (email_pattern.test(email) == false)
    fail = "Возможно, вы ввели e-mail неправильно. Проверьте e-mail и попробуйте еще раз.";
  else if (password == "")
    fail = "Введите свой Пароль.";
  else if (password_pattern.test(password) == false)
    fail = "Возможно, вы ввели Пароль неправильно. Используйте от 2 до 15 букв и/или цифр.";
  else if (check == false)
    fail = "Пожалуйста, подтвердите, что вы не робот.";
  if (fail)
    alert(fail);
  else {
    alert("Поздравляю, вы успешно вошли на сайт! Нажмите Ок для подтверждения. \nСейчас будет совершен переход на Главную страницу.");
    setTimeout('window.location = "index.html"', 200);
  }
}
