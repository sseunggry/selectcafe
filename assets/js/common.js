/* common */
let scrolTop = "",
	windowW  = window.innerWidth;

$(function(){
	var last_scrollTop = 0;
	scrolTop = $(window).scrollTop();
	windowW  = window.innerWidth;

	/* 페이지 리사이즈 이벤트 */
	$(window).resize(function(){
		windowW  = window.innerWidth;
		infoSlide();
		processSlide();

		if( windowW >= 960 ) {
			$(".inquiry").removeClass("active");
			$(".inquiry .frm").css("display", "");
		}
	});

	/* 페이지 스크롤 이벤트 */
	$(window).scroll(function(){
		scrolTop = $(this).scrollTop();

		if( scrolTop >= $(".main_visual").outerHeight() ) {
			if (scrolTop > last_scrollTop) {
				// scroll down event
				$(".nav").addClass("scrollDown");
			} else {
				// scroll up event
				$(".nav").removeClass("scrollDown");
			}
		} else {
			$(".nav").removeClass("scrollDown");
		}

		if( ( scrolTop + window.innerHeight ) >= ( $(".wrap").outerHeight() - $(".footer").outerHeight() ) ) {
			$(".inquiry_sec").addClass("bot");
		} else {
			$(".inquiry_sec").removeClass("bot");
		}

		last_scrollTop = scrolTop;
	});

	clickDefaultFn();

	// main slide event
	mainSlide();
	principleSlide();
	listSlide();
	txtSlide();
	imgSlide();
	phoneSlide();
	stepSlide();
	txtVerticalSlide();
	recipeSlide();
	blendSlide();
	desertSlide();
	placeSlide();
	thumbSlide();

	infoSlide();
	processSlide();
	section15Slide();

	// gsapFn();

	tabEventFn();
	moreContFn();

	// gsapMotion();

	$(".phone").keyup(function(){
		this.value = this.value
			.match(/\d*/g).join("")
			.match(/(\d{0,3})(\d{0,4})(\d{0,4})/).slice(1).join("-")
			.replace(/-*$/g,"");
	});

	$(".inquiry .title").on("click", function(){
		if( windowW <= 960 ) {
			if( !$(".inquiry").hasClass("active") ) {
				$(".inquiry").addClass("active");
				$(".inquiry .frm").stop().slideDown();
			} else {
				$(".inquiry").removeClass("active");
				$(".inquiry .frm").stop().slideUp();
			}
		}
	});

});

/* 클릭 방지 이벤트 */
function clickDefaultFn(){
	$("a[href=\"#\"]").click(function(e) {
		e.preventDefault();
	});
}

// 팝업 오픈
function popupOpenFn(dataBtn){
	$("body").addClass("popView");
	$(".popupWrap[data-pop='"+ dataBtn +"']").stop().fadeIn("fast");
}

// 팝업 닫기
function popupCloseFn(dataBtn){
	$("body").removeClass("popView");
	$(".popupWrap[data-pop='"+ dataBtn +"']").stop().fadeOut("fast");
}

