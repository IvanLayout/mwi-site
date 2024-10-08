// Ширина окна для ресайза
WW = window.innerWidth || document.clientWidth || document.querySelector('body')[0].clientWidth

// Моб. версия
fakeResize = false
fakeResize2 = true

if (document.body.clientWidth < 375) {
	document.getElementsByTagName('meta')['viewport'].content = 'width=375, user-scalable=no'
}

// Observer API
const boxes = document.querySelectorAll('.lazyload, .animate, .selection-stages__slider')

function scrollTracking(entries) {
	for (const entry of entries) {
		if (entry.intersectionRatio > 0 && entry.target.getAttribute('data-src') && !entry.target.classList.contains('loaded')) {
			entry.target.src = entry.target.getAttribute('data-src')

			entry.target.classList.add('loaded')
		}

		if (entry.intersectionRatio >= 0.2 && entry.target.classList.contains('selection-stages__slider') && !entry.target.classList.contains('_autoplay')) {
			if( $stagesSlider != 0 ){
				if( window.screen.width > 1023 ){
					$stagesSlider.autoplay.start()
				}

				$('.selection-stages__progres-step:eq(0)').addClass('_progres')

				entry.target.classList.add('_autoplay')
			}
		}

		if (entry.intersectionRatio >= 0.3 && entry.target.classList.contains('animate') && !entry.target.classList.contains('_animated')) {
			entry.target.classList.add('_animated')
		}
	}
}

const observer = new IntersectionObserver(scrollTracking, {
	threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]
})

$stagesSlider = 0;

boxes.forEach(element => observer.observe(element))

