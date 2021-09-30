let windowWidth = $(window).width();

$('.main').mousemove(function (event) {
    let moveX = (($(window).width() / 50) - event.pageX) * 0.01;
    let moveY = (($(window).height() / 50) - event.pageY) * 0.01;

    $('.wrapper').css('margin-left', moveX + 'px');
    $('.wrapper').css('margin-top', moveY + 'px');
});

let constrain = 200;
let mouseOverContainer = document.getElementById("body");
let logoLayer = document.getElementById("logo");

function transforms(x, y, el) {
    let box = el.getBoundingClientRect();
    let calcX = -(y - box.y - (box.height / 2)) / constrain;
    let calcY = (x - box.x - (box.width / 2)) / constrain;

    return "perspective(100px) "
        + "   rotateX(" + calcX + "deg) "
        + "   rotateY(" + calcY + "deg) ";
};

function transformElement(el, xyEl) {
    el.style.transform = transforms.apply(null, xyEl);
}

mouseOverContainer.onmousemove = function (e) {
    let xy = [e.clientX, e.clientY];
    let position = xy.concat([logoLayer]);

    window.requestAnimationFrame(function () {
        transformElement(logoLayer, position);
    });
};