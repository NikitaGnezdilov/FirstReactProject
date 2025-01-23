import React, { useState } from 'react'
import SignIn from './SignIn'
import SignUp from './SignUp'

function FormModalContainer() {
	const [currentWindow, setCurrentWindow] = useState(null);

	const handleSignInWindOpen = () => {
		setCurrentWindow('signIn')
	}

	const handleSignUpWindOpen = () => {
		setCurrentWindow('signUp')
	}

	const closeWindow = () => {
		setCurrentWindow(null) 
	}

	return (
		<div>
			<button onClick={handleSignInWindOpen}>Open Sign In</button>
			<button onClick={handleSignUpWindOpen}>Open Sign Up</button>

			{currentWindow === 'signIn' && <SignIn closeWindow={closeWindow} />}
			{currentWindow === 'signUp' && <SignUp closeWindow={closeWindow} />}
		</div>
	)
}

export default FormModalContainer