$(function(){
	if ( $('.main-industries__slider').length ){
		new Swiper(".main-industries__slider", {
			loop: false,
			spaceBetween: 10,
			slidesPerView: 'auto',
			watchSlidesProgress: true,
			watchOverflow: true,
			preloadImages: false,
			lazy: {
				loadPrevNext: true,
				elementClass: 'lazyload',
				enabled: true,
				loadedClass: 'loaded',
				checkInView: true,
				loadOnTransitionStart: true
			},
			navigation: {
				nextEl: '.slider-button-small-next',
				prevEl: '.slider-button-small-prev'
			},
			pagination: {
				bulletActiveClass: 'slider-dot_active',
				bulletClass: 'slider-dot',
				clickableClass: 'slider-pagination-clickable',
				el: '.slider-pagination',
				clickable: true
			},
			breakpoints: {
				'320': {
					spaceBetween: 10,
					slidesPerView: 'auto',
				},
				'480': {
					spaceBetween: 10,
					slidesPerView: 3,
				},
				'768': {
					spaceBetween: 10,
					slidesPerView: 5,
				},
				'1024': {
					spaceBetween: 10,
					slidesPerView: 6,
				},
				'1200': {
					spaceBetween: 10,
					slidesPerView: 6,
				},
				// '1400': {
				// 	spaceBetween: 10,
				// 	slidesPerView: 8,
				// }
			},
			on: {
				init: function (swiper) {
					$(swiper.el).find('.swiper-wrapper').wrap('<div class="swiper-overflow"></div>')
				}
			}
		})
	}

	if ( $('.main-services__slider').length ){
		new Swiper(".main-services__slider", {
			loop: false,
			spaceBetween: 10,
			slidesPerView: 'auto',
			watchSlidesProgress: true,
			watchOverflow: true,
			preloadImages: false,
			lazy: {
				loadPrevNext: true,
				elementClass: 'lazyload',
				enabled: true,
				loadedClass: 'loaded',
				checkInView: true,
				loadOnTransitionStart: true
			},
			navigation: {
				nextEl: '.slider-button-small-next',
				prevEl: '.slider-button-small-prev'
			},
			pagination: {
				bulletActiveClass: 'slider-dot_active',
				bulletClass: 'slider-dot',
				clickableClass: 'slider-pagination-clickable',
				el: '.slider-pagination',
				clickable: true
			},
			breakpoints: {
				'320': {
					spaceBetween: 10,
					slidesPerView: 'auto',
				},
				'480': {
					spaceBetween: 10,
					slidesPerView: 2,
				},
				'768': {
					spaceBetween: 10,
					slidesPerView: 3,
				},
				'1024': {
					spaceBetween: 20,
					slidesPerView: 3,
				},
				// '1200': {
				// 	spaceBetween: 20,
				// 	slidesPerView: 4,
				// }
			},
			on: {
				init: function (swiper) {
					$(swiper.el).find('.swiper-wrapper').wrap('<div class="swiper-overflow"></div>')
				}
			}
		})
	}

	if ( $('.main-reviews__slider').length ){
		new Swiper(".main-reviews__slider", {
			loop: false,
			spaceBetween: 10,
			slidesPerView: 1,
			watchSlidesProgress: true,
			watchOverflow: true,
			preloadImages: false,
			lazy: {
				loadPrevNext: true,
				elementClass: 'lazyload',
				enabled: true,
				loadedClass: 'loaded',
				checkInView: true,
				loadOnTransitionStart: true
			},
			pagination: {
				bulletActiveClass: 'slider-dot_active',
				bulletClass: 'slider-dot',
				clickableClass: 'slider-pagination-clickable',
				el: '.slider-pagination',
				clickable: true
			},
			breakpoints: {
				'320': {
					spaceBetween: 10,
					slidesPerView: 1,
				},
				'480': {
					spaceBetween: 10,
					slidesPerView: 1,
				},
				'768': {
					spaceBetween: 10,
					slidesPerView: 2,
				},
				'1024': {
					spaceBetween: 25,
					slidesPerView: 3,
				}
			}
		})
	}

	if ( $('.we-offer__slider').length ){
		new Swiper(".we-offer__slider", {
			loop: false,
			spaceBetween: 0,
			slidesPerView: 'auto',
			watchSlidesProgress: true,
			watchOverflow: true,
			preloadImages: false,
			lazy: {
				loadPrevNext: true,
				elementClass: 'lazyload',
				enabled: true,
				loadedClass: 'loaded',
				checkInView: true,
				loadOnTransitionStart: true
			},
			navigation: {
				nextEl: '.slider-arrow-next',
				prevEl: '.slider-arrow-prev'
			},
			pagination: {
				bulletActiveClass: 'slider-dot_active',
				bulletClass: 'slider-dot',
				clickableClass: 'slider-pagination-clickable',
				el: '.slider-pagination',
				clickable: true
			},
			breakpoints: {
				'320': {
					spaceBetween: 0,
					slidesPerView: 'auto',
				},
				'480': {
					spaceBetween: 0,
					slidesPerView: 'auto',
				},
				'768': {
					spaceBetween: 0,
					slidesPerView: 2,
				},
				'1024': {
					spaceBetween: 30,
					slidesPerView: 3,
				},
				// '1200': {
				// 	spaceBetween: 0,
				// 	slidesPerView: 3,
				// }
			},
			on: {
				init: function (swiper) {
					$(swiper.el).find('.swiper-wrapper').wrap('<div class="swiper-overflow"></div>')
				}
			}
		})
	}

	if ( $('.our-life__slider').length ){
		new Swiper(".our-life__slider", {
			loop: false,
			spaceBetween: 10,
			slidesPerView: 'auto',
			watchSlidesProgress: true,
			watchOverflow: true,
			preloadImages: false,
			lazy: {
				loadPrevNext: true,
				elementClass: 'lazyload',
				enabled: true,
				loadedClass: 'loaded',
				checkInView: true,
				loadOnTransitionStart: true
			},
			pagination: {
				bulletActiveClass: 'slider-dot_active',
				bulletClass: 'slider-dot',
				clickableClass: 'slider-pagination-clickable',
				el: '.slider-pagination',
				clickable: true
			},
			breakpoints: {
				'320': {
					spaceBetween: 10,
					slidesPerView: 'auto',
				},
				'480': {
					spaceBetween: 10,
					slidesPerView: 'auto',
				},
				'768': {
					spaceBetween: 20,
					slidesPerView: 'auto',
				},
				'1024': {
					spaceBetween: 20,
					slidesPerView: 'auto',
				}
			},
			on: {
				sliderMove: function (swiper) {
					let pos = $(swiper.el).offset(),
						pageX = event.pageX,
						pageY = event.pageY,
						x = pageX - pos.left,
						y = pageY - pos.top

					$(swiper.el).find('.mouse-cursor').css({
						'left' : x + 'px',
						'top' : y + 'px'
					})
				}
			}
		})
	}

	if ( $('.main-articles__slider').length ){
		new Swiper(".main-articles__slider", {
			loop: false,
			spaceBetween: 15,
			slidesPerView: 'auto',
			watchSlidesProgress: true,
			watchOverflow: true,
			preloadImages: false,
			lazy: {
				loadPrevNext: true,
				elementClass: 'lazyload',
				enabled: true,
				loadedClass: 'loaded',
				checkInView: true,
				loadOnTransitionStart: true
			},
			pagination: {
				bulletActiveClass: 'slider-dot_active',
				bulletClass: 'slider-dot',
				clickableClass: 'slider-pagination-clickable',
				el: '.slider-pagination',
				clickable: true
			},
			breakpoints: {
				'320': {
					spaceBetween: 15,
					slidesPerView: 'auto',
				},
				'480': {
					spaceBetween: 15,
					slidesPerView: 'auto',
				},
				'768': {
					spaceBetween: 20,
					slidesPerView: 2,
				},
				'1024': {
					spaceBetween: 20,
					slidesPerView: 3,
				},
				// '1200': {
				// 	spaceBetween: 26,
				// 	slidesPerView: 3,
				// }
			}
		})
	}

	if ( $('.vacancies__slider').length ){
		new Swiper(".vacancies__slider", {
			loop: false,
			spaceBetween: 0,
			slidesPerView: 'auto',
			watchSlidesProgress: true,
			watchOverflow: true,
			preloadImages: false,
			lazy: {
				loadPrevNext: true,
				elementClass: 'lazyload',
				enabled: true,
				loadedClass: 'loaded',
				checkInView: true,
				loadOnTransitionStart: true
			},
			pagination: {
				bulletActiveClass: 'slider-dot_active',
				bulletClass: 'slider-dot',
				clickableClass: 'slider-pagination-clickable',
				el: '.slider-pagination',
				clickable: true
			},
			breakpoints: {
				'320': {
					spaceBetween: 0,
					slidesPerView: 'auto',
				},
				'480': {
					spaceBetween: 0,
					slidesPerView: 'auto',
				},
				'768': {
					spaceBetween: 30,
					slidesPerView: 2,
				},
				'1024': {
					spaceBetween: 30,
					slidesPerView: 3,
				},
				// '1200': {
				// 	spaceBetween: 60,
				// 	slidesPerView: 3,
				// }
			}
		})
	}


	if ( $('.feedback-colleagues').length ){
		$feedbackColleaguesSlider = new Swiper(".feedback-colleagues__slider", {
			loop: false,
			spaceBetween: 20,
			slidesPerView: 1,
			watchSlidesProgress: true,
			watchOverflow: true,
			preloadImages: false,
			lazy: {
				loadPrevNext: true,
				elementClass: 'lazyload',
				enabled: true,
				loadedClass: 'loaded',
				checkInView: true,
				loadOnTransitionStart: true
			},
			pagination: {
				bulletActiveClass: 'slider-dot_active',
				bulletClass: 'slider-dot',
				clickableClass: 'slider-pagination-clickable',
				el: '.slider-pagination',
				clickable: true
			},
			on: {
				slideChange: function (swiper) {
					$(swiper.el).closest('.feedback-colleagues').find('.feedback-colleagues__thumbs-item').removeClass('_active')

					$(swiper.el).closest('.feedback-colleagues').find(`.feedback-colleagues__thumbs-item:eq(${swiper.realIndex})`).addClass('_active')
				}
			}
		})

		$('body').on('click', '.feedback-colleagues__thumbs-item', function(e) {
			e.preventDefault()

			let numberSlide = $(this).data('index-slide');
			$feedbackColleaguesSlider.slideTo(numberSlide);
		})

		$feedbackColleaguesPhotos = new Swiper(".feedback-colleagues__photos", {
			loop: false,
			spaceBetween: 20,
			slidesPerView: 1,
			watchSlidesProgress: true,
			watchOverflow: true,
			preloadImages: false,
			lazy: {
				loadPrevNext: true,
				elementClass: 'lazyload',
				enabled: true,
				loadedClass: 'loaded',
				checkInView: true,
				loadOnTransitionStart: true
			}
		})

		$feedbackColleaguesSlider.controller.control = $feedbackColleaguesPhotos;
		$feedbackColleaguesPhotos.controller.control = $feedbackColleaguesSlider;
	}


	if ( $('.selection-stages').length ){
		$stagesSlider = new Swiper(".selection-stages__slider", {
			loop: true,
			spaceBetween: 20,
			slidesPerView: 1,
			watchSlidesProgress: true,
			watchOverflow: true,
			preloadImages: false,
			autoplay: {
				delay: 5000,
				disableOnInteraction: false
			},
			lazy: {
				loadPrevNext: true,
				elementClass: 'lazyload',
				enabled: true,
				loadedClass: 'loaded',
				checkInView: true,
				loadOnTransitionStart: true
			},
			pagination: {
				bulletActiveClass: 'slider-dot_active',
				bulletClass: 'slider-dot',
				clickableClass: 'slider-pagination-clickable',
				el: '.slider-pagination',
				clickable: true
			},
			on: {
				slideChange: function (swiper) {
					$(swiper.el).closest('.selection-stages').find('.selection-stages__item').removeClass('_active')
					$(swiper.el).closest('.selection-stages').find('.selection-stages__item').removeClass('_prevActive')

					$(swiper.el).closest('.selection-stages').find(`.selection-stages__item:eq(${swiper.realIndex})`).addClass('_active')
					$(swiper.el).closest('.selection-stages').find(`.selection-stages__item:eq(${swiper.realIndex})`).prevAll().addClass('_prevActive')

					$(swiper.el).closest('.selection-stages').find('.selection-stages__progres-step').removeClass('_active')
					$(swiper.el).closest('.selection-stages').find('.selection-stages__progres-step').removeClass('_progres')
					

					$(swiper.el).closest('.selection-stages').find(`.selection-stages__progres-step:eq(${swiper.realIndex})`).prevAll().addClass('_active')
					setTimeout(function(){
						$(swiper.el).closest('.selection-stages').find(`.selection-stages__progres-step:eq(${swiper.realIndex})`).addClass('_progres')
					},10)

					// swiper.autoplay.start()
				}
			}
		})

		$('body').on('click', '.selection-stages__item', function(e) {
			e.preventDefault()

			let numberSlide = $(this).data('index-slide');
			$stagesSlider.slideToLoop(numberSlide);
		})

		if( !$('.selection-stages__slider').hasClass('_autoplay') ){
			$stagesSlider.autoplay.stop()
		}
	}


	// Плавная прокрутка к якорю
	$('.scroll-btn').click(function(e) {
		e.preventDefault()

		let href = $(this).data('anchor')

		$('html, body').stop().animate({ scrollTop: $(href).offset().top}, 1000)
	})

	$('body').on('click', '.our-values__item', function(e) {
		e.preventDefault()

		if( !$(this).hasClass('_active') ) {
			let thisEl = $(this);
			let parent = $(this).closest('.our-values__flex')

			parent.find('.our-values__item').removeClass('_active')
			parent.find('.our-values__item').removeClass('_show')

			$(this).addClass('_active')

			setTimeout(function(){
				thisEl.addClass('_show')
			}, 300)
		}
	})

	// Выбор файла
	$('.file-selection input[type=file]').change(function(){
		var val = $(this).val()

		var parent = $(this).parents('.file-selection')

		parent.find('.file-selection__path').text(val)

		if(parent.find('.file-selection__path').text() == '') {
			let namePath = parent.find('.file-selection__path').data('name')
			parent.find('.file-selection__path').text(namePath)
		}
	})


	/* 08.10.2024 */
	if ( $('.development-cost__slider').length ){
		$stagesSlider = new Swiper(".development-cost__slider", {
			loop: false,
			spaceBetween: 20,
			slidesPerView: 'auto',
			watchSlidesProgress: true,
			watchOverflow: true,
			preloadImages: false,
			lazy: {
				loadPrevNext: true,
				elementClass: 'lazyload',
				enabled: true,
				loadedClass: 'loaded',
				checkInView: true,
				loadOnTransitionStart: true
			}
		})
	}
	/* End 08.10.2024 */
});

