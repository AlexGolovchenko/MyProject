//check input's data
document.querySelector("#send").onclick = valid;

function valid() {
    const form = document.querySelector('#form_feedback'),
        subject = form.subject.value,
        subjectReg = /[0-9a-zа-я]{2,15}/i,
        email = form.email.value,
        emailReg = /[0-9a-zа-я-_.]+@[0-9a-zа-я.]+\.[a-zа-я]{2,6}/i,
        theme = form.theme.value,
        themeReg = /[0-9a-zа-я-_ ]{1,30}/i,
        message = form.message.value,
        check = document.querySelector("#checkbox").checked;

    if (!subject) {
        alert(`Введите свое имя.`)
    } else if (!subjectReg.test(subject)) {
        alert(`Вы ввели свое имя неправильно. Используйте от 2 до 15 букв и/или цифр.`)
    } else if (!email) {
        alert(`${subject}, введите свой e-mail.`)
    } else if (!emailReg.test(email)) {
        alert(`${subject}, вы ввели e-mail неправильно. Проверьте свой e-mail и попробуйте еще раз.`)
    } else if (!theme) {
        alert(`${subject}, введите тему сообщения.`)
    } else if (!themeReg.test(theme)) {
        alert(`${subject},вы ввели тему сообщения неверно. \nПожалуйста, используйте до 30 букв и/или цифр.`)
    } else if (!message) {
        alert(`${subject}, введите свое сообщение.`)
    } else if (!check) {
        alert(`${subject}, подтвердите, что вы не робот.`)
    } else {
        alert(`${subject}, ваше обращение успешно зарегистрировано. \nСейчас будет совершен переход на Главную страницу.`);
        setTimeout('window.location = "index.html"', 200);
    }
}
