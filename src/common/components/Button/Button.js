function Button({ text, toSection='#', isPrimary=true}) {
	const typeButton = isPrimary ? 'u-btn--primary' : 'u-btn--secundary';
	return (
		<div className={typeButton}>
			<a className={`${typeButton}__item`} href={ toSection } >{ text }</a>
		</div>
	)
}

export default Button;