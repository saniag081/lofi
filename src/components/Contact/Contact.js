import Textarea from '../../common/components/Textarea/Textarea';
import Select from '../../common/components/Select/Select';
import { useForm } from 'react-hook-form'
import './Contact.scss';

function Contact({states=[], handleChangeSelect, citys=[]}) {
	const { register, handleSubmit, formState: {errors} } = useForm();

	const handleForm = (data) => {
		console.log(data);
	}

	return (
		<section className="contact" id="contact">
			<div className="u-content">
				<h2 className="contact__title">APPLY TO BECOME A MEMBER</h2>
				<p className="contact__paragraph">TO APPLY FOR A STEREO MEMBERSHIP, ONE MUST BE RECOMMENDED BY TWO STEREO TIER MEMBERS. THE MEMBERSHIP COMMITTEE WILL MEET EVERY TWO MONTHS TO REVIEW A LIMITED NUMBER OF APPLICATIONS. NOMINATION DOES NOT GUARANTEE ACCEPTANCE.</p>
				<form className="contact__form" onSubmit={handleSubmit(handleForm)}>
					<div>
						<input
							className="u-input"
							type="text"
							placeholder='NAME*'
							required
							{...register('firstName', { minLength: 4 })}
						/>
						{errors.firstName && <div>llene los campos, minimo 4 digitos</div>}
						<div className="contact__container__first">
							<input
								className="u-input u-w100"
								type="number"
								placeholder='PHONE*'
								required
								{...register('phone', { minLength: 10, maxLength: 10})}
							/>
							<input
								className="u-input u-w100"
								type="email"
								placeholder='EMAIl*'
								{...register('email')}
								required
							/>
						</div>
						<div className="contact__container__second">
							<Select
                        options={['STATE*', ...states]}
                        onChange={handleChangeSelect}
							/>
							<Select
								newClass='u-w100'
								options={['CITY*', ...citys]}
								/>
						</div>
						<Textarea
							required
							label="WHY WOULD YOU BE A BENEFICIAL MEMBER?*"
						/>
					</div>
               <div className="contact__form__last">
                  <div className="u-w100">
							<Select newClass='u-w100' name="MEMBERSHIP" required options={[
                        'MEMBERSHIP TYPE*',
                        1,
                        2
                        ]}
                     />
                     <div className="contact__container__first">
								<input
                           className="u-input u-w100"
                           placeholder="REFERRED BY*"
                           required
                           {...register('referredOne')}
                        />
                        <input
                           className="u-input u-w100"
                           name="referredTwo"
                           placeholder="REFERRED BY*"
                           required
                           {...register('referredTwo')}
                        />
                     </div>
                     <input
                        className="u-input u-w100"
                        placeholder="INSTAGRAM OR LINKEDIN*"
                        required
                        {...register('social')}
                     />
						</div>
						<button type="submit" className="u-btn--secundary">APPLY NOW</button>
					</div>
				</form>
			</div>
		</section>
	)
}

export default Contact;