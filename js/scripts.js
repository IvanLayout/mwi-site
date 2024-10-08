$(function(){
	// Основной слайдер на главной
	$('.slider_text').owlCarousel({
		loop: true,
		margin: 0,
		dots: false,
		nav: false,
		navSpeed: 750,
		dotsSpeed: 750,
		smartSpeed: 750,
		autoplaySpeed: 750,
		items: 1,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		animateOut: 'fadeOutUp',
		animateIn: 'fadeInUp',
		mouseDrag: false,
		touchDrag: false,
		pullDrag: false,
		freeDrag: false
	})


	// Клиенты
	$('.clients').owlCarousel({
		loop: true,
		dots: true,
		nav: false,
		navSpeed: 500,
		dotsSpeed: 500,
		mouseDrag: false,
		margin: 15,
		responsive : {
			// breakpoint from 1024 up
			1024 : {
				items: 6
			},
			// breakpoint from 768 up
			768 : {
				items: 4
			},
			// breakpoint from 480 up
			480 : {
				items: 3
			},
			// breakpoint from 480 up
			0 : {
				items: 2
			}
		}
	})

	// Фото из инстаграм
	$('.slider_foto').owlCarousel({
		loop: true,
		dots: true,
		nav: true,
		navSpeed: 500,
		dotsSpeed: 500,
		mouseDrag: false,
		responsive : {
			// breakpoint from 1024 up
			1024 : {
				items: 5,
				margin: 40
			},
			// breakpoint from 768 up
			768 : {
				items: 4,
				margin: 40
			},
			// breakpoint from 480 up
			480 : {
				items: 2,
				margin: 20
			},
			// breakpoint from 480 up
			0 : {
				items: 1,
				margin: 15
			}
		}
	})

	// Слайдер сотрудников
	$('.slider_designMob').owlCarousel({
		loop: true,
		dots: false,
		nav: true,
		navSpeed: 500,
		dotsSpeed: 500,
		responsive : {
			// breakpoint from 1024 up
			1024 : {
				items: 4,
				margin: 40
			},
			// breakpoint from 768 up
			768 : {
				items: 3,
				margin: 40
			},
			// breakpoint from 480 up
			480 : {
				items: 2,
				margin: 20
			},
			// breakpoint from 480 up
			0 : {
				items: 1,
				margin: 15
			}
		}
	})

	// Слайдер сотрудников
	if( $(window).width() < 768 ) {
		$('.grig_team').owlCarousel({
			loop: true,
			dots: true,
			nav: false,
			navSpeed: 500,
			dotsSpeed: 500,
			mouseDrag: false,
			responsive : {
				// breakpoint from 1024 up
				1024 : {
					items: 3,
					margin: 20
				},
				// breakpoint from 768 up
				768 : {
					items: 2,
					margin: 20
				},
				// breakpoint from 480 up
				480 : {
					items: 2,
					margin: 20
				},
				// breakpoint from 480 up
				0 : {
					items: 1,
					margin: 20
				}
			}
		})
	}


	// Слайдер сотрудников
	if( $(window).width() < 1024 ) {
		$('.inner_advantages .grid').owlCarousel({
			loop: true,
			dots: true,
			nav: false,
			navSpeed: 500,
			dotsSpeed: 500,
			mouseDrag: false,
			responsive : {
				// breakpoint from 480 up
				480 : {
					items: 2,
					margin: 20
				},
				// breakpoint from 480 up
				0 : {
					items: 1,
					margin: 20
				}
			}
		})
	}


	$('.slider_comment').owlCarousel({
		loop: true,
		margin: 20,
		dots: true,
		nav: true,
		navSpeed: 500,
		dotsSpeed: 500,
		smartSpeed: 500,
		items: 1
	})


	// Наведение на картинку Услуг на главной
	$('.first_section .img_abs .partition a').hover(
		function(){
			$(this).parents('.img_abs').find('.partition').addClass('hover')
		},
		function(){
  			$(this).parents('.img_abs').find('.partition').removeClass('hover')
		}
	)


	// Моб. меню
	$('header .mob_menu_link').click(function(e){
		e.preventDefault()

		if( $(this).hasClass('active') ){
			$(this).removeClass('active').next().fadeOut()

			$('header .menu_abs .line_flex').removeClass('animated fadeInDown')
			$('header .menu_abs .line_bottom').removeClass('animated fadeInLeft')

			$('body').removeClass('hide')
		} else{
			$(this).addClass('active').next().fadeIn()

			$('header .menu_abs .line_flex').addClass('animated fadeInDown')
			$('header .menu_abs .line_bottom').addClass('animated fadeInLeft')

			$('body').addClass('hide')
		}
	})


	//Плавный скролинг к якорю
	$('a.scroll_link').click(function(){
		var anchor = $(this)
		$('html, body').stop().animate({
			scrollTop: $(anchor.parents('section')).next().offset().top
		}, 500)

		return false
	})


	// Всплывающие окна
	$('.modal_link').click(function(e){
		e.preventDefault()

		$.fancybox.close()

		$.fancybox.open({
			src  : $(this).attr('href'),
			type : 'inline',
			opts : {
				speed: 300,
				autoFocus : false,
				i18n : {
					'en' : {
						CLOSE : 'Закрыть'
					}
				},
				touch : false
			}
		})
	})


	// Увеличение картинки
	$('.fancy_img').fancybox({
		transitionEffect : 'slide',
		animationEffect : 'fade',
		backFocus: false,
		trapFocus: false,
		autoFocus: false,
		i18n : {
			'en' : {
				CLOSE : 'Закрыть'
			}
		}
	})


	//маска телефона
	$('input[type=tel]').inputmask('+7 (999) 999-99-99')

	//маска емейла
	$('input[type=mail]').inputmask("email")

	//маска денег
	$('input.money').inputmask('decimal', {
		rightAlign: false,
		groupSeparator: " ",
		autoGroup: true,
	})


	// Выбор файла
 	$('.file input[type=file]').change(function(){
 		var val = $(this).val()

 		var parent = $(this).parents('.file')

 		parent.find('.name').text(val)

 		if(parent.find('.name').text() == '') {
	        parent.find('.name').text('Загрузить файл')
	    }
 	})


 	// Паралакс картинок в проектах
	pageY = 0;

	var diff = 14;

	$('.projects .project').mousemove($.throttle(100, function(event) {
        var pos = {};

        pos.W = $(this).width();
        pos.H = $(this).height();
        pos.X = event.pageX - $(this).offset().left;
        pos.Y = event.pageY - $(this).offset().top;

        pos.X = Math.min(pos.W - 1, pos.X);
        pos.Y = Math.min(pos.H - 1, pos.Y);
        pos.X = Math.max(1, pos.X);
        pos.Y = Math.max(1, pos.Y);

        pos.dX = (diff * pos.X / pos.W - diff / 2) * -1;
        pos.dY = (diff * pos.Y / pos.H - diff / 2) * -1;

        pos.dX2 = (diff * pos.X / pos.W - diff / 2);
        pos.dY2 = (diff * pos.Y / pos.H - diff / 2);

       $(this).find('.bg.paral').css({transform: 'translate(' + pos.dX + 'px, ' + pos.dY + 'px)'})
       $(this).find('.logo.paral img').css({transform: 'translate(' + pos.dX2 + 'px, ' + pos.dY2 + 'px)'})

       $(this).find('.img1.paral').css({transform: 'translate(' + pos.dX + 'px, ' + pos.dY + 'px)'})
       $(this).find('.img2.paral').css({transform: 'translate(' + pos.dX2 + 'px, ' + pos.dY2 + 'px)'})
    }))





	// Видео и говорд в проектах
	$('body').on('mouseover', '.projects .project', function(e) {
		// Запус города при наведении
		if( $(this).find('.slider_img').length ) {
			slider_img.liMarquee('play')
		}

		if( $(this).find('video').length ) {
			var video = $(this).find('video')

			video.get(0).play()
		}
	})

	// Видео и говорд в проектах
	$('body').on('mouseleave', '.projects .project', function(e) {
		// Стоп города при наведении
		if( $(this).find('.slider_img').length ) {
			slider_img.liMarquee('pause')
		}

		if( $(this).find('video').length ) {
	  		var video = $(this).find('video')

			video.get(0).pause()
		}
	})


	//Табы
	$(".tabs_container").each(function(){
		var activeTabFirst = $(this).find(".tab_content:first").show()
	})

	$index = 0

	$timer = true

	$(".tabs_container .tabs li").click(function() {
		$index = $(this).index()

		$(".tabs_container .tabs li").each(function(){
			if ($(this).index() < $index) {
				$(this).addClass("view")
			}
			else{
				$(this).removeClass("view")
			}
		})

		var parentBox = $(this).parents('.tabs_container')

		$(parentBox).find(".tabs li").removeClass("active")
		$(this).addClass("active view")
		$(parentBox).find(".tab_content").hide()

		var activeTab = $(this).find("a").attr("href")
		$(activeTab).fadeIn()

		$(this).parent().attr('class', '').addClass('tabs')

		$timer = false

		$index2 = $index - 1

		$(this).parent().addClass('act' + $index2)

		return false
	})

	if( $(window).width() > 767 ){
		$(".tabs_container .tabs li a").click(function() {
			clearTimeout($stopTimer)

			$(this).parents('.tabs_container').addClass('no_anime')
		})

		if( $('.tabs').length ) {
			inView('.tabs')
				.on('enter', function(el){
					$('.tabs_container').find('.tabs').addClass('act')

					tabsTimer()
				})
		}
	}


	//Открытие seo текста
	$('.section_info .more a').click(function(e){
		e.preventDefault()

		$(this).hide()

		$(this).parents('.section_info').find('.text_block .hide').slideDown()
	})



	// Паралакс кружков в услугах
	var Sdiff = 14;

	$('.slider_amenities .service').mousemove($.throttle(100, function(event) {
        var pos = {};

        pos.W = $(this).width();
        pos.H = $(this).height();
        pos.X = event.pageX - $(this).offset().left;
        pos.Y = event.pageY - $(this).offset().top;

        pos.X = Math.min(pos.W - 1, pos.X);
        pos.Y = Math.min(pos.H - 1, pos.Y);
        pos.X = Math.max(1, pos.X);
        pos.Y = Math.max(1, pos.Y);

        pos.dX = (Sdiff * pos.X / pos.W - Sdiff / 2) * -1;
        pos.dY = (Sdiff * pos.Y / pos.H - Sdiff / 2) * -1;

        pos.dX2 = (Sdiff * pos.X / pos.W - Sdiff / 2);
        pos.dY2 = (Sdiff * pos.Y / pos.H - Sdiff / 2);

		$(this).find('.dot1').css({transform: 'translate(' + pos.dX + 'px, ' + pos.dY + 'px)'})
		$(this).find('.dot2').css({transform: 'translate(' + pos.dX2 + 'px, ' + pos.dY2 + 'px)'})
    }))


    // Паралакс кружков в услугах
	var Fdiff = 14;

	$('.first_sectionInner').mousemove($.throttle(100, function(event) {
        var pos = {};

        pos.W = $(this).width();
        pos.H = $(this).height();
        pos.X = event.pageX - $(this).offset().left;
        pos.Y = event.pageY - $(this).offset().top;

        pos.X = Math.min(pos.W - 1, pos.X);
        pos.Y = Math.min(pos.H - 1, pos.Y);
        pos.X = Math.max(1, pos.X);
        pos.Y = Math.max(1, pos.Y);

        pos.dX = (Fdiff * pos.X / pos.W - Fdiff / 2) * -1;
        pos.dY = (Fdiff * pos.Y / pos.H - Fdiff / 2) * -1;

        pos.dX2 = (Fdiff * pos.X / pos.W - Fdiff / 2);
        pos.dY2 = (Fdiff * pos.Y / pos.H - Fdiff / 2);

		$(this).find('.dot_anim1').css({transform: 'translate(' + pos.dX + 'px, ' + pos.dY + 'px)'})
		$(this).find('.dot_anim2').css({transform: 'translate(' + pos.dX2 + 'px, ' + pos.dY2 + 'px)'})
    }))


    // End Новая страница цены
    // Новые Табы
	$('body').on('click', '.tabs_text button', function(e) {
		e.preventDefault()

	    if( !$(this).hasClass('active') ) {
	    	let parent = $(this).closest('.tabs_container_text')
		    let activeTab = $(this).data('content')
        	let level = $(this).data('level')

		    parent.find('.tabs_text:first').find('button').removeClass('active')
		    parent.find('.tab_content_text.' + level).removeClass('active')

		    $(this).addClass('active')
		    $(activeTab).addClass('active')
	    }
	})

	// Бегущая строка
	if ( $('.logo_scroll').length ){
		$('.logo_scroll').liMarquee({
			drag: false,
			hoverstop: false
		})
	}
	// End Новая страница цены

	if ( $(window).width() > 1023 ) {
		var hh = 64
	} else {
		var hh = 0
	}

	$('.service-price table').stickyTableHeaders({ fixedOffset: hh })

			// $('.destroy').on('click', function(e){
			// 	$(".first table").stickyTableHeaders('destroy');
			// });

			// $('.apply').on('click', function(e){
			// 	$('.first table').stickyTableHeaders({fixedOffset: $('.header')});
			// })

	$('body').on('click', '.service-price__btn', function(e) {
		e.preventDefault()

		if( !$(this).hasClass('active') ) {
			let parent = $(this).closest('.service-price')
			let index = $(this).data('index')

			parent.find('td').removeClass('show')
			parent.find('.service-price__btn').removeClass('active')

			$(this).addClass('active')
			parent.find('td[data-number="' + index + '"]').addClass('show')
		}
	})


	// Mwi-slider
	if ( $('.mwi-slider').length ){
		new Swiper(".mwi-slider", {
			loop: true,
			spaceBetween: 0,
			effect: "fade",
			fadeEffect: {
				crossFade: true
			},
			autoplay: {
				delay: 5000,
				disableOnInteraction: false
			},
			navigation: {
			  nextEl: ".slider-button-next",
			  prevEl: ".slider-button-prev",
			},
			on: {
				init: function (swiper) {
					$(swiper.el).find('.swiper-wrapper').wrap('<div class="swiper-overflow"></div>')

					if ($(swiper.el).find('video').length){
						let video = $(swiper.el).find('video')
			
						video.get(0).pause()
					}
		
					if ($(swiper.el).find('.swiper-slide-active').find('video').length){
						let video = $(swiper.el).find('.swiper-slide-active').find('video')
			
						video.get(0).play()
					}

					setTimeout( function(){
						$(swiper.el).find('.swiper-slide-active').addClass('anim-letter')
					}, 300)
				},
				slideChangeTransitionStart: function (swiper){
					if ($(swiper.el).find('video').length){
						let video = $(swiper.el).find('video')
			
						video.get(0).pause()
					}

					$(swiper.el).find('.swiper-slide').removeClass('anim-letter')

					// Новое 17/12/2023
					$(swiper.el).find('.mwi-slider__video').addClass('_hide')
					// End Новое 17/12/2023
				},
				slideChangeTransitionEnd: function (swiper){
					if ($(swiper.el).find('.swiper-slide-active').find('video').length){
						let video = $(swiper.el).find('.swiper-slide-active').find('video')
			
						video.get(0).play()
					}

					$(swiper.el).find('.swiper-slide-active').addClass('anim-letter')

					// Новое 17/12/2023
					$(swiper.el).find('.mwi-slider__video').removeClass('_hide')
					// End Новое 17/12/2023
				}
			}
		})
	}
	// END Mwi-slider


	// oasis-slider
	if ($('.oasis-slider').length) {
		new Swiper('.oasis-slider', {
			spaceBetween: 0,
			slidesPerView: 1,
			loop: true,
			loopAdditionalSlides: 1,
			speed: 500,
			centeredSlides: true,
			autoplay: {
				delay: 1000,
			},
			effect: "coverflow",
			coverflowEffect: {
				rotate: 0,
				stretch: 47,
				depth: 0,
				modifier: 1,
				scale: .844,
				slideShadows: false,
			}
		})
	}
	// END oasis-slider
})

