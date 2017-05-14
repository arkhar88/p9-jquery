$(function() {
    var carouselList = $('#js-test-carousel ul');
    var carousel = $('#js-test-carousel');

    function setCarouselMoveBtnPosition() {
        var carouselPos = carousel.position();
        $('.js-carousel-move-btn').css({top: carouselPos.top + carousel.height()/2 - $('.js-carousel-move-btn').height()/2});
        $('#js-arrow-left').css({right: carouselPos.left + 80});
        $('#js-arrow-right').css({left: carouselPos.left + 80});

        $('.js-carousel-counter-container').css({top: carouselPos.top + carousel.height() - 50});
    }

    // function setCarouselSlideCounter() {
    //   carouselList.children().each(function () {
    //     $('.js-carousel-counter-container').append('<span id="js-carousel-slide-counter" class="glyphicon glyphicon-record"></span>');
    //   });
    // }

    function moveFirstSlide() {
        var firstItem = carouselList.find('li:first');
        var lastItem = carouselList.find('li:last');
        lastItem.after(firstItem);
        carouselList.css({marginLeft: 0});
    }

    function moveLastSlide() {
        var firstItem = carouselList.find('li:first');
        var lastItem = carouselList.find('li:last');
        firstItem.before(lastItem);
        carouselList.css({marginLeft: 0});
    }

    function changeSlideRight() {
        carouselList.animate({marginLeft: -700}, 500, moveFirstSlide);
    }

    function changeSlideLeft() {
        moveLastSlide();
        carouselList.css({marginLeft: -700});
        carouselList.animate({marginLeft: 0}, 500);
    }

    setCarouselMoveBtnPosition();
    $('#js-arrow-left.js-carousel-move-btn').click(changeSlideLeft);
    $('#js-arrow-right.js-carousel-move-btn').click(changeSlideRight);
});
