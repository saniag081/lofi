import './Select.scss';

function Select({ options = [], name = '', newClass, all }) {
	return (
		<select className={`u-select ${newClass}`} name={name} {...all}>
			{options.map((option => (
				<option key={option.value} value={ option.value } >{ option.text }</option>
			)))}
		</select>
	)
}

export default Select;