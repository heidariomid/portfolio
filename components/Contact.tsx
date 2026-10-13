import type {ReactNode} from 'react';
import {FaGithub, FaLinkedinIn} from 'react-icons/fa';
import ContactForm from './ContactForm';
import {CONTACT_EMAIL, GITHUB_LABEL, GITHUB_URL, LINKEDIN_LABEL, LINKEDIN_URL, RESUME_URL} from '../data/contact';

const Icon = ({children}: {children: ReactNode}) => (
	<span className='ic'>
		<svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.6'>
			{children}
		</svg>
	</span>
);

type ContactRow = {k: string; v: string; href: string; external?: boolean; icon: ReactNode};

const contactRows: ContactRow[] = [
	{
		k: 'Email',
		v: CONTACT_EMAIL,
		href: `mailto:${CONTACT_EMAIL}`,
		icon: (
			<Icon>
				<rect x='3' y='5' width='18' height='14' rx='2' />
				<path d='m3 7 9 6 9-6' />
			</Icon>
		),
	},
	{
		k: 'LinkedIn',
		v: LINKEDIN_LABEL,
		href: LINKEDIN_URL,
		external: true,
		icon: (
			<span className='ic'>
				<FaLinkedinIn size={16} />
			</span>
		),
	},
	{
		k: 'GitHub',
		v: GITHUB_LABEL,
		href: GITHUB_URL,
		external: true,
		icon: (
			<span className='ic'>
				<FaGithub size={18} />
			</span>
		),
	},
	{
		k: 'Resume',
		v: 'Download PDF',
		href: RESUME_URL,
		external: true,
		icon: (
			<Icon>
				<path d='M14 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8z' />
				<path d='M14 3v5h5M9 13h6M9 17h6' />
			</Icon>
		),
	},
];

const Contact = () => {
	return (
		<section id='contact' className='block wrap'>
			<div className='sec-head reveal'>
				<span className='sec-num'>04</span>
				<h2 className='sec-title'>Contact</h2>
				<span className='sec-line' />
			</div>

			<div className='contact-grid'>
				<div className='reveal flex flex-col'>
					<p className='mb-8 max-w-[32ch] text-[1.1rem] leading-[1.7]' style={{color: 'var(--fg-dim)'}}>
						I&rsquo;m open to front-end and software engineering roles, including remote positions. Email me or use the form.
					</p>

					{contactRows.map((r) => (
						<a key={r.k} className='cinfo-row' href={r.href} {...(r.external ? {target: '_blank', rel: 'noreferrer'} : {})}>
							{r.icon}
							<span>
								<span className='k'>{r.k}</span>
								<br />
								<span className='v'>{r.v}</span>
							</span>
						</a>
					))}
				</div>

				<div className='reveal' data-d='1'>
					<ContactForm />
				</div>
			</div>
		</section>
	);
};

export default Contact;
