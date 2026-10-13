'use client';

const ThemeToggle = () => {
	const toggleTheme = () => {
		const root = document.documentElement;
		const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
		root.setAttribute('data-theme', next);
		try {
			localStorage.setItem('theme', next);
		} catch {
			// Storage can be blocked; the theme still switches for this visit.
		}
	};

	return (
		<button
			onClick={toggleTheme}
			aria-label='Toggle theme'
			className="relative h-7 w-[54px] flex-none rounded-full border transition-colors before:absolute before:-inset-2 before:content-['']"
			style={{borderColor: 'var(--line-2)', background: 'var(--bg-2)'}}
		>
			<span
				className='theme-knob absolute top-1/2 grid h-5 w-5 -translate-y-1/2 place-items-center rounded-full transition-[left] duration-[350ms]'
				style={{background: 'var(--fg)'}}
			>
				<svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' className='theme-icon-moon h-[11px] w-[11px]' style={{color: 'var(--bg)'}}>
					<path d='M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z' />
				</svg>
				<svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' className='theme-icon-sun h-[11px] w-[11px]' style={{color: 'var(--bg)'}}>
					<circle cx='12' cy='12' r='4' />
					<path d='M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4' />
				</svg>
			</span>
		</button>
	);
};

export default ThemeToggle;
