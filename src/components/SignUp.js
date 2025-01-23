import React from 'react'
import '../css/signup.css'

function SignUp({ closeWindow }) {
	return (
		<div className='signup-container'>
			<div className='signup-box'>
				<h2>Sign Up</h2>
				<form action='#' method='post'>
					<div className='input-group'>
						<label htmlFor='username'>Username</label>
						<input
							type='text'
							id='username'
							name='username'
							placeholder='Enter your username'
							required
						/>
					</div>
					<div className='input-group'>
						<label htmlFor='email'>Email</label>
						<input
							type='email'
							id='email'
							name='email'
							placeholder='Enter your email'
							required
						/>
					</div>
					<div className='input-group'>
						<label htmlFor='password'>Password</label>
						<input
							type='password'
							id='password'
							name='password'
							placeholder='Enter your password'
							required
						/>
					</div>
					<div className='input-group'>
						<label htmlFor='confirm-password'>Confirm Password</label>
						<input
							type='password'
							id='confirm-password'
							name='confirm-password'
							placeholder='Confirm your password'
							required
						/>
					</div>
					<button onClick={closeWindow}>Close</button>
				</form>
				<p className='signin-link'>
					Already have an account? <a href='#'>Sign In</a>
				</p>
			</div>
		</div>
	)
}

export default SignUp
