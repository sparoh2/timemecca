    /* Window scroll option */
    resizeOption();

  	function resizeOption() {
		var windowSize = $(window).width();
		if(windowSize < 992) {
			$('.header nav').addClass('d-mobile');
		}
		else {
			$('.header nav').removeClass('d-mobile');
		}
	}
	$(window).resize(function() {
		resizeOption();
	});

	/* Navigation Sub Menu View */
	function navSubmenu() {
		var nav_1stMenu = $('.nav-menu li');
		var nav_subMenu = $('.nav-submenu');

		nav_1stMenu.on('mouseover focusin', function() {
			$(this).addClass('active');
		}).on('mouseleave focusout', function() {
			$(this).removeClass('active');			
		});
	}

	/* Mobile Hamburger Menu */
	function hamburgerMenu() {
		var hamburger = document.getElementById('nav-hamburger');
		var nav = document.getElementById('nav');

		hamburger.classList.toggle('change');
		nav.classList.toggle('d-none');
	}

	/* Scroll Top Button */
	function scrolltoTop() {
		$('#pageTop').click(function(e) {
			e.preventDefault();
			$('html, body').animate({'scrollTop':'0'}, 600);
			return false;
		});
	}

	/* Slick Slide */
    $(function() {
		$('.main-slider').slick({
		  dots: false,
		  infinite: true,
		  speed: 500,
		  fade: true,
		  cssEase: 'linear',
		  prevArrow: $('.prev'),
		  nextArrow: $('.next')
		});

		$('.item-slider').slick({
		  dots: true,
		  infinite: true,
		  speed: 500,
		  fade: true,
		  cssEase: 'linear',
		  prevArrow: $('.item-prev'),
		  nextArrow: $('.item-next')
		});
	});