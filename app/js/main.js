$(function () {

    $('.menu__btn').on('click', function(){
        $('.menu__list').toggleClass('menu__list--active');
    })

//  toggle display to footer at small width

    // $('.footer-top__title').on('click', function() {
    //     $(this).next().slideToggle();
    //     $(this).toggleClass('--active');
    // });

// comments to products

    $('.product-tabs__top-item').on('click', function (e) {
        e.preventDefault();
        $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
        $(this).addClass('product-tabs__top-item--active');

        $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
        $($(this).attr('href')).addClass('product-tabs__content-item--active');

    });

//  --------

// slider to product

    $('.product-slide__thumb').slick({
        asNavFor: '.product-slide__big',
        focusOnSelect: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        vertical: true,
        draggable: false
    });
    $('.product-slide__big').slick({
        asNavFor: '.product-slide__thumb',
        draggable: false,
        arrows: false,
        fade: true,
    });

//  ---------

// buttons sort to shop-page

    $('.shop-content__filter-btn').on('click', function () {
        $('.shop-content__filter-btn').removeClass('shop-content__filter-btn--active');
        $(this).addClass('shop-content__filter-btn--active');
    });

    $('.button-list').on('click', function () {
        $('.product-item').addClass('product-item--list');
    })

    $('.button-grid').on('click', function () {
        $('.product-item').removeClass('product-item--list');
    })

//  -------

//  input styler

    $('.select-style, .product-one__item-num').styler();

//  -------

//  style price filter

    $('.filter-price__input').ionRangeSlider({
        type: "double",
        prefix: "$",
        onStart: function (data) {
            $('.filter-price__from').text(data.from);
            $('.filter-price__to').text(data.to);
        },
        onChange: function (data) {
            $('.filter-price__from').text(data.from);
            $('.filter-price__to').text(data.to);
        },
    });

// style slider

    $('.top-slider__inner').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 2000,
    });

// stars rate

    $(".star").rateYo({
        starWidth: "17px",
        normalFill: "#ccccce",
        ratedFill: "#ffc35b",
        readOnly: true,
    });

    // Timer

    function getTimeRemaining(endtime) {
        var t = Date.parse(endtime) - Date.parse(new Date());
        var seconds = Math.floor((t / 1000) % 60);
        var minutes = Math.floor((t / 1000 / 60) % 60);
        var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        var days = Math.floor(t / (1000 * 60 * 60 * 24));
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function initializeClock(id, endtime) {
        var clock = document.querySelector('.promo__clock');
        var daysSpan = clock.querySelector('.promo__days');
        var hoursSpan = clock.querySelector('.promo__hours');
        var minutesSpan = clock.querySelector('.promo__minutes');
        var secondsSpan = clock.querySelector('.promo__seconds');

        function updateClock() {
            var t = getTimeRemaining(endtime);

            daysSpan.innerHTML = t.days;
            hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
            minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
            secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

            if (t.total <= 0) {
                clearInterval(timeinterval);
            }
        }

        updateClock();
        var timeinterval = setInterval(updateClock, 1000);
    }

    var deadline = $('.promo__clock').attr('data-time');
    initializeClock('promo__clock', deadline);

    // ------------


});

