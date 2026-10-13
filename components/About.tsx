import {RESUME_URL} from '../data/contact';

const timeline = [
	{n: '2021', l: 'Independent web developer · to date'},
	{n: '2019', l: 'MSc IT Management · Shahid Beheshti University'},
	{n: '2017', l: 'IT department, Kish Exchange · to 2020'},
];

const strong = {color: 'var(--fg)', fontWeight: 500};

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
					Front-end developer who ships the whole feature.
				</p>

				<div className='grid items-start gap-[clamp(2rem,5vw,4rem)] md:grid-cols-[1.1fr_1fr]'>
					<div className='reveal grid max-w-[62ch] gap-[1.2rem] text-[clamp(1.02rem,1.6vw,1.2rem)] leading-[1.75]' style={{color: 'var(--fg-dim)'}}>
						<p>
							Since 2021 I have built web apps in <b style={strong}>React</b> and <b style={strong}>Next.js</b> on my own and for small clients,
							including a live ordering site for a bakery: reusable components, server-rendered pages and the state and data layer behind them.
						</p>
						<p>
							My projects go past the UI. They use <b style={strong}>TypeScript</b> in strict mode, Postgres with row-level security, a headless
							CMS the client edits directly, and server-side functions that keep API keys out of the browser. Each one below links to its live demo
							or its source code.
						</p>
						<p>
							Before that I spent three years in the IT department at Kish Exchange, building small WordPress sites and doing UI and graphic design.
							Full history is in my{' '}
							<a href={RESUME_URL} target='_blank' rel='noreferrer' className='underline underline-offset-4' style={{color: 'var(--fg)'}}>
								resume
							</a>
							.
						</p>
					</div>

					<div className='reveal mt-[0.5rem] grid grid-cols-1 gap-px border sm:grid-cols-3' data-d='1' style={{background: 'var(--line)', borderColor: 'var(--line)'}}>
						{timeline.map((s) => (
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
