import Image from 'next/image';
import {projects} from '../data/projects';

const Projects = () => {
	return (
		<section id='projects' className='block wrap'>
			<div className='sec-head reveal'>
				<span className='sec-num'>03</span>
				<h2 className='sec-title'>Selected Work</h2>
				<span className='sec-line' />
			</div>

			{projects.map((p, i) => (
				<article key={p.title} className={`project reveal${i % 2 === 1 ? ' flip' : ''}`}>
					<div className='project-media'>
						<span className='project-badge'>{p.badge}</span>
						<span className='project-img-clip'>
							<Image src={p.img} alt={p.alt} sizes='(max-width: 900px) 100vw, 50vw' className='project-img' />
						</span>
					</div>
					<div>
						<span className='mono text-[0.8rem]' style={{color: 'var(--fg-faint)'}}>
							{p.num}
						</span>
						<h3 className='mt-[0.7rem] mb-[1.1rem] text-[clamp(2rem,5vw,3.6rem)] font-semibold leading-[0.98] tracking-[-0.04em]' style={{color: 'var(--accent)'}}>
							{p.title}
						</h3>
						<p className='max-w-[48ch] text-[clamp(1rem,1.5vw,1.15rem)] leading-[1.7]' style={{color: 'var(--fg-dim)'}}>
							{p.desc}
						</p>

						<ul className='feats'>
							{p.feats.map((f) => (
								<li key={f}>{f}</li>
							))}
						</ul>

						<div className='tags'>
							{p.tags.map((t) => (
								<span key={t} className='tag'>
									{t}
								</span>
							))}
						</div>

						<div className='proj-links'>
							{p.demo ? (
								<a href={p.demo} target='_blank' rel='noreferrer' className='btn btn-primary'>
									Live demo
									<svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
										<path d='M7 17 17 7M9 7h8v8' />
									</svg>
								</a>
							) : (
								<span className='btn btn-ghost proj-disabled'>Demo · Offline</span>
							)}
							{p.code ? (
								<a href={p.code} target='_blank' rel='noreferrer' className='btn btn-ghost'>
									View code
								</a>
							) : (
								<span className='btn btn-ghost proj-disabled'>Code · Private</span>
							)}
						</div>
					</div>
				</article>
			))}
		</section>
	);
};

export default Projects;