$(window).on('load', () => {
	if ($('.our-values__wrap').length) {
		ourValues()
	}

	// Паралакс кружков в услугах
	var Tdiff = 100;

	$('.top-banner').mousemove($.throttle(100, function(event) {
        var pos = {};

        pos.W = $(this).width();
        pos.H = $(this).height();
        pos.X = event.pageX - $(this).offset().left;
        pos.Y = event.pageY - $(this).offset().top;

        pos.X = Math.min(pos.W - 1, pos.X);
        pos.Y = Math.min(pos.H - 1, pos.Y);
        pos.X = Math.max(1, pos.X);
        pos.Y = Math.max(1, pos.Y);

        pos.dX = (Tdiff * pos.X / pos.W - Tdiff) * -1;
        pos.dY = (Tdiff * pos.Y / pos.H - Tdiff) * -1;

		$(this).find('.top-banner__circle').css({transform: 'translate(' + pos.dX + 'px, ' + pos.dY + 'px)'})
    }))

	$('body').on('mousemove', '.mouse-move', function(e) {
		let pos = $(this).offset(),
			pageX = event.pageX,
			pageY = event.pageY,
			x = pageX - pos.left,
			y = pageY - pos.top

		$(this).find('.mouse-cursor').css({
			'left' : x + 'px',
			'top' : y + 'px'
		})
	})
});


