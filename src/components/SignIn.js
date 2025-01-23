import React from "react";
import '../css/signin.css';



function SignIn({ closeWindow }) {
	return (
		<div className='signin-container'>
			<div className='signin-box'>
				<h2>Sign In</h2>
				<form action='#' method='post'>
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
					<button onClick={closeWindow}>Close</button>
				</form>
				<p className='signup-link'>
					Don't have an account? <a href='#'>Sign Up</a>
				</p>
			</div>
		</div>
	)
}

export default SignIn
