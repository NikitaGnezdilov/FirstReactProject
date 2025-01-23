import React from 'react'
import Header from './components/Header'
import Slider from './components/Slider'
import WhyChooseUs from './components/WhyChooseUs'
import Footer from './components/Footer'
import FormModalContainer from './components/FormModalContainer'

class App extends React.Component {
	render() {
		return (
			<div className='container'>
				<Header />
				<FormModalContainer>
					{({ handleSignInWindOpen, handleSignUpWindOpen }) => (
						<Header
							onSignInClick={handleSignInWindOpen}
							onSignUpClick={handleSignUpWindOpen}
						/>
					)}
				</FormModalContainer>
				<Slider />
				<WhyChooseUs />
				<Footer />
			</div>
		)
	}
}

export default App
