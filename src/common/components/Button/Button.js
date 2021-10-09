function Button({ text, toSection='#', isPrimary=true}) {
	const typeButton = isPrimary ? 'u-btn--primary' : 'u-btn--secundary';
	return (
		<div>
			<a className={`${typeButton}`} href={ toSection } >{ text }</a>
		</div>
	)
}

export default Button;