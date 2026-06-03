import React from 'react';

const Cta = () => {
	return (
		<section className='cta'>
			<div className='wrap py-[clamp(4.5rem,10vw,8rem)]'>
				<span className='eyebrow reveal' style={{color: 'color-mix(in srgb, var(--inv-fg) 55%, transparent)'}}>
					Got a project in mind?
				</span>
				<h2 className='reveal mt-[1.2rem] text-[clamp(2.6rem,8vw,7rem)] font-semibold leading-[0.92] tracking-[-0.05em]' data-d='1'>
					Let&rsquo;s build
					<br />
					something great.
				</h2>
				<a href='mailto:info@heidariomid.com' className='cta-mailto reveal' data-d='2'>
					info@heidariomid.com
					<svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
						<path d='M5 12h14M13 6l6 6-6 6' />
					</svg>
				</a>
			</div>
		</section>
	);
};

export default Cta;
