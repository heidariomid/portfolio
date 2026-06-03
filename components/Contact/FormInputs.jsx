import React, {useEffect, useRef, useState} from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
	const form = useRef();
	const [isMessageSent, setIsMessageSent] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		if (isMessageSent === 'success') {
			form.current.reset();
		}
		const clearMessage = setTimeout(() => setIsMessageSent(null), 5000);
		return () => clearTimeout(clearMessage);
	}, [isMessageSent]);

	const sendEmail = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		emailjs.sendForm('service_v7hm19x', 'template_o5gyj0r', form.current, 'CtIYhqPI6ko6qKCJn').then(
			(result) => {
				if (result.text === 'OK') {
					setIsMessageSent('success');
				}
				setIsLoading(false);
			},
			(error) => {
				console.log(error.text);
				setIsMessageSent('failed');
				setIsLoading(false);
			},
		);
	};

	return (
		<form ref={form} onSubmit={sendEmail} method='POST' className='contact-form'>
			<div className='field'>
				<label htmlFor='first-name'>Name</label>
				<input id='first-name' name='first-name' type='text' placeholder='Your name' autoComplete='given-name' required />
			</div>
			<div className='field'>
				<label htmlFor='email'>Email</label>
				<input id='email' name='email' type='email' placeholder='you@email.com' autoComplete='email' required />
			</div>
			<div className='field full'>
				<label htmlFor='subject'>Subject</label>
				<input id='subject' name='subject' type='text' placeholder='What&rsquo;s it about?' />
			</div>
			<div className='field full'>
				<label htmlFor='message'>Message</label>
				<textarea id='message' name='message' rows={4} placeholder='Tell me about your project...' required defaultValue='' />
			</div>

			{/* Kept for the EmailJS template, hidden from the redesigned layout */}
			<input type='hidden' name='last-name' value='' />
			<input type='hidden' name='phone' value='' />

			<button type='submit' className='btn btn-primary contact-submit'>
				{isLoading ? (
					'Sending...'
				) : (
					<>
						Send message
						<svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
							<path d='M5 12h14M13 6l6 6-6 6' />
						</svg>
					</>
				)}
			</button>

			{isMessageSent === 'success' && (
				<p className='form-note' style={{color: 'var(--accent)'}}>
					Thanks — your message has been sent. I&rsquo;ll be in touch.
				</p>
			)}
			{isMessageSent === 'failed' && <p className='form-note'>Something went wrong. Please email info@heidariomid.com directly.</p>}
			{!isMessageSent && <p className='form-note'>Prefer email? info@heidariomid.com</p>}
		</form>
	);
};

export default ContactForm;
