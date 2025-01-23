import React, { useState } from 'react'
import '../css/searchfield.css'

const InputField = ({ placeholder, value, onChange }) => {
	return (
		<input
			type='text'
			placeholder={placeholder}
			value={value}
			onChange={onChange}
			className='input-field'
		/>
	)
}

const SearchBar = () => {
	const [searchTerm, setSearchTerm] = useState('')

	return (
		<div className='search-bar'>
			<InputField
				placeholder='Find it...'
				value={searchTerm}
				onChange={e => setSearchTerm(e.target.value)}
			/>
		</div>
	)
}

export default SearchBar
