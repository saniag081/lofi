import Header from '../Header/Header';
import './Introduccion.scss'

function Introduccion() {
	return (
		<section className="c-instroduccion">
			<Header />
			<div className="u-content">
				<h1 className="c-instroduccion__title">HIFI SOUND</h1>
				<h2 className="c-instroduccion__title">LOFI APPROACH</h2>
				<h4 className="c-instroduccion__subtitle">MIAMI’S FIRST-EVER VINYL LISTENING BAR.</h4>
				<a className="u-btn--primary" href="#1">RESERVE NOW</a>
			</div>
		</section>
	)
}

export default Introduccion;