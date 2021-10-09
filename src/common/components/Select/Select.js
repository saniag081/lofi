import './Select.scss';

function Select({ options = [], name = '', newClass, ...all }) {
	return (
		<select className={`u-select ${newClass}`} name={name} {...all}>
			{options.map((option => (
				<option key={ option } value={ option } >{ option }</option>
			)))}
		</select>
	)
}

export default Select;