import React, { useState, useEffect } from 'react'
import '../css/slider.css'
import slide_one from '../img/slide__first.png'
import slide_two from '../img/slide__second.png'
import slide_three from '../img/slide__third.png'
import slide_four from '../img/slide__fourth.png'

const Slider = () => {
	const [currentSlide, setCurrentSlide] = useState(0)
	const slides = [slide_one, slide_two, slide_three, slide_four]

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentSlide(prevSlide => (prevSlide + 1) % slides.length)
		}, 5000)

		return () => clearInterval(interval)
	}, [slides.length])

	return (
		<div className='slider'>
			<div
				className='slider__line'
				style={{
					transform: `translateX(-${currentSlide * 100}%)`,
				}}
			>
				{slides.map((slide, index) => (
					<div key={index} className='slider__img-wrapper'>
						<img src={slide} alt={`slide_${index}`} className='slider__img' />
					</div>
				))}
			</div>
			<div className='slider__content'>
				<h1>Everything You Need to Know About Your Favorite Games!</h1>
				<h2>
					Explore in-depth articles, game guides, and the latest news on all
					your favorite titles. Discover new games, strategies, and updates to
					stay ahead of the curve.
				</h2>
				<button>MORE</button>
			</div>
		</div>
	)
}

export default Slider
