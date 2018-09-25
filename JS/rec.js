//check input's data
document.querySelector("#send").onclick = valid;

function valid() {
    const form = document.querySelector("#form_rec"),
        subject = form.subject.value,
        subjectReg = /[0-9a-zа-я]{2,15}/i,
        email = form.email.value,
        emailReg = /[0-9a-zа-я-_.]+@[0-9a-zа-я.]+\.[a-zа-я]{2,6}/i,
        password = form.password.value,
        passwordReg = /[0-9a-zа-я]{2,15}/i,
        repassword = form.repassword.value,
        sex = form.sex.value,
        check = document.querySelector("#checkbox").checked;

    if (!subject) {
        alert(`Введите свое имя.`)
    } else if (!subjectReg.test(subject)) {
        alert(`Вы ввели свое имя неправильно. Используйте от 2 до 15 букв и/или цифр.`)
    } else if (email == "") {
        alert(`${subject}, введите свой e-mail.`)
    } else if (!emailReg.test(email)) {
        alert(`${subject}, вы ввели e-mail неправильно. Проверьте e-mail и попробуйте еще раз.`)
    } else if (!password) {
        alert(`${subject}, введите свой Пароль.`)
    } else if (!passwordReg.test(password)) {
        alert(`${subject}, вы ввели Пароль неправильно. Используйте от 2 до 15 букв и/или цифр.`)
    } else if (subject == password) {
        alert(`${subject}, Имя и Пароль не могут быть одинаковыми.`)
    } else if (repassword == "") {
        alert(`${subject}, повторите Пароль.`)
    } else if (repassword != password) {
        alert(`${subject}, пароли не совпадают.`)
    } else if (!sex) {
        alert(`${subject}, укажите свой пол.`)
    } else if (!check) {
        alert(`${subject}, подтвердите, что вы не робот.`)
    } else {
        alert(`${subject}, поздравляю! Вы успешно прошли регистрацию! Нажмите Ок для подтверждения. \nСейчас будет совершен переход на Главную страницу.`);
        setTimeout('window.location = "index.html"', 200)
    }
}
