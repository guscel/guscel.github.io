// Funcão para navegação suave pelo menu navbar.

$('nav a').click(function(event) {
    event.preventDefault();

    var id = $(this).attr('href'),
        targetOffset = $(id).offset().top;

    $('body').animate({
        scrollTop: targetOffset - 20
    }, 500);
});

// Debounce do Lodash

debounce = function(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};


// Funções para animações

(function() {
    var $target = $('.anime');
    var $target_special_1 = $('.anime-special-1');
    var $target_special_2 = $('.anime-special-2');
    var offsetop = $(window).height() * 4/5;

    function animeScroll() {
        var documentTop = $(document).scrollTop();
        
        $target.each(function() {
            var itemTop = $(this).offset().top;
            console.log("entrou");

            if (documentTop > itemTop - offsetop) {
                $(this).addClass('anime-start');
            } else {
                $(this).removeClass('anime-start');
            }
        });

        $target_special_1.addClass('anime-start')
        $target_special_2.addClass('anime-start')
    }

    animeScroll();

    $(document).scroll(debounce(function() {
        animeScroll();
    }, 50));

}());