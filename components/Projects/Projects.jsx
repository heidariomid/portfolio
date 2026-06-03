import React from 'react';
import Image from 'next/image';
import amazonImg from '../../public/assets/images/projects/amazon.png';
import foodImg from '../../public/assets/images/projects/uber-eats.jpeg';
import cryptoImg from '../../public/assets/images/projects/uber-eats/currency.png';

const projects = [
	{
		num: 'Project 01 — Advanced',
		title: 'Amazon.ae Shop',
		badge: 'E-commerce · 2024',
		img: amazonImg,
		alt: 'Amazon.ae Shop',
		desc: 'An Amazon-style storefront with the Amazon API integrated so users can buy from Amazon.ae, search products and paste product links to retrieve precise, real-time price & stock data.',
		feats: ['WooCommerce payments', 'Redux-Toolkit cart', 'React Query caching', 'Live price & stock sync'],
		tags: ['Next.js', 'Redux Toolkit', 'React Query', 'WooCommerce'],
		demo: 'https://amazonkisha2z.netlify.app/',
		code: null,
	},
	{
		num: 'Project 02 — Advanced',
		title: 'Food Delivery',
		badge: 'Full app · Front-end',
		img: foodImg,
		alt: 'Food Delivery app',
		desc: 'An advanced food-delivery platform where, as front-end developer, I shipped a tailored dashboard UI/UX, a pattern-based payment gateway, and a full ordering experience end to end.',
		feats: ['Custom dashboards', 'Payment gateway', 'Checkout & cart', 'Order history', 'Protected routes', 'Light/Dark mode'],
		tags: ['React', 'Next.js', 'GraphQL', 'Tailwind'],
		demo: 'https://ubereats.heidariomid.com/',
		code: 'https://github.com/heidariomid/uber-eats-backend',
	},
	{
		num: 'Project 03 — Intermediate',
		title: 'Crypto Currency',
		badge: 'Data · Real-time',
		img: cryptoImg,
		alt: 'Crypto Currency app',
		desc: 'A high-performance Next.js app integrating React Query to fetch and display live cryptocurrency data seamlessly, with caching and prefetching for instant navigation.',
		feats: ['Query caching & prefetch', 'Search', 'Pagination', 'Error handling', 'Fully responsive'],
		tags: ['Next.js', 'React Query', 'TypeScript', 'Tailwind'],
		demo: 'https://cryptocurrency.heidariomid.com/',
		code: 'https://github.com/heidariomid/list-of-currencies',
	},
];

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
						<Image src={p.img} alt={p.alt} className='project-img' />
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
							<a href={p.demo} target='_blank' rel='noreferrer' className='btn btn-primary'>
								Live demo
								<svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
									<path d='M7 17 17 7M9 7h8v8' />
								</svg>
							</a>
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
