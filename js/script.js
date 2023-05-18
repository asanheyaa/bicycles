const burger = document.querySelector('.main__burger'),
	menu = document.querySelector('.main__menu');

burger.addEventListener('click', (e) => {
	burger.classList.toggle('_active');
	menu.classList.toggle('_active');
	document.body.classList.toggle('_lock');

})

const swiper = new Swiper('.swiper-reviews', {
	// Optional parameters
	loop: true,
	pagination: {
		el: '.swiper-reviews__pagination',
	},
});