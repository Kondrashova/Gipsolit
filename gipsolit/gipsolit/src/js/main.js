$(document).ready(function(){

    new WOW().init();

    $('.popup-btn').on('click', function(event) {
        event.preventDefault();
        $('.popup').fadeIn();
            
    });
    $('.popup-close').on('click', function(event) {
        event.preventDefault();
        $('.popup').fadeOut();
            
    });

   $('.features-slider').slick({
       infinite: true,
       slidesToShow: 4,
       slidesToScroll: 1,
       responsive: [

        {
        breakpoint: 991,
        settings: {
        slidesToShow: 2,
        prevArrow: '<button class="prev arrow"></button>',
        nextArrow: '<button class="next arrow"></button>',
        slidesToScroll: 2
        }
        },
        {
        breakpoint: 767,
        settings: {
        slidesToShow: 1,
        prevArrow: '<button class="prev arrow"></button>',
        nextArrow: '<button class="next arrow"></button>',
        slidesToScroll: 1
        }
        }

        ]


            
        });
    $('.feedback-slider').slick({
        prevArrow: '<button type="button" class="prev-feedback"><img src="img/feedback/prev.svg"></button>',
        nextArrow: '<button type="button" class="next-feedback"><img src="img/feedback/next.svg"></button>',
    });

    $('form').submit(function(event) {
        event.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            alert("Сообщение успешно отправлено");
            $("form").trigger("reset");
        });
        return false;
    });

})