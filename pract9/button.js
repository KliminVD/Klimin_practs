button.onclick = function(){
    if (button.style.backgroundColor == 'rgba(255, 255, 255, 0.2)'){
        button.style.backgroundColor = 'red';
        window.addEventListener('mousemove', e => { // при движении курсора
            if (button.style.backgroundColor == 'red'){

            // ТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ для коммита
            var div = document.createElement('div');
            x = e.clientX;

            y = e.clientY;

            div.style.position = 'absolute';
            div.style.width = '40px';
            div.style.height = '40px';
            div.style.borderRadius = '20px';
            div.style.border = '3px solid';
            div.style.borderColor = 'black';
            div.style.left = x + 'px';   // Координаты дива X и Y не забываем указать еденицы измерения,

            div.style.top = y + 'px';    // например 40px или 20%


            document.body.appendChild(div);
            }
          })
    }
    else {
        button.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
    }
}