//motion
function gsapMotion(){
	gsap.registerPlugin(ScrollTrigger);
	gsap.utils.toArray(".zoom_in").forEach(function(el, idx){
		gsap.timeline({
			scrollTrigger: {
				trigger: el,
				start: "top 50%",
				toggleActions: "restart none restart none",
			}
		}).fromTo(el, {scale: 0}, {scale: 1, ease: "back.out(2)"});
	});

	gsap.utils.toArray(".fade_right").forEach(function(el, idx){
		gsap.timeline({
			scrollTrigger: {
				trigger: el,
				toggleActions: "restart none restart none",
			}
		}).fromTo(el, {opacity: 0, xPercent: -15}, {opacity: 1, xPercent: 0, duration: 0.5});
	});

	gsap.utils.toArray(".fade_left").forEach(function(el, idx){
		gsap.timeline({
			scrollTrigger: {
				trigger: el,
				toggleActions: "play none restart none",
			}
		}).fromTo(el, {opacity: 0, xPercent: 15}, {opacity: 1, xPercent: 0, duration: 0.5});
	});

	gsap.utils.toArray(".fade_up").forEach(function(el, idx){
		gsap.timeline({
			scrollTrigger: {
				trigger: el,
				toggleActions: "play none restart none",
			}
		}).fromTo(el, {opacity: 0, yPercent: 15}, {opacity: 1, yPercent: 0, ease: "none", duration: 0.5});
	});

	gsap.utils.toArray(".highlight .bg").forEach(function(el, idx){
		gsap.timeline({
			scrollTrigger: {
				trigger: el,
				toggleActions: "restart none restart none",
			}
		}).fromTo(el, {width: 0}, {width: "100%", duration: 0.5});
	});

	gsap.utils.toArray(".fade_down").forEach(function(el, idx){
		gsap.timeline({
			scrollTrigger: {
				trigger: el,
				toggleActions: "restart none restart none",
			}
		}).fromTo(el, {opacity: 0, yPercent: -100}, {opacity: 1, yPercent: 0});
	});

}
//
// (function() {//raise
// 	window.introTl = gsap.timeline({});
// 	introTl.call(function() {
// 		waveTl.play();
// 	}, null, 0.1)
// 	introTl.fromTo('.raise_tit', {opacity: 0, y: 100}, {opacity: 1, y: 0, duration: 0.7})
// 	introTl.fromTo('.raise_subtit, .raise_txt', {opacity: 0, y: 100}, {opacity: 1, y: 0, duration: 0.7}, '-=0.2')
// 	introTl.fromTo('.raise_deco_wrap', {scale: 0}, {scale: 1, duration: 0.7, ease: 'back.out(2)'}, '-=0.2')
// 	introTl.fromTo('.raise_bot_txt', {opacity: 0, y: 100}, {opacity: 1, y: 0, duration: 0.7}, '-=0.2')
// 	introTl.call(function() {
// 		cheeseTl.play();
// 	}, null, '+=0.1')
//
// 	var waveTl = gsap.timeline({paused: true})
// 	waveTl.fromTo('.raise_wave_wrap > div:nth-child(1)', {scale: 0, opacity: 0}, {scale: 1, opacity: 1, duration: 1.2})
// 	waveTl.fromTo('.raise_wave_wrap > div:nth-child(2)', {scale: 0.5, opacity: 0}, {scale: 1, opacity: 1, duration: 1.2}, '-=0.9')
// 	waveTl.fromTo('.raise_wave_wrap > div:nth-child(3)', {scale: 0.5, opacity: 0}, {scale: 1, opacity: 1, duration: 1.2}, '-=0.9')
// 	waveTl.fromTo('.raise_wave_wrap > div:nth-child(4)', {scale: 0.5, opacity: 0}, {scale: 1, opacity: 1, duration: 1.2}, '-=0.9')
//
// 	var cheeseTl = gsap.timeline({paused: true, repeat: -1, repeatDelay: 2})
// 	cheeseTl.fromTo('.raise_deco03', {rotate: 0}, {rotate: -10, duration: 0.1})
// 	cheeseTl.to('.raise_deco03', {rotate: 20, duration: 0.1})
// 	cheeseTl.to('.raise_deco03', {rotate: -5, duration: 0.1})
// 	cheeseTl.to('.raise_deco03', {rotate: 10, duration: 0.1})
// 	cheeseTl.to('.raise_deco03', {rotate: 0, duration: 0.1})
//
// }());

/*
	main visual event
 */
let mainSwiper, principleSwiper, imgSwiper, phoneSwiper, stepSwiper, infoSwiper = undefined, txtVerticalSwiper, recipeSwiper, recipeMoSwiper, blendSwiper, processSwiper = undefined, listSwiper;

