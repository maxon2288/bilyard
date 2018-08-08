    $('#my-form').validate({
        rules: {
            email: {
                required: false,
                email: true,
            },
            phone: {
                required: true,
                 digits: true,
            },
            messages: {
                required: false,
            },
            name: {
                required: true,
            }
        },

        errorPlacement: function (error, element) {},

        submitHandler: function() {
            var form_data = $(this).serialize(); //собераем все данные из формы
            $.ajax({
                type: "POST", //Метод отправки
                url: '/mail.php', //путь до php фаила отправителя
                data: form_data,
                cache: false,
                processData: false,
                contentType: false,
                success: function() {
                    $(".modal").removeClass('visible');
                    $(".modal-good, .overlay").addClass('visible');
                    $('#my-price-form').trigger( 'reset' );
                    setTimeout(function() { $(".modal-good, .overlay").removeClass('visible'); }, 2000);
                }
            });
        },
    });

    $('#my-form-modal').validate({
        rules: {
            email: {
                required: false,
                email: true,
            },
            phone: {
                required: true,
                 digits: true,
            },
            messages: {
                required: false,
            },
            name: {
                required: true,
            }
        },

        errorPlacement: function (error, element) {},

        submitHandler: function() {
            var form_data = $(this).serialize(); //собераем все данные из формы
            $.ajax({
                type: "POST", //Метод отправки
                url: '/mail.php', //путь до php фаила отправителя
                data: form_data,
                cache: false,
                processData: false,
                contentType: false,
                success: function() {
                    $(".modal").removeClass('visible');
                    $(".modal-good, .overlay").addClass('visible');
                    $('#my-price-form').trigger( 'reset' );
                    setTimeout(function() { $(".modal-good, .overlay").removeClass('visible'); }, 2000);
                }
            });
        },

    });

    $('#my-form-map').validate({
        rules: {
            email: {
                required: false,
                email: true,
            },
            phone: {
                required: true,
                 digits: true,
            },
            messages: {
                required: false,
            },
            name: {
                required: true,
            }
        },

        errorPlacement: function (error, element) {},

            submitHandler: function() {
                var form_data = $(this).serialize(); //собераем все данные из формы
                $.ajax({
                    type: "POST", //Метод отправки
                    url: '/mail.php', //путь до php фаила отправителя
                    data: form_data,
                    cache: false,
                    processData: false,
                    contentType: false,
                    success: function() {
                        $(".modal").removeClass('visible');
                        $(".modal-good, .overlay").addClass('visible');
                        $('#my-price-form').trigger( 'reset' );
                        setTimeout(function() { $(".modal-good, .overlay").removeClass('visible'); }, 2000);
                    }
                });
            },
    });

    $('#my-price-form').validate({
        rules: {
            email: {
                required: false,
                email: true,
            },
            phone: {
                required: true,
                 digits: true,
            },
            messages: {
                required: false,
            },
            name: {
                required: true,
            }
        },

        errorPlacement: function (error, element) {},

        submitHandler: function() {
            var form_data = $(this).serialize(); //собераем все данные из формы
            $.ajax({
                type: "POST", //Метод отправки
                url: '/mail.php', //путь до php фаила отправителя
                data: form_data,
                cache: false,
                processData: false,
                contentType: false,
                success: function() {
                    $(".modal").removeClass('visible');
                    $(".modal-good, .overlay").addClass('visible');
                    $('#my-price-form').trigger( 'reset' );
                    setTimeout(function() { $(".modal-good, .overlay").removeClass('visible'); }, 2000);
                }
            });
        },
        
        });

    $('#my-direction-form').validate({
        rules: {
            email: {
                required: false,
                email: true,
            },
            phone: {
                required: true,
                 digits: true,
            },
            messages: {
                required: false,
            },
            name: {
                required: true,
            }
        },

        errorPlacement: function (error, element) {},

        submitHandler: function() {
            var form_data = $(this).serialize(); //собераем все данные из формы
            $.ajax({
                type: "POST", //Метод отправки
                url: '/mail.php', //путь до php фаила отправителя
                data: form_data,
                cache: false,
                processData: false,
                contentType: false,
                success: function() {
                    $(".modal").removeClass('visible');
                    $(".modal-good, .overlay").addClass('visible');
                    $('#my-price-form').trigger( 'reset' );
                    setTimeout(function() { $(".modal-good, .overlay").removeClass('visible'); }, 2000);
                }
            });
        },
    });

    $(".header-2__menu-open").click(function() {
        $(".header-2__right, .humburger-overlay").addClass('visible')
    });

    $(".header__menu-open").click(function() {
        $(".header__right,  .humburger-overlay").addClass('visible')
    });

    $(".reviews__wrapper").lightGallery();
    $(".about__right").lightGallery();
    $(".video__block").lightGallery();
    $(".galery-wrapper").lightGallery();
    $(".galery-block").lightGallery();

    $(".price__button").click(function () {
        $(this).closest(".price__item").find(".price__caption").toggleClass('visible');
        $(this).closest(".price__item").toggleClass('visible');
    });

    //------------------
    //попупы
    //------------------

    $(".modal-good").removeClass("visible");

    $(".overlay, .modal-close, .header__close, .header-2__close, .humburger-overlay").click(function () {
        $(".modal-sign, .modal-shop, .overlay, .modal-good, .header__right, .header-2__right, .humburger-overlay").removeClass("visible");
    });

    $(".humburger-overlay, .modal-close, .header__close").click(function () {
        $(".modal-sign, .modal-shop, .humburger-overlay, .modal-good, .header__right").removeClass("visible");
    });

    $(".modal-open").click(function (e) {
        e.preventDefault();
        $(".modal-sign, .overlay").addClass("visible");
    });

    $(".modal-shop-open").click(function (e) {
        e.preventDefault();
        $(".modal-shop, .overlay").addClass("visible");
    });

    //------------------
    //попупы
    //------------------

    $('.html table').each(function () {
        $(this).wrap('<div class="main-table-container"></div>');
    });

    new WOW({
        mobile: false,
    }).init();

    $( ".tabs" ).tabs({
        hide: { effect: "fade", duration: 150 },
        show: { effect: "fade", duration: 150 },
    });
    var mySwiper1 = new Swiper('.reviews__container', {
		spaceBetween: 30,
        slidesPerView: 3,
        speed: 400,
        navigation: {
            nextEl: '.reviews__container .swiper-button-next',
            prevEl: '.reviews__container .swiper-button-prev',
        },
        breakpoints: {
            1020: {
                slidesPerView: 2,
            },
            425: {
                slidesPerView: 1,
            }
        },
    });

    var mySwiper1 = new Swiper('.services-slider', {
		spaceBetween: 30,
        slidesPerView: 3,
        speed: 400,
        navigation: {
            nextEl: '.services-slider .swiper-button-next',
            prevEl: '.services-slider .swiper-button-prev',
        },
        breakpoints: {
            1020: {
                slidesPerView: 2,
            },
            425: {
                slidesPerView: 1,
            }
        },
    });

    var mySwiper1 = new Swiper('.galery-slider', {
		spaceBetween: 30,
        slidesPerView: 3,
        speed: 400,
        navigation: {
            nextEl: '.galery-slider .swiper-button-next',
            prevEl: '.galery-slider .swiper-button-prev',
        },
        breakpoints: {
            1020: {
                slidesPerView: 2,
            },
            425: {
                slidesPerView: 1,
            }
        },
    });

    var mySwiper2 = new Swiper('.client__container', {
		spaceBetween: 30,
        slidesPerView: 5,
        speed: 400,
        navigation: {
            nextEl: '.client__button-next',
            prevEl: '.client__button-prev',
        },
        breakpoints: {
            1023: {
                slidesPerView: 4,
            },

            1023: {
                slidesPerView: 4,
            },

            600: {
                slidesPerView: 2,
            },

            1023: {
                slidesPerView: 4,
            },

            1023: {
                slidesPerView: 4,
            },
        }
    });

