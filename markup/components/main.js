      $('input[name="phone"]').mask('0 000 000 00 00');

    
    $('#form-blue').validate({
        rules: {
            email: {
                required: false,
                email: true,
            },
            phone: {
                required: true,
                
            },
            messages: {
                required: false,
            },
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
                    $("input[name='phone'], input[name='name'], input[name='email']").val(''); 
                    
                    $(".modal").removeClass('visible');
                    $(".modal-good, .overlay").addClass('visible');
                }
            });
        },
    });

    $('.modal-open').on('click', function(event) {
        event.preventDefault();
        if ($(this).hasClass("modal-turnir")) {
            $('.overlay, .modal-sign').addClass('visible');
            $('.modal-sign').addClass('modal-turnir');
            $('.main-form__title').text('Хотите организовать турнир или принять участие?');
        }
    });
    
    $('#my-form-modal').validate({
        rules: {
            email: {
                required: false,
                email: true,
            },
            phone: {
                required: true,
            },
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
                    $("input[name='phone'], input[name='name'], input[name='email']").val(''); 
                    
                    $(".modal").removeClass('visible');
                    $('body').css('overflow-y', 'hidden');
                    $(".modal-good, .overlay").addClass('visible');
                }
            });
        },

    });

    // $('#my-form-sidebar').validate({
    //     rules: {
    //         email: {
    //             required: false,
    //             email: true,
    //         },
    //         phone: {
    //             required: true,
    //         },
    //         messages: { 
    //             required: false,
    //             required: true,
    //         },
    //     },

    //     errorPlacement: function (error, element) {},

    //     submitHandler: function() {
    //         var form_data = $(this).serialize(); //собераем все данные из формы
    //         $.ajax({
    //             type: "POST", //Метод отправки
    //             url: '/mail.php', //путь до php фаила отправителя
    //             data: form_data,
    //             cache: false,
    //             processData: false,
    //             contentType: false,
    //             success: function() {
    //                 $(this).trigger( 'reset' );
    //                 $(".modal-good, .overlay").addClass('visible');
    //             }
    //         });
    //     },

    // });

    $('#my-form-shop').validate({
        rules: {
            email: {
                required: false,
                email: true,
            },
            phone: {
                required: true,
                
            },
            messages: { 
                required: false,
            },
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
                    $("input[name='phone'], input[name='name'], input[name='email']").val(''); 
                    
                    $(".modal").removeClass('visible');
                    $(".modal-good, .overlay").addClass('visible');
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
                
            },
            messages: {
                required: false,
            },
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
                    $("input[name='phone'], input[name='name'], input[name='email']").val(''); 
                    
                    $(".modal-good, .overlay").addClass('visible');
                },
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
                
            },
            messages: {
                required: false,
            },
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
                    $("input[name='phone'], input[name='name'], input[name='email']").val(''); 
                    $(".modal").removeClass('visible');
                    $(".modal-good, .overlay").addClass('visible');
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
                
            },
            messages: {
                required: false,
            },
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
                    $("input[name='phone'], input[name='name'], input[name='email']").val('');                     
                    $(".modal").removeClass('visible');
                    $(".modal-good, .overlay").addClass('visible');
                }
            });
        },

    });


    $('.direction-form').each(function(){
        var it = $(this);
        it.validate({
            rules: {
                email: {
                    required: false,
                    email: true,
                },
                phone: {
                    required: true,
                    
                },
                messages: {
                    required: false,
                },
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
                        $("input[name='phone'], input[name='name'], input[name='email']").val(''); 
                        $(".modal").removeClass('visible');
                        $(".modal-good, .overlay").addClass('visible');
                    }
                });
            },
        });
    });

    //--------------------------------
    //forms---------------------------
    //--------------------------------

    $(".header-2__menu-open").click(function() {
        $('body').css('overflow-y', 'hidden');
        $(".header-2__right, .humburger-overlay").addClass('visible')
    });

    $(".header__menu-open").click(function() {
        $('body').css('overflow-y', 'hidden');
        $(".header__right,  .humburger-overlay").addClass('visible')
    });

    $(".reviews__slide").lightGallery();
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
        $('body').css('overflow-y', 'scroll');
        $(".modal-sign, .modal-shop, .overlay, .modal-good, .header__right, .header-2__right, .humburger-overlay").removeClass("visible");
    });

    $(".humburger-overlay, .modal-close, .header__close").click(function () {
        $('body').css('overflow-y', 'scroll');
        $(".modal-sign, .modal-shop, .humburger-overlay, .modal-good, .header__right").removeClass("visible");
    });

    $(".modal-open").click(function (e) {
        e.preventDefault();
        $('body').css('overflow-y', 'hidden');
        $(".modal.modal-sign, .overlay").addClass("visible");
    });

    $(".modal-shop-open").click(function (e) {
        e.preventDefault();
        $('body').css('overflow-y', 'hidden');
        $(".modal-shop, .overlay").addClass("visible");
    });

    //------------------
    //попупы
    //------------------


    $('.html table').each(function () {
        $(this).wrap('<div class="main-table-container"></div>');
    });

    $('.html img').each(function () {
        $(this).wrap('<figure class="html-img"></figure>');
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
        keyboard: {
            enabled: true,
          },
        breakpoints: {
            1020: {
                slidesPerView: 2,
            },
            425: {
                slidesPerView: 1,
            },
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
        keyboard: {
            enabled: true,
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
        keyboard: {
            enabled: true,
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
        keyboard: {
            enabled: true,
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
    slidesPerView: 3,
    speed: 700, 
    loop: true,
    slidesOffsetBefore: 710,
    reverseDirection: true,
    navigation: {
        nextEl: '.train__button.swiper-button-next',
        prevEl: '.train__button.swiper-button-prev',
    },
    keyboard: {
        enabled: true,
      },
    
    breakpoints: {
        1400: {
            slidesOffsetBefore: 650,
        },
        1024: {
            slidesOffsetBefore: 430,
            slidesPerView: 2,

        },
        768: {
            slidesOffsetBefore: 0,
            slidesPerView: 1,
        },
    },

});     

$ ('.train-slider'). on ('click', '.swiper-slide', function (e) {
    e.stopPropagation ();
    var index = $ (this) .index ();
    if (trainSlider3.activeIndex === index + 1 || 2) {
        e.preventDefault ();
        trainSlider3.slidePrev ();
    }
    else if (trainSlider3.activeIndex === index - 1 || 2) {
        e.preventDefault ();
        trainSlider3.slideNext ();
    }
});

trainSlider3.on('slideChangeTransitionEnd', function () {
    var title = $(".swiper-slide-active img").data('title');
    var desc = $(".swiper-slide-active img").data('desc');
    var content = $(".swiper-slide-active img").data('content');

    $(".train__title").html(title);
    $(".train__desc").html(desc);
    $(".train__content").html(content);
    
});

// trainSlider3.slideTo(3); 

$(document).ready(function() {
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
    keyboard: {
        enabled: true,
      },
});

var galerySlider = new Swiper('.swiper-container-galery', {
    spaceBetween: 10,
    slidesPerView: 2,
    slidesPerColumn: 3,
    speed: 400,
    autoplay: {
        delay: 2000,
    },
    keyboard: {
        enabled: true,
      },
    navigation: {
        nextEl: '.swiper-container-galery .swiper-button-next',
        prevEl: '.swiper-container-galery .swiper-button-prev',
    },
    breakpoints: {
        768: {
            slidesPerView: 1,
            slidesPerColumn: 1,
        },
    },

});

// $(function() {
//     var el = $('.first__bg');
//     $(window).on('scroll', function () {
//         var scroll = $(document).scrollTop();
//         el.css({
//             'background-position':'50% '+(-.4*scroll)+'px'
//         });
//     });
// });



$('.swiper-container-galery .swiper-slide, .m-img-cont, .services .swiper-slide, .shop__img, .video__block, .reviews__slide, reviews-2__slide, .galery-block-slide, .main-content__left-bg').each(function(){
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

$(window).scroll(function () {
    if ($(window).scrollTop() >= 0) {
        $('.top-anchor').addClass('visible');
    } else {
        $('.top-anchor').removeClass('visible');
    };
});

$('.top-anchor').click(function (e) {
    e.preventDefault();
    $('html, body').animate({scrollTop: 0},500);
});

