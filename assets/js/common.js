/* common */
let scrolTop = "",
	windowW  = "";

$(function(){
	scrolTop = $(window).scrollTop();
	windowW  = window.innerWidth;

	/* 페이지 리사이즈 이벤트 */
	$(window).resize(function(){
		windowW  = window.innerWidth;
	});

	/* 페이지 스크롤 이벤트 */
	$(window).scroll(function(){
		scrolTop = $(this).scrollTop();
	});

	clickDefaultFn();

	// main slide event
	mainSlide();
	principleSlide();
	txtSlide();
	imgSlide();
	phoneSlide();
	stepSlide();
	infoSlide();
	txtVerticalSlide();

	// gsapFn();

	tabEventFn();
	moreContFn();
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

/*
	main visual event
 */
let mainSwiper, principleSwiper, txtSwiper, imgSwiper, phoneSwiper, stepSwiper, infoSwiper, txtVerticalSwiper;

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
		// observe: true,
		// observeParents: true,
		slidesPerView : 1,
		loop: true,
		loopedSlides: 3,
		// autoplay: {
		// 	waitForTransition: false,
		// 	disableOnInteraction: false,
		// },
	});
}

function txtSlide(){
	txtSwiper = new Swiper(".txt_slide", {
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

function tabEventFn(){
	let idx = $(".tab li.active").index();
	$(".tab_cont_wrap .tab_cont").eq(0).show().siblings().hide();

	$(".tab li").on("click", function(){
		let $tab = $(this).parent(".tab"),
			$tabCont = $tab.siblings(".tab_cont_wrap").children();

		$(this).addClass("active").siblings().removeClass("active");
		idx = $tab.find(".active").index();
		$tabCont.eq(idx).show().siblings().hide();
	});
}

function moreContFn(){
	$(".btn_more_cont").on("click", function(){
		let more = "+ MORE",
			less = "- LESS";
		let $moreCont =  $(this).siblings(".more_cont");

		if($(this).text() === more){
			$moreCont.show();
			$(this).text(less);
		}else{
			$moreCont.hide();
			$(this).text(more);
		}
	});
}