$(window).load(function(){
	// Шапка
	$('header.innet_header').wrap('<div class="header_wrap" style="height: ' + $('header').innerHeight() + 'px"></div>')

	if (navigator.userAgent.indexOf('Mac') > 0) {
		$('html').addClass('macOS')
	}

	//Высота первого блока
	var windowHeight = $(window).innerHeight()
    $('.first_section').innerHeight( windowHeight )

    // Повёрнутый текст
	textRotate()


	// Услуги
	$('.slider_amenities').owlCarousel({
		loop: true,
		dots: true,
		nav: true,
		navSpeed: 750,
		dotsSpeed: 750,
		mouseDrag: false,
		margin: 15,
		items: 1,
		onInitialized: function (event) {
			setHeight( $(event.target).find('.service'))

			var prevSlide_number = $(event.target).find('.owl-item.active').prev().find('.service').data('in-number')
			var prevSlide_name = $(event.target).find('.owl-item.active').prev().find('.service').data('in-name')

			$(event.target).parents('.box_amenities').find('.prev_slide .number').text(prevSlide_number)
			$(event.target).parents('.box_amenities').find('.prev_slide .name').text(prevSlide_name)

			var nextSlide_number = $(event.target).find('.owl-item.active').next().find('.service').data('in-number')
			var nextSlide_name = $(event.target).find('.owl-item.active').next().find('.service').data('in-name')

			$(event.target).parents('.box_amenities').find('.next_slide .number').text(nextSlide_number)
			$(event.target).parents('.box_amenities').find('.next_slide .name').text(nextSlide_name)
		},
		onTranslate: function (event) {
			$(event.target).parents('.box_amenities').find('.prev_slide').hide()
			$(event.target).parents('.box_amenities').find('.next_slide').hide()
		},
		onTranslated: function (event) {
			$(event.target).parents('.box_amenities').find('.prev_slide').fadeIn()
			$(event.target).parents('.box_amenities').find('.next_slide').fadeIn()

			var prevSlide_number = $(event.target).find('.owl-item.active').prev().find('.service').data('in-number')
			var prevSlide_name = $(event.target).find('.owl-item.active').prev().find('.service').data('in-name')

			$(event.target).parents('.box_amenities').find('.prev_slide .number').text(prevSlide_number)
			$(event.target).parents('.box_amenities').find('.prev_slide .name').text(prevSlide_name)

			var nextSlide_number = $(event.target).find('.owl-item.active').next().find('.service').data('in-number')
			var nextSlide_name = $(event.target).find('.owl-item.active').next().find('.service').data('in-name')

			$(event.target).parents('.box_amenities').find('.next_slide .number').text(nextSlide_number)
			$(event.target).parents('.box_amenities').find('.next_slide .name').text(nextSlide_name)
		},
		onResized: function(event){
			$(event.target).find('.service').height('auto')

			setHeight( $(event.target).find('.service'))
		}
	})

	// Услуги слайдер на внутренних
	$('.slider_amenitiesSmall').owlCarousel({
		loop: true,
		dots: true,
		nav: true,
		navSpeed: 500,
		dotsSpeed: 500,
		onInitialized: function (event) {
			setHeight( $(event.target).find('.service'))
		},
		onTranslate: function (event) {
			$(event.target).addClass('show')
		},
		onResized: function(event){
			$(event.target).find('.service').height('auto')

			setHeight( $(event.target).find('.service'))
		},
		responsive : {
			// breakpoint from 1024 up
			1024 : {
				items: 2,
				margin: 40
			},
			// breakpoint from 768 up
			768 : {
				items: 2,
				margin: 40
			},
			// breakpoint from 480 up
			480 : {
				items: 1,
				margin: 20
			},
			// breakpoint from 480 up
			0 : {
				items: 1,
				margin: 15
			}
		}
	})

	// Услуги слайдер на внутренних
	$('.amenitiesSmall').owlCarousel({
		loop: false,
		dots: true,
		nav: true,
		navSpeed: 500,
		dotsSpeed: 500,
		mouseDrag: false,
		onInitialized: function (event) {
			setHeight( $(event.target).find('.service'))
		},
		onResized: function(event){
			$(event.target).find('.service').height('auto')

			setHeight( $(event.target).find('.service'))
		},
		responsive : {
			// breakpoint from 1024 up
			1024 : {
				items: 2,
				margin: 40
			},
			// breakpoint from 768 up
			768 : {
				items: 2,
				margin: 40
			},
			// breakpoint from 480 up
			480 : {
				items: 1,
				margin: 20
			},
			// breakpoint from 480 up
			0 : {
				items: 1,
				margin: 15
			}
		}
	})


	// Услуги слайдер на внутренних
	$('.slider_amenitiesPromotion').owlCarousel({
		loop: true,
		dots: true,
		nav: true,
		navSpeed: 500,
		dotsSpeed: 500,
		onInitialized: function (event) {
			setHeight( $(event.target).find('.service'))
			setHeight( $(event.target).find('.service .text'))
		},
		onResized: function(event){
			$(event.target).find('.service').height('auto')
			$(event.target).find('.service .text').height('auto')

			setHeight( $(event.target).find('.service'))
			setHeight( $(event.target).find('.service .text'))
		},
		responsive : {
			// breakpoint from 1024 up
			1024 : {
				items: 2,
				margin: 40
			},
			// breakpoint from 768 up
			768 : {
				items: 2,
				margin: 40
			},
			// breakpoint from 480 up
			480 : {
				items: 1,
				margin: 20
			},
			// breakpoint from 480 up
			0 : {
				items: 1,
				margin: 15
			}
		}
	})


	// Услуги слайдер на внутренних
	$('.ratings .slider').owlCarousel({
		loop: true,
		dots: true,
		nav: false,
		navSpeed: 500,
		mouseDrag: false,
		dotsSpeed: 500,
		onInitialized: function (event) {
			setHeight( $(event.target).find('.slide'))
			setHeight( $(event.target).find('.slide .name'))
		},
		onResized: function(event){
			$(event.target).find('.slide').height('auto')
			$(event.target).find('.slide .name').height('auto')

			setHeight( $(event.target).find('.slide'))
			setHeight( $(event.target).find('.slide .name'))
		},
		responsive : {
			// breakpoint from 1024 up
			1024 : {
				items: 3,
				margin: 16
			},
			// breakpoint from 768 up
			768 : {
				items: 2,
				margin: 16
			},
			// breakpoint from 480 up
			480 : {
				items: 2,
				margin: 10
			},
			// breakpoint from 480 up
			0 : {
				items: 1,
				margin: 10
			}
		}
	})


	//Сетка диайна
	if( $(window).width() > 767 && $('.design').length ){
		var widthIt = ( $('.design').width()-40)/2

		$('.design .item').width( widthIt )

		$('.design').wookmark({
			align: 'center',
			autoResize: true,
			container: $('.design'),
			itemWidth: widthIt,
			offset: 40,
		})
	}


	$('body').on('mouseenter', '.project_louvers', function(e) {
		let thisEl = $(this)


		setTimeout(function(){
			thisEl.addClass('hover')
		}, 5300)
	})

	$('body').on('mouseout', '.project_louvers', function(e) {
		$(this).removeClass('hover')
	})
})


