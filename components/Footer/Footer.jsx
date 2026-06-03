import React from 'react';
import Link from 'next/link';

const footNav = [
	{name: 'About', href: '/#about'},
	{name: 'Skills', href: '/#skills'},
	{name: 'Work', href: '/#projects'},
	{name: 'Contact', href: '/#contact'},
	{name: 'GitHub', href: 'https://github.com/heidariomid', external: true},
	{name: 'LinkedIn', href: 'https://www.linkedin.com/in/heidariomid/', external: true},
];

const Footer = () => {
	const toTop = () => {
		if (typeof window !== 'undefined') window.scrollTo({top: 0, behavior: 'smooth'});
	};

	return (
		<footer className='site-footer wrap'>
			<div className='foot-grid'>
				<Link href='/#home'>
					<a className='flex items-center gap-[0.7rem] text-[1.05rem] font-semibold tracking-[-0.02em]'>
						<span className='h-[9px] w-[9px] rounded-full' style={{background: 'var(--fg)'}} />
						Omid Heidari
					</a>
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
								<Link href={l.href}>
									<a>{l.name}</a>
								</Link>
							</li>
						),
					)}
				</ul>

				<span className='foot-copy'>© 2026 Omid Heidari</span>

				<span className='to-top' onClick={toTop}>
					Back to top
					<svg width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
						<path d='M12 19V5M6 11l6-6 6 6' />
					</svg>
				</span>
			</div>
		</footer>
	);
};

export default Footer;
