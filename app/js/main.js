

$(document).ready(function(){

	$(document).on('click', '.js-hamburger', function(e) {

		e.preventDefault();
		$(this).toggleClass('is-active');
		$('.menu').slideToggle();
	})


	// var flsm1 = true; /*VARIABLE FOR CHECK WIDTH*/
	// var flsm2 = true; /*VARIABLE FOR CHECK WIDTH*/

	$(window).on('load resize', function() {

		var abs_block = $('.abs-block__doctor').css('height');
		$('.relative_js_height').css({
			paddingBottom: abs_block
		})	

	// 	CHECK WIDTH 1 ITERATION
	// 	if (window.innerWidth <= 767) {
	// 		flsm2 = true;
	// 		if (flsm1) {
	// 			flsm1 = false;
	// 		}
	// 	} else {
	// 		flsm1 = true;
	// 		if (flsm2) {
	// 			flsm2 = false; 
	// 		}
	// 	}

});

	var abs_block = $('.abs-block__doctor').css('height');
	$('.relative_js_height').css({
		paddingBottom: abs_block
	})	


	

	/* SLICK_SLIDER */
	if ($('.partners').length) {
		$('.partners').slick({
			slidesToShow: 6,
			slidesToScroll: 1,
			centerMode: false,
			centerPadding: '10px',
			responsive: [
			{
				breakpoint: 1220,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
			]
		});
	};


	if ($('.products-slider').length) {
		$('.products-slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			adaptiveHeight: true,
			draggable: false,
			dots: true,
			centerMode: false,
			centerPadding: '10px'
		});
	};

	if ($('.slider-comment').length) {
		$('.slider-comment').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			adaptiveHeight: true,
			draggable: false,
			dots: true,
			centerMode: false,
			centerPadding: '10px'
		});
	};


	/*MATCHHEIGHT*/
	$('.adv-block, .js-height, .js-h-2').matchHeight();

	/*fancyCustom*/
	$(document).on('click', '.modal-form', function(e) {
		e.preventDefault();
		var th = $(this).attr('data-id');
		$(th).fancybox({
			'hideOnContentClick': true,
			minWidth : 130,
			padding: 0,
			closeBtn : true
		}).trigger('click');
	});


	/*tabs*/
	$('.tab-caption').on('click', '.tab-caption__elem:not(.tab-caption__elem_active)', function() {
		$(this).addClass('tab-caption__elem_active').siblings().removeClass('tab-caption__elem_active')
		.closest('.tabs').find('.tab-content').removeClass('tab-content_active').css({opacity: '0',display: 'none'}).eq($(this).index()).addClass('tab-content_active').css('display', 'block').animate({opacity: '1'}, 300);
	})
	


	/*FANCYBOX*/
	$(".fancybox").fancybox({
		'hideOnContentClick': true,
		minWidth : 230,
		padding : 0,
		closeBtn : true
	});


	/*SCROLL TO*/
	// $('header a[href^="#"]').on('click', function(event) {
	// 	var target = $( $(this).attr('href') );
	// 	if( target.length ) {
	// 		event.preventDefault();
	// 		$('html, body').animate({
	// 			scrollTop: target.offset().top -85
	// 		}, 600);
	// 	}
	// });

	/*MASK JQUERY*/
	jQuery(function($){ 
		$('input[type=tel]').mask("+380(99) 999-99-99");
	});


	/*HIDE PLACEHOLDER*/
	$('input,textarea').focus(function(){
		$(this).data('placeholder',$(this).attr('placeholder'))
		.attr('placeholder','');
	}).blur(function(){
		$(this).attr('placeholder',$(this).data('placeholder'));
	});


	$(window).scroll(function() {


	});



	/*обработка клика по странице (для скрытия меню, popup и тд)*/
	// $(document).click( function(event){
	// 	if( $(event.target).closest(".js-dd-click-wrap").length )
	// 		return;
	// 	$('.js-dd-click').fadeOut(300).closest('.js-dd-click-wrap').removeClass('open');
	// 	event.stopPropagation();
	// });




});

