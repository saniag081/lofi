import Textarea from '../../common/components/Textarea/Textarea';
import Select from '../../common/components/Select/Select';
import Button from '../../common/components/Button/Button';
import './Contact.scss';

function Contact() {
	return (
		<section className="contact">
			<div className="u-content">
				<h2 className="contact__title">APPLY TO BECOME A MEMBER</h2>
				<p className="contact__paragraph">TO APPLY FOR A STEREO MEMBERSHIP, ONE MUST BE RECOMMENDED BY TWO STEREO TIER MEMBERS. THE MEMBERSHIP COMMITTEE WILL MEET EVERY TWO MONTHS TO REVIEW A LIMITED NUMBER OF APPLICATIONS. NOMINATION DOES NOT GUARANTEE ACCEPTANCE.</p>
				<form className="contact__form">
					<div>
						<input className="u-input" type="text" placeholder='NAME*' />
						<div className="contact__container__first">
							<input className="u-input u-w100" name="phone" type="text" placeholder='PHONE*'/>
							<input className="u-input u-w100" name="email" type="text" placeholder='EMAIl*'/>
						</div>
						<div className="contact__container__second">
							<Select name="state" options={[
									{value: 'one_1', text: 'STATE*'},
									{value: 'one_2', text: '2'},
									{value: 'one_3', text: '3'},
								]}
							/>
								<Select newClass='u-w100' name="city" options={[
										{value: 'two_1', text: 'CITY*'},
										{value: 'two_2', text: '2'},
										{value: 'two_3', text: '3'},
									]}
								/>
						</div>
						<Textarea name="why" label="WHY WOULD YOU BE A BENEFICIAL MEMBER?*" />
					</div>
               <div className="contact__form__last">
                  <div className="u-w100">
                     <Select newClass='u-w100' name="MEMBERSHIP" options={[
                           {value: '1', text: 'MEMBERSHIP TYPE*'},
                           {value: '2', text: '2'},
                           {value: '3', text: '3'},
                        ]}
                     />
                     <div className="contact__container__first">
                        <input className="u-input u-w100" name="referredOne" placeholder="REFERRED BY*"/>
                        <input className="u-input u-w100" name="referredTwo" placeholder="REFERRED BY*"/>
                     </div>
                     <input className="u-input u-w100" name="social" placeholder="INSTAGRAM OR LINKEDIN*"/>
                  </div>
                  <Button text='APPLY NOW' isPrimary={false} />
					</div>
				</form>
			</div>
		</section>
	)
}

export default Contact;