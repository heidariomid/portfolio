import Link from 'next/link';
import BackToTop from './BackToTop';
import {GITHUB_URL, LINKEDIN_URL, RESUME_URL} from '../data/contact';

const footNav = [
	{name: 'About', href: '/#about', external: false},
	{name: 'Projects', href: '/#projects', external: false},
	{name: 'Skills', href: '/#skills', external: false},
	{name: 'Contact', href: '/#contact', external: false},
	{name: 'Resume', href: RESUME_URL, external: true},
	{name: 'GitHub', href: GITHUB_URL, external: true},
	{name: 'LinkedIn', href: LINKEDIN_URL, external: true},
];

const Footer = () => {
	return (
		<footer className='site-footer wrap'>
			<div className='foot-grid'>
				<Link href='/#home' className='flex items-center gap-[0.7rem] text-[1.05rem] font-semibold tracking-[-0.02em]'>
					<span className='h-[9px] w-[9px] rounded-full' style={{background: 'var(--fg)'}} />
					Omid Heidari
				</Link>

				<ul className='foot-nav'>
					{footNav.map((l) =>
						l.external ? (
							<li key={l.name}>
								<a href={l.href} target='_blank' rel='noreferrer'>
									{l.name}
								</a>
							</li>
						) : (
							<li key={l.name}>
								<Link href={l.href}>{l.name}</Link>
							</li>
						),
					)}
				</ul>

				<span className='foot-copy'>© 2026 Omid Heidari</span>

				<BackToTop />
			</div>
		</footer>
	);
};

export default Footer;
