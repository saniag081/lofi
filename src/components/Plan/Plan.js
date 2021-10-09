import Button from '../../common/components/Button/Button';
import './Plan.scss';

function Plan({ title, img, description, price, textBtn, toSection }) {
	return (
		<div className="plan">
			<img src={img} alt="plan"/>
			<h4 className="plan__title">{ title }</h4>
			<p className="plan__description">{ description }</p>
			<p className="plan__price">{ price }</p>
			<Button text={textBtn} toSection={toSection} />
		</div>
	)
}

export default Plan;