import Plan from '../Plan/Plan';
import './Arrangement.scss';

function Arrangement() {
	return (
		<section className="arrangement" id="arrangement">
			<div className="u-content">
				<div className="arrangement__container">
					<Plan
						title="BENEFITS"
						img="./stereo.png"
						description="ACCESS TO MONTHLY MEMBERS’ ONLY EVENTS PRIORITY BOOKING FOR MEMBER AND TWO GUESTS MAY BOOK ON BEHALF OF TWO GUESTS WHEN NOT IN ATTENDANCE ABLE TO REFER OTHER STEREO MEMBERS *PLEASE NOTE, ALL BOOKINGS MUST BE MADE WITH AT LEAST 48 HOURS NOTICE"
						price="$2500 / YEAR"
						textBtn="APPLY NOW"
						toSection='#contact'
					/>
					<Plan
						title="BENEFITS"
						img="./mono.png"
						description="ACCESS TO MONTHLY MEMBERS’ ONLY EVENTS PRIORITY BOOKING ON ALL EVENTS *PLEASE NOTE, ALL BOOKINGS MUST BE MADE WITH AT LEAST 48 HOURS NOTICE"
						price="$1500 / YEAR"
						textBtn="APPLY NOW"
						toSection='#contact'
						/>
				</div>
			</div>
			<div className="u-content arrangement__paragraph">
				<p>MEMBERSHIP WILL AUTOMATICALLY RENEW EACH YEAR, PROVIDED THE MEMBER CONTINUES TO MEET STANDARDS. PRICES ARE SUBJECT TO CHANGE ANNUALLY.</p>
				<p>OWNERSHIP RESERVES THE RIGHT TO REVOKE MEMBERSHIP AT ANY TIME AT THEIR DISCRETION.</p>
			</div>
		</section>
	)
}

export default Arrangement;