var trainSlider3 = new Swiper('.train-slider', {
    spaceBetween: 30,
    slidesPerView: 'auto',
    speed: 400, 
    loop: true,
    navigation: {
        nextEl: '.train__button.swiper-button-next',
        prevEl: '.train__button.swiper-button-prev',
    },

});

trainSlider3.on('slideChangeTransitionEnd', function () {
    var title = $(".swiper-slide-active img").data('title');
    var desc = $(".swiper-slide-active img").data('desc');
    var content = $(".swiper-slide-active img").data('content');
    
    $(".train__title").html(title);
    $(".train__desc").html(desc);
    $(".train__content").html(content);
    
});

var trainSlider2 = new Swiper('.tab-slider', {
    slidesPerView: 'auto',
    speed: 400,
});

var trainSlider1 = new Swiper('.swiper-container-galery', {
    spaceBetween: 10,
    slidesPerView: 2,
    slidesPerColumn: 3,
    speed: 400,
    navigation: {
        nextEl: 'swiper-container-galery .swiper-button-next',
        prevEl: 'swiper-container-galery .swiper-button-prev',
    },

});



$('.shop__img, .reviews__slide, reviews-2__slide, .galery-block-slide, .main-content__left-bg').each(function(){
    var goodsImg = $(this).find('img').attr('src');
    $(this).css('background-image','url('+goodsImg+')');
});

$(window).scroll(function () {
	var headerHeight = $('.header').innerHeight();
	var contentHeight = $('.main-content-container').innerHeight();
	var sidebarHeight = $('.left-sidebar').innerHeight();
    var sidebarBottomPos = contentHeight - sidebarHeight; 
    var trigger = $(window).scrollTop() - headerHeight;

    if ($(window).scrollTop() >= headerHeight) {
        $('.left-sidebar').addClass('fixed');
    } else {
        $('.left-sidebar').removeClass('fixed');
    }

    if (trigger >= sidebarBottomPos) {
        $('.left-sidebar').addClass('bottom');
    } else {
        $('.left-sidebar').removeClass('bottom');
    }
});