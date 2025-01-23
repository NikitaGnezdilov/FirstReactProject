import React from 'react'
import '../css/footer.css'

function Footer() {
	return (
		<footer className='footer'>
			<div className='footer__content'>
				<div className='footer__section'>
					<h4>About Us</h4>
					<p>GGMore is your ultimate destination for all things gaming.</p>
				</div>
				<div className='footer__section'>
					<h4>Contact</h4>
					<p>Email: support@ggmore.com</p>
					<p>Phone: +123-456-7890</p>
				</div>
				<div className='footer__section'>
					<h4>Follow Us</h4>
					<p>
						<a href='#'>GitHub</a>
					</p>
					<p>
						<a href='#'>Telegram</a>
					</p>
				</div>
			</div>
			<div className='footer__bottom'>
				<p>&copy; 2025 GGMore. All Rights Reserved.</p>
			</div>
		</footer>
	)
}

export default Footer