function mainSlide(){
	mainSwiper = new Swiper(".main_slide", {
		speed: 5000,
		loop: true,
		slidesPerView : "auto",
		allowTouchMove : false,
		autoplay: {
			delay: 0,
			disableOnInteraction: false,
		},
	});
}

function principleSlide(){
	principleSwiper = new Swiper(".principle_slide", {
		speed: 1000,
		slidesPerView : 1,
		loop: true,
		loopedSlides: 3,
		// allowTouchMove: false,
		autoplay: {
			waitForTransition: false,
			disableOnInteraction: false,
		},
	});

	principleSwiper.on("slideChangeTransitionEnd", function () {
		if( principleSwiper.realIndex == 0 ) {
			$(".principle_slide .swiper-slide").addClass("remove");
			principleSwiper.destroy();

			principleSlide();

			setTimeout(function (){
				$(".principle_slide .swiper-slide").removeClass("remove");
			}, 100);
		}
	});
}
function listSlide(){
	listSwiper = new Swiper(".list_slide", {
		speed: 5000,
		loop: true,
		slidesPerView : "auto",
		allowTouchMove : false,
		autoplay: {
			delay: 0,
			disableOnInteraction: false,
		},
	});
}

let principleTxtSwiper, placeTxtSwiper, txtTopSwiper, txtBotSwiper, txtLeftSwiper, txtRightSwiper, thumbSwiper;
function txtSlide(){
	principleTxtSwiper = new Swiper(".principle_txt_slide", {
		speed: 5000,
		loop: true,
		slidesPerView : "auto",
		// allowTouchMove : false,
		autoplay: {
			delay: 0,
			disableOnInteraction: false,
		},
	});

	placeTxtSwiper = new Swiper(".place_txt_slide", {
		speed: 5000,
		loop: true,
		slidesPerView : "auto",
		allowTouchMove : false,
		autoplay: {
			delay: 0,
			disableOnInteraction: false,
		},
	});

	txtTopSwiper = new Swiper(".txt_top_slide", {
		speed: 5000,
		loop: true,
		slidesPerView : "auto",
		allowTouchMove : false,
		autoplay: {
			delay: 0,
			disableOnInteraction: false,
		},
	});

	txtBotSwiper = new Swiper(".txt_bot_slide", {
		speed: 5000,
		loop: true,
		slidesPerView : "auto",
		allowTouchMove : false,
		autoplay: {
			delay: 0,
			disableOnInteraction: false,
		},
	});

	txtLeftSwiper = new Swiper(".txt_left_slide", {
		speed: 5000,
		loop: true,
		slidesPerView : "auto",
		allowTouchMove : false,
		autoplay: {
			delay: 0,
			disableOnInteraction: false,
		},
	});

	txtRightSwiper = new Swiper(".txt_right_slide", {
		speed: 5000,
		loop: true,
		slidesPerView : "auto",
		allowTouchMove : false,
		autoplay: {
			delay: 0,
			disableOnInteraction: false,
		},
	});
}

function imgSlide(){
	imgSwiper = new Swiper(".section13 .img_slide", {
		speed: 5000,
		loop: true,
		slidesPerView : "auto",
		allowTouchMove : false,
		autoplay: {
			delay: 0,
			disableOnInteraction: false,
		},
	});
}

function phoneSlide(){
	phoneSwiper = new Swiper(".section13 .phone_slide", {
		loop: true,
		autoplay: {
			delay: 2000,
			disableOnInteraction: true,
		},
	});
}

function stepSlide(){
	stepSwiper = new Swiper(".section14 .step_slide", {
		loop: true,
		slidesPerView : 1,
		spaceBetween: 70,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
			renderBullet: function (index, className) {
				return `<p class="step ${className}"><span>STEP0${index+1}</span></p>`;
			},
		},
		autoplay: {
			delay: 2000,
			disableOnInteraction: false,
		},
	});
}

