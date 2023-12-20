// 1 Задание
document.getElementById('contents').addEventListener('click', function (event) {
    if (event.target.tagName === 'A') {
        var confirmLeave = confirm('Do you really want to leave the page?');
        if (!confirmLeave) {
            event.preventDefault();
        }
    }
});
// 2 Задание
function changeImage(newSource) {
    var mainImage = document.getElementById('mainImage');
    mainImage.src = newSource;
}
// 3 Задание
var list = document.getElementById('selectableList');

list.addEventListener('click', function (event) {
    event.preventDefault();
    var clickedItem = event.target;
    var isCtrlPressed = event.ctrlKey || event.metaKey;
    if (!isCtrlPressed) {
        var items = list.getElementsByTagName('li');
        for (var i = 0; i < items.length; i++) {
            items[i].classList.remove('selected');
        }
    }
    clickedItem.classList.toggle('selected');
});
// 4 Задание
var slider = document.getElementById('slider');
var handle = document.getElementById('slider-handle');
var isDragging = false;

handle.addEventListener('mousedown', function (e) {
    isDragging = true;
    e.preventDefault();
});

document.addEventListener('mouseup', function () {
    isDragging = false;
});

document.addEventListener('mousemove', function (e) {
    if (isDragging) {
        var sliderRect = slider.getBoundingClientRect();
        var percent = (e.clientX - sliderRect.left) / sliderRect.width;
        percent = Math.max(0, Math.min(1, percent)); // ограничиваем значение от 0 до 1
        updateSlider(percent);
    }
});

function updateSlider(percent) {
    var handleWidth = handle.offsetWidth;
    var barWidth = slider.clientWidth - handleWidth;
    var newPosition = percent * barWidth;
    handle.style.left = newPosition + 'px';
}