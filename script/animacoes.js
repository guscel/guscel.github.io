// Funcão para navegação suave pelo menu navbar.

var menuItens = document.querySelectorAll('.scrollsuave a');

menuItens.forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault();

        const element = event.target;
        const id = element.getAttribute('href');
        const top = document.querySelector(id).offsetTop;

        smoothScrollTo(0, top, 1500);
    });
});

function smoothScrollTo(endX, endY, duration) {
    const startX = window.scrollX || window.pageXOffset;
    const startY = window.scrollY || window.pageYOffset;
    const distanceX = endX - startX;
    const distanceY = endY - startY;
    const startTime = new Date().getTime();
  
    duration = typeof duration !== 'undefined' ? duration : 400;
  
    // Easing function
    const easeInOutQuart = (time, from, distance, duration) => {
      if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
      return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
    };
  
    const timer = setInterval(() => {
      const time = new Date().getTime() - startTime;
      const newX = easeInOutQuart(time, startX, distanceX, duration);
      const newY = easeInOutQuart(time, startY, distanceY, duration);
      if (time >= duration) {
        clearInterval(timer);
      }
      window.scroll(newX, newY);
    }, 1000 / 60); // 60 fps
  };

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
    }, 20));

}());