function infoSlide(){
	if(windowW > 1100 && infoSwiper == undefined) {
		infoSwiper = new Swiper(".info_slide", {
			speed: 5000,
			loop: true,
			spaceBetween: 30,
			slidesPerView : "auto",
			allowTouchMove : false,
			autoplay: {
				delay: 0,
				disableOnInteraction: false,
			},
		});
	} else if(windowW <= 1100 && infoSwiper !== undefined){
		infoSwiper.destroy();
		infoSwiper = undefined;
	}
}
function processSlide(){
	if(windowW < 980 && processSwiper == undefined) {
		processSwiper = new Swiper(".process_slide", {
			// speed: 5000,
			loop: true,
			spaceBetween: 30,
			centeredSlides: true,
			// autoplay: {
			// 	delay: 1500,
			// 	disableOnInteraction: false,
			// },
		});
	} else if(windowW >= 980 && processSwiper !== undefined){
		processSwiper.destroy();
		processSwiper = undefined;
	}
}
function txtVerticalSlide(){
	txtVerticalSwiper = new Swiper(".txt_slide_vertical", {
		speed: 500,
		loop: true,
		direction: "vertical",
		slidesPerView : 3,
		allowTouchMove : false,
		centeredSlides: true,
		autoplay: {
			disableOnInteraction: false,
		},
	});
}

function thumbSlide(){
	thumbSwiper = new Swiper(".section12 .thumb_slide", {
		speed: 3000,
		loop: true,
		slidesPerView : "auto",
		allowTouchMove : false,
		autoplay: {
			delay: 0,
			disableOnInteraction: false,
		},
	});
}

let recipeTrigger = true;
function recipeSlide(){
	$(window).resize(function(){
		if( windowW > 768 ) {
			if( !recipeTrigger ) {
				if( recipeSwiper != undefined ) {
					recipeSwiper.destroy();
				}
				recipeSwiper = new Swiper(".recipeSwiper", {
					loop: true,
					spaceBetween: 20,
					slidesPerView: 2,
					pagination: {
						el: ".recipe-pagination",
						type: "progressbar",
					},
					navigation: {
						nextEl: ".recipe-next",
						prevEl: ".recipe-prev",
					},
					autoplay: {
						disableOnInteraction: false,
					},
				});

				recipeTrigger = true;
			}
		} else {
			if( recipeTrigger ) {
				if( recipeMoSwiper != undefined ) {
					recipeMoSwiper.destroy();
				}
				recipeMoSwiper = new Swiper(".recipeMoSwiper", {
					loop: true,
					pagination: {
						el: ".recipeMo-pagination",
						type: "progressbar",
					},
				});

				recipeTrigger = false;
			}
		}
	});

	if( windowW > 768 ) {
		recipeSwiper = new Swiper(".recipeSwiper", {
			loop: true,
			spaceBetween: 20,
			slidesPerView: 2,
			pagination: {
				el: ".recipe-pagination",
				type: "progressbar",
			},
			navigation: {
				nextEl: ".recipe-next",
				prevEl: ".recipe-prev",
			},
			autoplay: {
				disableOnInteraction: false,
			},
		});

		recipeSwiper.on("slideChange", function () {
			$(".recipe_box .img_con li").removeClass("active");
			$(".recipe_box .img_con li").eq(recipeSwiper.realIndex).addClass("active");

			$(".recipe_box .txt_list dl").removeClass("active");
			$(".recipe_box .txt_list dl").eq(recipeSwiper.realIndex).addClass("active");
		});

		recipeTrigger = true;
	} else {
		recipeMoSwiper = new Swiper(".recipeMoSwiper", {
			loop: true,
			pagination: {
				el: ".recipeMo-pagination",
				type: "progressbar",
			},
		});

		recipeTrigger = false;
	}
}

