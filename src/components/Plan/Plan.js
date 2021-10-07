import './Plan.scss';

function Plan({ title, img, description, price, textBtn }) {
	return (
		<div className="plan">
			<img src={img} alt="plan"/>
			<h4 className="plan__title">{ title }</h4>
			<p className="plan__description">{ description }</p>
			<p className="plan__price">{ price }</p>
			<div className="u-btn--primary">
				<a href="#4">{ textBtn }</a>
			</div>
		</div>
	)
}

export default Plan;