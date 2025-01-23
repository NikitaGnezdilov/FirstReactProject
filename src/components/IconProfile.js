import React, { useState } from 'react'
import IconImg from '../img/iconprofile.svg'

const Icon = ({ onSignInClick, onSignUpClick }) => {
	const [showProfileMenu, setShowProfileMenu] = useState(false)
	const [timeoutId, setTimeoutId] = useState(null)
	
	const handleProfileMouseEnter = () => {
		if (timeoutId) {
			clearTimeout(timeoutId)
		}
		setShowProfileMenu(true)
	}

	const handleProfileMouseLeave = () => {
		const newTimeoutId = setTimeout(() => {
			setShowProfileMenu(false)
		}, 2000)
		setTimeoutId(newTimeoutId)
	}

	const handleMenuMouseEnter = () => {
		if (timeoutId) {
			clearTimeout(timeoutId)
		}
		setShowProfileMenu(true)
	}

	const handleMenuMouseLeave = () => {
		const newTimeoutId = setTimeout(() => {
			setShowProfileMenu(false)
		}, 400)
		setTimeoutId(newTimeoutId)
	}

	const handleSignInClick = () => {
		if (onSignInClick) onSignInClick() 
	}

	const handleSignUpClick = () => {
		if (onSignUpClick) onSignUpClick()
	}

	return (
		<div
			className='profile'
			onMouseEnter={handleProfileMouseEnter}
			onMouseLeave={handleProfileMouseLeave}
			onClick={() => {
				if (onSignInClick) onSignInClick()
				setShowProfileMenu(true)
			}}
		>
			<a href='#'>
				<img src={IconImg} alt='Profile' />
			</a>
			<div
				className={`profile-menu ${showProfileMenu ? 'show' : ''}`}
				onMouseEnter={handleMenuMouseEnter}
				onMouseLeave={handleMenuMouseLeave}
			>
				<ul>
					<li>
						<button onClick={onSignInClick}>Sign In</button>
					</li>
					<li>
						<button onClick={onSignUpClick}>Sign Up</button>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Icon
