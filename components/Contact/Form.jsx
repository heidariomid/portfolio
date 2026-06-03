import React from 'react';
import {FaGithub} from 'react-icons/fa';
import Footer from '../Footer/Footer';
import ContactForm from './FormInputs';

const Icon = ({children}) => (
	<span className='ic'>
		<svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.6'>
			{children}
		</svg>
	</span>
);

const contactRows = [
	{
		k: 'Website',
		v: 'heidariomid.com',
		href: 'https://heidariomid.com/',
		external: true,
		icon: (
			<>
				<circle cx='12' cy='12' r='9' />
				<path d='M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18' />
			</>
		),
	},
	{
		k: 'Email',
		v: 'info@heidariomid.com',
		href: 'mailto:info@heidariomid.com',
		icon: (
			<>
				<rect x='3' y='5' width='18' height='14' rx='2' />
				<path d='m3 7 9 6 9-6' />
			</>
		),
	},
	{
		k: 'Phone',
		v: '(+98) 937 379 8553',
		href: 'tel:+989373798553',
		icon: <path d='M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L20 13l1 4v2a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z' />,
	},
];

const Form = () => {
	return (
		<>
			<section id='contact' className='block wrap'>
				<div className='sec-head reveal'>
					<span className='sec-num'>04</span>
					<h2 className='sec-title'>Contact</h2>
					<span className='sec-line' />
				</div>

				<div className='contact-grid'>
					<div className='reveal flex flex-col'>
						<p className='mb-8 max-w-[32ch] text-[1.1rem] leading-[1.7]' style={{color: 'var(--fg-dim)'}}>
							Got a project that needs a developer&rsquo;s touch? Drop a line and let&rsquo;s talk about how I can help.
						</p>

						{contactRows.map((r) => (
							<a key={r.k} className='cinfo-row' href={r.href} {...(r.external ? {target: '_blank', rel: 'noreferrer'} : {})}>
								<Icon>{r.icon}</Icon>
								<span>
									<span className='k'>{r.k}</span>
									<br />
									<span className='v'>{r.v}</span>
								</span>
							</a>
						))}

						<a className='cinfo-row' href='https://github.com/heidariomid' target='_blank' rel='noreferrer'>
							<span className='ic'>
								<FaGithub size={18} />
							</span>
							<span>
								<span className='k'>GitHub</span>
								<br />
								<span className='v'>github.com/heidariomid</span>
							</span>
						</a>
					</div>

					<div className='reveal' data-d='1'>
						<ContactForm />
					</div>
				</div>
			</section>

			<Footer />
		</>
	);
};

export default Form;
