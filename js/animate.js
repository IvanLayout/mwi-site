$(window).load(function(){
	if( $(window).width() > 1023 ){
		inView.offset(90)

		setTimeout(function(){
			$('header').addClass('animated fadeInDown')
		}, 100)

		if( $('.first_section').length ) {
			inView('.first_section')
			    .on('enter', function(el){
			    	setTimeout(function(){
			    		$(el).find('.title span:eq(0)').addClass('animated fadeInLeft')
			    	}, 200)

			    	setTimeout(function(){
			    		$(el).find('.title span:eq(1)').addClass('animated fadeInLeft')
			    	}, 600)

			    	setTimeout(function(){
			    		$(el).find('.title span:eq(2)').addClass('animated fadeInLeft')
			    	}, 1000)

			    	setTimeout(function(){
			    		$(el).find('.text').addClass('animated fadeInLeft')
			    	}, 1400)

			    	setTimeout(function(){
			    		$(el).find('.box_btn').addClass('animated fadeInUp')
			    	}, 1800)

			    	setTimeout(function(){
			    		$(el).find('.box_img').addClass('animated fadeInRight')
			    	}, 1400)

			    	setTimeout(function(){
			    		$(el).find('.view_project').addClass('animated fadeInUp')
			    	}, 2400)

			    	setTimeout(function(){
			    		$(el).find('.line_grup .dot1').addClass('anim')
			    	}, 100)

			    	setTimeout(function(){
			    		$(el).find('.line_grup .dot2').addClass('anim')
			    	}, 300)

			    	setTimeout(function(){
			    		$(el).find('.line_grup .dot3').addClass('anim')
			    	}, 500)

			    	setTimeout(function(){
			    		$(el).find('.line_grup .dot4').addClass('anim')
			    	}, 700)

			    	setTimeout(function(){
			    		$(el).find('.line_grup .dot5').addClass('anim')
			    	}, 900)

			    	setTimeout(function(){
			    		$(el).find('.line_grup .dot6').addClass('anim')
			    	}, 1100)

			    	setTimeout(function(){
			    		$(el).find('.line_grup .dot7').addClass('anim')
			    	}, 1300)

			    	setTimeout(function(){
			    		$(el).find('.box_links').addClass('animated fadeInLeft')
			    	}, 400)

			    	setTimeout(function(){
			    		$(el).find('.link_site').addClass('animated fadeInLeft')
			    	}, 600)

			    	setTimeout(function(){
			    		$(el).find('.more.small').addClass('animated fadeInLeft')
			    	}, 1800)

			    	setTimeout(function(){
			    		$(el).find('.monitor').addClass('animated fadeIn')
			    	}, 1800)

			    	setTimeout(function(){
			    		$(el).find('.info_1c .item').addClass('animated fadeInRight')
			    	}, 2200)
			    })
		}



		
		if( $('section .title_anime').length ) {
			inView('section .title_anime').on('enter', function(el){
			    setTimeout(function(){
			    	$(el).addClass('anim')
				}, 400)
			})
		}


		if( $('.projects .project').length ) {
			inView('.projects .project').on('enter', function(el){
			    setTimeout(function(){
			    	$(el).find('.name').addClass('animated fadeInUp')
			    	$(el).find('.text').addClass('animated fadeInUp')
				}, 400)
			})
		}

		if( $('.more_projects').length ) {
			inView('.more_projects').on('enter', function(el){
			    setTimeout(function(){
			    	$(el).addClass('animated zoomIn')
				}, 200)
			})
		}

		if( $('.download_moreBg').length ) {
			inView('.download_moreBg').on('enter', function(el){
			    setTimeout(function(){
			    	$(el).addClass('animated zoomIn')
				}, 200)
			})
		}



		if( $('.main_amenities').length ) {
			inView('.main_amenities')
				.on('enter', function(el){
					setTimeout(function(){
			    		$(el).find('.line_grup .dot1').addClass('anim')
			    	}, 100)

			    	setTimeout(function(){
			    		$(el).find('.line_grup .dot2').addClass('anim')
			    	}, 300)

			    	setTimeout(function(){
			    		$(el).find('.line_grup .dot3').addClass('anim')
			    	}, 500)

			    	setTimeout(function(){
			    		$(el).find('.line_grup .dot4').addClass('anim')
			    	}, 700)

			    	setTimeout(function(){
			    		$(el).find('.line_grup .dot5').addClass('anim')
			    	}, 900)

			    	setTimeout(function(){
			    		$(el).find('.line_grup .dot6').addClass('anim')
			    	}, 1100)

			    	setTimeout(function(){
			    		$(el).find('.line_grup .dot7').addClass('anim')
			    	}, 1300)

			    	setTimeout(function(){
			    		$(el).find('.line_grup .dot8').addClass('anim')
			    	}, 1500)

			    	setTimeout(function(){
			    		$(el).find('.line_grup .dot9').addClass('anim')
			    	}, 1700)

			    	setTimeout(function(){
			    		$(el).find('.line_grup .dot10').addClass('anim')
			    	}, 1900)
			})
		}


		if( $('.section_breadcrumbs').length ) {
			inView('.section_breadcrumbs')
				.on('enter', function(el){
					setTimeout(function(){
			    		$(el).find('.line_grup .dot1').addClass('anim')
			    	}, 100)

			    	setTimeout(function(){
			    		$(el).find('.line_grup .dot2').addClass('anim')
			    	}, 300)

			    	setTimeout(function(){
			    		$(el).find('.line_grup .dot3').addClass('anim')
			    	}, 500)

			    	setTimeout(function(){
			    		$(el).find('.line_grup .dot4').addClass('anim')
			    	}, 700)

			    	setTimeout(function(){
			    		$(el).find('.line_grup .dot5').addClass('anim')
			    	}, 900)

			    	setTimeout(function(){
			    		$(el).find('.line_grup .dot6').addClass('anim')
			    	}, 1100)

			    	setTimeout(function(){
			    		$(el).find('.line_grup .dot7').addClass('anim')
			    	}, 1300)
			})
		}


		if( $('.box_amenities').length ) {
			inView('.box_amenities').on('enter', function(el){
				setTimeout(function(){
			    	$(el).find('.slider_amenities .service .img').addClass('animated zoomIn')
				}, 200)

				setTimeout(function(){
					$(el).find('.slider_amenities .service .number').addClass('animated fadeInRight')

			    	$(el).find('.slider_amenities .service .icon').addClass('animated fadeInUp')
				}, 600)

				setTimeout(function(){
			    	$(el).find('.slider_amenities .service .name').addClass('animated fadeInUp')
			    	
				}, 1000)

				setTimeout(function(){
			    	$(el).find('.slider_amenities .service .text').addClass('animated fadeInUp')
			    	
				}, 1400)

				setTimeout(function(){
			    	$(el).find('.slider_amenities .service .box_btn').addClass('animated fadeInUp')
				}, 1800)

			    setTimeout(function(){
			    	$(el).find('.prev_slide').addClass('animated fadeIn')
			    	$(el).find('.next_slide').addClass('animated fadeIn')
				}, 2000)
			})
		}


		if( $('.clients').length ) {
			inView('.clients').on('enter', function(el){
			    setTimeout(function(){
			    	$(el).find('.client').addClass('animated zoomIn')
				}, 200)
			})
		}

		if( $('footer').length ) {
			inView('footer').on('enter', function(el){
				$(el).find('.line_top').addClass('animated fadeInDown')

			    setTimeout(function(){
			    	$(el).find('.line_flex').addClass('animated fadeInDown')
				}, 400)

				setTimeout(function(){
			    	$(el).find('.line_bottom').addClass('animated fadeInUp')
				}, 800)
			})
		}

		/*
		if( $('footer .line_top').length ) {
			inView('footer .line_top').on('enter', function(el){
			    setTimeout(function(){
			    	$(el).addClass('animated fadeInDown')
				}, 200)
			})
		}

		if( $('footer .line_flex').length ) {
			inView('footer .line_flex').on('enter', function(el){
			    setTimeout(function(){
			    	$(el).addClass('animated fadeInDown')
				}, 600)
			})
		}

		if( $('footer .line_bottom').length ) {
			inView('footer .line_bottom').on('enter', function(el){
			    setTimeout(function(){
			    	$(el).addClass('animated fadeInUp')
				}, 1000)
			})
		}
		*/

		if( $('.first_section').length ) {
			inView('.first_section').on('enter', function(el){
			    setTimeout(function(){
			    	$(el).find('.partition1').addClass('animated fadeInRight')
				}, 200)

				setTimeout(function(){
			    	$(el).find('.partition2').addClass('animated fadeInRight')
				}, 400)

				setTimeout(function(){
			    	$(el).find('.partition3').addClass('animated fadeInRight')
				}, 600)

				setTimeout(function(){
			    	$(el).find('.partition4').addClass('animated fadeInRight')
				}, 1000)

				setTimeout(function(){
			    	$(el).find('.partition5').addClass('animated fadeInRight')
				}, 1400)

				setTimeout(function(){
			    	$(el).find('.partition6').addClass('animated fadeInRight')
				}, 1800)

				setTimeout(function(){
			    	$(el).find('.partition7').addClass('animated fadeInRight')
				}, 2200)

				setTimeout(function(){
			    	$(el).find('.partition8').addClass('animated fadeInRight')
				}, 2600)

				setTimeout(function(){
			    	$(el).find('.partition9').addClass('animated fadeInRight')
				}, 3200)
			})
		}

		if( $('.about_text').length ) {
			inView('.about_text').on('enter', function(el){
			    setTimeout(function(){
			    	$(el).find('.img_abs').addClass('animated fadeInRight')
				}, 100)
			})
		}

		if( $('.advantages').length ) {
			inView('.advantages').on('enter', function(el){
			    setTimeout(function(){
			    	$(el).find('.item:eq(0)').addClass('animated fadeIn')
				}, 200)

				setTimeout(function(){
			    	$(el).find('.item:eq(1)').addClass('animated fadeIn')
				}, 400)

				setTimeout(function(){
			    	$(el).find('.item:eq(2)').addClass('animated fadeIn')
				}, 600)

				setTimeout(function(){
			    	$(el).find('.item:eq(3)').addClass('animated fadeIn')
				}, 1000)

				setTimeout(function(){
			    	$(el).find('.info').addClass('animated fadeIn')
				}, 1200)
			})
		}

		if( $('.advantages2').length ) {
			inView('.advantages2').on('enter', function(el){
			    setTimeout(function(){
			    	$(el).find('.item:eq(0)').addClass('animated fadeIn')
				}, 200)

				setTimeout(function(){
			    	$(el).find('.item:eq(1)').addClass('animated fadeIn')
				}, 400)

				setTimeout(function(){
			    	$(el).find('.item:eq(2)').addClass('animated fadeIn')
				}, 600)

				setTimeout(function(){
			    	$(el).find('.item:eq(3)').addClass('animated fadeIn')
				}, 1000)

				setTimeout(function(){
			    	$(el).find('.item:eq(4)').addClass('animated fadeIn')
				}, 1400)

				setTimeout(function(){
			    	$(el).find('.item:eq(5)').addClass('animated fadeIn')
				}, 1800)
			})
		}

		if( $('.grig_team .item').length ) {
			inView('.grig_team .item').on('enter', function(el){
			    setTimeout(function(){
			    	$(el).addClass('animated fadeInUp')
				}, 200)
			})
		}
		
		if( $('.section_team .line_flex').length ) {
			inView('.section_team .line_flex').on('enter', function(el){
			    setTimeout(function(){
			    	$(el).addClass('animated fadeInUp')
				}, 200)
			})
		}

		if( $('.inner_amenities').length ) {
			inView('.inner_amenities').on('enter', function(el){
			    setTimeout(function(){
			    	$(el).find('.more_black').addClass('animated zoomIn')
				}, 200)
			})
		}

		if( $('.section_foto').length ) {
			inView('.section_foto').on('enter', function(el){
			    setTimeout(function(){
			    	$(el).find('.more_black').addClass('animated zoomIn')
				}, 200)
			})
		}

		if( $('.slider_foto').length ) {
			inView('.slider_foto').on('enter', function(el){
			    setTimeout(function(){
			    	$(el).addClass('animated fadeInUp')
				}, 200)
			})
		}

		if( $('.section_map .info_abs').length ) {
			inView('.section_map .info_abs').on('enter', function(el){
			    setTimeout(function(){
			    	$(el).addClass('animated fadeInLeft')
				}, 200)
			})
		}


		if( $('.progress').length ) {
			inView('.progress').on('enter', function(el){
			    setTimeout(function(){
			    	$(el).find('.list li:eq(0)').addClass('animated fadeIn')
				}, 200)

				setTimeout(function(){
			    	$(el).find('.list li:eq(1)').addClass('animated fadeIn')
				}, 400)

				setTimeout(function(){
			    	$(el).find('.list li:eq(2)').addClass('animated fadeIn')
				}, 600)

				setTimeout(function(){
			    	$(el).find('.list li:eq(3)').addClass('animated fadeIn')
				}, 1000)

				setTimeout(function(){
			    	$(el).find('.list li:eq(4)').addClass('animated fadeIn')
				}, 1200)

				setTimeout(function(){
			    	$(el).find('.img').addClass('animated fadeIn')
				}, 1400)
			})
		}
		
		if( $('.section_contacts').length ) {
			inView('.section_contacts').on('enter', function(el){
			    setTimeout(function(){
			    	$(el).find('.box_left').addClass('animated fadeInLeft')
				}, 200)

				setTimeout(function(){
			    	$(el).find('.form').addClass('animated fadeInRight')
				}, 200)
			})
		}

		if( $('.amenities .service').length ) {
			inView('.amenities .service').on('enter', function(el){
			    setTimeout(function(){
			    	$(el).addClass('animated fadeInUp')
				}, 200)
			})
		}

		if( $('.section_error').length ) {
			inView('.section_error').on('enter', function(el){
			    setTimeout(function(){
			    	$(el).find('.error').addClass('animated slideInLeft')
				}, 200)

				setTimeout(function(){
			    	$(el).find('.text').addClass('animated slideInLeft')
				}, 600)

				setTimeout(function(){
			    	$(el).find('.link').addClass('animated slideInLeft')
				}, 1000)

				setTimeout(function(){
			    	$(el).find('.abs_img img').addClass('animated zoomIn')
				}, 1400)
			})
		}

		if( $('.inner_advantages .grid').length ) {
			inView('.inner_advantages .grid').on('enter', function(el){
			    setTimeout(function(){
			    	$(el).find('.item:eq(0)').addClass('animated zoomInRight')
				}, 200)

				setTimeout(function(){
			    	$(el).find('.item:eq(1)').addClass('animated zoomInRight')
				}, 400)

				setTimeout(function(){
			    	$(el).find('.item:eq(2)').addClass('animated zoomInRight')
				}, 600)

				setTimeout(function(){
			    	$(el).find('.item:eq(3)').addClass('animated zoomInRight')
				}, 800)

				setTimeout(function(){
			    	$(el).find('.item:eq(4)').addClass('animated zoomInRight')
				}, 1000)

				setTimeout(function(){
			    	$(el).find('.item:eq(5)').addClass('animated zoomInRight')
				}, 1200)

				setTimeout(function(){
			    	$(el).find('.item:eq(6)').addClass('animated zoomInRight')
				}, 1400)

				setTimeout(function(){
			    	$(el).find('.item:eq(7)').addClass('animated zoomInRight')
				}, 1600)

				setTimeout(function(){
			    	$(el).find('.item:eq(8)').addClass('animated zoomInRight')
				}, 1800)
			})
		}

		if( $('.design img').length ) {
			inView('.design img').on('enter', function(el){
				   setTimeout(function(){
				   	$(el).addClass('animated fadeIn')
				}, 200)
			})
		}

		
		if( $('.ratings .slider').length ) {
			inView('.ratings .slider').on('enter', function(el){
				setTimeout(function(){
				   	$(el).find('.slide').addClass('animated slideInDown')
				}, 200)
			})
		}
	}
})