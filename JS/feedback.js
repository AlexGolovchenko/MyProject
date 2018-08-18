//check input's data

function valid(form) {
  var fail = false;
  subject = form.subject.value;
  subject_pattern = /[0-9a-zа-я-_]{2,15}/i;
  email = form.email.value;
  email_pattern = /[0-9a-zа-я-_.]+@[0-9a-zа-я.]+\.[a-zа-я]{2,6}/i;
  theme = form.theme.value;
  theme_pattern = /[0-9a-zа-я-_ ]{1,30}/i;
  message = form.message.value;
  check = document.getElementById("checkbox").checked;

  if (subject == "")
    fail = "Введите свое имя.";
  else if (subject_pattern.test(subject) == false)
    fail = "Вы ввели свое имя неправильно. Используйте от 2 до 15 букв и/или цифр. ";
  else if (email == "")
    fail = subject + ", введите свой e-mail.";
  else if (email_pattern.test(email) == false)
    fail = subject + ", вы ввели e-mail неправильно. Проверьте свой e-mail и попробуйте еще раз.";
  else if (theme == "")
    fail = subject + ", введите тему сообщения.";
  else if (theme_pattern.test(theme) == false)
    fail = subject + ", вы ввели тему сообщения неверно. \nПожалуйста, используйте до 30 букв и/или цифр. ";
  else if (message == "")
    fail = subject + ", введите свое сообщение.";
  else if (check == false)
    fail = subject + ", подтвердите, что вы не робот.";
  if (fail)
    alert(fail);
  else {
    alert(subject + ", ваше обращение успешно зарегистрировано. \nСейчас будет совершен переход на Главную страницу.");
    setTimeout('window.location = "index.html"', 500);
  }
}
