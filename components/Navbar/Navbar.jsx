import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import useStateValue from '../../store/useContext';
import {actions} from '../../store/actions';

const links = [
	{num: '01', label: 'About', href: '/#about'},
	{num: '02', label: 'Skills', href: '/#skills'},
	{num: '03', label: 'Work', href: '/#projects'},
	{num: '04', label: 'Contact', href: '/#contact'},
];

const Navbar = () => {
	const [scrolled, setScrolled] = useState(false);
	const [open, setOpen] = useState(false);
	const [state, dispatch] = useStateValue();
	const {isDark} = state.theme;

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 40);
		onScroll();
		window.addEventListener('scroll', onScroll, {passive: true});
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	const toggleTheme = () => {
		dispatch({type: actions.TOGGLE_THEME, payload: {toogleTheme: !isDark}});
	};

	return (
		<>
			<nav
				className='fixed top-0 left-0 right-0 z-[100] border-b transition-[background,border-color,backdrop-filter] duration-[400ms]'
				style={{
					borderBottomColor: scrolled ? 'var(--line)' : 'transparent',
					background: scrolled ? 'color-mix(in srgb, var(--bg) 72%, transparent)' : 'transparent',
					backdropFilter: scrolled ? 'blur(16px) saturate(1.4)' : 'none',
				}}
			>
				<div className='mx-auto flex items-center justify-between gap-4 px-[var(--pad)] py-[1.1rem]' style={{maxWidth: 'var(--max)'}}>
					<Link href='/#home'>
						<a className='flex items-center gap-[0.7rem] text-[1.05rem] font-semibold tracking-[-0.02em]'>
							<span className='h-[9px] w-[9px] animate-navPulse rounded-full' style={{background: 'var(--fg)'}} />
							Omid Heidari
						</a>
					</Link>

					<ul className='hidden items-center gap-[2.2rem] md:flex'>
						{links.map((l) => (
							<li key={l.num}>
								<Link href={l.href}>
									<a className='nav-link mono text-[0.78rem] tracking-[0.04em]' style={{color: 'var(--fg-dim)'}}>
										{l.num} / {l.label}
									</a>
								</Link>
							</li>
						))}
					</ul>

					<div className='flex items-center gap-[1.1rem]'>
						<button
							onClick={toggleTheme}
							aria-label='Toggle theme'
							className='relative h-7 w-[54px] flex-none rounded-full border transition-colors'
							style={{borderColor: 'var(--line-2)', background: 'var(--bg-2)'}}
						>
							<span
								className='absolute top-1/2 grid h-5 w-5 -translate-y-1/2 place-items-center rounded-full transition-[left] duration-[350ms]'
								style={{left: isDark ? '3px' : '31px', background: 'var(--fg)'}}
							>
								{isDark ? (
									<svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' className='h-[11px] w-[11px]' style={{color: 'var(--bg)'}}>
										<path d='M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z' />
									</svg>
								) : (
									<svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' className='h-[11px] w-[11px]' style={{color: 'var(--bg)'}}>
										<circle cx='12' cy='12' r='4' />
										<path d='M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4' />
									</svg>
								)}
							</span>
						</button>

						<button
							onClick={() => setOpen(!open)}
							aria-label='Menu'
							className='grid h-10 w-10 place-items-center rounded-lg border md:hidden'
							style={{borderColor: 'var(--line-2)', color: 'var(--fg)'}}
						>
							<svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.6' className='h-5 w-5'>
								<path d='M3 7h18M3 12h18M3 17h18' />
							</svg>
						</button>
					</div>
				</div>
			</nav>

			{/* Mobile menu */}
			<div
				className='fixed inset-0 z-[99] flex flex-col justify-center px-[var(--pad)] transition-transform duration-500 md:hidden'
				style={{background: 'var(--bg)', transform: open ? 'translateY(0)' : 'translateY(-100%)'}}
			>
				{links.map((l) => (
					<Link key={l.num} href={l.href}>
						<a
							onClick={() => setOpen(false)}
							className='flex items-baseline gap-4 py-[0.4rem] text-[clamp(2.5rem,12vw,4rem)] font-semibold tracking-[-0.04em]'
						>
							<span className='mono text-[0.8rem]' style={{color: 'var(--fg-faint)'}}>
								{l.num}
							</span>
							{l.label}
						</a>
					</Link>
				))}
			</div>
		</>
	);
};

export default Navbar;
