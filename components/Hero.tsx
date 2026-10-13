import Image from 'next/image';
import Link from 'next/link';
import {FaGithub, FaLinkedinIn} from 'react-icons/fa';
import {AiOutlineMail} from 'react-icons/ai';
import {CONTACT_EMAIL, GITHUB_URL, LINKEDIN_URL, RESUME_URL} from '../data/contact';
import ProfileImg from '../public/assets/images/omid-heidari.jpeg';

const marqueeItems = ['React', 'Next.js', 'TypeScript', 'Redux Toolkit', 'TanStack Query', 'GraphQL', 'Tailwind CSS', 'React Native', 'Supabase'];

const Hero = () => {
	return (
		<>
			<section id='home' className='wrap flex min-h-[100svh] items-center pt-24 pb-12'>
				<div className='grid w-full items-center gap-[clamp(2rem,5vw,4.5rem)] md:grid-cols-[1.55fr_0.9fr]'>
					{/* Text */}
					<div className='text-center md:text-left'>
						<div className='reveal mb-[1.8rem] flex items-center justify-center gap-[0.8rem] md:justify-start'>
							<span className='status-dot' aria-hidden='true' />
							<span className='eyebrow'>Open to work · Front-End Developer</span>
						</div>
						<h1 className='reveal text-[clamp(3.4rem,11.5vw,9.5rem)] font-semibold leading-[0.86] tracking-[-0.05em]' data-d='1'>
							Omid
							<br />
							<span className='font-light' style={{color: 'var(--fg-dim)'}}>
								Heidari
							</span>
						</h1>
						<p className='reveal mx-auto mt-[1.8rem] max-w-[34ch] md:mx-0 text-[clamp(1.05rem,2.4vw,1.6rem)] leading-relaxed' data-d='2' style={{color: 'var(--fg-dim)'}}>
							I build web apps in <b style={{color: 'var(--accent)'}}>React</b>, <b style={{color: 'var(--accent)'}}>Next.js</b> and{' '}
							<b style={{color: 'var(--accent)'}}>TypeScript</b>, and the backend they need to ship.
						</p>

						<div className='reveal mt-[2.4rem] flex flex-wrap items-center justify-center gap-[0.9rem] md:justify-start' data-d='3'>
							<Link href='/#projects' className='btn btn-primary'>
								View projects
								<svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
									<path d='M5 12h14M13 6l6 6-6 6' />
								</svg>
							</Link>
							<a href={RESUME_URL} target='_blank' rel='noreferrer' className='btn btn-ghost'>
								Resume (PDF)
							</a>

							<div className='flex gap-[0.5rem] md:ml-[0.4rem]'>
								<a href={LINKEDIN_URL} target='_blank' rel='noreferrer' aria-label='LinkedIn' className='social'>
									<FaLinkedinIn />
								</a>
								<a href={GITHUB_URL} target='_blank' rel='noreferrer' aria-label='GitHub' className='social'>
									<FaGithub />
								</a>
								<a href={`mailto:${CONTACT_EMAIL}`} aria-label='Email' className='social'>
									<AiOutlineMail />
								</a>
							</div>
						</div>
					</div>

					{/* Photo */}
					<div className='hero-photo reveal relative w-full max-w-[360px] justify-self-center md:justify-self-end' data-d='2'>
						<div className='relative aspect-[1/1.07] overflow-hidden border' style={{borderColor: 'var(--line-2)', background: 'var(--bg-2)'}}>
							<span className='absolute -right-px -top-px z-10 h-[14px] w-[14px] border' style={{borderColor: 'var(--fg)', borderLeft: 0, borderBottom: 0}} />
							<Image src={ProfileImg} alt='Portrait of Omid Heidari' fill sizes='(max-width: 400px) 100vw, 360px' className='hero-photo-img object-cover' />
							<span
								className='mono absolute -bottom-px -left-px z-10 px-[0.8rem] py-[0.5rem] text-[0.7rem] uppercase tracking-[0.1em]'
								style={{background: 'var(--inv-bg)', color: 'var(--inv-fg)'}}
							>
								Open to remote
							</span>
						</div>
					</div>
				</div>
			</section>

			{/* Marquee */}
			<div className='marquee border-y' style={{borderColor: 'var(--line)'}} aria-hidden='true'>
				<div className='marquee-track'>
					{[...marqueeItems, ...marqueeItems].map((item, i) => (
						<span key={i} className='marquee-item'>
							{item}
						</span>
					))}
				</div>
			</div>
		</>
	);
};

export default Hero;
