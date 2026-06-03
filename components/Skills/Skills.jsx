import React from 'react';

// level: number of filled dots (out of 3) — 3 Advanced, 2 Intermediate, 1 Learning
const categories = [
	{
		name: 'Frontend',
		items: [
			{name: 'React', level: 3},
			{name: 'Next.js', level: 3},
			{name: 'Redux', level: 3},
			{name: 'Tailwind CSS', level: 3},
			{name: 'React Native', level: 2},
		],
	},
	{
		name: 'Languages & Data',
		items: [
			{name: 'JavaScript', level: 3},
			{name: 'TypeScript', level: 2},
			{name: 'Node.js', level: 2},
			{name: 'GraphQL', level: 2},
		],
	},
	{
		name: 'Tools & Design',
		items: [
			{name: 'WordPress', level: 2},
			{name: 'Photoshop', level: 2},
			{name: 'Illustrator', level: 2},
			{name: 'Figma', level: 1},
		],
	},
];

const Meter = ({level}) => (
	<span className='flex items-center gap-1'>
		{[1, 2, 3].map((i) => (
			<i key={i} className={`meter-dot${i <= level ? ' on' : ''}`} />
		))}
	</span>
);

const Skills = () => {
	return (
		<section id='skills' className='block wrap'>
			<div className='sec-head reveal flex-wrap'>
				<span className='sec-num'>02</span>
				<h2 className='sec-title'>Skills</h2>
				<span className='sec-line' />
				<div className='ml-auto flex flex-wrap items-center gap-[1.4rem] self-center'>
					<span className='mono flex items-center gap-2 text-[0.7rem]' style={{color: 'var(--fg-dim)'}}>
						<Meter level={3} /> Advanced
					</span>
					<span className='mono flex items-center gap-2 text-[0.7rem]' style={{color: 'var(--fg-dim)'}}>
						<Meter level={2} /> Intermediate
					</span>
					<span className='mono flex items-center gap-2 text-[0.7rem]' style={{color: 'var(--fg-dim)'}}>
						<Meter level={1} /> Learning
					</span>
				</div>
			</div>

			<div className='grid gap-[clamp(1.75rem,4vw,3.5rem)] border-t pt-[clamp(1.75rem,3vw,2.5rem)] sm:grid-cols-2 lg:grid-cols-3' style={{borderColor: 'var(--line)'}}>
				{categories.map((cat, idx) => (
					<div key={cat.name} className='reveal' data-d={idx + 1}>
						<div className='mb-[0.4rem] flex items-baseline justify-between gap-2 border-b pb-[1rem]' style={{borderColor: 'var(--line)'}}>
							<span className='mono text-[0.74rem] uppercase tracking-[0.16em]' style={{color: 'var(--fg)'}}>
								{cat.name}
							</span>
							<span className='mono text-[0.74rem]' style={{color: 'var(--fg-faint)'}}>
								{String(cat.items.length).padStart(2, '0')}
							</span>
						</div>
						{cat.items.map((item) => (
							<div
								key={item.name}
								className='skill-item flex items-center justify-between gap-4 border-b py-[0.85rem]'
								style={{borderColor: 'var(--line)'}}
							>
								<span className='text-[clamp(1rem,1.6vw,1.18rem)] font-medium tracking-[-0.01em]'>{item.name}</span>
								<Meter level={item.level} />
							</div>
						))}
					</div>
				))}
			</div>
		</section>
	);
};

export default Skills;