$(window).resize(function(){
	// Шапка
	if( $(window).width() < 1024 ) {
		$('header').removeClass('fixed')
		$('.header_wrap').height('auto')
	}


	//Высота первого блока
	var windowHeight = $(window).innerHeight()
	$('.first_section').innerHeight( windowHeight )

	// Повёрнутый текст
	textRotate()
})


$(window).scroll(function(){
	// Шапка
	if( $(window).width() > 1023 && $(window).scrollTop() > $('header').innerHeight() ) {
		$('header').addClass('fixed')
	}else{
		$('header').removeClass('fixed')
	}


	//Перекрацивоени шапке при достижении черных или белых боков
	$('.site_wrap > *').each(function(){
	 	if($(this).offset().top-64 < $(window).scrollTop()){
	 		if ($(this).hasClass('sector_white')) {
	 			$('header').addClass('headerBlack')
				$('header').removeClass('headerWhite')
	 		}

	 		if ($(this).hasClass('sector_black')) {
	 			$('header').addClass('headerWhite')
				$('header').removeClass('headerBlack')
	 		}
	 	}
	})

	if( $(window).width() > 1023 ) {
		// Смещение картинки на странице about при скролле
		$('.about_text .img_abs').css({'margin-top': - $(window).scrollTop()/4 + 'px'})
	}
})

function textRotate(){
	$('.pad_rotateText').each(function(){
		let el = $(this).find('.abs_text')
		$(this).find('.abs_text').show()

		el.css({
			'width': $(this).innerHeight(),
			'top' : ($(this).innerHeight()/2) - (el.width()/2) + parseInt($(this).css('padding-top')),
			'left' : (-$(this).innerHeight()/2) + (el.width()/2)
		})
	})
}

function setHeight(className){
	var maxheight = 0
	$(className).each(function() {
		if($(this).innerHeight() > maxheight) {
			maxheight = $(this).innerHeight()
		}
	})
	$(className).innerHeight(maxheight)
}


function tabsTimer(){
	if( $('.tabs_container .tabs li:eq('+ $index +')').next().length) {
		if ($timer) {
			$stopTimer = setTimeout(function(){
				$('.tabs_container .tabs li:eq('+ $index +')').next().trigger('click')

				$timer = true

				$('.tabs_container .tabs').attr('class', '').addClass('tabs')

				$('.tabs_container .tabs').addClass('act' + $index)

				tabsTimer()
			}, 5000)
		}
	}
}