$(document).ready(function() {
var currentSlide = 0;
var slides = $('.testimonials-block__info');
var dots = $('.testimonials-block__slider');

// Устанавливаем активный цвет для первой точки
dots.eq(currentSlide).attr('src', '../images/slide_control_active.png');

dots.click(function() {
    var clickedDot = $(this);
    var dotIndex = dots.index(clickedDot);

    // Сбрасываем активный цвет для всех точек
    dots.attr('src', '../images/slide_control_normal.png');

    // Устанавливаем активный цвет для кликнутой точки
    clickedDot.attr('src', '../images/slide_control_active.png');

    slides.hide();
    slides.eq(dotIndex).fadeIn();

    currentSlide = dotIndex;
});
});