$(window).on('resize', () => {
	if ($('.our-values__wrap').length) {
		ourValues()
	}

	let windowW = window.outerWidth

	if (typeof WW !== 'undefined' && WW != windowW) {
		// Перезапись ширины окна
		WW = window.innerWidth || document.clientWidth || document.querySelector('body')[0].clientWidth

		// Моб. версия
		if (!fakeResize) {
			fakeResize = true
			fakeResize2 = false

			document.getElementsByTagName('meta')['viewport'].content = 'width=device-width, initial-scale=1, maximum-scale=1'
		}

		if (!fakeResize2) {
			fakeResize2 = true

			if (windowW < 375) document.getElementsByTagName('meta')['viewport'].content = 'width=375, user-scalable=no'
		} else {
			fakeResize = false
			fakeResize2 = true
		}
	}
});

function ourValues() {
	if ($(window).width() < 1200 && !$('.our-values__wrap').hasClass('swiper-initialized')) {
		$('.our-values__wrap').addClass('swiper')
		$('.our-values__flex').addClass('swiper-wrapper').removeClass('_flex')
		$('.our-values__item').addClass('swiper-slide')

		ourValuesSlider = new Swiper('.our-values__wrap', {
			loop: false,
			spaceBetween: 10,
			slidesPerView: 'auto',
			watchSlidesProgress: true,
			watchOverflow: true,
			preloadImages: false,
			lazy: {
				loadPrevNext: true,
				elementClass: 'lazyload',
				enabled: true,
				loadedClass: 'loaded',
				checkInView: true,
				loadOnTransitionStart: true
			},
			pagination: {
				bulletActiveClass: 'slider-dot_active',
				bulletClass: 'slider-dot',
				clickableClass: 'slider-pagination-clickable',
				el: '.slider-pagination',
				clickable: true
			},
			breakpoints: {
				'320': {
					spaceBetween: 10,
					slidesPerView: 'auto',
				},
				'480': {
					spaceBetween: 10,
					slidesPerView: 'auto',
				},
				'768': {
					spaceBetween: 20,
					slidesPerView: 2,
				},
				'1024': {
					spaceBetween: 20,
					slidesPerView: 3,
				}
			}
		})
	} else if ($(window).width() > 1199 && $('.our-values__wrap').hasClass('swiper-initialized')) {
		if ($('.our-values__wrap').length === 1 && $('.our-values__wrap').hasClass('swiper-initialized')) {
			ourValuesSlider.destroy(true, true)
		} else if ($('.our-values__wrap').length >= 2 && $('.our-values__wrap').hasClass('swiper-initialized')) {
			ourValuesSlider.forEach(function (element) {
				element.destroy(true, true)
			})
		}

		$('.our-values__wrap').removeClass('swiper')
		$('.our-values__flex').addClass('_flex').removeClass('swiper-wrapper')
		$('.our-values__item').removeClass('swiper-slide')
	}
}