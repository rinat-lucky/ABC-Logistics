// slider

const slider = tns({
    container: '.slider-inner',
    items: 1,
    slideBy: 'page',
    controls: false,
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000
});

document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
});

document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
});


// modal + overlay

$('[data-modal=consultation').on('click', function () {
    $('.overlay, #consultation').fadeIn();
});
$('.modal__close').on('click', function () {
    $('.overlay, #consultation').fadeOut('slow');
});

$('.overlay').click(function (e) {
    if(e.target == this) $('.modal__close').trigger('click');
});


//  validate 

function validateForms(form){
    $(form).validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            phone: {
                required: true,
                minlength: 7
            },
            email: {
                required: false,
                email: true
            },
            message: {
                required: true,
                minlength: 10
            },
            checkbox: {
                required: true
            }
        },
        messages: {
            name: {
                required: "Пожалуйста, введите свое имя",
                minlength: jQuery.validator.format("Введите не менее {0} символов!")
            },
            phone: {
                required: "Пожалуйста, введите свой номер телефона",
                minlength: jQuery.validator.format("Введите не менее {0} символов!")
            },
            email: {
                email: "Неправильно введен адрес почты"
            }, 
            message: {
                required: "Пожалуйста, введите текст сообщения",
                minlength: jQuery.validator.format("Введите не менее {0} символов!")
            },
            checkbox: {
                required: "Пожалуйста, ознакомьтесь с Политикой и поставьте галочку"
            }
        }
    });
}
validateForms('#contact-form');
validateForms('#modal-form');


// mask

$("input[name=phone]").mask("+7 (999) 999-9999");