// Здесь тоже новые изменения в файле
let check = false;
while(!check)
{
    check = confirm("Привет, желаешь зарегистрироваться?");
    if (!check)
        alert("Попробуй еще раз");
    else alert("Круто");
}
let login = prompt("Введите логин");
if (login == null || login == "")
    alert("Отменено");
else if (login == "Админ")
{
    let password = prompt("Введите пароль");
    if (password == "Я главный")
        alert("Здравствуйте!");
    else if (password == null || password == "")
        alert("Отменено");
    else alert("Неверный пароль");
}
else alert("Ухади, не знаю таких");
