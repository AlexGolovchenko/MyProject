//check input's data

function valid(form) {
  var fail = false;
  subject = form.subject.value;
  subject_pattern = /[0-9a-zа-я-_]{2,15}/i;
  email = form.email.value;
  email_pattern = /[0-9a-zа-я-_.]+@[0-9a-zа-я.]+\.[a-zа-я]{2,6}/i;
  password = form.password.value;
  password_pattern = /[0-9a-zа-я]{2,15}/i;
  Repassword = form.Repassword.value;
  sex = form.sex.value;
  check = document.getElementById("checkbox").checked;

  if (subject == "")
    fail = "Введите свое имя.";
  else if (subject_pattern.test(subject) == false)
    fail = "Вы ввели свое имя неправильно. Используйте от 2 до 15 букв и/или цифр. ";
  else if (email == "")
    fail = subject + ", введите свой e-mail.";
  else if (email_pattern.test(email) == false)
    fail = subject + ", вы ввели e-mail неправильно. Проверьте e-mail и попробуйте еще раз.";
  else if (password == "")
    fail = subject + ", введите свой Пароль.";
  else if (password_pattern.test(password) == false)
    fail = subject + ", вы ввели Пароль неправильно. Используйте от 2 до 15 букв и/или цифр.";
  else if (subject == password)
    fail = subject + ", Имя и Пароль не могут быть одинаковыми.";
  else if (Repassword == "")
    fail = subject + ", повторите Пароль.";
  else if (Repassword != password)
    fail = subject + ", пароли не совпадают.";
  else if (sex == "")
    fail = subject + ", укажите свой пол.";
  else if (check == false)
    fail = subject + ", подтвердите, что вы не робот.";
  if (fail)
    alert(fail);
  else {
    alert(subject + ", поздравляю! Вы успешно прошли регистрацию! Нажмите Ок для подтверждения. \nСейчас будет совершен переход на Главную страницу.");
    setTimeout('window.location = "index.html"', 500);
  }
}
