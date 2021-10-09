import Button from '../../common/components/Button/Button';
import './AboutAs.scss'

function AboutAs() {
	return (
		<section className="about" id="aboutAs">
			<div className="u-content">
				<div className="about__container">
					<h2 className="about__title">MEMBERSHIPS</h2>
					<h6 className="about__subtitle">WHILE THE BAR WILL BE OPEN TO THE PUBLIC, THERE ARE MEMBERSHIP OPPORTUNITIES AVAILABLE THAT WILL EXPEDITE NIGHTLY SEATINGS AND ALLOW FOR ACCESS TO EXCLUSIVE EVENTS. DANTE’S HIFI WILL HOST AT LEAST ONE MEMBER’S ONLY EVENT A MONTH.</h6>
					<Button text="EXPLORE MEMBERSHIPS" isPrimary={ false }/>
				</div>
				<p className="about__paragraph">MEMBERSHIP WILL AUTOMATICALLY RENEW EACH YEAR, PROVIDED THE MEMBER CONTINUES TO MEET STANDARDS. PRICES ARE SUBJECT TO CHANGE ANNUALLY. OWNERSHIP RESERVES THE RIGHT TO REVOKE MEMBERSHIP AT ANY TIME AT THEIR DISCRETION.</p>
			</div>
		</section>
	)
}

export default AboutAs;