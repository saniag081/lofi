import Header from '../Header/Header';
import './Introduccion.scss'

function Introduccion() {
	return (
		<section className="instroduccion">
			<Header />
			<div className="u-content">
				<h1 className="instroduccion__title">HIFI SOUND</h1>
				<h2 className="instroduccion__title">LOFI APPROACH</h2>
				<h4 className="instroduccion__subtitle">MIAMI’S FIRST-EVER VINYL LISTENING BAR.</h4>
				<a className="u-btn--primary instroduccion__btn" href="#1">RESERVE NOW</a>
			</div>
		</section>
	)
}

export default Introduccion;