function blendSlide(){
	blendSwiper = new Swiper(".blendSwiper", {
		loop: true,
		effect: "fade",
		autoplay: {
			delay: 4000,
			disableOnInteraction: false,
		}
	});

	blendSwiper.on("slideChange", function () {
		$(".blend_con .step_list .item").removeClass("active");
		$(".blend_con .step_list .item").eq(blendSwiper.realIndex).addClass("active");
	});

	$(".blend_con .step_list .item").on("click", function(){
		blendSwiper.slideTo($(this).index()+1);
	});
}

function gsapFn(){
	// gsap.registerPlugin(ScrollTrigger);

	gsap.to(".receipt .img_con img", {
		scrollTrigger: ".receipt .img_con img",
		start: "top center",
		duration: 1,
		y: 0,
		opacity: 1,
	});
}

let desertSwiper, desertTopSwiper, desertBotSwiper;
function desertSlide(){
	desertSwiper = new Swiper(".desert_swiper", {
		speed: 4500,
		loop: true,
		slidesPerView : "auto",
		allowTouchMove : false,
		autoplay: {
			delay: 0,
			disableOnInteraction: false,
		},
	});

	desertTopSwiper = new Swiper(".desert_top_slide", {
		speed: 5000,
		loop: true,
		slidesPerView : "auto",
		allowTouchMove : false,
		autoplay: {
			delay: 0,
			disableOnInteraction: false,
		},
	});

	desertBotSwiper = new Swiper(".desert_bot_slide", {
		speed: 5000,
		loop: true,
		slidesPerView : "auto",
		allowTouchMove : false,
		autoplay: {
			delay: 0,
			disableOnInteraction: false,
		},
	});
}

let placeSwiper, placePrevSwiper, placeNextSwiper, placeSwiper2, placePrevSwiper2, placeNextSwiper2, moPlaceSwiper, moPlaceSwiper2, placeTrigger = true;
function placeSlide(){
	if( windowW > 1200 ) {
		placeSwiperFn();
	} else {
		moPlaceSwiperFn();
	}

	$(window).resize(function(){
		let idx = $(".place_con .tab_list li.active").index();

		if( idx <= 0 ) {
			if( windowW > 1200 ) {
				if( !placeTrigger ) {
					placeSwiperFn();
					placeTrigger = true;
				}
			} else {
				if( placeTrigger ) {
					moPlaceSwiperFn();
					placeTrigger = false;
				}
			}
		} else {
			if( windowW > 1200 ) {
				if( !placeTrigger ) {
					placeSwiperFn2();
					placeTrigger = true;
				}
			} else {
				if( placeTrigger ) {
					moPlaceSwiperFn2();
					placeTrigger = false;
				}
			}
		}
	});

	$(".place_con .tab_list li").on("click", function (){
		$(this).siblings().removeClass("active");
		$(this).addClass("active");

		$(".place_con .slide_con .inner").removeClass("active");
		$(".place_con .slide_con .inner").eq($(this).index()).addClass("active");

		if( $(this).index() <= 0 ) {
			if( windowW > 1200 ) {
				placeSwiperFn();
			} else {
				moPlaceSwiperFn();
			}
		} else {
			if( windowW > 1200 ) {
				placeSwiperFn2();
			} else {
				moPlaceSwiperFn2();
			}
		}

	});
}

function placeSwiperFn() {
	if( placeSwiper != undefined ) {
		placeSwiper.destroy();
		placePrevSwiper.destroy();
		placeNextSwiper.destroy();
	}

	if( moPlaceSwiper != undefined ) {
		moPlaceSwiper.destroy();
	}

	placeSwiper = new Swiper(".place_slide", {
		loop: true,
		slidesPerView : 1,
		navigation: {
			nextEl: ".place-next",
			prevEl: ".place-prev",
		},
	});

	placePrevSwiper = new Swiper(".place_prev_slide", {
		loop: true,
		slidesPerView : 1,
		allowTouchMove : false,
	});

	placeNextSwiper = new Swiper(".place_next_slide", {
		loop: true,
		slidesPerView : 1,
		allowTouchMove : false,
	});

	placeSwiper.on("slideNextTransitionStart", function () {
		placePrevSwiper.slideNext();
		placeNextSwiper.slideNext();
	});

	placeSwiper.on("slidePrevTransitionStart", function () {
		placePrevSwiper.slidePrev();
		placeNextSwiper.slidePrev();
	});
}

