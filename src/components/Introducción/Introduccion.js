import Header from '../Header/Header';
import Button from '../../common/components/Button/Button';
import './Introduccion.scss'

function Introduccion() {
	return (
		<section className="instroduccion" id="#introduccion">
			<Header />
			<div className="u-content">
				<h1 className="instroduccion__title">HIFI SOUND</h1>
				<h2 className="instroduccion__title">LOFI APPROACH</h2>
				<h4 className="instroduccion__subtitle">MIAMI’S FIRST-EVER VINYL LISTENING BAR.</h4>
				<Button text='RESERVE NOW' toSection="#contact" />
			</div>
		</section>
	)
}

export default Introduccion;