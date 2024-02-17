// Новые изменения для коммита
// Функция генерации случайной буквы разного регистра
function generateRandomLetter() {
    var randomCharCode = Math.floor(Math.random() * 26) + 65;
    var randomLetter = String.fromCharCode(randomCharCode);
  
    // С вероятностью 0.5 делаем букву в нижнем регистре
    if (Math.random() < 0.5) {
      randomLetter = randomLetter.toLowerCase();
    }
  
    return randomLetter;
  }
  
  // Функция генерации случайного числа
  function generateRandomNumber() {
    return Math.floor(Math.random() * 10);
  }
  
  // Генерация капчи с буквами
  function generateLetterCaptcha() {
    var captcha = generateRandomLetter() + generateRandomLetter() + generateRandomLetter();
    return captcha;
  }
  
  // Генерация капчи с числами
  function generateNumberCaptcha() {
    var num1 = generateRandomNumber();
    var num2 = generateRandomNumber();
    var captcha = num1 + " + " + num2 + " = ?";
    return { num1, num2, captcha };
  }
  
  // Проверка на пустой ввод
  function isEmpty(obj) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        return false;
      }
    }
    return true;
  }
  
var result;
    document.getElementById("check").onclick = function handleSubmit(event) {
        event.preventDefault();
        var input = document.getElementById("captchaInput").value;
      
        // Проверка на пустой ввод
        if (isEmpty(input)) {
          alert("Пожалуйста, введите значение капчи.");
          return;
        }
        // Проверка капчи с буквами
        if (document.getElementById("letterCaptcha").textContent != ""){
            var letterCaptcha = document.getElementById("letterCaptcha").textContent;
            if (input == letterCaptcha) {
                alert("Верно! Кнопка отправки формы активна.");
                document.getElementById("submitButton").disabled = false;
                return;
            }
            else{
                alert("Ошибка! Пожалуйста, попробуйте еще раз.");
                result = generateNewCaptcha();
            }
            return;
        }
        
            
        
        // Проверка капчи с числами
        if (document.getElementById("numberCaptcha").textContent != "")
        {
            var numberCaptcha = document.getElementById("numberCaptcha").textContent;
            var sum = result.num1 + result.num2;
            if (parseInt(input) === sum) {
                alert("Верно! Кнопка отправки формы активна.");
                document.getElementById("submitButton").disabled = false;
            } else {
                alert("Ошибка! Пожалуйста, попробуйте еще раз.");
                result = generateNewCaptcha();
            }
            return;
        }
        
      }
  
  
  
  // Генерация новой капчи при ошибке
  function generateNewCaptcha() {
  
    var numberCaptcha = generateNumberCaptcha();
    document.getElementById("letterCaptcha").textContent = "";
    document.getElementById("numberCaptcha").textContent = numberCaptcha.captcha;
    let num1 = numberCaptcha.num1;
    let num2 = numberCaptcha.num2;
  
    document.getElementById("captchaInput").value = "";
    return {num1, num2};
  }
  document.getElementById("letterCaptcha").textContent = generateLetterCaptcha();
  // Генерация и отображение начальной капчи
function Accumulator(startingValue){
  this.value = parseInt(startingValue);
  this.read = function(){
    let result = prompt("Введите новое число")
    this.value += parseInt(result);
  };
}
let basket = new Accumulator(0);
document.getElementById("busk").onclick = function accum(){
  basket.read();
  alert("Ваше текущее число: " + basket.value);
};
function truncate(str, maxlength){
  if (String(str).length > maxlength){
    str = str.slice(0, maxlength) + "...";
  }
  return str;
}
let elems = document.querySelectorAll("div");
for (let elem of elems){
  elem.innerHTML = truncate(elem.innerHTML, 14);
}
