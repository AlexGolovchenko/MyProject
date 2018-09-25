//check input's data

document.querySelector("#send").onclick = valid;

function valid() {
    const form = document.querySelector("#form_auth"),
    email = form.email.value,
    emailReg = /[0-9a-zа-я-_.]+@[0-9a-zа-я.]+\.[a-zа-я]{2,6}/i,
    password = form.password.value,
    passwordReg = /[0-9a-zа-я]{2,15}/i,
    check = document.querySelector("#checkbox").checked;

    if (!email) {
        alert(`Введите свой e-mail.`)
    } else if (!emailReg.test(email)) {
        alert(`Возможно, вы ввели e-mail неправильно. Проверьте e-mail и попробуйте еще раз.`)
    } else if (!password) {
        alert(`Введите свой Пароль.`)
    } else if (!passwordReg.test(password)) {
        alert(`Возможно, вы ввели Пароль неправильно. Используйте от 2 до 15 букв и/или цифр.`)
    } else if (!check) {
        alert(`Пожалуйста, подтвердите, что вы не робот.`)
    } else {
        alert(`Поздравляю, вы успешно вошли на сайт! Нажмите Ок для подтверждения. \nСейчас будет совершен переход на Главную страницу.`);
        setTimeout('window.location = "index.html"', 200);
    }
}
