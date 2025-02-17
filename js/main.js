import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.mjs'

document.addEventListener('DOMContentLoaded', function () {
	initSwiper()
	showPassword()

	function initSwiper() {
		const formSlider = new Swiper('.form-slider', {
			slidesPerView: 1,
			effect: 'fade',
			fadeEffect: {
				crossFade: true
			},
			autoHeight: true,
			pagination: {
				el: '.swiper-pagination',
				clickable: true
			}
		})

		const carouselSlider = new Swiper('.carousel-slider', {
			loop: true,
			autoplay: {
				delay: 3000,
				disableOnInteraction: false
			},
			slidesPerView: 'auto',
			speed: 800,
			spaceBetween: 20,
			centeredSlides: true
		})

		const communitySlider = new Swiper('.community-slider', {
			loop: true,
			autoplay: {
				delay: 3000,
				disableOnInteraction: false
			},
			slidesPerView: 'auto',
			speed: 800,
			spaceBetween: 20,
			centeredSlides: true
		})

		const whySlider = new Swiper('.why-slider', {
			loop: true,
			autoplay: {
				delay: 4000,
				disableOnInteraction: false
			},
			slidesPerView: 'auto',
			speed: 800,
			spaceBetween: 20,
			centeredSlides: true,
			init: false
		})

		function handleSwiper() {
			if (window.innerWidth <= 991.98) {
				if (!whySlider.initialized) {
					whySlider.init()
				}
			} else {
				if (whySlider.initialized) {
					whySlider.destroy(true, true)
				}
			}
		}
		handleSwiper()
	}

	function showPassword() {
		const passwordInput = document.getElementById('password')
		const togglePassword = document.querySelector('.toggle-password')

		togglePassword.addEventListener('click', function () {
			if (passwordInput.type === 'password') {
				passwordInput.type = 'text'
			} else {
				passwordInput.type = 'password'
			}
		})
	}
})
