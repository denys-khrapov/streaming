document.addEventListener('DOMContentLoaded', function () {
	initSwiper()
	showPassword()
	initForm()

	function initSwiper() {
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

	function initForm() {
		const steps = document.querySelectorAll('.form-step')
		const nextBtns = document.querySelectorAll('.next-step')
		let currentStep = 0

		nextBtns.forEach((btn) => {
			btn.addEventListener('click', () => {
				steps[currentStep].classList.remove('active')
				currentStep++
				if (currentStep < steps.length) {
					steps[currentStep].classList.add('active')
				}
			})
		})

		steps.forEach((step, index) => {
			if (index !== currentStep) {
				step.classList.remove('active')
			} else {
				step.classList.add('active')
			}
		})
	}
})
