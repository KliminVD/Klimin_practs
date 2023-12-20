window.addEventListener('DOMContentLoaded', function () {
    centerImage();
    
    document.getElementById('center-container').addEventListener('click', function(event) {
        var x = event.clientX;
        var y = event.clientY;
        console.log('Clicked at coordinates: ' + x + ', ' + y);
    });
});

function centerImage() {
    var container = document.getElementById('center-container');
    var image = document.getElementById('centered-image');

    var containerWidth = container.offsetWidth;
    var containerHeight = container.offsetHeight;

    var imageWidth = image.width;
    var imageHeight = image.height;

    var offsetX = (containerWidth - imageWidth) / 2;
    var offsetY = (containerHeight - imageHeight) / 2;
    console.log(offsetX + " " + offsetY);
    image.style.position = 'absolute';
    image.style.left = offsetX + 'px';
    image.style.top = offsetY + 'px';
}