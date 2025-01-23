import React from 'react'
import '../css/language.css'

const LanguageSelector = () => {

	return (
		<div className='language-selector'>
			<select>
				<option value='en'>en</option>
				<option value='ru'>ru</option>
			</select>
		</div>
	)
}

export default LanguageSelector;
