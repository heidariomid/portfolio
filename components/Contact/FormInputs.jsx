import React, {useEffect, useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import useStateValue from '../../store/useContext';

const ContactForm = () => {
	const form = useRef();
	const [state] = useStateValue();
	const [isMessageSent, setIsMessageSent] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const {isDark} = state.theme;
	useEffect(() => {
		if (isMessageSent) {
			form.current.reset();
		}
		const clearMessage = setTimeout(() => {
			setIsMessageSent(null);
		}, 5000);
		return () => {
			clearTimeout(clearMessage);
		};
	}, [isMessageSent]);

	const formMessageHandler = () => {
		if (isMessageSent === 'success') {
			return (
				<div>
					<p
						className={`text-sm    p-4 ${
							isDark
								? 'bg-green-500 text-white'
								: 'border-2  border-spacing-4 border-green-600 text-green-600'
						} flex justify-center items-center`}
					>
						your message has been sent successfully
						<div className='pl-2'>
							<svg width='20' height='20' fill='currentColor' viewBox='0 0 16 16'>
								{' '}
								<path d='M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z' />{' '}
							</svg>
						</div>
					</p>
				</div>
			);
		} else if (isMessageSent === 'failed') {
			return (
				<div>
					<p
						className={`text-sm p-4   ${
							isDark
								? 'bg-red-500 text-white'
								: 'border-2  border-spacing-4 border-red-600 text-red-600'
						} flex justify-center items-center`}
					>
						there was an error sending your message
						<div className='pl-2'>
							<svg width='20' height='20' fill='currentColor' viewBox='0 0 24 24'>
								<g>
									<path fill='none' d='M0 0h24v24H0z' />{' '}
									<path d='M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9.414l2.828-2.829 1.415 1.415L13.414 12l2.829 2.828-1.415 1.415L12 13.414l-2.828 2.829-1.415-1.415L10.586 12 7.757 9.172l1.415-1.415L12 10.586z' />{' '}
								</g>
							</svg>
						</div>
					</p>
				</div>
			);
		}
	};
	const sendEmail = (e) => {
		e.preventDefault();
		setIsLoading(true);
		emailjs
			.sendForm('service_v7hm19x', 'template_o5gyj0r', form.current, 'G5vSgjaUNRtKTjF4Z')
			.then(
				(result) => {
					if (result.text === 'OK') {
						setIsMessageSent('success');
						setIsLoading(false);
					}
				},
				(error) => {
					console.log(error.text);
					setIsMessageSent('failed');
					setIsLoading(false);
				},
			);
	};
	return (
		<form
			ref={form}
			onSubmit={sendEmail}
			method='POST'
			className='mt-6  grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-8 '
		>
			<div className='relative '>
				<input
					type='text'
					name='first-name'
					placeholder=' '
					id='first-name'
					autoComplete='given-name'
					className='peer  focus:ring-0  py-3 px-4 block w-full  shadow-sm  focus:ring-indigo-800 focus:border-fuchsia-700 border-gray-300 rounded-md'
				/>
				<label
					htmlFor='first-name'
					className={`absolute -top-6 left-3 text-sm font-medium  transition-all duration-200   peer-placeholder-shown:top-4  peer-placeholder-shown:text-gray-500 peer-focus:-top-6 peer-focus:left-3 peer-focus:text-sm ${
						isDark
							? 'peer-focus:text-white text-white'
							: ' peer-focus:text-purple-700 text-gray-700'
					}  `}
				>
					First name
				</label>
			</div>

			<div className='relative'>
				<input
					placeholder=' '
					type='text'
					name='last-name'
					id='last-name'
					autoComplete='family-name'
					className='peer focus:ring-0 py-3 px-4 block w-full shadow-sm  focus:ring-purple-400 focus:border-violet-500 border-gray-300 rounded-md'
				/>
				<label
					htmlFor='last-name'
					className={`absolute -top-6 left-3 text-sm font-medium  transition-all duration-200   peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-500 peer-focus:-top-6 peer-focus:left-3 peer-focus:text-sm ${
						isDark
							? 'peer-focus:text-white text-white'
							: ' peer-focus:text-purple-700 text-gray-700'
					}  `}
				>
					Last name
				</label>
			</div>
			<div className='relative'>
				<div className='flex justify-end pt-[20px]'></div>
				<input
					placeholder=' '
					id='email'
					name='email'
					type='email'
					autoComplete='email'
					className='peer focus:ring-0 py-3 px-4 block w-full shadow-sm  focus:ring-purple-400 focus:border-violet-500 border-gray-300 rounded-md'
				/>
				<label
					htmlFor='email'
					className={`absolute -top-1 left-3 text-sm font-medium  transition-all duration-200   peer-placeholder-shown:top-9 peer-placeholder-shown:text-gray-500 peer-focus:-top-1 peer-focus:left-3 peer-focus:text-sm ${
						isDark
							? 'peer-focus:text-white text-white'
							: ' peer-focus:text-purple-700 text-gray-700'
					}  `}
				>
					Email
				</label>
			</div>
			<div className='relative'>
				<div className='flex justify-end '>
					<span id='phone-optional' className='text-sm text-gray-900'>
						Optional
					</span>
				</div>
				<div className='flex justify-between'>
					<input
						placeholder=' '
						type='text'
						name='phone'
						id='phone'
						autoComplete='tel'
						className='peer focus:ring-0 py-3 px-4 block w-full shadow-sm  focus:ring-purple-400 focus:border-violet-500 border-gray-300 rounded-md'
						aria-describedby='phone-optional'
					/>
					<label
						htmlFor='phone'
						className={`absolute -top-1 left-3 text-sm font-medium  transition-all duration-200   peer-placeholder-shown:top-9 peer-placeholder-shown:text-gray-500 peer-focus:-top-1 peer-focus:left-3 peer-focus:text-sm ${
							isDark
								? 'peer-focus:text-white text-white'
								: ' peer-focus:text-purple-700 text-gray-700'
						}  `}
					>
						Phone
					</label>
				</div>
			</div>
			<div className='sm:col-span-2 relative'>
				<input
					placeholder=' '
					type='text'
					name='subject'
					id='subject'
					className='peer focus:ring-0 py-3 px-4 block w-full shadow-sm  focus:ring-purple-400 focus:border-violet-500 border-gray-300 rounded-md'
				/>

				<label
					htmlFor='subject'
					className={`absolute -top-6 left-3 text-sm font-medium  transition-all duration-200   peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-500 peer-focus:-top-6 peer-focus:left-3 peer-focus:text-sm ${
						isDark
							? 'peer-focus:text-white text-white'
							: ' peer-focus:text-purple-700 text-gray-700'
					}  `}
				>
					Subject
				</label>
			</div>
			<div className='sm:col-span-2 relative'>
				<div className='flex justify-end '>
					<span id='message-max' className='text-sm text-gray-900'>
						Max. 500 characters
					</span>
				</div>
				<div className='flex justify-between'>
					<textarea
						placeholder=''
						id='message'
						name='message'
						rows={4}
						className='peer focus:ring-0 py-3 px-4 block w-full shadow-sm  focus:ring-purple-400 focus:border-violet-500 border-gray-300 rounded-md'
						aria-describedby='message-max'
						defaultValue={''}
					/>
					<label
						htmlFor='message'
						className={`absolute -top-1 left-3 text-sm  font-medium  transition-all duration-200    peer-placeholder-shown:top-9 peer-placeholder-shown:text-gray-500 peer-focus:-top-1 peer-focus:left-3 peer-focus:text-sm ${
							isDark
								? 'peer-focus:text-white text-white'
								: ' peer-focus:text-purple-700 text-gray-500'
						}   `}
					>
						Message
					</label>
				</div>
			</div>

			<div className='sm:col-span-2 sm:flex sm:justify-end'>
				<div className='w-full h-full mx-auto justify-center  items-center flex'>
					{isMessageSent && formMessageHandler()}
				</div>
				<div></div>
				<button
					type='submit'
					className={`mt-2 ${
						isDark
							? 'bg-black text-white shadow-purple-400 shadow-light hover:shadow-purple-400 hover:shadow-lighter'
							: 'bg-gradient'
					} w-full inline-flex items-center  justify-center px-10  py-3 border border-transparent rounded-md  text-base font-medium text-white   hover:bg-gradient  focus:outline-none  sm:w-auto ease-in transition-all duration-300`}
				>
					{isLoading ? (
						<div className='px-[14px]'>
							<svg
								className='animate-spin'
								width='24'
								height='24'
								viewBox='0 0 48 48'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M4 24C4 35.0457 12.9543 44 24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4'
									stroke='#ffffff'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
						</div>
					) : (
						'Submit'
					)}
				</button>
			</div>
		</form>
	);
};

export default ContactForm;
