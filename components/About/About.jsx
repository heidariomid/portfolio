import React from 'react';

const stats = [
	{n: '3+', l: 'Years experience'},
	{n: 'MSc', l: 'Computer Science'},
	{n: '12+', l: 'Technologies'},
];

const About = () => {
	return (
		<section id='about' className='block wrap'>
			<div className='sec-head reveal'>
				<span className='sec-num'>01</span>
				<h2 className='sec-title'>About</h2>
				<span className='sec-line' />
			</div>

			<div className='grid gap-[clamp(2.5rem,5vw,4rem)]'>
				<p className='reveal max-w-[20ch] text-[clamp(1.6rem,4.2vw,3.1rem)] font-normal leading-[1.18] tracking-[-0.02em]'>
					Software developer building clean, maintainable front ends.
				</p>

				<div className='grid items-start gap-[clamp(2rem,5vw,4rem)] md:grid-cols-[1.1fr_1fr]'>
					<p className='reveal max-w-[62ch] text-[clamp(1.02rem,1.6vw,1.2rem)] leading-[1.75]' style={{color: 'var(--fg-dim)'}}>
						I specialise in front-end technologies — <b style={{color: 'var(--fg)', fontWeight: 500}}>ReactJS</b>,{' '}
						<b style={{color: 'var(--fg)', fontWeight: 500}}>Next.js</b>, <b style={{color: 'var(--fg)', fontWeight: 500}}>TypeScript</b>,{' '}
						<b style={{color: 'var(--fg)', fontWeight: 500}}>Redux</b>, <b style={{color: 'var(--fg)', fontWeight: 500}}>GraphQL</b> and{' '}
						<b style={{color: 'var(--fg)', fontWeight: 500}}>Tailwind CSS</b>. I hold a Master&rsquo;s degree in Computer Science and have three years of
						professional experience consistently delivering clean, maintainable code. I have a deep understanding of pure JavaScript and the ability to
						write comprehensive tests — and I stay current with the latest industry trends and best practices.
					</p>

					<div className='reveal mt-[0.5rem] grid grid-cols-1 gap-px border sm:grid-cols-3' data-d='1' style={{background: 'var(--line)', borderColor: 'var(--line)'}}>
						{stats.map((s) => (
							<div key={s.l} className='px-[1.2rem] py-[1.6rem]' style={{background: 'var(--bg)'}}>
								<div className='text-[clamp(2rem,4.5vw,3.2rem)] font-semibold leading-none tracking-[-0.04em]' style={{color: 'var(--accent)'}}>
									{s.n}
								</div>
								<div className='mono mt-[0.6rem] text-[0.72rem] uppercase tracking-[0.08em]' style={{color: 'var(--fg-dim)'}}>
									{s.l}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
