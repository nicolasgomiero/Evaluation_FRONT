var button = document.querySelector('button');
var image = document.querySelector('#cadreA');

button.addEventListener("mouseover", function() {
    image.style.opacity = "0.8";
});

button.addEventListener("mouseout", function() {
    image.style.opacity = "1.0";
});