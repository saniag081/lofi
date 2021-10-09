import Textarea from '../../common/components/Textarea/Textarea';
import Select from '../../common/components/Select/Select';
import { useForm } from 'react-hook-form'
import './Contact.scss';

function Contact(states) {
	const { register, handleSubmit, formState: {errors} } = useForm();

	const handleForm = (data) => {
		console.log(data);
	}
	console.log(states);
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
								// {...register('state')}
								options={[
									{value: 'one_1', text: 'STATE*'},
									{value: 'one_2', text: '2'},
									{value: 'one_3', text: '3'},
								]}
							/>
							<Select
								newClass='u-w100'
								// {...register('city')}
								options={[
										{value: 'two_1', text: 'CITY*'},
										{value: 'two_2', text: '2'},
										{value: 'two_3', text: '3'},
									]}
								/>
						</div>
						<Textarea
							required
							// {...register('why')}
							label="WHY WOULD YOU BE A BENEFICIAL MEMBER?*"
						/>
					</div>
               <div className="contact__form__last">
                  <div className="u-w100">
                     <Select newClass='u-w100' name="MEMBERSHIP" required options={[
                           {value: '1', text: 'MEMBERSHIP TYPE*'},
                           {value: '2', text: '2'},
                           {value: '3', text: '3'},
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