//todo: выбор категорий
$(function() {

    $(".rate-star").rateYo({
        // колличество звёздочек 
        rating: 5,
        // размер звёздочек "ширина"
        starWidth: "12px",
        // заблокирует использование звёздочек
        readOnly: true
    });
    $('.product-slider__inner').slick({
        dots: true,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 4
    });
    var mixer = mixitup('.products__inner-box');
});