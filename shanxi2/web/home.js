

/*轮播*/
$('.bannar-carousel .swiper-container').each(function () {
	new Swiper($(this), {
		autoplay:3000,
		speed: 1000,
		pagination: '.swiper-pagination',
		paginationBulletRender: function (swiper, index, className) {
			return '<span class="' + className + '"></span>';
		},
		paginationClickable:true
	});
});

$('.product-wrap .swiper-container').each(function () {
	var swiper = new Swiper($(this), {
		pagination: '.swiper-pagination',
		slidesPerView: 4,
		nextButton: ".swiper-button-next",
		prevButton: ".swiper-button-prev",
		autoplay:3000,
		paginationClickable: true,
		spaceBetween: 30
	});
	$(this).parents(".tab-body-item").on("show",function(){
		swiper.resize();
	});
});
$(".index-banner-video .close").click(function () {
	var video = $(this).parent().find("video")[0];
	if(video.pause){
		video.pause();
	}
	$(this).parent().hide();
});
