$('nav a').click(function(event) {
    event.preventDefault();

    var id = $(this).attr('href'),
        targetOffset = $(id).offset().top;

    $('body').animate({
        scrollTop: targetOffset - 20
    }, 500);
});

var $target = $('.anime');
var $target_special_1 = $('.anime-special-1');
var $target_special_2 = $('.anime-special-2');
var offsetop = $(window).height() * 3/4;

function animeScroll() {
    var documentTop = $(document).scrollTop();
    
    $target.each(function() {
        var itemTop = $(this).offset().top;

        if (documentTop > itemTop) {
            $(this).addClass('anime-start');
        } else {
            $(this).removeClass('anime-start');
        }
    });

    $target_special_1.addClass('anime-start')
    $target_special_2.addClass('anime-start')
}

animeScroll();