function moPlaceSwiperFn(){
	if( moPlaceSwiper != undefined ) {
		moPlaceSwiper.destroy();
	}

	if( placeSwiper != undefined ) {
		placeSwiper.destroy();
	}

	moPlaceSwiper = new Swiper(".place_slide", {
		loop: true,
		slidesPerView: "auto",
		centeredSlides: true,
		pagination: {
			el: ".place_slide_con .swiper-pagination",
			type: "progressbar",
		},
	});
}

function placeSwiperFn2() {
	if( placeSwiper2 != undefined ) {
		placeSwiper2.destroy();
		placePrevSwiper2.destroy();
		placeNextSwiper2.destroy();
	}

	if( moPlaceSwiper2 != undefined ) {
		moPlaceSwiper2.destroy();
	}

	placeSwiper2 = new Swiper(".place_slide2", {
		loop: true,
		slidesPerView : 1,
		navigation: {
			nextEl: ".place-next2",
			prevEl: ".place-prev2",
		},
	});

	placePrevSwiper2 = new Swiper(".place_prev_slide2", {
		loop: true,
		slidesPerView : 1,
		allowTouchMove : false,
	});

	placeNextSwiper2 = new Swiper(".place_next_slide2", {
		loop: true,
		slidesPerView : 1,
		allowTouchMove : false,
	});

	placeSwiper2.on("slideNextTransitionStart", function () {
		placePrevSwiper2.slideNext();
		placeNextSwiper2.slideNext();
	});

	placeSwiper2.on("slidePrevTransitionStart", function () {
		placePrevSwiper2.slidePrev();
		placeNextSwiper2.slidePrev();
	});
}

function moPlaceSwiperFn2(){
	if( moPlaceSwiper2 != undefined ) {
		moPlaceSwiper2.destroy();
	}

	if( placeSwiper2 != undefined ) {
		placeSwiper2.destroy();
	}

	moPlaceSwiper2 = new Swiper(".place_slide2", {
		loop: true,
		slidesPerView: "auto",
		centeredSlides: true,
		pagination: {
			el: ".place_slide_con .swiper-pagination2",
			type: "progressbar",
		},
	});
}

let section15Swiper;
function section15Slide(){
	section15Swiper = new Swiper(".section15_slide", {
		speed: 5000,
		loop: true,
		slidesPerView : "auto",
		allowTouchMove : false,
		autoplay: {
			delay: 0,
			disableOnInteraction: false,
		},
	});
}

function tabEventFn(){
	let idx = $(".tab li.active").index();
	$(".tab_cont_wrap .tab_cont").eq(0).show().siblings().hide();

	$(".tab li").on("click", function(){
		let $tab = $(this).parent(".tab"),
			$tabCont = $tab.siblings(".tab_cont_wrap").children();

		$(this).addClass("active").siblings().removeClass("active");
		idx = $tab.find(".active").index();
		$tabCont.eq(idx).show().siblings().hide();

		let $img = $tab.parents().siblings(".tab_img").children();
		if($img.length){
			$img.eq(idx).show().siblings().hide();
		}
	});
}

function moreContFn(){
	$(".btn_more_cont").on("click", function(){
		let more = "+ MORE";
		// less = '- LESS';
		let $moreCont =  $(this).siblings(".more_cont");

		if($(this).text() === more){
			$moreCont.show();
			$(this).hide();
			// $(this).text(less);
		}else{
			$moreCont.hide();
			$(this).show();
			// $(this).text(more);
		}
	});
}