import React, { useState, useEffect } from 'react'
import ProfileIcon from '../components/IconProfile'
import '../css/header.css'
import SearchBar from './SearchBar'
import '../css/profile.css'
import '../css/language.css'
import '../css/logo.css'
import LanguageSelector from './Language'
import NavigationButtons from './NavButton'
import SearchIcon from './SearchIcon'

function Header({ onSignInClick, onSignUpClick }) {
	const [backgroundColor, setBackgroundColor] = useState('transparent')

	const handleScroll = () => {
		const scrollTop = window.scrollY || document.documentElement.scrollTop
		if (scrollTop > 50) {
			setBackgroundColor('#121212')
		} else {
			setBackgroundColor('transparent')
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<header style={{ backgroundColor }}>
			<a className='logo__link' href='index.html'>
				<div className='logo'>GGMORE</div>
			</a>
			<NavigationButtons />
			<div className='search__cont'>
				<div className='search'>
					<SearchBar />
				</div>
				<SearchIcon />
			</div>
			<LanguageSelector />
			<ProfileIcon
				onSignInClick={onSignInClick}
				onSignUpClick={onSignUpClick}
			/>
		</header>
	)
}

export default Header